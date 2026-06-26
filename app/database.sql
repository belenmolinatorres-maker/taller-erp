CREATE DATABASE Taller_MoTor
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_spanish_ci;

USE Taller_MoTor;

-- ===================== EMPRESA =====================
CREATE TABLE empresa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL DEFAULT '',
  cif VARCHAR(20) NOT NULL DEFAULT '',
  direccion VARCHAR(200) NOT NULL DEFAULT '',
  telefono VARCHAR(20) NOT NULL DEFAULT '',
  email VARCHAR(100) NOT NULL DEFAULT '',
  registro_industrial VARCHAR(50) NOT NULL DEFAULT '',
  certificado_digital TINYINT(1) NOT NULL DEFAULT 0,
  hoja_reclamaciones TINYINT(1) NOT NULL DEFAULT 0,
  carteleria_instalada TINYINT(1) NOT NULL DEFAULT 0,
  senalizacion_ok TINYINT(1) NOT NULL DEFAULT 0,
  alumbrado_emergencia_ok TINYINT(1) NOT NULL DEFAULT 0,
  iva DECIMAL(4,1) NOT NULL DEFAULT 21.0,
  irpf DECIMAL(4,1) NOT NULL DEFAULT 15.0,
  deleted_at DATETIME DEFAULT NULL
);

CREATE TABLE seguros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  empresa_id INT NOT NULL DEFAULT 1,
  tipo VARCHAR(30) NOT NULL DEFAULT '',
  compania VARCHAR(80) NOT NULL DEFAULT '',
  fin DATE DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL
);

CREATE TABLE licencias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  empresa_id INT NOT NULL DEFAULT 1,
  tipo VARCHAR(30) NOT NULL DEFAULT '',
  fecha_concesion DATE DEFAULT NULL,
  fecha_vencimiento DATE DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL
);

CREATE TABLE banco (
  id INT AUTO_INCREMENT PRIMARY KEY,
  empresa_id INT NOT NULL DEFAULT 1,
  entidad VARCHAR(100) NOT NULL DEFAULT '',
  iban VARCHAR(30) NOT NULL DEFAULT '',
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== CLIENTES =====================
CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  telefono VARCHAR(20) NOT NULL DEFAULT '',
  email VARCHAR(100) NOT NULL DEFAULT '',
  direccion VARCHAR(200) NOT NULL DEFAULT '',
  dni VARCHAR(15) NOT NULL DEFAULT '',
  notas TEXT DEFAULT NULL,
  consentimiento_rgpd TINYINT(1) NOT NULL DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== VEHÍCULOS =====================
CREATE TABLE vehiculos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  marca VARCHAR(50) NOT NULL DEFAULT '',
  modelo VARCHAR(50) NOT NULL DEFAULT '',
  matricula VARCHAR(15) NOT NULL DEFAULT '',
  ano INT DEFAULT NULL,
  km INT DEFAULT NULL,
  vin VARCHAR(30) NOT NULL DEFAULT '',
  itv_proxima DATE DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- ===================== ÓRDENES =====================
CREATE TABLE ordenes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  vehiculo_desc VARCHAR(100) NOT NULL DEFAULT '',
  descripcion TEXT DEFAULT NULL,
  total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  status ENUM('pending','progress','completed','delivered') NOT NULL DEFAULT 'pending',
  notas TEXT DEFAULT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME DEFAULT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- ===================== FACTURAS =====================
CREATE TABLE facturas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  numero VARCHAR(20) NOT NULL DEFAULT '',
  cliente_id INT NOT NULL,
  orden_id INT DEFAULT NULL,
  descripcion TEXT DEFAULT NULL,
  total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  paid TINYINT(1) NOT NULL DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME DEFAULT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  FOREIGN KEY (orden_id) REFERENCES ordenes(id)
);

CREATE TABLE facturas_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  factura_id INT NOT NULL,
  concepto VARCHAR(200) NOT NULL DEFAULT '',
  cantidad DECIMAL(8,2) NOT NULL DEFAULT 1.00,
  precio DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  deleted_at DATETIME DEFAULT NULL,
  FOREIGN KEY (factura_id) REFERENCES facturas(id)
);

-- ===================== GASTOS =====================
CREATE TABLE gastos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  concepto VARCHAR(200) NOT NULL DEFAULT '',
  amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  categoria VARCHAR(50) NOT NULL DEFAULT '',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== PRESUPUESTOS =====================
CREATE TABLE presupuestos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  descripcion TEXT DEFAULT NULL,
  total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  validez VARCHAR(30) NOT NULL DEFAULT '30 días',
  aceptado TINYINT(1) NOT NULL DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME DEFAULT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- ===================== PROVEEDORES =====================
CREATE TABLE proveedores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL DEFAULT '',
  contacto VARCHAR(100) NOT NULL DEFAULT '',
  telefono VARCHAR(20) NOT NULL DEFAULT '',
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== INVENTARIO =====================
CREATE TABLE inventario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL DEFAULT '',
  referencia VARCHAR(30) NOT NULL DEFAULT '',
  stock_actual INT NOT NULL DEFAULT 0,
  stock_minimo INT NOT NULL DEFAULT 0,
  precio DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  proveedor_id INT DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL,
  FOREIGN KEY (proveedor_id) REFERENCES proveedores(id)
);

-- ===================== EMPLEADOS =====================
CREATE TABLE empleados (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL DEFAULT '',
  dni VARCHAR(15) NOT NULL DEFAULT '',
  telefono VARCHAR(20) NOT NULL DEFAULT '',
  puesto VARCHAR(50) NOT NULL DEFAULT '',
  fecha_alta_ss DATE DEFAULT NULL,
  fecha_inicio DATE DEFAULT NULL,
  fin_contrato DATE DEFAULT NULL,
  salario DECIMAL(8,2) NOT NULL DEFAULT 0.00,
  alta_ss TINYINT(1) NOT NULL DEFAULT 0,
  contrato_escrito TINYINT(1) NOT NULL DEFAULT 0,
  reconocimiento_medico DATE DEFAULT NULL,
  usuario VARCHAR(30) NOT NULL DEFAULT '',
  contrasena VARCHAR(100) NOT NULL DEFAULT '',
  rol ENUM('admin','basico') NOT NULL DEFAULT 'basico',
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== PRL =====================
CREATE TABLE prl (
  id INT AUTO_INCREMENT PRIMARY KEY,
  evaluacion_fecha DATE DEFAULT NULL,
  evaluacion_empresa VARCHAR(100) NOT NULL DEFAULT '',
  formacion_realizada TINYINT(1) NOT NULL DEFAULT 0,
  botiquin_ok TINYINT(1) NOT NULL DEFAULT 0,
  reconocimientos_realizados TINYINT(1) NOT NULL DEFAULT 0,
  deleted_at DATETIME DEFAULT NULL
);

CREATE TABLE prl_epis (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(100) NOT NULL DEFAULT '',
  cantidad INT NOT NULL DEFAULT 0,
  fecha_adq DATE DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL
);

CREATE TABLE prl_formacion (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tema VARCHAR(150) NOT NULL DEFAULT '',
  fecha DATE DEFAULT NULL,
  asistentes INT NOT NULL DEFAULT 0,
  deleted_at DATETIME DEFAULT NULL
);

CREATE TABLE prl_revisiones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(100) NOT NULL DEFAULT '',
  fecha DATE DEFAULT NULL,
  notas TEXT DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== MEDIO AMBIENTE =====================
CREATE TABLE medio_ambiente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  gestor_contrato DATE DEFAULT NULL,
  gestor_nombre VARCHAR(100) NOT NULL DEFAULT '',
  almacen_correcto TINYINT(1) NOT NULL DEFAULT 0,
  registro_completo TINYINT(1) NOT NULL DEFAULT 0,
  gestion_aceites TINYINT(1) NOT NULL DEFAULT 0,
  archivo_cronologico TINYINT(1) NOT NULL DEFAULT 0,
  deleted_at DATETIME DEFAULT NULL
);

CREATE TABLE medio_ambiente_residuos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(100) NOT NULL DEFAULT '',
  cantidad DECIMAL(10,2) NOT NULL DEFAULT 0,
  unidad VARCHAR(10) NOT NULL DEFAULT 'uds',
  fecha_recogida DATE DEFAULT NULL,
  gestor VARCHAR(100) NOT NULL DEFAULT '',
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== MAQUINARIA =====================
CREATE TABLE maquinaria_elevadores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL DEFAULT '',
  marca VARCHAR(50) NOT NULL DEFAULT '',
  modelo VARCHAR(50) NOT NULL DEFAULT '',
  num_serie VARCHAR(30) NOT NULL DEFAULT '',
  revision DATE DEFAULT NULL,
  proxima DATE DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL
);

CREATE TABLE maquinaria_compresores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL DEFAULT '',
  marca VARCHAR(50) NOT NULL DEFAULT '',
  modelo VARCHAR(50) NOT NULL DEFAULT '',
  num_serie VARCHAR(30) NOT NULL DEFAULT '',
  revision DATE DEFAULT NULL,
  proxima DATE DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL
);

CREATE TABLE maquinaria_diagnosis (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL DEFAULT '',
  marca VARCHAR(50) NOT NULL DEFAULT '',
  num_serie VARCHAR(30) NOT NULL DEFAULT '',
  deleted_at DATETIME DEFAULT NULL
);

CREATE TABLE maquinaria_herramientas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(200) NOT NULL DEFAULT '',
  marca VARCHAR(50) NOT NULL DEFAULT '',
  stock INT NOT NULL DEFAULT 1,
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== INSTALACIONES =====================
CREATE TABLE instalaciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo ENUM('extintores','electrica','emergencia','incendios') NOT NULL,
  revision DATE DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== PROTECCIÓN DATOS =====================
CREATE TABLE proteccion_datos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  consentimientos_gestionados TINYINT(1) NOT NULL DEFAULT 0,
  registro_actividades TINYINT(1) NOT NULL DEFAULT 0,
  carteles_rgpd TINYINT(1) NOT NULL DEFAULT 0,
  videovigilancia TINYINT(1) NOT NULL DEFAULT 0,
  deleted_at DATETIME DEFAULT NULL
);

CREATE TABLE proteccion_datos_avisos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE DEFAULT NULL,
  tipo VARCHAR(100) NOT NULL DEFAULT '',
  detalle TEXT DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== DIARIO TALLER =====================
CREATE TABLE diario_taller (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE DEFAULT NULL,
  titulo VARCHAR(200) NOT NULL DEFAULT '',
  tipo VARCHAR(50) NOT NULL DEFAULT '',
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== CONFIG =====================
CREATE TABLE config (
  id INT AUTO_INCREMENT PRIMARY KEY,
  registro_horario_activo TINYINT(1) NOT NULL DEFAULT 0,
  alertas_activas TINYINT(1) NOT NULL DEFAULT 1,
  deleted_at DATETIME DEFAULT NULL
);

-- ===================== CITAS =====================
CREATE TABLE citas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  vehiculo_desc VARCHAR(100) NOT NULL DEFAULT '',
  fecha DATE DEFAULT NULL,
  hora VARCHAR(5) NOT NULL DEFAULT '',
  descripcion TEXT DEFAULT NULL,
  status ENUM('pendiente','confirmada','en_curso','completada','cancelada') NOT NULL DEFAULT 'pendiente',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME DEFAULT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- ===================== INSERT SEED DATA =====================
INSERT INTO empresa (nombre,cif,direccion,telefono,email,registro_industrial,certificado_digital,hoja_reclamaciones,carteleria_instalada,senalizacion_ok,alumbrado_emergencia_ok,iva,irpf) VALUES
('Taller Molina Torres','B-23789124','C/ Real 42, 23680 Alcalá la Real (Jaén)','953 58 12 34','info@tallermolinators.es','RI-JA-2022-00457',1,1,1,1,1,21.0,15.0);

INSERT INTO seguros (empresa_id,tipo,compania,fin) VALUES
(1,'rc','Mapfre',DATE_ADD(CURDATE(),INTERVAL 365 DAY)),
(1,'local','Allianz',DATE_ADD(CURDATE(),INTERVAL 180 DAY)),
(1,'accidentes','Mapfre',DATE_ADD(CURDATE(),INTERVAL 90 DAY));

INSERT INTO licencias (empresa_id,tipo,fecha_concesion,fecha_vencimiento) VALUES
(1,'apertura','2022-03-15',NULL),
(1,'actividad','2022-03-15',NULL),
(1,'ambiental','2023-06-01','2027-06-01');

INSERT INTO banco (empresa_id,entidad,iban) VALUES
(1,'Unicaja Banco','ES05 2103 4567 89 0123456789');

INSERT INTO clientes (nombre,telefono,email,direccion,dni,notas,consentimiento_rgpd) VALUES
('Antonio García López','612 34 56 78','antonio@email.com','C/ Nueva 12, Alcalá la Real','46829123A','Cliente habitual, paga al contado',1),
('María Jiménez Ruiz','654 78 90 12','mariajr@email.com','Avda. Andalucía 34, Alcalá la Real','74918236B','Vehículo de empresa',1),
('Francisco Torres Delgado','677 89 01 23','pakito@email.com','C/ Abajo 8, Frailes','36281947C','',0),
('Ana Belén Castillo','689 01 23 45','anabelen@email.com','Plaza Mayor 5, Castillo de Locubín','58739104D','Recomendada por Antonio',1),
('José Manuel Quesada','611 22 33 44','jmquesada@email.com','C/ Carrera 28, Alcalá la Real','27461893E','Taller mecánico propio (proveedor recambios)',1);

INSERT INTO vehiculos (cliente_id,marca,modelo,matricula,ano,km,vin,itv_proxima) VALUES
(1,'Renault','Clio IV','4524JGH',2018,89200,'VF1CB13N000123456',DATE_SUB(CURDATE(),INTERVAL 60 DAY)),
(1,'Seat','Leon FR','1234ABC',2021,45300,'VSSZZZ5PZ000111222',DATE_ADD(CURDATE(),INTERVAL 210 DAY)),
(2,'Volkswagen','Golf TDI','7890XYZ',2020,67800,'WVWZZZ5PZ000333444',DATE_ADD(CURDATE(),INTERVAL 45 DAY)),
(2,'Peugeot','Partner','3456BFR',2022,28400,'VF33HRHR000555666',DATE_ADD(CURDATE(),INTERVAL 310 DAY)),
(3,'Ford','Focus','5678LMN',2015,135000,'WF0UXXGAJU000777888',DATE_SUB(CURDATE(),INTERVAL 90 DAY)),
(4,'Citroën','C4 Cactus','9012RST',2023,15200,'VF7CCW000999000111',DATE_ADD(CURDATE(),INTERVAL 540 DAY)),
(5,'Mercedes-Benz','Vito 111 CDI','6789JKL',2019,112000,'WDF639813234567890',DATE_ADD(CURDATE(),INTERVAL 15 DAY));

INSERT INTO ordenes (cliente_id,vehiculo_desc,descripcion,total,status,notas,created_at) VALUES
(1,'Renault Clio 4524JGH','Cambio de embrague completo + kit distribución',1280.50,'delivered','Presupuesto aprobado. Se dejó el coche 2 días.',DATE_SUB(CURDATE(),INTERVAL 45 DAY)),
(2,'VW Golf 7890XYZ','Revisión 60.000km, cambio aceite y filtros, frenos traseros',520.00,'completed','ITV en 45 días. Se recomienda cambiar neumáticos delanteros.',DATE_SUB(CURDATE(),INTERVAL 10 DAY)),
(3,'Ford Focus 5678LMN','Reparación aire acondicionado (compresor averiado). Recarga de gas.',890.00,'progress','Esperando pieza del compresor (pedido a recambios)',DATE_SUB(CURDATE(),INTERVAL 3 DAY)),
(1,'Seat Leon 1234ABC','Pastillas de freno delanteras y traseras + líquido de frenos',340.00,'pending','Cliente entra mañana a las 9:00',CURDATE()),
(4,'Citroën C4 9012RST','1er cambio de aceite + revisión garantía',0.00,'pending','Gratuito en garantía (cubierto por concesionario)',CURDATE()),
(5,'Mercedes Vito 6789JKL','Revisión completa 110.000km + correa distribución + diagnóstico centralita',1750.00,'delivered','Factura pagada con tarjeta',DATE_SUB(CURDATE(),INTERVAL 20 DAY));

INSERT INTO facturas (numero,cliente_id,orden_id,descripcion,total,paid,created_at) VALUES
('2026-001',1,1,'Cambio embrague + distribución',1280.50,1,DATE_SUB(CURDATE(),INTERVAL 40 DAY)),
('2026-002',2,2,'Revisión 60.000km + frenos',520.00,1,DATE_SUB(CURDATE(),INTERVAL 8 DAY)),
('2026-003',3,3,'Reparación aire acondicionado',890.00,0,DATE_SUB(CURDATE(),INTERVAL 3 DAY)),
('2026-004',5,6,'Revisión 110.000km + distribución + diagnóstico',1750.00,1,DATE_SUB(CURDATE(),INTERVAL 15 DAY));

INSERT INTO facturas_items (factura_id,concepto,cantidad,precio) VALUES
(1,'Embrague completo Sachs',1,420.00),
(1,'Kit distribución',1,280.00),
(1,'Mano de obra (8h)',8,580.50),
(2,'Aceite 5W30 (5L)',1,62.00),
(2,'Filtro aceite',1,12.00),
(2,'Filtro aire',1,18.00),
(2,'Pastillas freno ATE',2,120.00),
(2,'Mano de obra (3h)',3,150.00),
(3,'Compresor aire acondicionado',1,520.00),
(3,'Gas R134a',1,45.00),
(3,'Mano de obra (3.5h)',3.5,245.00),
(3,'Junta y retenes',1,35.00),
(4,'Kit distribución Mercedes',1,620.00),
(4,'Aceite 5W30 (7L)',1,86.00),
(4,'Filtros (aceite+aire+gasoil+cabina)',4,110.00),
(4,'Mano de obra (10h)',10,750.00),
(4,'Diagnóstico electrónico',1,60.00);

INSERT INTO gastos (concepto,amount,categoria,created_at) VALUES
('Recibo de luz mayo',385.20,'suministros',DATE_SUB(CURDATE(),INTERVAL 25 DAY)),
('Alquiler local mensual',650.00,'alquiler',DATE_SUB(CURDATE(),INTERVAL 20 DAY)),
('Factura recambios (Ferretería Quesada)',1240.00,'recambios',DATE_SUB(CURDATE(),INTERVAL 15 DAY)),
('Seguro RC Mapfre',480.00,'seguros',DATE_SUB(CURDATE(),INTERVAL 90 DAY)),
('Gasoil calefacción',210.50,'suministros',DATE_SUB(CURDATE(),INTERVAL 12 DAY)),
('Agua',42.80,'suministros',DATE_SUB(CURDATE(),INTERVAL 35 DAY)),
('Mantenimiento elevador',195.00,'mantenimiento',DATE_SUB(CURDATE(),INTERVAL 45 DAY)),
('Teléfono + internet',54.90,'suministros',DATE_SUB(CURDATE(),INTERVAL 5 DAY)),
('Recogida residuos peligrosos (SIGAUS)',0.00,'residuos',DATE_SUB(CURDATE(),INTERVAL 60 DAY));

INSERT INTO presupuestos (cliente_id,descripcion,total,validez,aceptado) VALUES
(4,'Cambio neumáticos + alineación',380.00,'30 días',1),
(1,'Kit distribución + bomba agua',620.00,'15 días',0);

INSERT INTO proveedores (nombre,contacto,telefono) VALUES
('Recambios Alcalá SL','Pedro López','953 58 45 67'),
('Ferretería Quesada','José Manuel Quesada','611 22 33 44'),
('Neumáticos Sur','Miguel Ángel','958 67 89 01'),
('Autoeléctrica Molina','Antonio Molina','953 58 78 90');

INSERT INTO inventario (nombre,referencia,stock_actual,stock_minimo,precio,proveedor_id) VALUES
('Aceite 5W30 (5L)','ACE-5W30',6,4,62.00,1),
('Filtro aceite genérico','FIL-001',12,10,8.00,1),
('Pastillas freno delanteras','FREN-001',3,4,45.00,1),
('Kit embrague Sachs','EMB-001',1,2,420.00,1),
('Gas R134a (botella 12kg)','GAS-134A',5,1,145.00,1),
('Filtro aire habitáculo','FIL-010',8,6,12.00,1),
('Líquido frenos DOT4 (1L)','FREN-LIQ',2,3,9.00,2),
('Batería 12V 70Ah','BAT-001',4,2,85.00,1),
('Bomba agua','BOM-001',0,1,95.00,1),
('Neumático 205/55 R16','NEU-001',8,4,72.00,3);

INSERT INTO empleados (nombre,dni,telefono,puesto,fecha_alta_ss,fecha_inicio,fin_contrato,salario,alta_ss,contrato_escrito,reconocimiento_medico,usuario,contrasena,rol) VALUES
('Admin del Sistema','','','Administrador',NULL,NULL,NULL,0.00,1,1,NULL,'admin','admin','admin'),
('Jesús Molina García','24387165K','622 11 22 33','Jefe de Taller','2020-03-01','2020-03-01',NULL,32000.00,1,1,DATE_SUB(CURDATE(),INTERVAL 15 DAY),'jemoga66','3420','admin'),
('Laura Molina Torres','48392017F','622 33 44 55','Gerente','2021-09-01','2021-09-01',NULL,28000.00,1,1,DATE_SUB(CURDATE(),INTERVAL 30 DAY),'','','basico'),
('Juan Carlos Fernández','51928473G','655 44 33 22','Oficial 1ª','2022-01-15','2022-01-15',NULL,24000.00,1,1,DATE_SUB(CURDATE(),INTERVAL 45 DAY),'','','basico'),
('David Expósito Pérez','73829105H','677 88 99 00','Oficial 2ª','2023-06-01','2023-06-01','2026-06-30',20000.00,1,1,DATE_ADD(CURDATE(),INTERVAL 60 DAY),'','','basico'),
('Sofía Ruiz Molina','29184756J','688 99 00 11','Administrativo','2024-09-16','2024-09-16','2026-09-16',18600.00,1,1,DATE_SUB(CURDATE(),INTERVAL 120 DAY),'','','basico');

INSERT INTO prl (evaluacion_fecha,evaluacion_empresa,formacion_realizada,botiquin_ok,reconocimientos_realizados) VALUES
(DATE_ADD(CURDATE(),INTERVAL 30 DAY),'MC Mutual',1,1,1);

INSERT INTO prl_epis (tipo,cantidad,fecha_adq) VALUES
('Guantes mecánicos',10,'2025-06-01'),
('Gafas protección',4,'2025-06-01'),
('Calzado seguridad',4,'2025-03-15');

INSERT INTO prl_formacion (tema,fecha,asistentes) VALUES
('Riesgos eléctricos','2025-05-20',3),
('Manipulación cargas','2025-05-20',3),
('Extinción incendios','2025-11-15',4);

INSERT INTO prl_revisiones (tipo,fecha,notas) VALUES
('Mesa elevadora',DATE_SUB(CURDATE(),INTERVAL 15 DAY),'Correcto'),
('Compresor',DATE_SUB(CURDATE(),INTERVAL 30 DAY),'Válvula seguridad OK');

INSERT INTO medio_ambiente (gestor_contrato,gestor_nombre,almacen_correcto,registro_completo,gestion_aceites,archivo_cronologico) VALUES
(DATE_SUB(CURDATE(),INTERVAL 365 DAY),'Gestora Ambiental Andaluza SL',1,1,1,1);

INSERT INTO medio_ambiente_residuos (tipo,cantidad,unidad,fecha_recogida,gestor) VALUES
('Aceite usado',150,'L',DATE_SUB(CURDATE(),INTERVAL 45 DAY),'SIGAUS'),
('Filtros aceite',24,'uds',DATE_SUB(CURDATE(),INTERVAL 45 DAY),'Gestora Ambiental'),
('Baterías',6,'uds',DATE_SUB(CURDATE(),INTERVAL 90 DAY),'Gestora Ambiental');

INSERT INTO maquinaria_elevadores (nombre,marca,modelo,num_serie,revision,proxima) VALUES
('Elevador 2 columnas','Siviglia','SUPRA 4000','EL-001',DATE_SUB(CURDATE(),INTERVAL 300 DAY),DATE_ADD(CURDATE(),INTERVAL 65 DAY)),
('Elevador tijera','Werther','MX60','EL-002',DATE_SUB(CURDATE(),INTERVAL 60 DAY),DATE_ADD(CURDATE(),INTERVAL 305 DAY));

INSERT INTO maquinaria_compresores (nombre,marca,modelo,num_serie,revision,proxima) VALUES
('Compresor 200L','ABAC','A29B200V','CP-001',DATE_SUB(CURDATE(),INTERVAL 90 DAY),DATE_ADD(CURDATE(),INTERVAL 275 DAY));

INSERT INTO maquinaria_diagnosis (nombre,marca,num_serie) VALUES
('Autel MaxiDAS','Autel','DG-001');

INSERT INTO maquinaria_herramientas (nombre,marca,stock) VALUES
('Matriz llaves impacto neumática','Bahco',1),
('Caja llaves combinadas (6-24mm)','Facom',2);

INSERT INTO instalaciones (tipo,revision) VALUES
('extintores',DATE_SUB(CURDATE(),INTERVAL 180 DAY)),
('electrica',DATE_SUB(CURDATE(),INTERVAL 120 DAY)),
('emergencia',DATE_SUB(CURDATE(),INTERVAL 200 DAY)),
('incendios',DATE_SUB(CURDATE(),INTERVAL 300 DAY));

INSERT INTO proteccion_datos (consentimientos_gestionados,registro_actividades,carteles_rgpd,videovigilancia) VALUES
(1,1,1,0);

INSERT INTO proteccion_datos_avisos (fecha,tipo,detalle) VALUES
('2025-01-15','Registro actividades creado','Conforme Art.30 RGPD');

INSERT INTO diario_taller (fecha,titulo,tipo) VALUES
(DATE_SUB(CURDATE(),INTERVAL 5 DAY),'Revisión extintores periódica','Seguridad'),
(DATE_SUB(CURDATE(),INTERVAL 10 DAY),'Visita informativa Ayuntamiento (licencia)','Administración');

INSERT INTO config (registro_horario_activo,alertas_activas) VALUES
(1,1);

INSERT INTO citas (cliente_id,vehiculo_desc,fecha,hora,descripcion,status) VALUES
(1,'Renault Clio 4524JGH',CURDATE(),'09:00','Cambio de aceite y filtros','pendiente'),
(2,'VW Golf 7890XYZ',CURDATE(),'11:30','Revisión frenos delanteros','pendiente'),
(3,'Ford Focus 5678LMN',DATE_ADD(CURDATE(),INTERVAL 1 DAY),'10:00','Diagnóstico electrónico','confirmada'),
(1,'Seat Leon 1234ABC',DATE_ADD(CURDATE(),INTERVAL 2 DAY),'08:30','Reparación aire acondicionado','pendiente'),
(4,'Citroën C4 9012RST',DATE_ADD(CURDATE(),INTERVAL 1 DAY),'12:00','Cambio neumáticos + alineación','pendiente');
