require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');
const db = require('./db');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_change_me';
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '5mb' }));
app.use(express.static(require('path').join(__dirname, '..')));

// Rate limiter for login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Demasiados intentos. Intenta de nuevo en 15 minutos.' }
});

function validateFields(body, rules) {
  const errors = [];
  for (const [field, rule] of Object.entries(rules)) {
    const val = body[field];
    if (rule.required && (val === undefined || val === null || val === '')) {
      errors.push(`El campo ${field} es obligatorio`);
    }
    if (val !== undefined && val !== null && val !== '') {
      if (rule.type === 'number' && isNaN(Number(val))) {
        errors.push(`El campo ${field} debe ser un número`);
      }
      if (rule.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        errors.push(`El campo ${field} no tiene un formato de email válido`);
      }
      if (rule.maxLength && String(val).length > rule.maxLength) {
        errors.push(`El campo ${field} no puede tener más de ${rule.maxLength} caracteres`);
      }
    }
  }
  return errors;
}

function snToCc(str) {
  return str.replace(/_([a-z])/g, (_, l) => l.toUpperCase());
}

function rowToCc(row) {
  if (!row) return row;
  const out = {};
  for (const [k, v] of Object.entries(row)) {
    out[snToCc(k)] = v;
  }
  return out;
}

function rowsToCc(rows) {
  return rows.map(rowToCc);
}

// ===================== GET FULL DATA =====================
app.get('/api/data', async (req, res) => {
  try {
    const data = {};

    const [empRows] = await db.query('SELECT * FROM empresa WHERE id = 1 AND deleted_at IS NULL');
    const empresa = empRows[0] ? rowToCc(empRows[0]) : {};
    const [seguros] = await db.query('SELECT * FROM seguros WHERE empresa_id = 1 AND deleted_at IS NULL');
    empresa.seguros = rowsToCc(seguros);
    const [licencias] = await db.query('SELECT * FROM licencias WHERE empresa_id = 1 AND deleted_at IS NULL');
    empresa.licencias = rowsToCc(licencias);
    const [banco] = await db.query('SELECT * FROM banco WHERE empresa_id = 1 AND deleted_at IS NULL');
    empresa.banco = rowsToCc(banco);
    empresa.registroIndustrial = empresa.registroIndustrial || '';
    empresa.certificadoDigital = !!empresa.certificadoDigital;
    empresa.hojaReclamaciones = !!empresa.hojaReclamaciones;
    empresa.carteleriaInstalada = !!empresa.carteleriaInstalada;
    empresa.senalizacionOk = !!empresa.senalizacionOk;
    empresa.alumbradoEmergenciaOk = !!empresa.alumbradoEmergenciaOk;
    empresa.iva = empresa.iva || 21;
    empresa.irpf = empresa.irpf || 15;
    data.empresa = empresa;

    const [clientes] = await db.query('SELECT * FROM clientes WHERE deleted_at IS NULL');
    data.clientes = rowsToCc(clientes);

    const [vehiculos] = await db.query('SELECT * FROM vehiculos WHERE deleted_at IS NULL');
    data.vehiculos = rowsToCc(vehiculos);

    const [ordenes] = await db.query('SELECT * FROM ordenes WHERE deleted_at IS NULL');
    data.ordenes = rowsToCc(ordenes);

    const [facturas] = await db.query('SELECT * FROM facturas WHERE deleted_at IS NULL');
    data.facturas = rowsToCc(facturas);
    for (const f of data.facturas) {
      const [items] = await db.query('SELECT * FROM facturas_items WHERE factura_id = ? AND deleted_at IS NULL', [f.id]);
      f.items = rowsToCc(items);
      f.paid = !!f.paid;
    }

    const [gastos] = await db.query('SELECT * FROM gastos WHERE deleted_at IS NULL');
    data.gastos = rowsToCc(gastos);

    const [presupuestos] = await db.query('SELECT * FROM presupuestos WHERE deleted_at IS NULL');
    data.presupuestos = rowsToCc(presupuestos);

    const [proveedores] = await db.query('SELECT * FROM proveedores WHERE deleted_at IS NULL');
    data.proveedores = rowsToCc(proveedores);

    const [inventario] = await db.query('SELECT * FROM inventario WHERE deleted_at IS NULL');
    data.inventario = rowsToCc(inventario);

    const [empleados] = await db.query('SELECT * FROM empleados WHERE deleted_at IS NULL');
    data.empleados = rowsToCc(empleados);

    const [prlRows] = await db.query('SELECT * FROM prl WHERE id = 1 AND deleted_at IS NULL');
    const prl = prlRows[0] ? rowToCc(prlRows[0]) : {};
    const [epis] = await db.query('SELECT * FROM prl_epis WHERE deleted_at IS NULL');
    prl.epis = rowsToCc(epis);
    const [formacion] = await db.query('SELECT * FROM prl_formacion WHERE deleted_at IS NULL');
    prl.formacion = rowsToCc(formacion);
    const [revisiones] = await db.query('SELECT * FROM prl_revisiones WHERE deleted_at IS NULL');
    prl.revisiones = rowsToCc(revisiones);
    prl.formacionRealizada = !!prl.formacionRealizada;
    prl.botiquinOk = !!prl.botiquinOk;
    prl.reconocimientosRealizados = !!prl.reconocimientosRealizados;
    data.prl = prl;

    const [maRows] = await db.query('SELECT * FROM medio_ambiente WHERE id = 1 AND deleted_at IS NULL');
    const ma = maRows[0] ? rowToCc(maRows[0]) : {};
    const [residuos] = await db.query('SELECT * FROM medio_ambiente_residuos WHERE deleted_at IS NULL');
    ma.residuos = rowsToCc(residuos);
    ma.almacenCorrecto = !!ma.almacenCorrecto;
    ma.registroCompleto = !!ma.registroCompleto;
    ma.gestionAceites = !!ma.gestionAceites;
    ma.archivoCronologico = !!ma.archivoCronologico;
    data.medioAmbiente = ma;

    const [elevadores] = await db.query('SELECT * FROM maquinaria_elevadores WHERE deleted_at IS NULL');
    const [compresores] = await db.query('SELECT * FROM maquinaria_compresores WHERE deleted_at IS NULL');
    const [diagnosis] = await db.query('SELECT * FROM maquinaria_diagnosis WHERE deleted_at IS NULL');
    const [herramientas] = await db.query('SELECT * FROM maquinaria_herramientas WHERE deleted_at IS NULL');
    const [instalaciones] = await db.query('SELECT * FROM instalaciones WHERE deleted_at IS NULL');
    const instMap = {};
    for (const inst of instalaciones) {
      instMap[inst.tipo] = { revision: inst.revision ? inst.revision.toISOString().slice(0, 10) : '' };
    }
    data.maquinaria = {
      elevadores: rowsToCc(elevadores),
      compresores: rowsToCc(compresores),
      diagnosis: rowsToCc(diagnosis),
      herramientas: rowsToCc(herramientas),
      instalaciones: {
        extintores: instMap.extintores || { revision: '' },
        electrica: instMap.electrica || { revision: '' },
        emergencia: instMap.emergencia || { revision: '' },
        incendios: instMap.incendios || { revision: '' }
      }
    };

    const [pdRows] = await db.query('SELECT * FROM proteccion_datos WHERE id = 1 AND deleted_at IS NULL');
    const pd = pdRows[0] ? rowToCc(pdRows[0]) : {};
    const [avisos] = await db.query('SELECT * FROM proteccion_datos_avisos WHERE deleted_at IS NULL');
    pd.avisos = rowsToCc(avisos);
    pd.consentimientosGestionados = !!pd.consentimientosGestionados;
    pd.registroActividades = !!pd.registroActividades;
    pd.cartelesRgpd = !!pd.cartelesRgpd;
    pd.videovigilancia = !!pd.videovigilancia;
    data.proteccionDatos = pd;

    const [cfgRows] = await db.query('SELECT * FROM config WHERE id = 1 AND deleted_at IS NULL');
    const cfg = cfgRows[0] || {};
    data.registroHorarioActivo = !!cfg.registroHorarioActivo;
    data.alertasConfig = cfg.alertasActivas !== 0;

    const [diario] = await db.query('SELECT * FROM diario_taller WHERE deleted_at IS NULL');
    data.diarioTaller = rowsToCc(diario);

    const [citas] = await db.query('SELECT * FROM citas WHERE deleted_at IS NULL ORDER BY fecha, hora');
    data.citas = rowsToCc(citas);

    const tables = [
      ['clientes', 'cliente'], ['vehiculos', 'vehiculo'], ['ordenes', 'orden'],
      ['facturas', 'factura'], ['presupuestos', 'presupuesto'], ['gastos', 'gasto'],
      ['inventario', 'inventario'], ['proveedores', 'proveedor'], ['empleados', 'empleado'],
      ['citas', 'cita']
    ];
    const nextId = {};
    for (const [table, key] of tables) {
      const [rows] = await db.query(`SELECT COALESCE(MAX(id), 0) + 1 AS next FROM \`${table}\``);
      nextId[key] = rows[0].next;
    }
    data.nextId = nextId;

    res.json(data);
  } catch (err) {
    console.error('Error loading data:', err);
    res.status(500).json({ error: err.message });
  }
});

// No-cache for all API responses
app.use('/api', (req, res, next) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// Protect all /api/* routes except login, data, and static files
app.use('/api', (req, res, next) => {
  const openPaths = ['/login', '/hash-passwords'];
  if (openPaths.includes(req.path)) return next();
  // GET /api/data is allowed for initial load before login
  if (req.method === 'GET' && req.path === '/api/data') return next();
  // All other /api/* requests need auth
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Autenticación requerida' });
  }
  try {
    req.user = jwt.verify(auth.split(' ')[1], JWT_SECRET);
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Sesión expirada. Vuelve a iniciar sesión.' });
  }
});

// ===================== CLIENTES CRUD =====================
app.get('/api/clientes', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM clientes WHERE deleted_at IS NULL ORDER BY nombre');
    res.json(rowsToCc(rows));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/clientes', async (req, res) => {
  try {
    const errs = validateFields(req.body, { nombre: { required: true, maxLength: 120 }, email: { type: 'email', maxLength: 100 } });
    if (errs.length) return res.status(400).json({ error: errs.join('. ') });
    const { nombre, telefono, email, direccion, dni, notas, consentimientoRgpd } = req.body;
    const [result] = await db.query(
      'INSERT INTO clientes (nombre, telefono, email, direccion, dni, notas, consentimiento_rgpd) VALUES (?,?,?,?,?,?,?)',
      [nombre || '', telefono || '', email || '', direccion || '', dni || '', notas || '', consentimientoRgpd ? 1 : 0]
    );
    res.json({ id: result.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/clientes/:id', async (req, res) => {
  try {
    const { nombre, telefono, email, direccion, dni, notas, consentimientoRgpd } = req.body;
    await db.query(
      'UPDATE clientes SET nombre=?, telefono=?, email=?, direccion=?, dni=?, notas=?, consentimiento_rgpd=? WHERE id=? AND deleted_at IS NULL',
      [nombre || '', telefono || '', email || '', direccion || '', dni || '', notas || '', consentimientoRgpd ? 1 : 0, req.params.id]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/clientes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await db.query('UPDATE vehiculos SET deleted_at = NOW() WHERE cliente_id = ? AND deleted_at IS NULL', [id]);
    await db.query('UPDATE ordenes SET deleted_at = NOW() WHERE cliente_id = ? AND deleted_at IS NULL', [id]);
    await db.query('UPDATE facturas SET deleted_at = NOW() WHERE cliente_id = ? AND deleted_at IS NULL', [id]);
    await db.query('UPDATE presupuestos SET deleted_at = NOW() WHERE cliente_id = ? AND deleted_at IS NULL', [id]);
    await db.query('UPDATE citas SET deleted_at = NOW() WHERE cliente_id = ? AND deleted_at IS NULL', [id]);
    await db.query('UPDATE clientes SET deleted_at = NOW() WHERE id = ?', [id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== VEHICULOS CRUD =====================
app.get('/api/vehiculos', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM vehiculos WHERE deleted_at IS NULL');
    res.json(rowsToCc(rows));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/vehiculos', async (req, res) => {
  try {
    const { clienteId, marca, modelo, matricula, ano, km, vin, itvProxima } = req.body;
    const [result] = await db.query(
      'INSERT INTO vehiculos (cliente_id, marca, modelo, matricula, ano, km, vin, itv_proxima) VALUES (?,?,?,?,?,?,?,?)',
      [clienteId, marca || '', modelo || '', matricula || '', ano || null, km || null, vin || '', itvProxima || null]
    );
    res.json({ id: result.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/vehiculos/:id', async (req, res) => {
  try {
    const { clienteId, marca, modelo, matricula, ano, km, vin, itvProxima } = req.body;
    await db.query(
      'UPDATE vehiculos SET cliente_id=?, marca=?, modelo=?, matricula=?, ano=?, km=?, vin=?, itv_proxima=? WHERE id=? AND deleted_at IS NULL',
      [clienteId, marca || '', modelo || '', matricula || '', ano || null, km || null, vin || '', itvProxima || null, req.params.id]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/vehiculos/:id', async (req, res) => {
  try {
    await db.query('UPDATE vehiculos SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== ORDENES CRUD =====================
app.get('/api/ordenes', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM ordenes WHERE deleted_at IS NULL ORDER BY created_at DESC');
    res.json(rowsToCc(rows));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/ordenes', async (req, res) => {
  try {
    const { clienteId, vehiculoDesc, descripcion, total, status, notas } = req.body;
    const [result] = await db.query(
      'INSERT INTO ordenes (cliente_id, vehiculo_desc, descripcion, total, status, notas) VALUES (?,?,?,?,?,?)',
      [clienteId, vehiculoDesc || '', descripcion || '', total || 0, status || 'pending', notas || '']
    );
    res.json({ id: result.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/ordenes/:id', async (req, res) => {
  try {
    const { clienteId, vehiculoDesc, descripcion, total, status, notas } = req.body;
    await db.query(
      'UPDATE ordenes SET cliente_id=?, vehiculo_desc=?, descripcion=?, total=?, status=?, notas=? WHERE id=? AND deleted_at IS NULL',
      [clienteId, vehiculoDesc || '', descripcion || '', total || 0, status || 'pending', notas || '', req.params.id]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/ordenes/:id', async (req, res) => {
  try {
    await db.query('UPDATE ordenes SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== FACTURAS CRUD =====================
app.post('/api/facturas', async (req, res) => {
  try {
    const { clienteId, ordenId, descripcion, total, items } = req.body;
    const number = `${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900) + 100)}`;
    const [r] = await db.query(
      'INSERT INTO facturas (numero, cliente_id, orden_id, descripcion, total) VALUES (?,?,?,?,?)',
      [number, clienteId, ordenId || null, descripcion || '', total || 0]
    );
    const facturaId = r.insertId;
    if (items && items.length) {
      for (const item of items) {
        await db.query(
          'INSERT INTO facturas_items (factura_id, concepto, cantidad, precio) VALUES (?,?,?,?)',
          [facturaId, item.concepto || '', item.cantidad || 1, item.precio || 0]
        );
      }
    }
    res.json({ id: facturaId, number });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/facturas/:id', async (req, res) => {
  try {
    const { clienteId, descripcion, total, paid } = req.body;
    await db.query(
      'UPDATE facturas SET cliente_id=?, descripcion=?, total=?, paid=? WHERE id=? AND deleted_at IS NULL',
      [clienteId, descripcion || '', total || 0, paid ? 1 : 0, req.params.id]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/facturas/:id', async (req, res) => {
  try {
    await db.query('UPDATE facturas SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== GASTOS CRUD =====================
app.get('/api/gastos', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM gastos WHERE deleted_at IS NULL ORDER BY created_at DESC');
    res.json(rowsToCc(rows));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/gastos', async (req, res) => {
  try {
    const { concepto, amount, categoria } = req.body;
    const [r] = await db.query(
      'INSERT INTO gastos (concepto, amount, categoria) VALUES (?,?,?)',
      [concepto || '', amount || 0, categoria || '']
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/gastos/:id', async (req, res) => {
  try {
    await db.query('UPDATE gastos SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== INVENTARIO CRUD =====================
app.get('/api/inventario', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM inventario WHERE deleted_at IS NULL');
    res.json(rowsToCc(rows));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/inventario', async (req, res) => {
  try {
    const { nombre, referencia, stockActual, stockMinimo, precio, proveedorId } = req.body;
    const [r] = await db.query(
      'INSERT INTO inventario (nombre, referencia, stock_actual, stock_minimo, precio, proveedor_id) VALUES (?,?,?,?,?,?)',
      [nombre || '', referencia || '', stockActual || 0, stockMinimo || 0, precio || 0, proveedorId || null]
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/inventario/:id', async (req, res) => {
  try {
    const { nombre, referencia, stockActual, stockMinimo, precio, proveedorId } = req.body;
    await db.query(
      'UPDATE inventario SET nombre=?, referencia=?, stock_actual=?, stock_minimo=?, precio=?, proveedor_id=? WHERE id=? AND deleted_at IS NULL',
      [nombre || '', referencia || '', stockActual || 0, stockMinimo || 0, precio || 0, proveedorId || null, req.params.id]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/inventario/:id', async (req, res) => {
  try {
    await db.query('UPDATE inventario SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== PROVEEDORES CRUD =====================
app.get('/api/proveedores', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM proveedores WHERE deleted_at IS NULL');
    res.json(rowsToCc(rows));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/proveedores', async (req, res) => {
  try {
    const { nombre, contacto, telefono } = req.body;
    const [r] = await db.query(
      'INSERT INTO proveedores (nombre, contacto, telefono) VALUES (?,?,?)',
      [nombre || '', contacto || '', telefono || '']
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/proveedores/:id', async (req, res) => {
  try {
    await db.query('UPDATE proveedores SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== EMPLEADOS CRUD =====================
app.get('/api/empleados', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM empleados WHERE deleted_at IS NULL');
    res.json(rowsToCc(rows));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/empleados', async (req, res) => {
  try {
    const { nombre, dni, telefono, email, puesto, fechaAltaSS, fechaInicio, finContrato, salario, altaSS, contratoEscrito, reconocimientoMedico, usuario, contrasena, rol } = req.body;
    const [r] = await db.query(
      'INSERT INTO empleados (nombre, dni, telefono, email, puesto, fecha_alta_ss, fecha_inicio, fin_contrato, salario, alta_ss, contrato_escrito, reconocimiento_medico, usuario, contrasena, rol) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [nombre || '', dni || '', telefono || '', email || '', puesto || '', fechaAltaSS || null, fechaInicio || null, finContrato || null, salario || 0, altaSS ? 1 : 0, contratoEscrito ? 1 : 0, reconocimientoMedico || null, usuario || '', contrasena || '', rol || 'basico']
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/empleados/:id', async (req, res) => {
  try {
    const { nombre, dni, telefono, email, puesto, fechaAltaSS, fechaInicio, finContrato, salario, altaSS, contratoEscrito, reconocimientoMedico, usuario, contrasena, rol } = req.body;
    await db.query(
      'UPDATE empleados SET nombre=?, dni=?, telefono=?, email=?, puesto=?, fecha_alta_ss=?, fecha_inicio=?, fin_contrato=?, salario=?, alta_ss=?, contrato_escrito=?, reconocimiento_medico=?, usuario=?, contrasena=?, rol=? WHERE id=? AND deleted_at IS NULL',
      [nombre || '', dni || '', telefono || '', email || '', puesto || '', fechaAltaSS || null, fechaInicio || null, finContrato || null, salario || 0, altaSS ? 1 : 0, contratoEscrito ? 1 : 0, reconocimientoMedico || null, usuario || '', contrasena || '', rol || 'basico', req.params.id]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/empleados/:id/baja', async (req, res) => {
  try {
    await db.query('UPDATE empleados SET fin_contrato = CURDATE() WHERE id = ? AND deleted_at IS NULL', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/empleados/:id', async (req, res) => {
  try {
    await db.query('UPDATE empleados SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== LOGIN =====================
app.post('/api/login', loginLimiter, async (req, res) => {
  try {
    const errs = validateFields(req.body, { usuario: { required: true }, contrasena: { required: true } });
    if (errs.length) return res.status(400).json({ error: errs.join('. ') });
    const { usuario, contrasena } = req.body;
    const [rows] = await db.query(
      'SELECT id, nombre, usuario, contrasena, rol FROM empleados WHERE usuario = ? AND deleted_at IS NULL',
      [usuario || '']
    );
    if (rows.length === 0) return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    const emp = rows[0];
    if (emp.contrasena !== contrasena) return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    const token = jwt.sign({ id: emp.id, nombre: emp.nombre, usuario: emp.usuario, rol: emp.rol }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, id: emp.id, nombre: emp.nombre, usuario: emp.usuario, rol: emp.rol });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== PERFIL =====================
app.get('/api/perfil', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, nombre, usuario, email, telefono, rol FROM empleados WHERE id = ? AND deleted_at IS NULL', [req.user.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(rowToCc(rows[0]));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/perfil', async (req, res) => {
  try {
    const errs = validateFields(req.body, { nombre: { required: true, maxLength: 100 } });
    if (errs.length) return res.status(400).json({ error: errs.join('. ') });
    const { nombre, usuario, contrasena, email, telefono } = req.body;
    const sets = [], vals = [];
    sets.push('nombre = ?'); vals.push(nombre || '');
    if (usuario !== undefined) { sets.push('usuario = ?'); vals.push(usuario); }
    if (contrasena !== undefined && contrasena) { sets.push('contrasena = ?'); vals.push(contrasena); }
    if (email !== undefined) { sets.push('email = ?'); vals.push(email || ''); }
    if (telefono !== undefined) { sets.push('telefono = ?'); vals.push(telefono || ''); }
    vals.push(req.user.id);
    await db.query(`UPDATE empleados SET ${sets.join(', ')} WHERE id = ? AND deleted_at IS NULL`, vals);
    const [rows] = await db.query('SELECT id, nombre, usuario, email, telefono, rol FROM empleados WHERE id = ?', [req.user.id]);
    const u = req.user;
    const newNombre = nombre || u.nombre;
    const newUsuario = usuario || u.usuario;
    const token = jwt.sign({ id: u.id, nombre: newNombre, usuario: newUsuario, rol: u.rol }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ ...rowToCc(rows[0]), token });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== EMPRESA / CONFIG =====================
app.put('/api/empresa', async (req, res) => {
  try {
    const e = req.body;
    await db.query(
      'UPDATE empresa SET nombre=?, cif=?, direccion=?, telefono=?, email=?, registro_industrial=?, certificado_digital=?, hoja_reclamaciones=?, carteleria_instalada=?, senalizacion_ok=?, alumbrado_emergencia_ok=?, iva=?, irpf=? WHERE id=1 AND deleted_at IS NULL',
      [e.nombre || '', e.cif || '', e.direccion || '', e.telefono || '', e.email || '',
       e.registroIndustrial || '', e.certificadoDigital ? 1 : 0, e.hojaReclamaciones ? 1 : 0,
       e.carteleriaInstalada ? 1 : 0, e.senalizacionOk ? 1 : 0, e.alumbradoEmergenciaOk ? 1 : 0,
       e.iva || 21, e.irpf || 15]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/config', async (req, res) => {
  try {
    const { registroHorarioActivo, alertasConfig } = req.body;
    await db.query(
      'UPDATE config SET registro_horario_activo=?, alertas_activas=? WHERE id=1',
      [registroHorarioActivo ? 1 : 0, alertasConfig !== false ? 1 : 0]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/seguros', async (req, res) => {
  try {
    const { tipo, compania, fin } = req.body;
    const [r] = await db.query('INSERT INTO seguros (empresa_id, tipo, compania, fin) VALUES (1,?,?,?)', [tipo || '', compania || '', fin || null]);
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/seguros/:id', async (req, res) => {
  try { await db.query('UPDATE seguros SET deleted_at = NOW() WHERE id=?', [req.params.id]); res.json({ ok: true }); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/licencias', async (req, res) => {
  try {
    const { tipo, fechaConcesion, fechaVencimiento } = req.body;
    const [r] = await db.query('INSERT INTO licencias (empresa_id, tipo, fecha_concesion, fecha_vencimiento) VALUES (1,?,?,?)', [tipo || '', fechaConcesion || null, fechaVencimiento || null]);
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/licencias/:id', async (req, res) => {
  try { await db.query('UPDATE licencias SET deleted_at = NOW() WHERE id=?', [req.params.id]); res.json({ ok: true }); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/banco', async (req, res) => {
  try {
    const { entidad, iban } = req.body;
    const [r] = await db.query('INSERT INTO banco (empresa_id, entidad, iban) VALUES (1,?,?)', [entidad || '', iban || '']);
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/banco/:id', async (req, res) => {
  try { await db.query('UPDATE banco SET deleted_at = NOW() WHERE id=?', [req.params.id]); res.json({ ok: true }); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== PRESUPUESTOS CRUD =====================
app.get('/api/presupuestos', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM presupuestos WHERE deleted_at IS NULL ORDER BY created_at DESC');
    res.json(rowsToCc(rows));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/presupuestos', async (req, res) => {
  try {
    const { clienteId, descripcion, total, validez, aceptado } = req.body;
    const [r] = await db.query(
      'INSERT INTO presupuestos (cliente_id, descripcion, total, validez, aceptado) VALUES (?,?,?,?,?)',
      [clienteId, descripcion || '', total || 0, validez || '30 días', aceptado ? 1 : 0]
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/presupuestos/:id', async (req, res) => {
  try {
    const { clienteId, descripcion, total, validez, aceptado } = req.body;
    await db.query(
      'UPDATE presupuestos SET cliente_id=?, descripcion=?, total=?, validez=?, aceptado=? WHERE id=? AND deleted_at IS NULL',
      [clienteId, descripcion || '', total || 0, validez || '30 días', aceptado ? 1 : 0, req.params.id]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/presupuestos/:id', async (req, res) => {
  try {
    await db.query('UPDATE presupuestos SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== DIARIO TALLER CRUD =====================
app.get('/api/diario-taller', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM diario_taller WHERE deleted_at IS NULL ORDER BY fecha DESC');
    res.json(rowsToCc(rows));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/diario-taller', async (req, res) => {
  try {
    const { fecha, titulo, tipo } = req.body;
    const [r] = await db.query(
      'INSERT INTO diario_taller (fecha, titulo, tipo) VALUES (?,?,?)',
      [fecha || null, titulo || '', tipo || '']
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/diario-taller/:id', async (req, res) => {
  try {
    await db.query('UPDATE diario_taller SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== MEDIO AMBIENTE RESIDUOS CRUD =====================
app.post('/api/residuos', async (req, res) => {
  try {
    const { tipo, cantidad, unidad, fechaRecogida, gestor } = req.body;
    const [r] = await db.query(
      'INSERT INTO medio_ambiente_residuos (tipo, cantidad, unidad, fecha_recogida, gestor) VALUES (?,?,?,?,?)',
      [tipo || '', cantidad || 0, unidad || 'uds', fechaRecogida || null, gestor || '']
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/residuos/:id', async (req, res) => {
  try {
    await db.query('UPDATE medio_ambiente_residuos SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== PRL EPIS CRUD =====================
app.post('/api/prl-epis', async (req, res) => {
  try {
    const { tipo, cantidad, fechaAdq } = req.body;
    const [r] = await db.query(
      'INSERT INTO prl_epis (tipo, cantidad, fecha_adq) VALUES (?,?,?)',
      [tipo || '', cantidad || 0, fechaAdq || null]
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/prl-epis/:id', async (req, res) => {
  try {
    await db.query('UPDATE prl_epis SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== PRL FORMACION CRUD =====================
app.post('/api/prl-formacion', async (req, res) => {
  try {
    const { tema, fecha, asistentes } = req.body;
    const [r] = await db.query(
      'INSERT INTO prl_formacion (tema, fecha, asistentes) VALUES (?,?,?)',
      [tema || '', fecha || null, asistentes || 0]
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/prl-formacion/:id', async (req, res) => {
  try {
    await db.query('UPDATE prl_formacion SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== PRL REVISIONES CRUD =====================
app.post('/api/prl-revisiones', async (req, res) => {
  try {
    const { tipo, fecha, notas } = req.body;
    const [r] = await db.query(
      'INSERT INTO prl_revisiones (tipo, fecha, notas) VALUES (?,?,?)',
      [tipo || '', fecha || null, notas || '']
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/prl-revisiones/:id', async (req, res) => {
  try {
    await db.query('UPDATE prl_revisiones SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== MAQUINARIA ELEVADORES CRUD =====================
app.post('/api/maquinaria/elevadores', async (req, res) => {
  try {
    const { nombre, marca, modelo, numSerie, revision, proxima } = req.body;
    const [r] = await db.query(
      'INSERT INTO maquinaria_elevadores (nombre, marca, modelo, num_serie, revision, proxima) VALUES (?,?,?,?,?,?)',
      [nombre || '', marca || '', modelo || '', numSerie || '', revision || null, proxima || null]
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/maquinaria/elevadores/:id', async (req, res) => {
  try {
    const { nombre, marca, modelo, numSerie, revision, proxima } = req.body;
    await db.query(
      'UPDATE maquinaria_elevadores SET nombre=?, marca=?, modelo=?, num_serie=?, revision=?, proxima=? WHERE id=? AND deleted_at IS NULL',
      [nombre || '', marca || '', modelo || '', numSerie || '', revision || null, proxima || null, req.params.id]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/maquinaria/elevadores/:id', async (req, res) => {
  try {
    await db.query('UPDATE maquinaria_elevadores SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== MAQUINARIA COMPRESORES CRUD =====================
app.post('/api/maquinaria/compresores', async (req, res) => {
  try {
    const { nombre, marca, modelo, numSerie, revision, proxima } = req.body;
    const [r] = await db.query(
      'INSERT INTO maquinaria_compresores (nombre, marca, modelo, num_serie, revision, proxima) VALUES (?,?,?,?,?,?)',
      [nombre || '', marca || '', modelo || '', numSerie || '', revision || null, proxima || null]
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/maquinaria/compresores/:id', async (req, res) => {
  try {
    const { nombre, marca, modelo, numSerie, revision, proxima } = req.body;
    await db.query(
      'UPDATE maquinaria_compresores SET nombre=?, marca=?, modelo=?, num_serie=?, revision=?, proxima=? WHERE id=? AND deleted_at IS NULL',
      [nombre || '', marca || '', modelo || '', numSerie || '', revision || null, proxima || null, req.params.id]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/maquinaria/compresores/:id', async (req, res) => {
  try {
    await db.query('UPDATE maquinaria_compresores SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== MAQUINARIA DIAGNOSIS CRUD =====================
app.post('/api/maquinaria/diagnosis', async (req, res) => {
  try {
    const { nombre, marca, numSerie } = req.body;
    const [r] = await db.query(
      'INSERT INTO maquinaria_diagnosis (nombre, marca, num_serie) VALUES (?,?,?)',
      [nombre || '', marca || '', numSerie || '']
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/maquinaria/diagnosis/:id', async (req, res) => {
  try {
    await db.query('UPDATE maquinaria_diagnosis SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== MAQUINARIA HERRAMIENTAS CRUD =====================
app.post('/api/maquinaria/herramientas', async (req, res) => {
  try {
    const { nombre, marca, stock } = req.body;
    const [r] = await db.query(
      'INSERT INTO maquinaria_herramientas (nombre, marca, stock) VALUES (?,?,?)',
      [nombre || '', marca || '', stock || 1]
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/maquinaria/herramientas/:id', async (req, res) => {
  try {
    await db.query('UPDATE maquinaria_herramientas SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== INSTALACIONES CRUD =====================
app.post('/api/instalaciones', async (req, res) => {
  try {
    const { tipo, revision } = req.body;
    const [r] = await db.query(
      'INSERT INTO instalaciones (tipo, revision) VALUES (?,?) ON DUPLICATE KEY UPDATE revision=?',
      [tipo, revision || null, revision || null]
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== PROTECCION DATOS AVISOS CRUD =====================
app.post('/api/proteccion-datos-avisos', async (req, res) => {
  try {
    const { fecha, tipo, detalle } = req.body;
    const [r] = await db.query(
      'INSERT INTO proteccion_datos_avisos (fecha, tipo, detalle) VALUES (?,?,?)',
      [fecha || null, tipo || '', detalle || '']
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/proteccion-datos-avisos/:id', async (req, res) => {
  try {
    await db.query('UPDATE proteccion_datos_avisos SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== CITAS CRUD =====================
app.get('/api/citas', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM citas WHERE deleted_at IS NULL ORDER BY fecha, hora');
    res.json(rowsToCc(rows));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/citas', async (req, res) => {
  try {
    const { clienteId, vehiculoDesc, fecha, hora, descripcion, status } = req.body;
    const [r] = await db.query(
      'INSERT INTO citas (cliente_id, vehiculo_desc, fecha, hora, descripcion, status) VALUES (?,?,?,?,?,?)',
      [clienteId, vehiculoDesc || '', fecha || null, hora || '', descripcion || '', status || 'pendiente']
    );
    res.json({ id: r.insertId });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/citas/:id', async (req, res) => {
  try {
    const { clienteId, vehiculoDesc, fecha, hora, descripcion, status } = req.body;
    await db.query(
      'UPDATE citas SET cliente_id=?, vehiculo_desc=?, fecha=?, hora=?, descripcion=?, status=? WHERE id=? AND deleted_at IS NULL',
      [clienteId, vehiculoDesc || '', fecha || null, hora || '', descripcion || '', status || 'pendiente', req.params.id]
    );
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/citas/:id', async (req, res) => {
  try {
    await db.query('UPDATE citas SET deleted_at = NOW() WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== SAVE FULL DATA (from localStorage import) =====================
app.post('/api/data', async (req, res) => {
  try {
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ===================== START =====================
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Taller ERP API server running on http://localhost:${PORT}`);
  console.log(`Serving static files from parent directory`);
  // Auto-seed after server is listening (non-blocking)
  autoSeed();
});

async function autoSeed() {
  try {
    const mysql2 = require('mysql2/promise');
    let cfg;
    if (process.env.MYSQL_URL) {
      const u = new URL(process.env.MYSQL_URL);
      cfg = { host: u.hostname, port: parseInt(u.port) || 3306, user: decodeURIComponent(u.username), password: decodeURIComponent(u.password), database: u.pathname.replace(/^\//, ''), charset: 'utf8mb4', multipleStatements: true, ssl: { rejectUnauthorized: false } };
    } else {
      cfg = { host: process.env.DB_HOST || '127.0.0.1', port: parseInt(process.env.DB_PORT) || 3306, user: process.env.DB_USER || 'root', password: process.env.DB_PASSWORD || '', database: process.env.DB_NAME || 'Taller_MoTor', charset: 'utf8mb4', multipleStatements: true };
    }
    const conn = await mysql2.createConnection(cfg);
    const [rows] = await conn.query("SELECT COUNT(*) AS cnt FROM information_schema.tables WHERE table_schema = DATABASE()");
    if (rows[0].cnt > 0) {
      const [existing] = await conn.query('SELECT id FROM empleados WHERE usuario = "admin"');
      if (existing.length === 0) {
        await conn.query("INSERT INTO empleados (nombre, usuario, contrasena, rol, alta_ss, contrato_escrito) VALUES ('Admin del Sistema', 'admin', 'admin', 'admin', 1, 1)");
      }
      console.log('Database OK');
      await conn.end();
      return;
    }
    const sqlPath = path.join(__dirname, '..', 'database.sql');
    if (fs.existsSync(sqlPath)) {
      const sql = fs.readFileSync(sqlPath, 'utf8');
      await conn.query(sql.replace(/CREATE DATABASE .*?;/i, '').replace(/USE .*?;/i, ''));
      console.log('Database initialized with schema and seed data');
    }
    await conn.end();
  } catch (e) { console.log('Auto-seed:', e.message); }
}

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});
