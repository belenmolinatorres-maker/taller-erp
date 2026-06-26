const API_BASE = window.APP_API_URL || '/api';

function apiHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  const token = localStorage.getItem('tallerpro_token');
  if (token) headers['Authorization'] = 'Bearer ' + token;
  return headers;
}

async function apiFetch(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const r = await fetch(url, { ...options, headers: { ...apiHeaders(), ...options.headers }, signal: controller.signal });
    if (!r.ok) {
      const err = await r.json().catch(() => ({ error: 'Error del servidor' }));
      throw new Error(err.error || 'Error del servidor');
    }
    return r.json();
  } finally {
    clearTimeout(timeout);
  }
}

const Api = {
  async loadData() {
    return apiFetch(`${API_BASE}/data`);
  },

  async login(usuario, contrasena) {
    const r = await fetch(`${API_BASE}/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ usuario, contrasena }) });
    if (!r.ok) {
      const err = await r.json().catch(() => ({ error: 'Credenciales inválidas' }));
      throw new Error(err.error || 'Credenciales inválidas');
    }
    return r.json();
  },

  async createCliente(data) { return apiFetch(`${API_BASE}/clientes`, { method: 'POST', body: JSON.stringify(data) }); },
  async updateCliente(id, data) { await apiFetch(`${API_BASE}/clientes/${id}`, { method: 'PUT', body: JSON.stringify(data) }); },
  async deleteCliente(id) { await apiFetch(`${API_BASE}/clientes/${id}`, { method: 'DELETE' }); },

  async createVehiculo(data) { return apiFetch(`${API_BASE}/vehiculos`, { method: 'POST', body: JSON.stringify(data) }); },
  async updateVehiculo(id, data) { await apiFetch(`${API_BASE}/vehiculos/${id}`, { method: 'PUT', body: JSON.stringify(data) }); },
  async deleteVehiculo(id) { await apiFetch(`${API_BASE}/vehiculos/${id}`, { method: 'DELETE' }); },

  async createOrden(data) { return apiFetch(`${API_BASE}/ordenes`, { method: 'POST', body: JSON.stringify(data) }); },
  async updateOrden(id, data) { await apiFetch(`${API_BASE}/ordenes/${id}`, { method: 'PUT', body: JSON.stringify(data) }); },
  async deleteOrden(id) { await apiFetch(`${API_BASE}/ordenes/${id}`, { method: 'DELETE' }); },

  async createFactura(data) { return apiFetch(`${API_BASE}/facturas`, { method: 'POST', body: JSON.stringify(data) }); },
  async updateFactura(id, data) { await apiFetch(`${API_BASE}/facturas/${id}`, { method: 'PUT', body: JSON.stringify(data) }); },
  async deleteFactura(id) { await apiFetch(`${API_BASE}/facturas/${id}`, { method: 'DELETE' }); },

  async createGasto(data) { return apiFetch(`${API_BASE}/gastos`, { method: 'POST', body: JSON.stringify(data) }); },
  async deleteGasto(id) { await apiFetch(`${API_BASE}/gastos/${id}`, { method: 'DELETE' }); },

  async createInventario(data) { return apiFetch(`${API_BASE}/inventario`, { method: 'POST', body: JSON.stringify(data) }); },
  async updateInventario(id, data) { await apiFetch(`${API_BASE}/inventario/${id}`, { method: 'PUT', body: JSON.stringify(data) }); },
  async deleteInventario(id) { await apiFetch(`${API_BASE}/inventario/${id}`, { method: 'DELETE' }); },

  async createProveedor(data) { return apiFetch(`${API_BASE}/proveedores`, { method: 'POST', body: JSON.stringify(data) }); },
  async deleteProveedor(id) { await apiFetch(`${API_BASE}/proveedores/${id}`, { method: 'DELETE' }); },

  async createEmpleado(data) { return apiFetch(`${API_BASE}/empleados`, { method: 'POST', body: JSON.stringify(data) }); },
  async updateEmpleado(id, data) { await apiFetch(`${API_BASE}/empleados/${id}`, { method: 'PUT', body: JSON.stringify(data) }); },
  async deleteEmpleado(id) { await apiFetch(`${API_BASE}/empleados/${id}`, { method: 'DELETE' }); },
  async bajaEmpleado(id) { await apiFetch(`${API_BASE}/empleados/${id}/baja`, { method: 'PUT' }); },

  async updateEmpresa(data) { await apiFetch(`${API_BASE}/empresa`, { method: 'PUT', body: JSON.stringify(data) }); },
  async updateConfig(data) { await apiFetch(`${API_BASE}/config`, { method: 'PUT', body: JSON.stringify(data) }); },

  async createSeguro(data) { return apiFetch(`${API_BASE}/seguros`, { method: 'POST', body: JSON.stringify(data) }); },
  async deleteSeguro(id) { await apiFetch(`${API_BASE}/seguros/${id}`, { method: 'DELETE' }); },
  async createLicencia(data) { return apiFetch(`${API_BASE}/licencias`, { method: 'POST', body: JSON.stringify(data) }); },
  async deleteLicencia(id) { await apiFetch(`${API_BASE}/licencias/${id}`, { method: 'DELETE' }); },
  async createBanco(data) { return apiFetch(`${API_BASE}/banco`, { method: 'POST', body: JSON.stringify(data) }); },
  async deleteBanco(id) { await apiFetch(`${API_BASE}/banco/${id}`, { method: 'DELETE' }); },

  async createPresupuesto(data) { return apiFetch(`${API_BASE}/presupuestos`, { method: 'POST', body: JSON.stringify(data) }); },
  async updatePresupuesto(id, data) { await apiFetch(`${API_BASE}/presupuestos/${id}`, { method: 'PUT', body: JSON.stringify(data) }); },
  async deletePresupuesto(id) { await apiFetch(`${API_BASE}/presupuestos/${id}`, { method: 'DELETE' }); },

  async createDiarioTaller(data) { return apiFetch(`${API_BASE}/diario-taller`, { method: 'POST', body: JSON.stringify(data) }); },
  async deleteDiarioTaller(id) { await apiFetch(`${API_BASE}/diario-taller/${id}`, { method: 'DELETE' }); },

  async createResiduo(data) { return apiFetch(`${API_BASE}/residuos`, { method: 'POST', body: JSON.stringify(data) }); },
  async deleteResiduo(id) { await apiFetch(`${API_BASE}/residuos/${id}`, { method: 'DELETE' }); },

  async createPrlEpi(data) { return apiFetch(`${API_BASE}/prl-epis`, { method: 'POST', body: JSON.stringify(data) }); },
  async deletePrlEpi(id) { await apiFetch(`${API_BASE}/prl-epis/${id}`, { method: 'DELETE' }); },

  async createPrlFormacion(data) { return apiFetch(`${API_BASE}/prl-formacion`, { method: 'POST', body: JSON.stringify(data) }); },
  async deletePrlFormacion(id) { await apiFetch(`${API_BASE}/prl-formacion/${id}`, { method: 'DELETE' }); },

  async createPrlRevision(data) { return apiFetch(`${API_BASE}/prl-revisiones`, { method: 'POST', body: JSON.stringify(data) }); },
  async deletePrlRevision(id) { await apiFetch(`${API_BASE}/prl-revisiones/${id}`, { method: 'DELETE' }); },

  async createElevador(data) { return apiFetch(`${API_BASE}/maquinaria/elevadores`, { method: 'POST', body: JSON.stringify(data) }); },
  async updateElevador(id, data) { await apiFetch(`${API_BASE}/maquinaria/elevadores/${id}`, { method: 'PUT', body: JSON.stringify(data) }); },
  async deleteElevador(id) { await apiFetch(`${API_BASE}/maquinaria/elevadores/${id}`, { method: 'DELETE' }); },

  async createCompresor(data) { return apiFetch(`${API_BASE}/maquinaria/compresores`, { method: 'POST', body: JSON.stringify(data) }); },
  async updateCompresor(id, data) { await apiFetch(`${API_BASE}/maquinaria/compresores/${id}`, { method: 'PUT', body: JSON.stringify(data) }); },
  async deleteCompresor(id) { await apiFetch(`${API_BASE}/maquinaria/compresores/${id}`, { method: 'DELETE' }); },

  async createDiagnosis(data) { return apiFetch(`${API_BASE}/maquinaria/diagnosis`, { method: 'POST', body: JSON.stringify(data) }); },
  async deleteDiagnosis(id) { await apiFetch(`${API_BASE}/maquinaria/diagnosis/${id}`, { method: 'DELETE' }); },

  async createHerramienta(data) { return apiFetch(`${API_BASE}/maquinaria/herramientas`, { method: 'POST', body: JSON.stringify(data) }); },
  async deleteHerramienta(id) { await apiFetch(`${API_BASE}/maquinaria/herramientas/${id}`, { method: 'DELETE' }); },

  async createInstalacion(data) { return apiFetch(`${API_BASE}/instalaciones`, { method: 'POST', body: JSON.stringify(data) }); },

  async createAvisoProteccionDatos(data) { return apiFetch(`${API_BASE}/proteccion-datos-avisos`, { method: 'POST', body: JSON.stringify(data) }); },
  async deleteAvisoProteccionDatos(id) { await apiFetch(`${API_BASE}/proteccion-datos-avisos/${id}`, { method: 'DELETE' }); },

  async createCita(data) { return apiFetch(`${API_BASE}/citas`, { method: 'POST', body: JSON.stringify(data) }); },
  async updateCita(id, data) { await apiFetch(`${API_BASE}/citas/${id}`, { method: 'PUT', body: JSON.stringify(data) }); },
  async deleteCita(id) { await apiFetch(`${API_BASE}/citas/${id}`, { method: 'DELETE' }); },

  getPerfil() { return apiFetch(`${API_BASE}/perfil`); },
  updatePerfil(data) { return apiFetch(`${API_BASE}/perfil`, { method: 'PUT', body: JSON.stringify(data) }); }
};
