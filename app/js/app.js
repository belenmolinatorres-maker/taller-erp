/* ============================================================
   TALLER ERP v2.0 — Gestión Integral + Cumplimiento Legal
   ============================================================ */

// ===================== LEGISLATION DATABASE =====================
const LEY = {
  taller: {
    nombre:'Real Decreto 1457/1986, de 10 de enero',
    desc:'Reglamento de talleres de reparación de vehículos',
    articulos:[
      {n:'Art.1',t:'Definición de taller y actividades'},
      {n:'Art.3',t:'Obligaciones del titular (medios, organización, registro)'},
      {n:'Art.5',t:'Hoja de reclamaciones a disposición del cliente'},
      {n:'Art.7',t:'Libro de registro de reparaciones'},
      {n:'Art.9',t:'Expedición de factura detallada'}
    ],
    tipo:'Estatal', boe:'https://www.boe.es/buscar/doc.php?id=BOE-A-1986-3761',
    sancion:'Multa de 300-30.000€ según Orden ITC/3512/2009'
  },
  prl: {
    nombre:'Ley 31/1995, de 8 de noviembre',
    desc:'Prevención de Riesgos Laborales',
    articulos:[
      {n:'Art.14',t:'Derecho a la protección frente a riesgos laborales'},
      {n:'Art.16',t:'Evaluación de riesgos y planificación preventiva'},
      {n:'Art.19',t:'Formación de los trabajadores'},
      {n:'Art.22',t:'Vigilancia de la salud'},
      {n:'Art.23',t:'Documentación obligatoria'},
      {n:'Art.29',t:'Obligaciones del trabajador'}
    ],
    rd:'Real Decreto 39/1997 (Reglamento Servicios Prevención)',
    tipo:'Estatal', boe:'https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292'
  },
  rgpd: {
    nombre:'Reglamento (UE) 2016/679 del Parlamento Europeo',
    desc:'Protección de datos personales (RGPD)',
    articulos:[
      {n:'Art.5',t:'Principios del tratamiento'},
      {n:'Art.6',t:'Licitud del tratamiento'},
      {n:'Art.7',t:'Condiciones para el consentimiento'},
      {n:'Art.13',t:'Información al interesado'},
      {n:'Art.30',t:'Registro de actividades del tratamiento'},
      {n:'Art.33',t:'Notificación de violaciones de seguridad'}
    ],
    lopdgdd:'Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD)',
    tipo:'Europea / Estatal', boe:'https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807'
  },
  ambiente: {
    residuos:{
      nombre:'Ley 7/2022, de 8 de abril, de residuos y suelos contaminados',
      articulos:[
        {n:'Art.18',t:'Producción de residuos peligrosos'},
        {n:'Art.20',t:'Almacenamiento de residuos peligrosos'},
        {n:'Art.21',t:'Registro documental'},
        {n:'Art.22',t:'Obligaciones del productor'}
      ],
      rd:'Real Decreto 833/1988 (Reglamento Residuos Peligrosos)',
      tipo:'Estatal', boe:'https://www.boe.es/buscar/act.php?id=BOE-A-2022-5809'
    },
    aceite:{
      nombre:'Real Decreto 679/2006, de 2 de junio',
      desc:'Gestión de aceites industriales usados',
      tipo:'Estatal', boe:'https://www.boe.es/buscar/doc.php?id=BOE-A-2006-11391'
    },
    neumaticos:{
      nombre:'Real Decreto 1619/2005, de 30 de diciembre',
      desc:'Gestión de neumáticos fuera de uso',
      tipo:'Estatal', boe:'https://www.boe.es/buscar/doc.php?id=BOE-A-2005-21879'
    }
  },
  contratos: {
    nombre:'Real Decreto Legislativo 2/2015, de 23 de octubre',
    desc:'Texto Refundido del Estatuto de los Trabajadores',
    articulos:[
      {n:'Art.8',t:'Forma del contrato'},
      {n:'Art.15',t:'Duración del contrato'},
      {n:'Art.34',t:'Jornada de trabajo'},
      {n:'Art.48',t:'Suspensión del contrato'},
      {n:'Art.55',t:'Despido disciplinario'}
    ],
    tipo:'Estatal', boe:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430'
  },
  horario: {
    nombre:'Real Decreto 8/2019, de 8 de marzo',
    desc:'Registro de jornada obligatorio',
    tipo:'Estatal', boe:'https://www.boe.es/buscar/doc.php?id=BOE-A-2019-3481'
  },
  facturacion: {
    nombre:'Ley 58/2003, de 17 de diciembre, General Tributaria',
    rd:'Real Decreto 1619/2012 (Reglamento facturación)',
    verifactu:'Orden HFP/1172/2022 (Verifactu)',
    tipo:'Estatal', boe:'https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186'
  },
  iva: {
    nombre:'Ley 37/1992, de 28 de diciembre, del IVA',
    tipo:'Estatal', boe:'https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740'
  },
  industria: {
    nombre:'Real Decreto 2060/2008, de 12 de diciembre',
    desc:'Reglamento de equipos a presión (compresores)',
    rd_ascensores:'Real Decreto 88/2013 (elevadores)',
    tipo:'Estatal', boe:'https://www.boe.es/buscar/doc.php?id=BOE-A-2009-2235'
  },
  incendios: {
    nombre:'Real Decreto 513/2017, de 22 de mayo',
    desc:'Reglamento de instalaciones de protección contra incendios',
    tipo:'Estatal', boe:'https://www.boe.es/buscar/doc.php?id=BOE-A-2017-6604'
  },
  apertura: {
    nombre:'Decreto 155/2018, de 4 de septiembre (Andalucía)',
    desc:'Régimen de comunicación previa y licencia de apertura',
    autonoma:'Andalucía',
    tipo:'Autonómica', boe:'https://www.juntadeandalucia.es/boja/2018/176/1'
  },
  videovigilancia: {
    nombre:'Ley Orgánica 4/1997, de 4 de agosto',
    desc:'Videovigilancia en espacios públicos',
    tipo:'Estatal', boe:'https://www.boe.es/buscar/act.php?id=BOE-A-1997-17786'
  },
  consumo: {
    nombre:'Real Decreto Legislativo 1/2007, de 16 de noviembre',
    desc:'Texto Refundido de Consumidores y Usuarios',
    articulos:[
      {n:'Art.21',t:'Factura detallada'},
      {n:'Art.23',t:'Hoja de reclamaciones'},
      {n:'Art.115',t:'Garantía de bienes (3 años desde 2022)'}
    ],
    tipo:'Estatal', boe:'https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555'
  },
  igualdad: {
    nombre:'Ley Orgánica 3/2007, de 22 de marzo',
    desc:'Igualdad efectiva de mujeres y hombres',
    tipo:'Estatal', boe:'https://www.boe.es/buscar/doc.php?id=BOE-A-2007-6115'
  }
};

// ===================== LEGAL COMPLIANCE ENGINE =====================
const COMPLIANCE = {
  items:[
    {id:'licencia',label:'Licencia de apertura',group:'Licencias',law:LEY.apertura.nombre,sanction:'Hasta 1.000-15.000€ (según ordenanza municipal)',check:()=>!!Store.data.empresa.licencias.find(l=>l.tipo==='apertura'&&l.fechaConcesion)},
    {id:'seguro_rc',label:'Seguro Responsabilidad Civil',group:'Seguros',law:'Real Decreto 1457/1986, Art.5',sanction:'300-3.000€',check:()=>!!Store.data.empresa.seguros.find(s=>s.tipo==='rc'&&new Date(s.fin)>new Date())},
    {id:'prl_eval',label:'Evaluación de riesgos PRL',group:'PRL',law:LEY.prl.nombre+' Art.16',sanction:'2.000-40.000€',check:()=>!!Store.data.prl.evaluacionFecha},
    {id:'prl_formacion',label:'Formación PRL trabajadores',group:'PRL',law:LEY.prl.nombre+' Art.19',sanction:'200-2.000€ por trabajador',check:()=>Store.data.prl.formacionRealizada||false},
    {id:'residuos_gestor',label:'Contrato gestor residuos peligrosos',group:'Medio Ambiente',law:LEY.ambiente.residuos.nombre+' Art.20-21',sanction:'Hasta 600.000€ (infracción muy grave)',check:()=>!!Store.data.medioAmbiente.gestorContrato},
    {id:'extintores',label:'Extintores revisados',group:'Seguridad',law:LEY.incendios.nombre,sanction:'500-3.000€',check:()=>!!Store.data.maquinaria.instalaciones.extintores.revision&&Store.data.maquinaria.instalaciones.extintores.revision.slice(0,4)>='2024'},
    {id:'elevadores',label:'Revisión elevador vehículos',group:'Maquinaria',law:LEY.industria.rd_ascensores,sanction:'1.000-10.000€',check:()=>!!Store.data.maquinaria.elevadores.find(e=>e.revision&&new Date(e.revision)>new Date(new Date().setMonth(new Date().getMonth()-12)))},
    {id:'compresor',label:'Revisión compresor (equipo presión)',group:'Maquinaria',law:LEY.industria.nombre,sanction:'1.000-10.000€',check:()=>!!Store.data.maquinaria.compresores.find(c=>c.revision&&new Date(c.revision)>new Date(new Date().setMonth(new Date().getMonth()-12)))},
    {id:'registro_residuos',label:'Registro documental de residuos',group:'Medio Ambiente',law:LEY.ambiente.residuos.nombre+' Art.21',sanction:'2.000-40.000€',check:()=>Store.data.medioAmbiente.registroCompleto||false},
    {id:'rgpd_consent',label:'Consentimientos RGPD clientes',group:'Protección Datos',law:LEY.rgpd.nombre+' Art.7',sanction:'Hasta 20.000.000€ o 4% facturación',check:()=>Store.data.proteccionDatos.consentimientosGestionados||false},
    {id:'reclamaciones',label:'Hoja de reclamaciones disponible',group:'Consumo',law:LEY.consumo.nombre+' Art.23',sanction:'300-3.000€',check:()=>Store.data.empresa.hojaReclamaciones||false},
    {id:'registro_horario',label:'Registro de jornada (empleados)',group:'Laboral',law:LEY.horario.nombre,sanction:'625-10.000€ por trabajador',check:()=>Store.data.registroHorarioActivo||false},
    {id:'carteles',label:'Cartelería obligatoria visibles',group:'Seguridad',law:LEY.prl.nombre+' Art.14',sanction:'200-2.000€',check:()=>Store.data.empresa.carteleriaInstalada||false},
    {id:'registro_industrial',label:'Registro Industrial Andaluz',group:'Industria',law:'Decreto 59/2005 (Andalucía)',sanction:'1.000-15.000€',check:()=>!!Store.data.empresa.registroIndustrial},
    {id:'reconocimiento_medico',label:'Reconocimientos médicos anuales empleados',group:'PRL',law:LEY.prl.nombre+' Art.22',sanction:'500-5.000€',check:()=>Store.data.prl.reconocimientosRealizados||false},
    {id:'garantia_3años',label:'Garantía 3 años en reparaciones',group:'Consumo',law:LEY.consumo.nombre+' Art.115 (modificado 2022)',sanction:'Reclamación del consumidor + posible multa',check:()=>true},
    {id:'señalizacion',label:'Señalización de seguridad',group:'PRL',law:'Real Decreto 485/1997',sanction:'200-5.000€',check:()=>Store.data.empresa.senalizacionOk||false},
    {id:'botiquin',label:'Botiquín de primeros auxilios',group:'PRL',law:'Real Decreto 486/1997, Anexo VI',sanction:'100-1.000€',check:()=>Store.data.prl.botiquinOk||false},
    {id:'alumbrado_emergencia',label:'Alumbrado de emergencia',group:'Instalaciones',law:'Real Decreto 2267/2004',sanction:'300-3.000€',check:()=>Store.data.empresa.alumbradoEmergenciaOk||false}
  ],
  calcular(){
    let ok=0,total=this.items.length;
    this.items.forEach(i=>{if(i.check())ok++;});
    return {porcentaje:Math.round(ok/total*100),cumplidos:ok,total:total,pendientes:this.items.filter(i=>!i.check())};
  },
  obtenerPendientes(){ return this.items.filter(i=>!i.check()); }
};

// ===================== ALERT ENGINE =====================
const ALERTAS = {
  generar(){
    let alertas=[];
    const hoy=new Date();
    const en30dias=new Date(hoy.getTime()+30*86400000);
    const en7dias=new Date(hoy.getTime()+7*86400000);
    // Extintores
    const ext=Store.data.maquinaria.instalaciones.extintores;
    if(ext.revision&&new Date(ext.revision)<en30dias) alertas.push({tipo:'danger',icon:'fire',msg:'Revisión extintores próxima: '+formatDate(ext.revision),ref:LEY.incendios.nombre});
    if(ext.revision&&new Date(ext.revision)<hoy) alertas.push({tipo:'danger',icon:'fire',msg:'¡Extintores caducados! Revisar urgentemente',ref:LEY.incendios.nombre});
    // Seguros
    Store.data.empresa.seguros.forEach(s=>{
      if(s.fin&&new Date(s.fin)<en30dias) alertas.push({tipo:'warning',icon:'warning',msg:'Seguro '+s.tipo+' vence: '+formatDate(s.fin),ref:'RC obligatorio RD 1457/1986'});
      if(s.fin&&new Date(s.fin)<hoy) alertas.push({tipo:'danger',icon:'warning',msg:'¡Seguro '+s.tipo+' vencido!',ref:'RC obligatorio RD 1457/1986'});
    });
    // ITVs
    Store.data.vehiculos.filter(v=>v.itvProxima).forEach(v=>{
      if(new Date(v.itvProxima)<en30dias) alertas.push({tipo:'warning',icon:'car',msg:'ITV '+v.matricula+' vence: '+formatDate(v.itvProxima),ref:'Real Decreto 920/2017'});
    });
    // Licencias
    Store.data.empresa.licencias.forEach(l=>{
      if(l.fechaVencimiento&&new Date(l.fechaVencimiento)<en30dias) alertas.push({tipo:'warning',icon:'gavel',msg:'Licencia '+l.tipo+' vence: '+formatDate(l.fechaVencimiento)});
    });
    // Fiscal
    alertas.push({tipo:'info',icon:'euro',msg:'Modelo 303 IVA: presentación antes del 20 de cada trimestre',ref:LEY.iva.nombre});
    alertas.push({tipo:'info',icon:'euro',msg:'Modelo 130 IRPF: presentación antes del 20 de cada trimestre',ref:'Ley 35/2006 IRPF'});
    // Próximos vencimientos empleados
    Store.data.empleados.forEach(e=>{
      if(e.reconocimientoMedico&&new Date(e.reconocimientoMedico)<en30dias) alertas.push({tipo:'warning',icon:'medical',msg:'Reconocimiento médico de '+e.nombre+' próximo',ref:LEY.prl.nombre+' Art.22'});
      if(e.finContrato&&new Date(e.finContrato)<en30dias) alertas.push({tipo:'warning',icon:'contract',msg:'Contrato de '+e.nombre+' finaliza: '+formatDate(e.finContrato),ref:LEY.contratos.nombre});
    });
    // Alertas de stock
    Store.data.inventario.filter(i=>i.stockActual<=i.stockMinimo).forEach(i=>{
      alertas.push({tipo:'warning',icon:'box',msg:'Stock bajo: '+i.nombre+' ('+i.stockActual+' uds)',ref:'Gestión interna'});
    });
    // PRL evaluacion
    const prl=Store.data.prl;
    if(prl.evaluacionFecha&&new Date(prl.evaluacionFecha)<en30dias) alertas.push({tipo:'warning',icon:'shield',msg:'Revisión evaluación PRL próxima',ref:LEY.prl.nombre+' Art.16'});
    return alertas;
  }
};

// ===================== INSPECTOR VIRTUAL =====================
const INSPECTOR = {
  modulos:{
    trabajo:{
      nombre:'Inspector de Trabajo',
      preguntas:[
        {q:'¿Tienes contratos escritos de todos los empleados?',ref:LEY.contratos.nombre+' Art.8',riesgo:'Sanción 1.000-10.000€',si:()=>Store.data.empleados.every(e=>e.contratoEscrito)},
        {q:'¿Llevas registro diario de jornada?',ref:LEY.horario.nombre,riesgo:'Sanción 625-10.000€ por trabajador',si:()=>Store.data.registroHorarioActivo},
        {q:'¿Tienes formación PRL de todos los trabajadores?',ref:LEY.prl.nombre+' Art.19',riesgo:'200-2.000€ por trabajador',si:()=>Store.data.prl.formacionRealizada},
        {q:'¿Están dados de alta todos los trabajadores en Seguridad Social?',ref:'Real Decreto Legislativo 8/2015 LGSS',riesgo:'Sanción 3.000-10.000€ por trabajador',si:()=>Store.data.empleados.every(e=>e.altaSS)},
        {q:'¿Tienes evaluación de riesgos actualizada?',ref:LEY.prl.nombre+' Art.16',riesgo:'2.000-40.000€',si:()=>!!Store.data.prl.evaluacionFecha}
      ]
    },
    industria:{
      nombre:'Inspector de Industria',
      preguntas:[
        {q:'¿Estás inscrito en el Registro Industrial?',ref:'Decreto 59/2005 (Andalucía)',riesgo:'1.000-15.000€',si:()=>!!Store.data.empresa.registroIndustrial},
        {q:'¿Tienes el elevador revisado en el último año?',ref:LEY.industria.rd_ascensores,riesgo:'1.000-10.000€',si:()=>Store.data.maquinaria.elevadores.some(e=>e.revision&&new Date(e.revision)>new Date(new Date().setFullYear(new Date().getFullYear()-1)))},
        {q:'¿Tienes el compresor revisado (equipo a presión)?',ref:LEY.industria.nombre,riesgo:'1.000-10.000€',si:()=>Store.data.maquinaria.compresores.some(c=>c.revision&&new Date(c.revision)>new Date(new Date().setMonth(new Date().getMonth()-12)))},
        {q:'¿Los extintores están revisados y vigentes?',ref:LEY.incendios.nombre,riesgo:'500-3.000€',si:()=>Store.data.maquinaria.instalaciones.extintores.revision&&new Date(Store.data.maquinaria.instalaciones.extintores.revision)>new Date(new Date().setMonth(new Date().getMonth()-12))}
      ]
    },
    ambiente:{
      nombre:'Inspector de Medio Ambiente',
      preguntas:[
        {q:'¿Tienes contrato con gestor autorizado de residuos?',ref:LEY.ambiente.residuos.nombre+' Art.20-21',riesgo:'Hasta 600.000€',si:()=>!!Store.data.medioAmbiente.gestorContrato},
        {q:'¿Separar y almacenas correctamente los residuos peligrosos?',ref:LEY.ambiente.residuos.nombre+' Art.18',riesgo:'2.000-40.000€',si:()=>Store.data.medioAmbiente.almacenCorrecto||false},
        {q:'¿Llevas registro documental de residuos?',ref:LEY.ambiente.residuos.nombre+' Art.21',riesgo:'2.000-40.000€',si:()=>Store.data.medioAmbiente.registroCompleto||false},
        {q:'¿Los aceites usados se gestionan correctamente?',ref:LEY.ambiente.aceite.nombre,riesgo:'600-60.000€',si:()=>Store.data.medioAmbiente.gestionAceites||false}
      ]
    },
    hacienda:{
      nombre:'Inspector de Hacienda',
      preguntas:[
        {q:'¿Emitiste facturas de todos los servicios?',ref:'Ley 58/2003 General Tributaria',riesgo:'Sanción 50-150% de cuota defraudada',si:()=>true},
        {q:'¿Presentas el Modelo 303 cada trimestre?',ref:LEY.iva.nombre,riesgo:'Recargo 5-20% + intereses',si:()=>true},
        {q:'¿Tienes los libros registro de facturas emitidas y recibidas?',ref:'Orden HFP/1172/2022 Verifactu',riesgo:'300-6.000€',si:()=>true}
      ]
    },
    consumo:{
      nombre:'Inspector de Consumo',
      preguntas:[
        {q:'¿Tienes hoja de reclamaciones a disposición del cliente?',ref:LEY.consumo.nombre+' Art.23',riesgo:'300-3.000€',si:()=>Store.data.empresa.hojaReclamaciones||false},
        {q:'¿Ofreces garantía de 3 años en reparaciones?',ref:LEY.consumo.nombre+' Art.115',riesgo:'Reclamación + posible sanción',si:()=>true},
        {q:'¿Los presupuestos se entregan por escrito?',ref:'RD 1457/1986 Art.5',riesgo:'300-3.000€',si:()=>true}
      ]
    }
  },
  ejecutar(modulo){
    const m=this.modulos[modulo];
    if(!m) return;
    const results=[];
    m.preguntas.forEach(p=>{
      const ok=p.si();
      results.push({pregunta:p.q,ok,ref:p.ref,riesgo:p.riesgo});
    });
    return {nombre:m.nombre,results};
  }
};

// ===================== ICONS =====================
const Icons = {
  home:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
  people:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
  build:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>',
  euro:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15v-2H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"/></svg>',
  more:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>',
  add:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
  delete:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
  euro2:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>',
  car:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>',
  receipt:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>',
  file:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM6 20V4h5v7h7v9H6z"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',
  upload:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>',
  share:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>',
  gavel:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',
  warning:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',
  fire:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',
  medical:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 9h-4v4h-4v-4H6v-4h4V4h4v4h4v4z"/></svg>',
  contract:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
  box:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 13v3h3c0 1.66 1.34 3 3 3s3-1.34 3-3h3v-3H1zm3 3h-1v-1h1v1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>',
  verified:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"/></svg>'
};

// ===================== DATA LAYER =====================
const Store = {
  _key:'tallerpro_erp',
  _data:null,
  _apiActive:false,
  _defaults(){
    return {
      empresa:{
        nombre:'',cif:'',direccion:'23680 Alcalá la Real (Jaén)',telefono:'',email:'',
        banco:[],seguros:[],licencias:[],registroIndustrial:'',certificadoDigital:false,
        hojaReclamaciones:false,carteleriaInstalada:false,senalizacionOk:false,alumbradoEmergenciaOk:false,
        iva:21,irpf:15
      },
      clientes:[],vehiculos:[],
      ordenes:[],facturas:[],presupuestos:[],
      gastos:[],inventario:[],proveedores:[],
      empleados:[{id:999,nombre:'Admin Taller',usuario:'admin',contrasena:'admin',puesto:'Gerente',rol:'admin',altaSS:true,contratoEscrito:true}],
      prl:{evaluacionFecha:'',evaluacionEmpresa:'',formacionRealizada:false,botiquinOk:false,reconocimientosRealizados:false,epis:[],formacion:[],revisiones:[]},
      medioAmbiente:{gestorContrato:'',gestorNombre:'',almacenCorrecto:false,registroCompleto:false,gestionAceites:false,archivoCronologico:false,residuos:[]},
      maquinaria:{elevadores:[],compresores:[],diagnosis:[],herramientas:[],instalaciones:{extintores:{revision:''},electrica:{revision:''},emergencia:{revision:''},incendios:{revision:''}}},
      proteccionDatos:{consentimientosGestionados:false,registroActividades:false,cartelesRgpd:false,videovigilancia:false,avisos:[]},
      registroHorarioActivo:false,
      diarioTaller:[],
      citas:[],
      alertasConfig:true,
      nextId:{cliente:1,vehiculo:1,orden:1,factura:1,presupuesto:1,gasto:1,inventario:1,proveedor:1,empleado:1,cita:1}
    };
  },
  async init(){
    const lsData = localStorage.getItem(this._key);
    try {
      const serverData = await Api.loadData();
      this._data = serverData;
      this._apiActive = true;
      localStorage.setItem(this._key, JSON.stringify(serverData));
      console.log('Datos cargados desde servidor MySQL');
    } catch(e) {
      console.log('Servidor no disponible, usando localStorage');
      this._data = lsData ? JSON.parse(lsData) : this._defaults();
      this._apiActive = false;
    }
    // Ensure default admin user exists for offline login
    if (!this._data.empleados.find(e => e.usuario === 'admin')) {
      this._data.empleados.push({id:999,nombre:'Admin Taller',usuario:'admin',contrasena:'admin',puesto:'Gerente',rol:'admin',altaSS:true,contratoEscrito:true});
      this.save();
    }
    // Set dynamic title
    const empName = this._data?.empresa?.nombre;
    if (empName) {
      document.title = empName + ' - ERP Taller';
      const h1 = document.querySelector('#app-header h1');
      if (h1) h1.textContent = empName.toUpperCase() + ' - ERP';
    }
    Auth.init();
  },
  save(){
    localStorage.setItem(this._key, JSON.stringify(this._data));
  },
  get data(){return this._data;},

  // CRUD Clientes
  get clientes(){return this._data.clientes;},
  getCliente(id){return this._data.clientes.find(c=>c.id===id);},
  validateDNI(dni){return /^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i.test(dni)||dni==='';},
  validateEmail(email){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email==='';},
  addCliente(o){if(!o.nombre?.trim()){showToast('El nombre es obligatorio','error');return null}if(!this.validateEmail(o.email||'')){showToast('Email no válido','error');return null}if(!this.validateDNI(o.dni||'')){showToast('DNI no válido (8 dígitos + letra)','error');return null}o.id=this._data.nextId.cliente++;o.createdAt=new Date().toISOString();this._data.clientes.push(o);this.save();if(this._apiActive)Api.createCliente(o).catch(e=>console.error('API error:',e));return o;},
  updCliente(id,c){if(!c.nombre?.trim()){showToast('El nombre es obligatorio','error');return}if(!this.validateEmail(c.email||'')){showToast('Email no válido','error');return}if(!this.validateDNI(c.dni||'')){showToast('DNI no válido (8 dígitos + letra)','error');return}const i=this._data.clientes.findIndex(x=>x.id===id);if(i>-1){Object.assign(this._data.clientes[i],c);this.save();if(this._apiActive)Api.updateCliente(id,c).catch(e=>console.error('API error:',e));}},
  delCliente(id){this._data.vehiculos=this._data.vehiculos.filter(v=>v.clienteId!==id);this._data.ordenes=this._data.ordenes.filter(o=>o.clienteId!==id);this._data.facturas=this._data.facturas.filter(f=>f.clienteId!==id);this._data.clientes=this._data.clientes.filter(c=>c.id!==id);this.save();if(this._apiActive)Api.deleteCliente(id).catch(e=>console.error('API error:',e));},

  // CRUD Vehículos
  addVehiculo(o){o.id=this._data.nextId.vehiculo++;this._data.vehiculos.push(o);this.save();if(this._apiActive)Api.createVehiculo(o).catch(e=>console.error('API error:',e));return o;},
  updVehiculo(id,c){const i=this._data.vehiculos.findIndex(x=>x.id===id);if(i>-1){Object.assign(this._data.vehiculos[i],c);this.save();if(this._apiActive)Api.updateVehiculo(id,c).catch(e=>console.error('API error:',e));}},
  delVehiculo(id){this._data.vehiculos=this._data.vehiculos.filter(v=>v.id!==id);this.save();if(this._apiActive)Api.deleteVehiculo(id).catch(e=>console.error('API error:',e));},

  // CRUD Órdenes
  addOrden(o){o.id=this._data.nextId.orden++;o.createdAt=new Date().toISOString();o.status='pending';o.total=o.total||0;this._data.ordenes.push(o);this.save();if(this._apiActive)Api.createOrden(o).catch(e=>console.error('API error:',e));return o;},
  updOrden(id,c){const i=this._data.ordenes.findIndex(x=>x.id===id);if(i>-1){Object.assign(this._data.ordenes[i],c);this.save();if(this._apiActive)Api.updateOrden(id,c).catch(e=>console.error('API error:',e));}},
  delOrden(id){this._data.ordenes=this._data.ordenes.filter(o=>o.id!==id);this.save();if(this._apiActive)Api.deleteOrden(id).catch(e=>console.error('API error:',e));},

  // CRUD Facturas
  addFactura(o){o.id=this._data.nextId.factura++;o.createdAt=new Date().toISOString();o.paid=false;o.number=`${new Date().getFullYear()}-${String(this._data.nextId.factura).padStart(3,'0')}`;this._data.facturas.push(o);this.save();if(this._apiActive)Api.createFactura(o).catch(e=>console.error('API error:',e));return o;},
  updFactura(id,c){const i=this._data.facturas.findIndex(x=>x.id===id);if(i>-1){Object.assign(this._data.facturas[i],c);this.save();if(this._apiActive)Api.updateFactura(id,c).catch(e=>console.error('API error:',e));}},
  delFactura(id){this._data.facturas=this._data.facturas.filter(f=>f.id!==id);this.save();if(this._apiActive)Api.deleteFactura(id).catch(e=>console.error('API error:',e));},

  // CRUD Gastos
  addGasto(o){o.id=this._data.nextId.gasto++;o.createdAt=new Date().toISOString();this._data.gastos.push(o);this.save();if(this._apiActive)Api.createGasto(o).catch(e=>console.error('API error:',e));return o;},
  delGasto(id){this._data.gastos=this._data.gastos.filter(e=>e.id!==id);this.save();if(this._apiActive)Api.deleteGasto(id).catch(e=>console.error('API error:',e));},

  // CRUD Inventario
  addInventario(o){o.id=this._data.nextId.inventario++;this._data.inventario.push(o);this.save();if(this._apiActive)Api.createInventario(o).catch(e=>console.error('API error:',e));return o;},
  updInventario(id,c){const i=this._data.inventario.findIndex(x=>x.id===id);if(i>-1){Object.assign(this._data.inventario[i],c);this.save();if(this._apiActive)Api.updateInventario(id,c).catch(e=>console.error('API error:',e));}},
  delInventario(id){this._data.inventario=this._data.inventario.filter(i=>i.id!==id);this.save();if(this._apiActive)Api.deleteInventario(id).catch(e=>console.error('API error:',e));},

  // CRUD Proveedores
  addProveedor(o){o.id=this._data.nextId.proveedor++;this._data.proveedores.push(o);this.save();if(this._apiActive)Api.createProveedor(o).catch(e=>console.error('API error:',e));return o;},
  delProveedor(id){this._data.proveedores=this._data.proveedores.filter(p=>p.id!==id);this.save();if(this._apiActive)Api.deleteProveedor(id).catch(e=>console.error('API error:',e));},

  // CRUD Empleados
  addEmpleado(o){o.id=this._data.nextId.empleado++;this._data.empleados.push(o);this.save();if(this._apiActive)Api.createEmpleado(o).catch(e=>console.error('API error:',e));return o;},
  updEmpleado(id,c){const i=this._data.empleados.findIndex(x=>x.id===id);if(i>-1){Object.assign(this._data.empleados[i],c);this.save();if(this._apiActive)Api.updateEmpleado(id,c).catch(e=>console.error('API error:',e));}},
  delEmpleado(id){this._data.empleados=this._data.empleados.filter(e=>e.id!==id);this.save();if(this._apiActive)Api.deleteEmpleado(id).catch(e=>console.error('API error:',e));},
  bajaEmpleado(id){const i=this._data.empleados.findIndex(e=>e.id===id);if(i>-1){this._data.empleados[i].finContrato=new Date().toISOString().slice(0,10);this.save();if(this._apiActive)Api.bajaEmpleado(id).catch(e=>console.error('API error:',e));}},

  // CRUD Presupuestos
  addPresupuesto(o){o.id=this._data.nextId.presupuesto++;o.createdAt=new Date().toISOString();this._data.presupuestos.push(o);this.save();if(this._apiActive)Api.createPresupuesto(o).catch(e=>console.error('API error:',e));return o;},
  updPresupuesto(id,c){const i=this._data.presupuestos.findIndex(x=>x.id===id);if(i>-1){Object.assign(this._data.presupuestos[i],c);this.save();if(this._apiActive)Api.updatePresupuesto(id,c).catch(e=>console.error('API error:',e));}},
  delPresupuesto(id){this._data.presupuestos=this._data.presupuestos.filter(p=>p.id!==id);this.save();if(this._apiActive)Api.deletePresupuesto(id).catch(e=>console.error('API error:',e));},

  // CRUD Diario Taller
  addDiarioTaller(o){o.id=Date.now();this._data.diarioTaller.push(o);this.save();if(this._apiActive)Api.createDiarioTaller(o).catch(e=>console.error('API error:',e));return o;},
  delDiarioTaller(id){this._data.diarioTaller=this._data.diarioTaller.filter(d=>d.id!==id);this.save();if(this._apiActive)Api.deleteDiarioTaller(id).catch(e=>console.error('API error:',e));},

  // CRUD Citas
  get citas(){return this._data.citas;},
  getCita(id){return this._data.citas.find(c=>c.id===id);},
  addCita(o){o.id=this._data.nextId.cita++;o.createdAt=new Date().toISOString();this._data.citas.push(o);this.save();if(this._apiActive)Api.createCita(o).catch(e=>console.error('API error:',e));return o;},
  updCita(id,c){const i=this._data.citas.findIndex(x=>x.id===id);if(i>-1){Object.assign(this._data.citas[i],c);this.save();if(this._apiActive)Api.updateCita(id,c).catch(e=>console.error('API error:',e));}},
  delCita(id){this._data.citas=this._data.citas.filter(c=>c.id!==id);this.save();if(this._apiActive)Api.deleteCita(id).catch(e=>console.error('API error:',e));},

  // CRUD Residuos
  addResiduo(o){o.id=Date.now();this._data.medioAmbiente.residuos.push(o);this.save();if(this._apiActive)Api.createResiduo(o).catch(e=>console.error('API error:',e));return o;},
  delResiduo(id){const r=this._data.medioAmbiente.residuos;const i=r.findIndex(x=>x.id===id);if(i>-1){if(this._apiActive&&r[i].id)Api.deleteResiduo(r[i].id).catch(e=>console.error('API error:',e));r.splice(i,1);this.save();}},

  // CRUD Maquinaria Elevadores
  addElevador(o){o.id=Date.now();this._data.maquinaria.elevadores.push(o);this.save();if(this._apiActive)Api.createElevador(o).catch(()=>{});return o;},
  updElevador(id,c){const i=this._data.maquinaria.elevadores.findIndex(x=>x.id===id);if(i>-1){Object.assign(this._data.maquinaria.elevadores[i],c);this.save();if(this._apiActive)Api.updateElevador(id,c).catch(()=>{});}},
  delElevador(id){this._data.maquinaria.elevadores=this._data.maquinaria.elevadores.filter(e=>e.id!==id);this.save();if(this._apiActive)Api.deleteElevador(id).catch(()=>{});},

  // CRUD Maquinaria Compresores
  addCompresor(o){o.id=Date.now();this._data.maquinaria.compresores.push(o);this.save();if(this._apiActive)Api.createCompresor(o).catch(()=>{});return o;},
  updCompresor(id,c){const i=this._data.maquinaria.compresores.findIndex(x=>x.id===id);if(i>-1){Object.assign(this._data.maquinaria.compresores[i],c);this.save();if(this._apiActive)Api.updateCompresor(id,c).catch(()=>{});}},
  delCompresor(id){this._data.maquinaria.compresores=this._data.maquinaria.compresores.filter(c=>c.id!==id);this.save();if(this._apiActive)Api.deleteCompresor(id).catch(()=>{});},

  // Export/Import
  exportar(){const json=JSON.stringify(this._data,null,2);const blob=new Blob([json],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`taller_erp_backup_${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href);},
  importar(file,cb){const r=new FileReader();r.onload=e=>{try{const d=JSON.parse(e.target.result);if(d.clientes||d.empresa){this._data=d;this.save();cb(null);}else cb('Formato incorrecto');}catch(err){cb('Error: '+err.message);}};r.readAsText(file);}
};

// ===================== AUTH =====================
function _updateProfileBtn(){
  const btn = document.getElementById('profile-btn');
  if (btn && Auth.user) {
    const names = Auth.user.nombre.split(' ');
    const initials = (names[0][0] || '') + (names[1] ? names[1][0] : (names[0][1] || ''));
    btn.textContent = initials.toUpperCase();
    btn.title = Auth.user.nombre + ' (Mi Perfil)';
  }
  if (typeof renderBnav === 'function') renderBnav();
}

// ===================== AUTH =====================
const PERMISOS = {
  admin:['dashboard','empresa','clientes','vehiculos','ordenes','citas','almacen','facturacion','contabilidad','empleados','prl','ambiente','maquinaria','instalaciones','datos','checklist','inspector','alertas','documentos','config','documentacion','admin'],
  basico:['clientes','vehiculos','ordenes','citas','almacen']
};

const Auth = {
  user: null,
  init(){
    const saved = localStorage.getItem('tallerpro_auth');
    if (saved) {
      try { this.user = JSON.parse(saved); } catch(e) { this.user = null; }
    }
    if (this.user) {
      document.getElementById('login-overlay').classList.remove('open');
      renderSidebar();
      _updateProfileBtn();
    }
  },
  login(usuario, contrasena, cb){
    if (Store._apiActive) {
      Api.login(usuario, contrasena).then(u => {
        this.user = { id: u.id, nombre: u.nombre, usuario: u.usuario, rol: u.rol };
        if (u.token) localStorage.setItem('tallerpro_token', u.token);
        localStorage.setItem('tallerpro_auth', JSON.stringify(this.user));
        localStorage.setItem('tallerpro_auth_offline', JSON.stringify({ id: u.id, nombre: u.nombre, usuario: u.usuario, rol: u.rol, contrasena }));
        document.getElementById('login-overlay').classList.remove('open');
        renderSidebar();
        _updateProfileBtn();
        if (cb) cb(null, this.user);
        this._checkTos();
      }).catch(err => {
        // Network error (server down) -> try local
        // Auth error (wrong credentials) -> show server message
        const isNetwork = !err.message || err.message.includes('Failed to fetch') || err.message.includes('NetworkError') || err.name === 'TypeError' || err.message.includes('abort');
        if (isNetwork) {
          this._loginLocal(usuario, contrasena, cb);
        } else {
          document.getElementById('login-error').textContent = err.message || 'Credenciales incorrectas';
          document.getElementById('login-error').classList.remove('hidden');
          if (cb) cb(err.message);
        }
      });
    } else {
      this._loginLocal(usuario, contrasena, cb);
    }
  },
  _loginLocal(usuario, contrasena, cb){
    // Check for saved offline credentials first (from previous API login)
    try {
      const offline = JSON.parse(localStorage.getItem('tallerpro_auth_offline'));
      if (offline && offline.usuario === usuario && offline.contrasena === contrasena) {
        this.user = { id: offline.id, nombre: offline.nombre, usuario: offline.usuario, rol: offline.rol };
        localStorage.setItem('tallerpro_auth', JSON.stringify(this.user));
        document.getElementById('login-overlay').classList.remove('open');
        renderSidebar(); _updateProfileBtn();
        if (cb) cb(null, this.user);
        this._checkTos();
        return;
      }
    } catch(e) {}

    // Search employees matching plain text password
    const emp = Store._data.empleados.find(e => e.usuario === usuario && e.contrasena === contrasena && !e.deletedAt);
    if (!emp) {
      document.getElementById('login-error').textContent = 'Usuario o contraseña incorrectos';
      document.getElementById('login-error').classList.remove('hidden');
      if (cb) cb('Credenciales inválidas');
      return;
    }
    this.user = { id: emp.id, nombre: emp.nombre, usuario: emp.usuario, rol: emp.rol };
    localStorage.setItem('tallerpro_auth', JSON.stringify(this.user));
    document.getElementById('login-overlay').classList.remove('open');
    renderSidebar();
    _updateProfileBtn();
    if (cb) cb(null, this.user);
    this._checkTos();
  },
  _checkTos(){
    const tosKey = 'tallerpro_tos';
    if (!localStorage.getItem(tosKey)) {
      document.getElementById('tos-modal').classList.add('open');
    } else {
      navigate(Auth.user?.rol === 'basico' ? 'clientes' : 'dashboard');
    }
  },
  logout(){
    this.user = null;
    localStorage.removeItem('tallerpro_auth');
    localStorage.removeItem('tallerpro_token');
    document.getElementById('login-overlay').classList.add('open');
    document.getElementById('login-user').value = '';
    document.getElementById('login-pass').value = '';
    document.getElementById('login-error').classList.add('hidden');
    document.getElementById('sidebar-nav').innerHTML = '';
    document.getElementById('profile-btn').textContent = 'MT';
    document.getElementById('profile-btn').title = 'Perfil';
    qsa('.view').forEach(v => v.classList.remove('active'));
  },
  hasAccess(view){
    if (!this.user) return false;
    if (view === 'profile') return true;
    const allowed = PERMISOS[this.user.rol] || [];
    return allowed.includes(view);
  }
};

function authLogin(){
  const user = document.getElementById('login-user').value.trim();
  const pass = document.getElementById('login-pass').value.trim();
  if (!user || !pass) {
    document.getElementById('login-error').textContent = 'Introduce usuario y contraseña';
    document.getElementById('login-error').classList.remove('hidden');
    return;
  }
  document.getElementById('login-error').classList.add('hidden');
  Auth.login(user, pass);
}

function authLogout(){
  const ov = document.createElement('div'); ov.className = 'modal-overlay open';
  ov.innerHTML = '<div class="confirm-box"><h3 id="confirm-msg">¿Deseas cerrar sesión?</h3><div class="btn-group"><button class="btn btn-outline" id="confirm-no">Cancelar</button><button class="btn btn-primary" id="confirm-yes">Cerrar sesión</button></div></div>';
  document.body.appendChild(ov);
  $('#confirm-yes',ov).onclick = () => { ov.remove(); Auth.logout(); };
  $('#confirm-no',ov).onclick = () => { ov.remove(); };
  ov.onclick = e => { if (e.target === ov) { ov.remove(); } };
}

function renderSidebar(){
  const nav = document.getElementById('sidebar-nav');
  if (!Auth.user) { nav.innerHTML = ''; return; }
  const rol = Auth.user.rol;

  const grupos = [
    { label: 'Estadísticas', icon: '<svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>', items: [{ label: 'Estadísticas', view: 'dashboard' }], roles: ['admin'] },
    { label: 'Taller', icon: '<svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>', items: [
      { label: 'Órdenes', view: 'ordenes' }, { label: 'Citas', view: 'citas' },
      { label: 'Clientes', view: 'clientes' }, { label: 'Vehículos', view: 'vehiculos' },
      { label: 'Almacén', view: 'almacen' }
    ], roles: ['admin', 'basico'] },
    { label: 'Finanzas', icon: '<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>', items: [
      { label: 'Facturación', view: 'facturacion' }, { label: 'Contabilidad', view: 'contabilidad' }
    ], roles: ['admin'] },
    { label: 'Legal & Cumplimiento', icon: '<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>', items: [
      { label: 'Checklist Legal', view: 'checklist' }, { label: 'Inspector Virtual', view: 'inspector' },
      { label: 'Empresa', view: 'empresa' }, { label: 'Empleados', view: 'empleados' },
      { label: 'PRL', view: 'prl' }, { label: 'Medio Ambiente', view: 'ambiente' },
      { label: 'Maquinaria', view: 'maquinaria' }, { label: 'Instalaciones', view: 'instalaciones' },
      { label: 'Protección Datos', view: 'datos' }
    ], roles: ['admin'] },
    { label: 'Administración', icon: '<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>', items: [
      { label: 'Gestión Empleados', view: 'admin' }
    ], roles: ['admin'] },
    { label: 'Informes & Más', icon: '<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM6 20V4h5v7h7v9H6z"/></svg>', items: [
      { label: 'Alertas', view: 'alertas' }, { label: 'Documentos', view: 'documentos' },
      { label: 'Documentación', view: 'documentacion' }, { label: 'Configuración', view: 'config' }
    ], roles: ['admin'] }
  ];

  // Build footer with logout
  const userHtml = `<div class="sidebar-user">
    <button class="btn btn-primary btn-sm" onclick="authLogout()" style="width:100%;font-size:12px">Cerrar sesión</button>
  </div>`;

  nav.innerHTML = grupos.filter(g => g.roles.includes(rol)).map(g => `
    <div>
      <button class="s-item" onclick="toggleSub(this)">
        ${g.icon} ${g.label}
        <svg class="arrow" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
      </button>
      <div class="s-sub">
        ${g.items.filter(i => Auth.hasAccess(i.view)).map(i => `
          <button class="s-item" onclick="navigate('${i.view}');unsub(this)">${i.label}</button>
        `).join('')}
      </div>
    </div>
  `).join('') + userHtml;
}

// ===================== STATE =====================
let state = {
  view:'dashboard',subTab:{},
  orderFilter:'all',invoiceFilter:'all',
  searchQuery:'',detailStack:[]
};

// ===================== UTILITIES =====================
function $(s,c){return (c||document).querySelector(s);}
function $$(s,c){return [...(c||document).querySelectorAll(s)];}
function qsa(s){return [...document.querySelectorAll(s)];}
function escHtml(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function formatDate(d){return d?new Date(d).toLocaleDateString('es-ES',{day:'2-digit',month:'2-digit',year:'numeric'}):'';}
function formatCurrency(n){return Number(n||0).toLocaleString('es-ES',{minimumFractionDigits:2,maximumFractionDigits:2})+' €';}
function num(n){return Number(n)||0;}
function today(){return new Date().toISOString().slice(0,10);}
function statusLabel(s){const m={pending:'Pendiente',progress:'En curso',completed:'Completado',delivered:'Entregado'};return m[s]||s;}
function statusBadge(s){const m={pending:'badge-pending',progress:'badge-progress',completed:'badge-done',delivered:'badge-delivered'};return `<span class="badge ${m[s]||''}">${statusLabel(s)}</span>`;}

function esc(s){return String(s).replace(/[&<>"']/g,function(m){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];});}

function toggleSub(btn){
  const sub=btn.nextElementSibling;
  if(sub&&sub.classList.contains('s-sub')){
    sub.classList.toggle('open');
    btn.querySelector('.arrow')?.classList.toggle('rotate');
  }
}
function unsub(el){
  const sub=el.closest('.s-sub');
  if(sub)sub.classList.remove('open');
  toggleSidebar(false);
}
function toggleSidebar(show){
  const s=document.getElementById('sidebar');
  const o=document.getElementById('sidebar-overlay');
  if(show===undefined)show=!s.classList.contains('open');
  s.classList.toggle('open',show);
  s.classList.toggle('close',!show);
  if(o)o.classList.toggle('show',show);
}

function initSidebar(){
  const s=document.getElementById('sidebar');
  if(window.innerWidth>1024){
    s.classList.add('open');
    s.classList.remove('close');
  } else {
    s.classList.remove('open');
    s.classList.add('close');
  }
}

function showToast(msg,type='success'){
  const t=$('#toast');t.textContent=msg;t.className='show '+type;
  clearTimeout(t._timeout);t._timeout=setTimeout(()=>t.classList.remove('show'),3000);
}

function confirmDialog(msg,cb){
  const ov=document.createElement('div');ov.className='modal-overlay open';
  ov.innerHTML='<div class="confirm-box"><h3></h3><div class="btn-group"><button class="btn btn-outline" id="confirm-no">Cancelar</button><button class="btn btn-danger" id="confirm-yes">Eliminar</button></div></div>';
  ov.querySelector('h3').textContent=msg;
  document.body.appendChild(ov);
  $('#confirm-yes',ov).onclick=()=>{ov.remove();cb(true);};
  $('#confirm-no',ov).onclick=()=>{ov.remove();cb(false);};
  ov.onclick=e=>{if(e.target===ov){ov.remove();cb(false);}};
}

function openModal(title,html,onOpen){
  const ov=document.createElement('div');ov.className='modal-overlay open';ov.id='active-modal';
  ov.innerHTML=`<div class="modal"><div class="modal-handle"></div><div class="modal-title">${title}</div><div class="modal-body">${html}</div></div>`;
  document.body.appendChild(ov);
  ov.onclick=e=>{if(e.target===ov)closeModal();};
  if(onOpen)onOpen(ov);
}
function closeModal(){const m=$('#active-modal');if(m)m.remove();}

// ===================== NAVIGATION =====================
const VIEW_TITLES={dashboard:'Panel',empresa:'Empresa',clientes:'Clientes',vehiculos:'Vehículos',ordenes:'Órdenes',
  almacen:'Almacén',citas:'Citas',facturacion:'Facturación',contabilidad:'Contabilidad',empleados:'Empleados',
  prl:'PRL',ambiente:'Medio Ambiente',maquinaria:'Maquinaria',instalaciones:'Instalaciones',
  admin:'Administración',profile:'Mi Perfil',
  datos:'Protección Datos',checklist:'Checklist Legal',inspector:'Inspector Virtual',
  alertas:'Alertas',documentos:'Documentos',documentacion:'Documentación',config:'Configuración'};

function navigate(view){
  if (!Auth.hasAccess(view)) {
    // Fallback to first allowed view
    const allowed = PERMISOS[Auth.user?.rol] || [];
    if (allowed.length) view = allowed[0];
    else return;
  }
  state.view=view;
  $('#app-header h1').textContent=VIEW_TITLES[view]||'Taller ERP';
  document.getElementById('back-btn').classList.remove('visible');
  state.detailStack=[];
  qsa('.view').forEach(v=>v.classList.remove('active'));
  const target=$(view==='dashboard'?'#view-dashboard':`#view-${view}`);
  if(target)target.classList.add('active');
  qsa('.nav-item').forEach(n=>n.classList.remove('active'));
  // Bottom nav active state
  $$('.bnav-btn').forEach(b=>b.classList.remove('active'));
  const bnavBtn=document.querySelector(`.bnav-btn[data-view="${view}"]`);
  if(bnavBtn)bnavBtn.classList.add('active');
  renderView(view);
}

function pushDetail(viewId,renderFn){
  state.detailStack.push({view:state.view,render:renderFn});
  qsa('.view').forEach(v=>v.classList.remove('active'));
  const target=$(viewId.startsWith('view-')?`#${viewId}`:`#view-${viewId}`);
  if(target)target.classList.add('active');
  document.getElementById('back-btn').classList.add('visible');
}
function popDetail(){
  const prev=state.detailStack.pop();
  if(prev){qsa('.view').forEach(v=>v.classList.remove('active'));
    const target=$('#view-'+prev.view);if(target)target.classList.add('active');
    if(prev.render)prev.render();}
  if(state.detailStack.length===0)document.getElementById('back-btn').classList.remove('visible');
}

function renderDocumentacion(){
  const c = document.getElementById('view-documentacion');
  c.innerHTML = `<div class="card"><div class="card-title">Documentación Legal</div>
    <p class="text-sm" style="color:var(--text2);line-height:1.6">Accede a la documentación completa de obligado cumplimiento para talleres mecánicos.</p></div>
    <div class="stats"><div class="stat-card blue"><div class="icon">${Icons.file}</div><div class="value">${Object.keys(LEY).length}</div><div class="label">Normativas</div></div>
    <div class="stat-card green"><div class="icon">${Icons.gavel}</div><div class="value">${COMPLIANCE.items.filter(i=>i.check()).length}/${COMPLIANCE.items.length}</div><div class="label">Cumplidas</div></div></div>
    <div class="section-title">NORMATIVA APLICABLE</div>
    ${Object.entries(LEY).map(([k,v])=>`<div class="list-item" onclick="window.open('${v.boe||'#'}','_blank')">
      <div class="avatar" style="background:var(--primary-light);color:var(--primary)">${Icons.gavel}</div>
      <div class="info"><div class="name">${v.nombre}</div><div class="detail">${v.desc||v.tipo||''} · ${v.tipo||''}</div></div>
      <div class="right"><div class="value" style="font-size:11px;color:var(--text3)">BOE →</div></div>
    </div>`).join('')}`;
}

// ===================== RENDER ENGINE =====================
function renderView(view){
  switch(view){
    case'admin':renderAdmin();break;
    case'profile':renderProfile();break;
    case'dashboard':renderDashboard();break;
    case'empresa':renderEmpresa();break;
    case'clientes':renderClientes();break;
    case'vehiculos':renderVehiculos();break;
    case'ordenes':renderOrdenes();break;
    case'almacen':renderAlmacen();break;
    case'citas':renderCitas();break;
    case'facturacion':renderFacturacion();break;
    case'contabilidad':renderContabilidad();break;
    case'empleados':renderEmpleados();break;
    case'prl':renderPRL();break;
    case'ambiente':renderAmbiente();break;
    case'maquinaria':renderMaquinaria();break;
    case'instalaciones':renderInstalaciones();break;
    case'datos':renderProteccionDatos();break;
    case'checklist':renderChecklist();break;
    case'inspector':renderInspector();break;
    case'alertas':renderAlertas();break;
    case'documentos':renderDocumentos();break;
    case'documentacion':renderDocumentacion();break;
    case'config':renderConfig();break;
  }
}

// ===================== ADMINISTRACIÓN =====================
function renderAdmin(){
  const c = document.getElementById('view-admin');
  const emps = Store._data.empleados;
  const activos = emps.filter(e => !e.finContrato || e.finContrato > today());
  const bajas = emps.filter(e => e.finContrato && e.finContrato <= today());
  c.innerHTML = `
    <div class="section-title">EMPLEADOS ACTIVOS (${activos.length})</div>
    ${activos.length === 0 ? '<div class="card" style="text-align:center;padding:16px;color:var(--text3)">Sin empleados activos</div>' :
      activos.map(e => `<div class="list-item">
        <div class="avatar" style="background:var(--success-light);color:var(--success)">${e.nombre.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase()||'?'}</div>
        <div class="info"><div class="name">${e.nombre}</div><div class="detail">${e.puesto||''} · ${formatCurrency(e.salario||0)}/año · DNI: ${e.dni||'-'}</div></div>
        <div class="right">
          <button class="btn btn-danger btn-xs" onclick="bajaEmpleado(${e.id},'${escHtml(e.nombre)}')" style="font-size:11px;padding:4px 8px">Baja</button>
        </div>
      </div>`).join('')}
    <button class="btn btn-primary btn-block" onclick="altaEmpleado()" style="margin-top:8px">${Icons.add} Dar de alta nuevo empleado</button>
    ${bajas.length > 0 ? `
    <div class="section-title" style="margin-top:16px">EMPLEADOS DE BAJA (${bajas.length})</div>
    ${bajas.map(e => `<div class="list-item" style="opacity:.5">
      <div class="avatar" style="background:#e2e8f0;color:#94a3b8">${e.nombre.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase()||'?'}</div>
      <div class="info"><div class="name">${e.nombre} <span style="color:#dc2626;font-size:11px">(Baja ${formatDate(e.finContrato)})</span></div><div class="detail">${e.puesto||''}</div></div>
    </div>`).join('')}
    ` : ''}
  `;
}

function altaEmpleado(){
  openModal('Dar de alta empleado', `
    <div class="form-group"><label class="form-label">Nombre completo *</label><input class="form-input" id="adm-nombre"></div>
    <div class="form-row"><div class="form-group"><label class="form-label">DNI</label><input class="form-input" id="adm-dni"></div>
    <div class="form-group"><label class="form-label">Teléfono</label><input class="form-input" id="adm-tlf"></div></div>
    <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="adm-email" type="email"></div>
    <div class="form-group"><label class="form-label">Puesto</label><select class="form-input" id="adm-puesto">
      ${['Oficial 1ª','Oficial 2ª','Ayudante','Aprendiz','Administrativo','Gerente'].map(p => `<option>${p}</option>`).join('')}</select></div>
    <div class="form-row"><div class="form-group"><label class="form-label">Salario bruto anual</label><input class="form-input" id="adm-salario" type="number" value="0"></div>
    <div class="form-group"><label class="form-label">Fecha inicio</label><input class="form-input" id="adm-inicio" type="date" value="${today()}"></div></div>
    <div class="form-row"><div class="form-group"><label class="form-label">Alta Seguridad Social</label><input class="form-input" id="adm-altaSS" type="date" value="${today()}"></div>
    <div class="form-group"><label class="form-label">Reconocimiento médico</label><input class="form-input" id="adm-recono" type="date"></div></div>
    <div class="card" style="padding:8px 12px;font-size:13px;background:#f0f2f5;margin-bottom:8px">
      <label class="flex items-center gap-8" style="cursor:pointer"><input type="checkbox" id="adm-sscb" checked> Alta en Seguridad Social</label>
      <label class="flex items-center gap-8" style="cursor:pointer;margin-top:4px"><input type="checkbox" id="adm-contcb" checked> Contrato escrito firmado</label>
    </div>
    <div class="form-group"><label class="form-label">Usuario para acceso al sistema</label><input class="form-input" id="adm-user" placeholder="Dejar vacío = nombre sin espacios"></div>
    <div class="form-group"><label class="form-label">Contraseña</label><input class="form-input" id="adm-pass" type="password" placeholder="Mínimo 4 caracteres"></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="guardarAlta()">Dar de alta</button></div>`);
}

window.guardarAlta = function(){
  const nombre = document.getElementById('adm-nombre').value.trim();
  if (!nombre) { showToast('El nombre es obligatorio', 'error'); return; }
  const usuario = document.getElementById('adm-user').value.trim() || nombre.toLowerCase().replace(/\s+/g, '').slice(0, 20);
  const contrasena = document.getElementById('adm-pass').value.trim() || '1234';
  const obj = {
    nombre, usuario, contrasena,
    dni: document.getElementById('adm-dni').value.trim(),
    telefono: document.getElementById('adm-tlf').value.trim(),
    email: document.getElementById('adm-email').value.trim(),
    puesto: document.getElementById('adm-puesto').value,
    salario: parseFloat(document.getElementById('adm-salario').value) || 0,
    fechaInicio: document.getElementById('adm-inicio').value || today(),
    fechaAltaSS: document.getElementById('adm-altaSS').value || today(),
    reconocimientoMedico: document.getElementById('adm-recono').value || '',
    altaSS: document.getElementById('adm-sscb').checked,
    contratoEscrito: document.getElementById('adm-contcb').checked,
    rol: 'basico'
  };
  Store.addEmpleado(obj);
  closeModal();
  showToast(`${nombre} dado de alta`);
  renderView('admin');
};

window.bajaEmpleado = function(id, nombre){
  confirmDialog(`¿Dar de baja a ${nombre}? Se establecerá fin de contrato hoy.`, ok => {
    if (ok) { Store.bajaEmpleado(id); showToast(`${nombre} dado de baja`); renderView('admin'); }
  });
};

// ===================== DASHBOARD =====================
function renderDashboard(){
  const c=document.getElementById('view-dashboard');
  const clientes=Store.clientes,ordenes=Store._data.ordenes,facturas=Store._data.facturas;
  const gastos=Store._data.gastos;
  const monthIn=facturas.filter(f=>f.paid&&(f.createdAt||'').slice(0,7)===today().slice(0,7)).reduce((s,f)=>s+Number(f.total||0),0);
  const monthOut=gastos.filter(g=>(g.createdAt||'').slice(0,7)===today().slice(0,7)).reduce((s,g)=>s+Number(g.amount||0),0);
  const openOrders=ordenes.filter(o=>o.status!=='delivered');
  const compliance=COMPLIANCE.calcular();
  const alertas=ALERTAS.generar();
  const stockBajo=Store._data.inventario.filter(i=>i.stockActual<=i.stockMinimo).length;
  c.innerHTML=`
    <div style="margin-bottom:8px"><span style="font-size:14px;color:#6b7280">${new Date().toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</span></div>
    <div class="stats">
      <div class="stat-card blue"><div class="icon">${Icons.euro}</div><div class="value">${formatCurrency(monthIn)}</div><div class="label">Ingresos mes</div></div>
      <div class="stat-card red"><div class="icon">${Icons.euro}</div><div class="value">${formatCurrency(monthOut)}</div><div class="label">Gastos mes</div></div>
      <div class="stat-card ${(monthIn-monthOut)<0?'red':'green'}"><div class="icon">${Icons.euro}</div><div class="value">${formatCurrency(monthIn-monthOut)}</div><div class="label">Beneficio mes</div></div>
      <div class="stat-card amber"><div class="icon">${Icons.build}</div><div class="value">${openOrders.length}</div><div class="label">En taller</div></div>
    </div>
    <div class="row" style="display:flex;gap:8px;margin-bottom:16px">
      <div class="card" style="flex:1;text-align:center;padding:12px;cursor:pointer" onclick="navigate('checklist')">
        <div style="font-size:28px;font-weight:700;color:${compliance.porcentaje>80?'#059669':compliance.porcentaje>50?'#d97706':'#dc2626'}">${compliance.porcentaje}%</div>
        <div style="font-size:11px;color:#6b7280">Cumplimiento legal</div>
      </div>
      <div class="card" style="flex:1;text-align:center;padding:12px;cursor:pointer" onclick="navigate('alertas')">
        <div style="font-size:28px;font-weight:700;color:${alertas.filter(a=>a.tipo==='danger').length>0?'#dc2626':'#059669'}">${alertas.length}</div>
        <div style="font-size:11px;color:#6b7280">Alertas activas</div>
      </div>
      <div class="card" style="flex:1;text-align:center;padding:12px;cursor:pointer" onclick="navigate('almacen')">
        <div style="font-size:28px;font-weight:700;color:${stockBajo>0?'#d97706':'#059669'}">${stockBajo}</div>
        <div style="font-size:11px;color:#6b7280">Stock bajo</div>
      </div>
    </div>
    <div class="section-title">ACCIONES RÁPIDAS</div>
    <div class="quick-actions">
      <div class="quick-action" onclick="navigate('clientes')">${Icons.people}<span class="text">Clientes</span></div>
      <div class="quick-action" onclick="abrirFormOrden()">${Icons.build}<span class="text">Nueva Orden</span></div>
      <div class="quick-action" onclick="abrirFormFactura()">${Icons.receipt}<span class="text">Nueva Factura</span></div>
      <div class="quick-action" onclick="navigate('checklist')">${Icons.gavel}<span class="text">Checklist Legal</span></div>
      <div class="quick-action" onclick="navigate('inspector')">${Icons.shield}<span class="text">Inspector Virtual</span></div>
      <div class="quick-action" onclick="navigate('almacen')">${Icons.box}<span class="text">Stock</span></div>
    </div>
    ${alertas.filter(a=>a.tipo==='danger').length>0?`
    <div class="section-title">⚠️ ALERTAS CRÍTICAS</div>
    ${alertas.filter(a=>a.tipo==='danger').slice(0,4).map(a=>`
      <div class="card" style="border-left:3px solid #dc2626">
        <div style="font-size:13px;font-weight:600;color:#dc2626">${a.msg}</div>
        <div style="font-size:11px;color:#6b7280;margin-top:2px">${a.ref||''}</div>
      </div>`).join('')}
    `:''}
    <div class="section-title">ÓRDENES RECIENTES</div>
    ${ordenes.slice(-5).reverse().map(o=>{
      const cl=Store.getCliente(o.clienteId);
      return `<div class="list-item" onclick="window.verDetalleOrden(${o.id})">
        <div class="avatar" style="background:#dbeafe;color:#2563eb">${Icons.build}</div>
        <div class="info"><div class="name">${cl?cl.nombre:'Cliente'}</div><div class="detail">${(o.descripcion||'').slice(0,40)}${(o.descripcion||'').length>40?'...':''} ${statusBadge(o.status)}</div></div>
        <div class="right"><div class="value">${formatCurrency(o.total)}</div></div>
      </div>`;
    }).join('')}
  `;
}

// ===================== PERFIL =====================
function renderProfile(){
  const c = document.getElementById('view-profile');
  const u = Auth.user;

  function renderForm(data){
    window._pfData = { nombre: data.nombre, usuario: data.usuario, email: data.email, telefono: data.telefono };
    c.innerHTML = `
      <div class="card">
        <div style="text-align:center;margin-bottom:16px">
          <div style="width:64px;height:64px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;margin:0 auto 8px">${btnText(data.nombre)}</div>
          <div class="card-title" style="margin-bottom:4px">${escHtml(data.nombre)}</div>
          <div style="font-size:13px;color:var(--text2)">${data.rol === 'admin' ? 'Administrador' : 'Usuario'}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-title" style="margin-bottom:12px">Editar Perfil</div>
        <div class="form-group"><label class="form-label">Nombre</label><input class="form-input" id="pf-nombre" value="${escHtml(data.nombre)}" autocomplete="name"></div>
        <div class="form-group"><label class="form-label">Usuario</label><input class="form-input" id="pf-usuario" value="${escHtml(data.usuario)}" autocomplete="username"></div>
        <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="pf-email" type="email" value="${escHtml(data.email)}" autocomplete="email"></div>
        <div class="form-group"><label class="form-label">Teléfono</label><input class="form-input" id="pf-telefono" value="${escHtml(data.telefono)}" autocomplete="tel"></div>
        <div class="form-group"><label class="form-label">Nueva contraseña (dejar vacío para no cambiar)</label><input class="form-input" id="pf-pass" type="password" placeholder="••••••••" autocomplete="new-password"></div>
        <button class="btn btn-primary btn-block" onclick="guardarPerfil()">Guardar cambios</button>
      </div>
      <div class="card" style="text-align:center;padding:16px">
        <button class="btn btn-outline btn-block" onclick="authLogout()">Cerrar sesión</button>
      </div>`;
  }

  function btnText(nombre){
    const names = nombre.split(' ');
    return ((names[0] && names[0][0]) || '') + ((names[1] && names[1][0]) || (names[0] && names[0][1]) || '');
  }

  // Load data then render
  if (Store._apiActive) {
    c.innerHTML = '<div class="card" style="text-align:center;padding:24px;color:var(--text3)">Cargando...</div>';
    Api.getPerfil().then(d => {
      renderForm({ nombre: d.nombre, usuario: d.usuario, email: d.email || '', telefono: d.telefono || '', rol: d.rol || u.rol });
    }).catch(() => {
      renderForm({ nombre: u.nombre, usuario: u.usuario, email: '', telefono: '', rol: u.rol });
    });
  } else {
    const emp = Store._data.empleados.find(e => e.usuario === u.usuario);
    const d = emp || {};
    renderForm({ nombre: d.nombre || u.nombre, usuario: d.usuario || u.usuario, email: d.email || '', telefono: d.telefono || '', rol: d.rol || u.rol });
  }
}

window.guardarPerfil = async function(){
  const nombre = document.getElementById('pf-nombre').value.trim();
  const usuario = document.getElementById('pf-usuario').value.trim();
  const email = document.getElementById('pf-email').value.trim();
  const telefono = document.getElementById('pf-telefono').value.trim();
  const pass = document.getElementById('pf-pass').value;

  if (!nombre) { showToast('El nombre es obligatorio', 'error'); return; }

  const prev = window._pfData || {};
  const payload = {};
  if (nombre !== prev.nombre) payload.nombre = nombre;
  if (usuario !== prev.usuario) payload.usuario = usuario;
  if (email !== prev.email) payload.email = email;
  if (telefono !== prev.telefono) payload.telefono = telefono;
  if (pass) payload.contrasena = pass;

  if (Object.keys(payload).length === 0) { showToast('Sin cambios que guardar'); return; }

  try {
    let result;
    if (Store._apiActive) result = await Api.updatePerfil(payload);
    Auth.user = { ...Auth.user, nombre, usuario };
    localStorage.setItem('tallerpro_auth', JSON.stringify(Auth.user));
    if (result && result.token) localStorage.setItem('tallerpro_token', result.token);
    _updateProfileBtn();
    renderSidebar();
    showToast('Perfil actualizado');
    renderProfile();
  } catch (e) {
    showToast(e.message || 'Error al guardar', 'error');
  }
};

// ===================== EMPRESA =====================
function renderEmpresa(){
  const c=document.getElementById('view-empresa');
  const e=Store._data.empresa;
  c.innerHTML=`
    <div class="card"><div class="card-title" style="margin-bottom:12px">Datos de la Empresa</div>
      <div class="form-group"><label class="form-label">Nombre del taller</label><input class="form-input" id="emp-nombre" value="${esc(e.nombre)}"></div>
      <div class="form-row"><div class="form-group"><label class="form-label">CIF/NIF</label><input class="form-input" id="emp-cif" value="${esc(e.cif)}"></div>
      <div class="form-group"><label class="form-label">Teléfono</label><input class="form-input" id="emp-tlf" value="${esc(e.telefono)}"></div></div>
      <div class="form-group"><label class="form-label">Dirección</label><input class="form-input" id="emp-dir" value="${esc(e.direccion)}"></div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="emp-email" value="${esc(e.email)}" type="email"></div>
      <button class="btn btn-primary btn-block" onclick="guardarEmpresa()">${Icons.check} Guardar</button>
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Licencias y Registros</div>
      <div class="detail-field"><div class="label">Registro Industrial Andaluz</div><input class="form-input" id="emp-regind" value="${esc(e.registroIndustrial)}" placeholder="Nº de registro" style="margin-top:4px"></div>
      <div style="margin-top:8px;font-size:12px;color:#6b7280"><strong>Referencia legal:</strong> Decreto 59/2005 (Andalucía)</div>
      <div style="margin-top:12px"><label class="flex items-center gap-8" style="cursor:pointer"><input type="checkbox" ${e.hojaReclamaciones?'checked':''} id="emp-reclamos" onchange="Store._data.empresa.hojaReclamaciones=this.checked;Store.save()"> <span style="font-size:14px">Hoja de reclamaciones disponible</span></label></div>
      <div style="margin-top:8px"><label class="flex items-center gap-8" style="cursor:pointer"><input type="checkbox" ${e.carteleriaInstalada?'checked':''} id="emp-carteles" onchange="Store._data.empresa.carteleriaInstalada=this.checked;Store.save()"> <span style="font-size:14px">Cartelería obligatoria instalada</span></label></div>
      <div style="margin-top:8px"><label class="flex items-center gap-8" style="cursor:pointer"><input type="checkbox" ${e.senalizacionOk?'checked':''} id="emp-senaliza" onchange="Store._data.empresa.senalizacionOk=this.checked;Store.save()"> <span style="font-size:14px">Señalización de seguridad completa</span></label></div>
      <div style="margin-top:8px"><label class="flex items-center gap-8" style="cursor:pointer"><input type="checkbox" ${e.alumbradoEmergenciaOk?'checked':''} id="emp-alumbrado" onchange="Store._data.empresa.alumbradoEmergenciaOk=this.checked;Store.save()"> <span style="font-size:14px">Alumbrado de emergencia operativo</span></label></div>
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Seguros</div>
      ${e.seguros.length===0?'<div style="font-size:13px;color:#6b7280;margin-bottom:8px">No hay seguros registrados</div>':
        e.seguros.map((s,i)=>`<div class="list-item" style="cursor:default"><div class="info"><div class="name">${esc(s.tipo).toUpperCase()}</div><div class="detail">Vence: ${formatDate(s.fin)} · ${esc(s.compania)}</div></div><div class="right"><button class="btn btn-sm btn-danger" onclick="eliminarSeguro(${i})">${Icons.delete}</button></div></div>`).join('')}
      <button class="btn btn-outline btn-block btn-sm" onclick="abrirFormSeguro()" style="margin-top:8px">${Icons.add} Añadir seguro</button>
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Certificados y Licencias</div>
      ${e.licencias.length===0?'<div style="font-size:13px;color:#6b7280;margin-bottom:8px">Sin licencias registradas</div>':
        e.licencias.map((l,i)=>`<div class="list-item" style="cursor:default"><div class="info"><div class="name">${esc(l.tipo)}</div><div class="detail">${l.fechaConcesion?'Concedida: '+formatDate(l.fechaConcesion):''}${l.fechaVencimiento?' · Vence: '+formatDate(l.fechaVencimiento):''}</div></div><div class="right"><button class="btn btn-sm btn-danger" onclick="eliminarLicencia(${i})">${Icons.delete}</button></div></div>`).join('')}
      <button class="btn btn-outline btn-block btn-sm" onclick="abrirFormLicencia()" style="margin-top:8px">${Icons.add} Añadir licencia</button>
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Cuentas Bancarias</div>
      ${e.banco.length===0?'<div style="font-size:13px;color:#6b7280">Sin cuentas registradas</div>':e.banco.map((b,i)=>`<div class="list-item" style="cursor:default"><div class="info"><div class="name">${b.entidad||''} ${b.iban?'· '+b.iban:''}</div></div><div class="right"><button class="btn btn-sm btn-danger" onclick="eliminarBanco(${i})">${Icons.delete}</button></div></div>`).join('')}
      <button class="btn btn-outline btn-block btn-sm" onclick="abrirFormBanco()" style="margin-top:8px">${Icons.add} Añadir cuenta</button>
    </div>
  `;
}
function guardarEmpresa(){
  const e=Store._data.empresa;
  const campos=['nombre','cif','telefono','direccion','email','registroIndustrial'];
  const ids=['emp-nombre','emp-cif','emp-tlf','emp-dir','emp-email','emp-regind'];
  campos.forEach((c,i)=>{const v=$('#'+ids[i]);if(v)e[c]=v.value.trim();});
  e.iva=e.iva||21;e.irpf=e.irpf||15;
  Store.save();
  if(Store._apiActive)Api.updateEmpresa(e).catch(()=>{});
  showToast('Datos guardados');
}
function abrirFormSeguro(){
  openModal('Nuevo Seguro',`
    <div class="form-group"><label class="form-label">Tipo</label><select class="form-input" id="seg-tipo"><option>rc</option><option>local</option><option>accidentes</option><option>defensa jurídica</option><option>otro</option></select></div>
    <div class="form-group"><label class="form-label">Compañía</label><input class="form-input" id="seg-compania"></div>
    <div class="form-group"><label class="form-label">Fecha de vencimiento</label><input class="form-input" id="seg-fin" type="date"></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarSeguro()">Guardar</button></div>`);
}
function guardarSeguro(){
  Store._data.empresa.seguros.push({tipo:$('#seg-tipo').value,compania:$('#seg-compania').value.trim(),fin:$('#seg-fin').value});
  Store.save();closeModal();renderView('empresa');showToast('Seguro añadido');
}
function eliminarSeguro(i){Store._data.empresa.seguros.splice(i,1);Store.save();renderView('empresa');showToast('Seguro eliminado');}
function abrirFormLicencia(){
  openModal('Nueva Licencia',`
    <div class="form-group"><label class="form-label">Tipo</label><select class="form-input" id="lic-tipo"><option>apertura</option><option>actividad</option><option>obras</option><option>ambiental</option><option>otro</option></select></div>
    <div class="form-group"><label class="form-label">Fecha de concesión</label><input class="form-input" id="lic-fecha" type="date"></div>
    <div class="form-group"><label class="form-label">Fecha de vencimiento (opcional)</label><input class="form-input" id="lic-venc" type="date"></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarLicencia()">Guardar</button></div>`);
}
function guardarLicencia(){
  Store._data.empresa.licencias.push({tipo:$('#lic-tipo').value,fechaConcesion:$('#lic-fecha').value,fechaVencimiento:$('#lic-venc').value});
  Store.save();closeModal();renderView('empresa');showToast('Licencia añadida');
}
function eliminarLicencia(i){Store._data.empresa.licencias.splice(i,1);Store.save();renderView('empresa');showToast('Licencia eliminada');}
function abrirFormBanco(){
  openModal('Nueva Cuenta Bancaria',`
    <div class="form-group"><label class="form-label">Entidad</label><input class="form-input" id="banco-entidad"></div>
    <div class="form-group"><label class="form-label">IBAN</label><input class="form-input" id="banco-iban" placeholder="ES00 0000 0000 0000 0000 0000"></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarBanco()">Guardar</button></div>`);
}
function guardarBanco(){Store._data.empresa.banco.push({entidad:$('#banco-entidad').value.trim(),iban:$('#banco-iban').value.trim()});Store.save();closeModal();renderView('empresa');showToast('Cuenta añadida');}
function eliminarBanco(i){Store._data.empresa.banco.splice(i,1);Store.save();renderView('empresa');showToast('Cuenta eliminada');}

// ===================== CLIENTES =====================
function renderClientes(q){
  const query=(q||state.searchQuery||'').toLowerCase();
  const lista=Store.clientes.filter(c=>!query||c.nombre.toLowerCase().includes(query)||(c.telefono||'').includes(query)||(c.dni||'').toLowerCase().includes(query));
  const c=document.getElementById('view-clientes');
  c.innerHTML=`
    <div class="search-box"><span class="icon">${Icons.search}</span><input type="text" placeholder="Buscar cliente..." id="cli-search" value="${state.searchQuery||''}"></div>
    <div class="list">${lista.length===0?'<div class="list-empty">Sin resultados</div>':
      lista.map(cl=>{
        const ini=cl.nombre.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
        return `<div class="list-item" onclick="verCliente(${cl.id})">
          <div class="avatar">${ini||'?'}</div><div class="info"><div class="name">${cl.nombre}</div><div class="detail">${cl.telefono||''} · ${Store._data.vehiculos.filter(v=>v.clienteId===cl.id).length} vehículo(s)</div></div>
          <div class="right"><div class="value">→</div></div>
        </div>`;
      }).join('')}
    </div>
    <button class="btn btn-primary btn-block" onclick="abrirFormCliente()" style="margin-top:8px">${Icons.add} Nuevo Cliente</button>`;
  const sr=$('#cli-search');
  if(sr){sr.value=state.searchQuery||'';sr.oninput=()=>{clearTimeout(window._cs);window._cs=setTimeout(()=>{state.searchQuery=sr.value;renderClientes(sr.value);},250);};}
}
function abrirFormCliente(d){
  const isEdit=!!d;const t=isEdit?'Editar Cliente':'Nuevo Cliente';
  const v=d||{nombre:'',telefono:'',email:'',direccion:'',dni:'',notas:''};
  openModal(t,`
    <div class="form-group"><label class="form-label">Nombre *</label><input class="form-input" id="cf-nombre" value="${v.nombre||''}"></div>
    <div class="form-row"><div class="form-group"><label class="form-label">Teléfono</label><input class="form-input" id="cf-tlf" value="${v.telefono||''}" type="tel"></div>
    <div class="form-group"><label class="form-label">DNI/NIF</label><input class="form-input" id="cf-dni" value="${v.dni||''}"></div></div>
    <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="cf-email" value="${v.email||''}" type="email"></div>
    <div class="form-group"><label class="form-label">Dirección</label><input class="form-input" id="cf-dir" value="${v.direccion||''}"></div>
    <div class="form-group"><label class="form-label">Notas</label><textarea class="form-input" id="cf-notas" rows="2">${v.notas||''}</textarea></div>
    ${v.id?`<div class="card" style="padding:8px 12px;font-size:12px;background:#f0f2f5">
      <label class="flex items-center gap-8" style="cursor:pointer"><input type="checkbox" ${v.consentimientoRgpd?'checked':''} id="cf-rgpd"> Consentimiento RGPD firmado</label>
      <div style="color:#6b7280;margin-top:4px">Ref: ${LEY.rgpd.nombre} Art.7</div>
    </div>`:''}
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="${isEdit?'editarCliente('+v.id+')':'guardarCliente()'}">${isEdit?'Guardar':'Añadir'}</button></div>`);
}
function guardarCliente(){
  const datos={nombre:$('#cf-nombre').value.trim(),telefono:$('#cf-tlf').value.trim(),email:$('#cf-email').value.trim(),direccion:$('#cf-dir').value.trim(),dni:$('#cf-dni').value.trim(),notas:$('#cf-notas').value.trim()};
  if(!Store.addCliente(datos))return;
  closeModal();showToast('Cliente añadido');renderView('clientes');
}
function editarCliente(id){
  const datos={nombre:$('#cf-nombre').value.trim(),telefono:$('#cf-tlf').value.trim(),email:$('#cf-email').value.trim(),direccion:$('#cf-dir').value.trim(),dni:$('#cf-dni').value.trim(),notas:$('#cf-notas').value.trim(),
    consentimientoRgpd:$('#cf-rgpd')?$('#cf-rgpd').checked:undefined};
  Store.updCliente(id,datos);
  closeModal();showToast('Cliente actualizado');renderView('clientes');
}
function verCliente(id){
  const cl=Store.getCliente(id);if(!cl)return;
  const vh=Store._data.vehiculos.filter(v=>v.clienteId===id);
  const od=Store._data.ordenes.filter(o=>o.clienteId===id);
  const c=document.getElementById('view-clientes');
  pushDetail('clientes',()=>renderClientes());
  c.innerHTML=`
    <div class="detail-header"><h2>${cl.nombre}</h2><div class="meta">${cl.dni||''}${cl.dni&&cl.telefono?' · ':''}${cl.telefono||''}</div></div>
    <div class="info-grid" style="margin-bottom:16px">
      ${cl.email?`<div class="info-item"><div class="detail-field"><div class="label">Email</div><div class="value">${cl.email}</div></div></div>`:''}
      ${cl.direccion?`<div class="info-item"><div class="detail-field"><div class="label">Dirección</div><div class="value">${cl.direccion}</div></div></div>`:''}
      <div class="info-item"><div class="detail-field"><div class="label">Vehículos</div><div class="value">${vh.length}</div></div></div>
      <div class="info-item"><div class="detail-field"><div class="label">Órdenes</div><div class="value">${od.length}</div></div></div>
    </div>
    ${cl.consentimientoRgpd?`<div class="alert alert-success" style="margin-bottom:12px">✓ Consentimiento RGPD firmado</div>`:`<div class="alert alert-warning" style="margin-bottom:12px">⚠ Consentimiento RGPD pendiente</div>`}
    <div class="btn-group" style="margin-bottom:12px">
      <button class="btn btn-primary btn-sm" onclick="abrirFormCliente(Store.getCliente(${id}))">${Icons.edit} Editar</button>
      <button class="btn btn-outline btn-sm" onclick="abrirFormVehiculo(${id})">${Icons.car} Añadir Vehículo</button>
      <button class="btn btn-danger btn-sm" onclick="confirmDialog('¿Eliminar cliente?',ok=>{if(ok){Store.delCliente(${id});showToast('Eliminado');popDetail();}})">${Icons.delete}</button>
    </div>
    <div class="section-title">VEHÍCULOS</div>
    ${vh.length===0?'<div class="card" style="text-align:center;padding:12px;font-size:13px;color:#6b7280">Sin vehículos</div>':
      vh.map(v=>`<div class="list-item" onclick="verVehiculo(${v.id})">
        <div class="avatar" style="background:#fef3c7;color:#d97706">${Icons.car}</div>
        <div class="info"><div class="name">${v.marca||''} ${v.modelo||''} <span style="font-weight:400">(${v.matricula||'?'})</span></div><div class="detail">${v.ano||''}${v.ano&&v.km?' · ':''}${v.km?v.km+' km':''}</div></div>
        <div class="right"><div class="value">→</div></div>
      </div>`).join('')}
    <div class="section-title" style="margin-top:16px">ÚLTIMAS ÓRDENES</div>
    ${od.slice(-5).reverse().map(o=>`<div class="list-item" onclick="window.verDetalleOrden(${o.id})">
      <div class="avatar" style="background:#dbeafe;color:#2563eb">${Icons.build}</div>
      <div class="info"><div class="name">${(o.descripcion||'').slice(0,35)}${(o.descripcion||'').length>35?'...':''}</div><div class="detail">${formatDate(o.createdAt)} ${statusBadge(o.status)}</div></div>
      <div class="right"><div class="value">${formatCurrency(o.total)}</div></div>
    </div>`).join('')}`;
}

// ===================== VEHÍCULOS =====================
function renderVehiculos(){
  const c=document.getElementById('view-vehiculos');
  const vh=Store._data.vehiculos;
  c.innerHTML=`
    <div class="chips">${['all','itv'].map(f=>`<button class="chip ${f==='all'?'active':''}">${f==='all'?'Todos':'ITV próxima'}</button>`).join('')}</div>
    ${vh.length===0?'<div class="empty-state"><p>${Icons.car}</p><p>Sin vehículos registrados</p></div>':
      vh.sort((a,b)=>(b.ano||'')-(a.ano||'')).map(v=>{
        const cl=Store.getCliente(v.clienteId);
        return `<div class="list-item" onclick="verVehiculo(${v.id})">
          <div class="avatar" style="background:#fef3c7;color:#d97706">${Icons.car}</div>
          <div class="info"><div class="name">${v.marca||''} ${v.modelo||''}</div><div class="detail">${v.matricula||'?'} · ${cl?cl.nombre:''}${v.itvProxima?' · ITV: '+formatDate(v.itvProxima):''}</div></div>
          <div class="right"><div class="value">→</div></div>
        </div>`;
      }).join('')}
    <button class="btn btn-primary btn-block" onclick="abrirFormVehiculo(null)" style="margin-top:8px">${Icons.add} Nuevo Vehículo</button>`;
}
function abrirFormVehiculo(clienteId,vehiculoId){
  const v=vehiculoId?Store._data.vehiculos.find(x=>x.id===vehiculoId):null;
  const isEdit=!!v;const t=isEdit?'Editar Vehículo':'Nuevo Vehículo';
  const d=v||{matricula:'',marca:'',modelo:'',ano:'',km:'',vin:'',itvProxima:'',clienteId:clienteId||''};
  openModal(t,`
    <div class="form-group"><label class="form-label">Cliente</label>
      <select class="form-input" id="vf-cliente"><option value="">Seleccionar...</option>
        ${Store.clientes.map(cl=>`<option value="${cl.id}" ${d.clienteId==cl.id?'selected':''}>${cl.nombre}</option>`).join('')}
      </select></div>
    <div class="form-group"><label class="form-label">Matrícula</label><input class="form-input" id="vf-matricula" value="${d.matricula||''}" placeholder="1234ABC" style="text-transform:uppercase"></div>
    <div class="form-row"><div class="form-group"><label class="form-label">Marca *</label><input class="form-input" id="vf-marca" value="${d.marca||''}" placeholder="Renault"></div>
    <div class="form-group"><label class="form-label">Modelo</label><input class="form-input" id="vf-modelo" value="${d.modelo||''}"></div></div>
    <div class="form-row"><div class="form-group"><label class="form-label">Año</label><input class="form-input" id="vf-ano" value="${d.ano||''}" type="number"></div>
    <div class="form-group"><label class="form-label">KM</label><input class="form-input" id="vf-km" value="${d.km||''}" type="number"></div></div>
    <div class="form-group"><label class="form-label">Bastidor (VIN)</label><input class="form-input" id="vf-vin" value="${d.vin||''}"></div>
    <div class="form-group"><label class="form-label">Próxima ITV</label><input class="form-input" id="vf-itv" value="${d.itvProxima||''}" type="date"></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="${isEdit?'guardarEditarVehiculo('+v.id+')':'guardarVehiculo('+(clienteId||'null')+')'}">${isEdit?'Guardar':'Añadir'}</button></div>`);
}
function guardarVehiculo(clienteId){
  const cl=parseInt($('#vf-cliente').value);const ma=$('#vf-marca').value.trim();
  if(!cl)return showToast('Selecciona un cliente','error');if(!ma)return showToast('La marca es obligatoria','error');
  Store.addVehiculo({clienteId:cl,marca:ma,modelo:$('#vf-modelo').value.trim(),matricula:$('#vf-matricula').value.trim().toUpperCase(),ano:$('#vf-ano').value,km:$('#vf-km').value,vin:$('#vf-vin').value.trim(),itvProxima:$('#vf-itv').value});
  closeModal();showToast('Vehículo añadido');renderView('vehiculos');
}
function guardarEditarVehiculo(id){
  const cl=parseInt($('#vf-cliente').value);const ma=$('#vf-marca').value.trim();
  if(!cl)return showToast('Selecciona un cliente','error');if(!ma)return showToast('La marca es obligatoria','error');
  Store.updVehiculo(id,{clienteId:cl,marca:ma,modelo:$('#vf-modelo').value.trim(),matricula:$('#vf-matricula').value.trim().toUpperCase(),ano:$('#vf-ano').value,km:$('#vf-km').value,vin:$('#vf-vin').value.trim(),itvProxima:$('#vf-itv').value});
  closeModal();showToast('Vehículo actualizado');renderView('vehiculos');
}
function verVehiculo(id){
  const v=Store._data.vehiculos.find(x=>x.id===id);if(!v)return;
  const cl=Store.getCliente(v.clienteId);
  const c=document.getElementById('view-vehiculos');
  pushDetail('vehiculos',()=>renderVehiculos());
  c.innerHTML=`
    <div class="detail-header"><h2>${v.marca||''} ${v.modelo||''}</h2><div class="meta">${v.matricula||'Sin matrícula'}${v.matricula&&v.ano?' · ':''}${v.ano||''}</div></div>
    <div class="info-grid" style="margin-bottom:16px">
      <div class="info-item"><div class="detail-field"><div class="label">Matrícula</div><div class="value">${v.matricula||'-'}</div></div></div>
      <div class="info-item"><div class="detail-field"><div class="label">Año</div><div class="value">${v.ano||'-'}</div></div></div>
      <div class="info-item"><div class="detail-field"><div class="label">Kilómetros</div><div class="value">${v.km?v.km+' km':'-'}</div></div></div>
      <div class="info-item"><div class="detail-field"><div class="label">Bastidor (VIN)</div><div class="value">${v.vin||'-'}</div></div></div>
    </div>
    ${v.itvProxima?`<div class="card"><div class="detail-field"><div class="label">Próxima ITV</div><div class="value" style="font-size:18px;font-weight:700;color:${new Date(v.itvProxima)<new Date()?'#dc2626':'#059669'}">${formatDate(v.itvProxima)} ${new Date(v.itvProxima)<new Date()?'(VENCIDA)':''}</div></div></div>`:''}
    <div class="card"><div class="detail-field"><div class="label">Propietario</div><div class="value">${cl?cl.nombre+' · '+cl.telefono:'- - -'}</div></div></div>
    <div class="btn-group"><button class="btn btn-outline btn-sm" onclick="abrirFormVehiculo(null,${id})">${Icons.edit} Editar</button>
    <button class="btn btn-danger btn-sm" onclick="confirmDialog('¿Eliminar vehículo?',ok=>{if(ok){Store.delVehiculo(${id});showToast('Eliminado');popDetail();}})">${Icons.delete}</button></div>`;
}

// ===================== ÓRDENES =====================
function renderOrdenes(filtro){
  const f=filtro||state.orderFilter||'all';state.orderFilter=f;
  let lista=Store._data.ordenes.sort((a,b)=>new Date(b.createdAt||0)-new Date(a.createdAt||0));
  if(f!=='all')lista=lista.filter(o=>o.status===f);
  const c=document.getElementById('view-ordenes');
  c.innerHTML=`
    <div class="chips">${['all','pending','progress','completed','delivered'].map(s=>`<button class="chip ${f===s?'active':''}" onclick="renderOrdenes('${s}')">${s==='all'?'Todas':statusLabel(s)}</button>`).join('')}</div>
    ${lista.length===0?'<div class="empty-state"><p>${Icons.build}</p><p>Sin órdenes</p></div>':
      lista.map(o=>{const cl=Store.getCliente(o.clienteId);
        return `<div class="card order-card" onclick="window.verDetalleOrden(${o.id})">
          <div class="order-top"><div><div class="order-client">${cl?cl.nombre:'#'+o.clienteId}</div>
          <div class="order-vehicle">${o.vehiculoDesc||''} · ${formatDate(o.createdAt)}</div></div><div>${statusBadge(o.status)}</div></div>
          <div style="font-size:13px;color:#6b7280;margin:4px 0">${(o.descripcion||'').slice(0,60)}${(o.descripcion||'').length>60?'...':''}</div>
          <div class="order-status"><span style="font-weight:600">${formatCurrency(o.total)}</span>
            <div class="actions">${o.status==='pending'?`<button onclick="event.stopPropagation();cambiarEstadoOrden(${o.id},'progress')">Iniciar</button>`:''}
            ${o.status==='progress'?`<button onclick="event.stopPropagation();cambiarEstadoOrden(${o.id},'completed')">Completar</button>`:''}
            ${o.status==='completed'?`<button onclick="event.stopPropagation();cambiarEstadoOrden(${o.id},'delivered')">Entregar</button>`:''}
            ${o.status==='pending'?`<button style="color:#dc2626" onclick="event.stopPropagation();confirmDialog('¿Eliminar?',ok=>{if(ok){Store.delOrden(${o.id});renderOrdenes();}})">Eliminar</button>`:''}</div></div>
        </div>`;
      }).join('')}
    <button class="btn btn-primary btn-block" onclick="abrirFormOrden()" style="margin-top:8px">${Icons.add} Nueva Orden</button>`;
}
function cambiarEstadoOrden(id,st){Store.updOrden(id,{status:st});showToast('→ '+statusLabel(st));renderView('ordenes');}
function abrirFormOrden(d){
  const isEdit=!!d;const t=isEdit?'Editar Orden':'Nueva Orden de Trabajo';
  const v=d||{clienteId:'',vehiculoDesc:'',descripcion:'',total:0,notas:''};
  openModal(t,`
    <div class="form-group"><label class="form-label">Cliente *</label><select class="form-input" id="of-cliente"><option value="">Seleccionar...</option>
      ${Store.clientes.map(c=>`<option value="${c.id}" ${v.clienteId==c.id?'selected':''}>${c.nombre}</option>`).join('')}</select></div>
    <div class="form-group"><label class="form-label">Vehículo</label><input class="form-input" id="of-vehiculo" value="${v.vehiculoDesc||''}"></div>
    <div class="form-group"><label class="form-label">Descripción *</label><textarea class="form-input" id="of-desc" rows="3">${v.descripcion||''}</textarea></div>
    <div class="form-group"><label class="form-label">Total (€)</label><input class="form-input" id="of-total" value="${v.total||''}" type="number" step="0.01"></div>
    <div class="form-group"><label class="form-label">Notas internas</label><textarea class="form-input" id="of-notas" rows="2">${v.notas||''}</textarea></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="${isEdit?'editarOrden('+v.id+')':'guardarOrden()'}">${isEdit?'Guardar':'Crear'}</button></div>`);
}
function guardarOrden(){
  const cl=parseInt($('#of-cliente').value);const d=$('#of-desc').value.trim();
  if(!cl)return showToast('Selecciona cliente','error');if(!d)return showToast('Describe el trabajo','error');
  Store.addOrden({clienteId:cl,vehiculoDesc:$('#of-vehiculo').value.trim(),descripcion:d,total:parseFloat($('#of-total').value)||0,notas:$('#of-notas').value.trim()});
  closeModal();showToast('Orden creada');renderView('ordenes');
}
function editarOrden(id){
  const cl=parseInt($('#of-cliente').value);const d=$('#of-desc').value.trim();
  if(!cl)return showToast('Selecciona cliente','error');if(!d)return showToast('Describe el trabajo','error');
  Store.updOrden(id,{clienteId:cl,vehiculoDesc:$('#of-vehiculo').value.trim(),descripcion:d,total:parseFloat($('#of-total').value)||0,notas:$('#of-notas').value.trim()});
  closeModal();showToast('Orden actualizada');renderView('ordenes');
}
window.verDetalleOrden=function(id,refresh){
  const o=Store._data.ordenes.find(x=>x.id===id);if(!o)return;
  const cl=Store.getCliente(o.clienteId);
  const container=$(document.getElementById('view-ordenes')||document.getElementById('view-dashboard')||document.querySelector('.view.active'));
  if(!refresh)pushDetail(state.view,()=>renderView('ordenes'));
  container.innerHTML=`
    <div class="detail-header"><h2>Orden #${o.id}</h2><div class="meta">${formatDate(o.createdAt)} ${statusBadge(o.status)}</div></div>
    <div class="card"><div class="detail-field"><div class="label">Cliente</div><div class="value">${cl?cl.nombre+' · '+cl.telefono:'#'+o.clienteId}</div></div>
      ${o.vehiculoDesc?`<div class="detail-field" style="margin-top:8px"><div class="label">Vehículo</div><div class="value">${o.vehiculoDesc}</div></div>`:''}
      ${o.descripcion?`<div class="detail-field" style="margin-top:8px"><div class="label">Trabajo realizado</div><div class="value">${o.descripcion}</div></div>`:''}
      ${o.notas?`<div class="detail-field" style="margin-top:8px"><div class="label">Notas internas</div><div class="value">${o.notas}</div></div>`:''}
      <div class="detail-field" style="margin-top:12px"><div class="label">Total</div><div class="value" style="font-size:20px;font-weight:700;color:#2563eb">${formatCurrency(o.total)}</div></div>
    </div>
    <div class="btn-group">
      ${o.status==='pending'?`<button class="btn btn-primary btn-sm" onclick="Store.updOrden(${id},{status:'progress'});showToast('En curso');window.verDetalleOrden(${id},true)">${Icons.build} Iniciar</button>`:''}
      ${o.status==='progress'?`<button class="btn btn-primary btn-sm" onclick="Store.updOrden(${id},{status:'completed'});showToast('Completado');window.verDetalleOrden(${id},true)">${Icons.check} Completar</button>`:''}
      ${o.status==='completed'?`<button class="btn btn-success btn-sm" onclick="Store.updOrden(${id},{status:'delivered'});showToast('Entregado');popDetail()">Entregar</button>`:''}
      ${o.status==='pending'?`<button class="btn btn-outline btn-sm" onclick="abrirFormOrden(Store._data.ordenes.find(x=>x.id===${id}))">${Icons.edit} Editar</button>`:''}
    </div>
    ${o.status==='delivered'?`<div class="alert alert-success" style="margin-top:12px">${Icons.check} Vehículo entregado al cliente</div>`:''}
    <div class="btn-group" style="margin-top:12px">
      <button class="btn btn-success btn-sm" onclick="crearFacturaDesdeOrden(${id})">${Icons.receipt} Factura</button>
    </div>`;
};
function crearFacturaDesdeOrden(oid){
  const o=Store._data.ordenes.find(x=>x.id===oid);if(!o)return;
  if(Store._data.facturas.find(f=>f.ordenId===oid))return showToast('Ya existe factura para esta orden','error');
  Store.addFactura({clienteId:o.clienteId,ordenId:oid,descripcion:o.descripcion,total:o.total||0,items:[{concepto:o.descripcion,cantidad:1,precio:o.total}]});
  showToast('Factura creada');navigate('facturacion');
}

// ===================== ALMACÉN =====================
function renderAlmacen(){
  const c=document.getElementById('view-almacen');
  const inv=Store._data.inventario;
  const bajos=inv.filter(i=>i.stockActual<=i.stockMinimo);
  c.innerHTML=`
    ${bajos.length>0?`<div class="alert alert-warning">⚠ ${bajos.length} producto(s) con stock bajo</div>`:''}
    <div class="section-title">INVENTARIO (${inv.length} productos)</div>
    <div class="search-box"><span class="icon">${Icons.search}</span><input type="text" placeholder="Buscar referencia..." id="inv-search" oninput="filterInventario(this.value)"></div>
    <div class="list" id="inv-list">${inv.length===0?'<div class="list-empty">Sin productos en inventario</div>':
      inv.map(i=>{
        const bajo=i.stockActual<=i.stockMinimo;
        return `<div class="list-item" style="cursor:default">
          <div class="avatar" style="background:${bajo?'#fee2e2;color:#dc2626':'#d1fae5;color:#059669'}">${Icons.box}</div>
          <div class="info"><div class="name">${i.nombre||'Producto'}</div><div class="detail">Ref: ${i.referencia||'-'} · Stock: ${i.stockActual||0} uds (mín: ${i.stockMinimo||0})</div></div>
          <div class="right"><button class="btn btn-sm btn-danger" onclick="confirmDialog('¿Eliminar?',ok=>{if(ok){Store.delInventario(${i.id});renderAlmacen();}})">${Icons.delete}</button></div>
        </div>`;
      }).join('')}
    </div>
    <button class="btn btn-primary btn-block" onclick="abrirFormInventario()">${Icons.add} Añadir Producto</button>`;
  window.filterInventario=function(q){
    const t=q.toLowerCase();
    document.querySelectorAll('#inv-list .list-item').forEach(el=>{
      el.style.display=el.textContent.toLowerCase().includes(t)?'flex':'none';
    });
  };
}
function abrirFormInventario(d){
  const isEdit=!!d;const t=isEdit?'Editar Producto':'Nuevo Producto';
  const v=d||{nombre:'',referencia:'',stockActual:0,stockMinimo:0,precio:0,proveedorId:''};
  openModal(t,`
    <div class="form-group"><label class="form-label">Nombre *</label><input class="form-input" id="inv-nombre" value="${v.nombre||''}"></div>
    <div class="form-row"><div class="form-group"><label class="form-label">Referencia</label><input class="form-input" id="inv-ref" value="${v.referencia||''}"></div>
    <div class="form-group"><label class="form-label">Proveedor</label>
      <select class="form-input" id="inv-prov"><option value="">Seleccionar...</option>
        ${Store._data.proveedores.map(p=>`<option value="${p.id}" ${v.proveedorId==p.id?'selected':''}>${p.nombre}</option>`).join('')}
      </select></div></div>
    <div class="form-row"><div class="form-group"><label class="form-label">Stock actual</label><input class="form-input" id="inv-stock" value="${v.stockActual||0}" type="number"></div>
    <div class="form-group"><label class="form-label">Stock mínimo</label><input class="form-input" id="inv-min" value="${v.stockMinimo||0}" type="number"></div></div>
    <div class="form-group"><label class="form-label">Precio coste (€)</label><input class="form-input" id="inv-precio" value="${v.precio||''}" type="number" step="0.01"></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="guardarInventario(${isEdit?v.id:'null'})">${isEdit?'Guardar':'Añadir'}</button></div>`);
}
function guardarInventario(id){
  const n=$('#inv-nombre').value.trim();if(!n)return showToast('Nombre obligatorio','error');
  const obj={nombre:n,referencia:$('#inv-ref').value.trim(),stockActual:parseInt($('#inv-stock').value)||0,stockMinimo:parseInt($('#inv-min').value)||0,precio:parseFloat($('#inv-precio').value)||0,proveedorId:parseInt($('#inv-prov').value)||null};
  if(id){Store.updInventario(id,obj);showToast('Actualizado');}
  else{Store.addInventario(obj);showToast('Añadido');}
  closeModal();renderView('almacen');
}

// ===================== CITAS =====================
function renderCitas(filtro){
  const c=document.getElementById('view-citas');
  const hoy=today();
  const filtroFecha=filtro||state.subTab.citas||'hoy';
  state.subTab.citas=filtroFecha;
  let citas=Store._data.citas.filter(cita=>cita.status!=='cancelada');
  if(filtroFecha==='hoy') citas=citas.filter(c=>c.fecha===hoy);
  else if(filtroFecha==='manana'){
    const manana=new Date();manana.setDate(manana.getDate()+1);
    const ms=manana.toISOString().slice(0,10);
    citas=citas.filter(c=>c.fecha===ms);
  }else if(filtroFecha==='semana'){
    const s=new Date();const e=new Date();e.setDate(e.getDate()+7);
    const ss=s.toISOString().slice(0,10);const es=e.toISOString().slice(0,10);
    citas=citas.filter(c=>c.fecha>=ss&&c.fecha<=es);
  }
  citas.sort((a,b)=>a.fecha!==b.fecha?a.fecha.localeCompare(b.fecha):(a.hora||'').localeCompare(b.hora||''));
  const statusColor={pendiente:'#f59e0b',confirmada:'#3b82f6',en_curso:'#8b5cf6',completada:'#10b981',cancelada:'#ef4444'};
  const statusLabel2={pendiente:'Pendiente',confirmada:'Confirmada',en_curso:'En curso',completada:'Completada',cancelada:'Cancelada'};
  c.innerHTML=`
    <div class="flex items-center gap-2 mb-3">
      <button class="btn btn-sm ${filtroFecha==='hoy'?'btn-primary':'btn-outline'}" onclick="renderCitas('hoy')">Hoy</button>
      <button class="btn btn-sm ${filtroFecha==='manana'?'btn-primary':'btn-outline'}" onclick="renderCitas('manana')">Mañana</button>
      <button class="btn btn-sm ${filtroFecha==='semana'?'btn-primary':'btn-outline'}" onclick="renderCitas('semana')">7 días</button>
      <button class="btn btn-sm ${filtroFecha==='todas'?'btn-primary':'btn-outline'}" onclick="renderCitas('todas')">Todas</button>
      <span style="flex:1"></span>
      <button class="btn btn-primary btn-sm" onclick="abrirFormCita()">${Icons.add} Nueva Cita</button>
    </div>
    ${citas.length===0?'<div class="empty-state"><p style="font-size:14px;margin-bottom:4px">${Icons.calendar}</p><p>No hay citas programadas</p></div>':
      citas.map(cita=>{
        const cl=Store.getCliente(cita.clienteId);
        const fechaLabel=cita.fecha===hoy?'Hoy':formatDate(cita.fecha);
        return `<div class="list-item">
          <div class="avatar" style="background:#eff6ff;color:${statusColor[cita.status]||'#6b7280'}">${Icons.calendar}</div>
          <div class="info">
            <div class="name">${cl?cl.nombre:'?'} <span style="font-size:11px;color:#94a3b8">${fechaLabel} ${cita.hora||''}</span></div>
            <div class="detail">${cita.vehiculoDesc||''}${cita.descripcion?' — '+(cita.descripcion||'').slice(0,50):''}</div>
          </div>
          <div class="right" style="text-align:right;gap:4px;display:flex;flex-direction:column;align-items:flex-end">
            <span class="badge" style="background:${statusColor[cita.status]||'#e2e8f0'}20;color:${statusColor[cita.status]||'#475569'};border:1px solid ${statusColor[cita.status]||'#e2e8f0'}40">${statusLabel2[cita.status]||cita.status}</span>
            <div class="flex gap-1 mt-1">
              <button class="btn btn-sm btn-outline" style="padding:2px 6px;font-size:10px" onclick="abrirFormCita(${cita.id})">${Icons.edit}</button>
              <button class="btn btn-sm btn-danger" style="padding:2px 6px;font-size:10px" onclick="eliminarCita(${cita.id})">${Icons.delete}</button>
            </div>
          </div>
        </div>`;
      }).join('')}
  `;
}

function abrirFormCita(id){
  const cita=id?Store.getCita(id):{clienteId:'',vehiculoDesc:'',fecha:today(),hora:'',descripcion:'',status:'pendiente'};
  const clientes=Store.clientes;
  openModal(id?'Editar Cita':'Nueva Cita',`
    <div class="form-group"><label class="form-label">Cliente</label>
      <select class="form-input" id="cita-cliente">${clientes.map(cl=>`<option value="${cl.id}" ${cita.clienteId===cl.id?'selected':''}>${cl.nombre}</option>`).join('')}</select></div>
    <div class="form-group"><label class="form-label">Vehículo</label><input class="form-input" id="cita-vehiculo" value="${cita.vehiculoDesc||''}" placeholder="Marca modelo matrícula"></div>
    <div class="form-row"><div class="form-group"><label class="form-label">Fecha</label><input class="form-input" type="date" id="cita-fecha" value="${cita.fecha||today()}"></div>
    <div class="form-group"><label class="form-label">Hora</label><input class="form-input" type="time" id="cita-hora" value="${cita.hora||''}"></div></div>
    <div class="form-group"><label class="form-label">Descripción</label><textarea class="form-input" id="cita-desc" rows="3">${cita.descripcion||''}</textarea></div>
    <div class="form-group"><label class="form-label">Estado</label>
      <select class="form-input" id="cita-status">
        <option value="pendiente" ${cita.status==='pendiente'?'selected':''}>Pendiente</option>
        <option value="confirmada" ${cita.status==='confirmada'?'selected':''}>Confirmada</option>
        <option value="en_curso" ${cita.status==='en_curso'?'selected':''}>En curso</option>
        <option value="completada" ${cita.status==='completada'?'selected':''}>Completada</option>
        <option value="cancelada" ${cita.status==='cancelada'?'selected':''}>Cancelada</option>
      </select></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="guardarCita(${id?`${id}`:'null'})">${id?'Guardar':'Añadir'}</button></div>`);
}
function guardarCita(id){
  const obj={
    clienteId:parseInt($('#cita-cliente').value),
    vehiculoDesc:$('#cita-vehiculo').value.trim(),
    fecha:$('#cita-fecha').value,
    hora:$('#cita-hora').value,
    descripcion:$('#cita-desc').value.trim(),
    status:$('#cita-status').value
  };
  if(!obj.clienteId)return showToast('Selecciona un cliente','error');
  if(!obj.fecha)return showToast('Indica la fecha','error');
  if(id){Store.updCita(id,obj);showToast('Cita actualizada');}
  else{Store.addCita(obj);showToast('Cita creada');}
  closeModal();renderCitas(state.subTab.citas||'hoy');
}
function eliminarCita(id){
  confirmDialog('¿Anular esta cita?',ok=>{
    if(!ok)return;
    Store.delCita(id);
    showToast('Cita eliminada');
    renderCitas(state.subTab.citas||'hoy');
  });
}

// ===================== FACTURACIÓN =====================
function renderFacturacion(filtro){
  const f=filtro||state.invoiceFilter||'all';state.invoiceFilter=f;
  let lista=Store._data.facturas.sort((a,b)=>new Date(b.createdAt||0)-new Date(a.createdAt||0));
  if(f==='paid')lista=lista.filter(i=>i.paid);if(f==='unpaid')lista=lista.filter(i=>!i.paid);
  const c=document.getElementById('view-facturacion');
   const pendientes=lista.filter(i=>!i.paid).reduce((s,i)=>s+Number(i.total||0),0);
  c.innerHTML=`
    ${f==='unpaid'&&pendientes>0?`<div class="alert alert-warning">Pendiente de cobro: <strong>${formatCurrency(pendientes)}</strong></div>`:''}
    <div class="chips">
      <button class="chip ${f==='all'?'active':''}" onclick="renderFacturacion('all')">Todas</button>
      <button class="chip ${f==='unpaid'?'active':''}" onclick="renderFacturacion('unpaid')">Pendientes</button>
      <button class="chip ${f==='paid'?'active':''}" onclick="renderFacturacion('paid')">Cobradas</button>
    </div>
    ${lista.length===0?'<div class="empty-state"><p>${Icons.receipt}</p><p>Sin facturas</p></div>':
      lista.map(inv=>{const cl=Store.getCliente(inv.clienteId);
        return `<div class="list-item" onclick="verDetalleFactura(${inv.id})">
          <div class="avatar" style="background:${inv.paid?'#d1fae5;color:#059669':'#fee2e2;color:#dc2626'}">${Icons.receipt}</div>
          <div class="info"><div class="name">Factura ${inv.number||'#'+inv.id}</div>
          <div class="detail">${cl?cl.nombre:'Cliente'} · ${formatDate(inv.createdAt)} · ${inv.paid?'<span class="badge badge-paid">Cobrada</span>':'<span class="badge badge-unpaid">Pendiente</span>'}</div></div>
          <div class="right"><div class="value">${formatCurrency(inv.total||0)}</div></div>
        </div>`;
      }).join('')}
    <button class="btn btn-primary btn-block" onclick="abrirFormFactura()" style="margin-top:8px">${Icons.add} Nueva Factura</button>`;
}
function abrirFormFactura(d){
  const isEdit=!!d;const t=isEdit?'Editar Factura':'Nueva Factura';
  const v=d||{clienteId:'',descripcion:'',total:0};
  openModal(t,`
    <div class="form-group"><label class="form-label">Cliente *</label><select class="form-input" id="ff-cliente"><option value="">Seleccionar...</option>
      ${Store.clientes.map(c=>`<option value="${c.id}" ${v.clienteId==c.id?'selected':''}>${c.nombre}</option>`).join('')}</select></div>
    <div class="form-group"><label class="form-label">Concepto</label><textarea class="form-input" id="ff-desc" rows="2">${v.descripcion||''}</textarea></div>
    <div class="form-group"><label class="form-label">Total (€) *</label><input class="form-input" id="ff-total" value="${v.total||''}" type="number" step="0.01"></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="${isEdit?'guardarEditarFactura('+v.id+')':'guardarFactura()'}">${isEdit?'Guardar':'Crear'}</button></div>`);
}
function guardarFactura(){
  const cl=parseInt($('#ff-cliente').value);const tot=parseFloat($('#ff-total').value)||0;
  if(!cl)return showToast('Selecciona cliente','error');if(tot<=0)return showToast('Total debe ser >0','error');
  Store.addFactura({clienteId:cl,descripcion:$('#ff-desc').value.trim(),total:tot});
  closeModal();showToast('Factura creada');renderView('facturacion');
}
function guardarEditarFactura(id){
  const cl=parseInt($('#ff-cliente').value);const tot=parseFloat($('#ff-total').value)||0;
  if(!cl)return showToast('Selecciona cliente','error');if(tot<=0)return showToast('Total debe ser >0','error');
  Store.updFactura(id,{clienteId:cl,descripcion:$('#ff-desc').value.trim(),total:tot});
  closeModal();showToast('Factura actualizada');renderView('facturacion');
}
function verDetalleFactura(id){
  const inv=Store._data.facturas.find(x=>x.id===id);if(!inv)return;
  const cl=Store.getCliente(inv.clienteId);const c=document.getElementById('view-facturacion');
  pushDetail('facturacion',()=>renderFacturacion());
  const s=Store._data.empresa;const base=(inv.total||0)/(1+(s.iva||21)/100);const iva=(inv.total||0)-base;
  c.innerHTML=`
    <div class="invoice-preview"><div class="header"><h3>${s.nombre||'Taller'}</h3>
      <p>${s.direccion||''}${s.telefono?' · '+s.telefono:''}</p><p>${s.cif?'CIF: '+s.cif:''}</p>
      <hr style="margin:8px 0;border-color:#e5e7eb"><h3 style="font-size:14px">FACTURA ${inv.number||'#'+inv.id}</h3>
      <p>Fecha: ${formatDate(inv.createdAt)}</p></div>
      <div style="margin-bottom:12px"><p style="font-weight:600">${cl?cl.nombre:'Cliente'}</p><p style="font-size:12px;color:#6b7280">${cl?cl.dni||'':''} ${cl?cl.direccion||'':''}</p></div>
      <table><tr><th>Concepto</th><th style="text-align:right">Importe</th></tr>
      ${inv.items&&inv.items.length?inv.items.map(i=>`<tr><td>${i.concepto||''}</td><td style="text-align:right">${formatCurrency(i.precio||0)}</td></tr>`).join(''):`<tr><td>${inv.descripcion||'Servicio taller'}</td><td style="text-align:right">${formatCurrency(base)}</td></tr>`}</table>
      <div style="text-align:right;margin-top:8px"><div>Base: ${formatCurrency(base)}</div><div>IVA ${s.iva||21}%: ${formatCurrency(iva)}</div>
      <div style="font-size:18px;font-weight:700;color:#2563eb;margin-top:4px">Total: ${formatCurrency(inv.total||0)}</div></div>
      ${s.banco.length>0?`<div style="font-size:11px;color:#6b7280;margin-top:8px;text-align:center">Transferencia: ${s.banco[0].iban||''}</div>`:''}
    </div>
    <div class="card" style="text-align:center"><div>Estado: ${inv.paid?'<span class="badge badge-paid">✓ COBRADA</span>':'<span class="badge badge-unpaid">○ PENDIENTE</span>'}</div></div>
    <div class="btn-group">${!inv.paid?`<button class="btn btn-success btn-sm" onclick="Store.updFactura(${id},{paid:true});showToast('Cobrada');renderView('facturacion')">${Icons.check} Cobrada</button>`:''}
    <button class="btn btn-danger btn-sm" onclick="confirmDialog('¿Eliminar?',ok=>{if(ok){Store.delFactura(${id});popDetail();}})">${Icons.delete}</button></div>`;
}

// ===================== CONTABILIDAD =====================
function renderContabilidad(){
  const c=document.getElementById('view-contabilidad');
  const gastos=Store._data.gastos;const facturas=Store._data.facturas;
  const monthG=gastos.filter(g=>(g.createdAt||'').slice(0,7)===today().slice(0,7));
  const monthF=facturas.filter(f=>f.paid&&(f.createdAt||'').slice(0,7)===today().slice(0,7));
  const mesIng=monthF.reduce((s,f)=>s+Number(f.total||0),0);
  const mesGas=monthG.reduce((s,g)=>s+Number(g.amount||0),0);
  const beneficio=mesIng-mesGas;
  const margen=mesIng>0?Math.round(beneficio/mesIng*100):0;
  const totalGastosAno=gastos.filter(g=>g.createdAt&&g.createdAt.slice(0,4)===today().slice(0,4)).reduce((s,g)=>s+Number(g.amount||0),0);
  c.innerHTML=`
    <div class="stats">
      <div class="stat-card green"><div class="icon">${Icons.euro}</div><div class="value">${formatCurrency(mesIng)}</div><div class="label">Ingresos mes</div></div>
      <div class="stat-card red"><div class="icon">${Icons.euro}</div><div class="value">${formatCurrency(mesGas)}</div><div class="label">Gastos mes</div></div>
      <div class="stat-card ${beneficio>=0?'green':'red'}"><div class="icon">${Icons.euro}</div><div class="value">${formatCurrency(beneficio)}</div><div class="label">Beneficio</div></div>
      <div class="stat-card blue"><div class="icon">${Icons.build}</div><div class="value">${margen}%</div><div class="label">Margen</div></div>
    </div>
    <div class="card"><div class="card-title">Resumen anual</div>
      <div style="margin-top:8px;font-size:14px">Gastos totales año ${today().slice(0,4)}: <strong>${formatCurrency(totalGastosAno)}</strong></div>
      <div style="font-size:14px">Facturación año: <strong>${formatCurrency(facturas.filter(f=>f.paid&&f.createdAt&&f.createdAt.slice(0,4)===today().slice(0,4)).reduce((s,f)=>s+Number(f.total||0),0))}</strong></div>
    </div>
    <div class="section-title">GASTOS DEL MES</div>
    ${monthG.length===0?'<div class="card" style="text-align:center;padding:12px;font-size:13px;color:#6b7280">Sin gastos este mes</div>':
      monthG.map(g=>`<div class="list-item" style="cursor:default"><div class="avatar" style="background:#fee2e2;color:#dc2626">${Icons.euro}</div>
      <div class="info"><div class="name">${g.concepto||'Gasto'}</div><div class="detail">${g.categoria||''} · ${formatDate(g.createdAt)}</div></div>
      <div class="right"><div class="value" style="color:#dc2626">-${formatCurrency(g.amount||0)}</div></div></div>`).join('')}
    <div class="section-title">KPI - RENTABILIDAD POR REPARACIÓN</div>
    <div class="card"><div style="font-size:13px;color:#6b7280">Introduce los gastos de recambios para cada orden para calcular el margen real.</div></div>`;
}

// ===================== EMPLEADOS =====================
function renderEmpleados(){
  const c=document.getElementById('view-empleados');
  const emps=Store._data.empleados;
  const empHtml = emps.length === 0
    ? '<div class="empty-state"><p>' + Icons.people + '</p><p>Sin empleados registrados</p></div>'
    : emps.map(function(e){
        const baja = e.finContrato && e.finContrato <= today();
        const av = (e.nombre.split(' ').slice(0,2).map(function(w){return w[0]}).join('').toUpperCase()||'?');
        return '<div class="list-item" onclick="verEmpleado(' + e.id + ')"' + (baja ? ' style="opacity:.5"' : '') + '>' +
          '<div class="avatar"' + (baja ? ' style="background:#e2e8f0;color:#94a3b8"' : '') + '>' + av + '</div>' +
          '<div class="info"><div class="name">' + escHtml(e.nombre) + (baja ? ' <span style="color:#dc2626;font-size:11px;font-weight:400">(Baja)</span>' : '') + '</div><div class="detail">' + escHtml(e.puesto||'') + ' &middot; ' + (e.altaSS?'&#10003; SS':'&#9675; SS') + ' ' + (e.contratoEscrito?'&#10003; Contrato':'') + '</div></div>' +
          '<div class="right"><div class="value">&rarr;</div></div></div>';
      }).join('');
  c.innerHTML=`
    <div class="section-title">TRABAJADORES (${emps.length})</div>
    ${empHtml}
    <button class="btn btn-primary btn-block" onclick="abrirFormEmpleado()" style="margin-top:8px">${Icons.add} Añadir Trabajador</button>`;
}
function abrirFormEmpleado(d){
  const e=d||{nombre:'',dni:'',telefono:'',puesto:'',fechaAltaSS:'',fechaInicio:'',finContrato:'',salario:0,altaSS:false,contratoEscrito:false,reconocimientoMedico:''};
  openModal(d?'Editar Empleado':'Nuevo Empleado',`
    <div class="form-group"><label class="form-label">Nombre *</label><input class="form-input" id="emp-nombre" value="${e.nombre||''}"></div>
    <div class="form-row"><div class="form-group"><label class="form-label">DNI</label><input class="form-input" id="emp-dni" value="${e.dni||''}"></div>
    <div class="form-group"><label class="form-label">Teléfono</label><input class="form-input" id="emp-tlf" value="${e.telefono||''}"></div></div>
    <div class="form-group"><label class="form-label">Puesto/Categoría</label><select class="form-input" id="emp-puesto">
      ${['Oficial 1ª','Oficial 2ª','Ayudante','Aprendiz','Administrativo','Gerente'].map(p=>`<option ${e.puesto===p?'selected':''}>${p}</option>`).join('')}</select></div>
    <div class="form-row"><div class="form-group"><label class="form-label">Salario bruto anual</label><input class="form-input" id="emp-salario" value="${e.salario||''}" type="number"></div>
    <div class="form-group"><label class="form-label">Reconocimiento médico</label><input class="form-input" id="emp-reconocimiento" value="${e.reconocimientoMedico||''}" type="date"></div></div>
    <div class="form-row"><div class="form-group"><label class="form-label">Alta Seguridad Social</label><input class="form-input" id="emp-altaSS" value="${e.fechaAltaSS||''}" type="date"></div>
    <div class="form-group"><label class="form-label">Fin contrato</label><input class="form-input" id="emp-fin" value="${e.finContrato||''}" type="date"></div></div>
    <div class="card" style="padding:8px 12px;font-size:13px;background:#f0f2f5;margin-bottom:8px">
      <label class="flex items-center gap-8" style="cursor:pointer"><input type="checkbox" ${e.altaSS?'checked':''} id="emp-altaSScb"> Alta en Seguridad Social</label>
      <label class="flex items-center gap-8" style="cursor:pointer;margin-top:4px"><input type="checkbox" ${e.contratoEscrito?'checked':''} id="emp-contratocb"> Contrato escrito firmado</label>
    </div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="guardarEmpleado(${d?d.id:'null'})">${d?'Guardar':'Añadir'}</button></div>`);
}
function guardarEmpleado(id){
  const n=$('#emp-nombre').value.trim();if(!n)return showToast('Nombre obligatorio','error');
  const obj={nombre:n,dni:$('#emp-dni').value.trim(),telefono:$('#emp-tlf').value.trim(),puesto:$('#emp-puesto').value,
    salario:parseFloat($('#emp-salario').value)||0,fechaAltaSS:$('#emp-altaSS').value,fechaInicio:$('#emp-altaSS').value,
    finContrato:$('#emp-fin').value,altaSS:$('#emp-altaSScb').checked,contratoEscrito:$('#emp-contratocb').checked,
    reconocimientoMedico:$('#emp-reconocimiento').value,formacionPRL:false,registroJornada:false};
  if(id){Store.updEmpleado(id,obj);showToast('Actualizado');}
  else{Store.addEmpleado(obj);showToast('Añadido');}
  closeModal();renderView('empleados');
}
function verEmpleado(id){
  const e=Store._data.empleados.find(x=>x.id===id);if(!e)return;
  const c=document.getElementById('view-empleados');
  pushDetail('empleados',()=>renderEmpleados());
  const contratosRef='<a href="#" onclick="event.preventDefault();showToast(\'RD Legislativo 2/2015 ET\')">ET Art.8</a>';
  c.innerHTML=`
    <div class="detail-header"><h2>${e.nombre}</h2><div class="meta">${e.puesto||'Sin puesto'} · DNI: ${e.dni||'-'}</div></div>
    <div class="info-grid" style="margin-bottom:16px">
      <div class="info-item"><div class="detail-field"><div class="label">Teléfono</div><div class="value">${e.telefono||'-'}</div></div></div>
      <div class="info-item"><div class="detail-field"><div class="label">Salario bruto</div><div class="value">${formatCurrency(e.salario||0)}/año</div></div></div>
      <div class="info-item"><div class="detail-field"><div class="label">Seguridad Social</div><div class="value">${e.altaSS?'✓ Alta '+formatDate(e.fechaAltaSS):'○ Pendiente'}</div></div></div>
      <div class="info-item"><div class="detail-field"><div class="label">Contrato escrito</div><div class="value">${e.contratoEscrito?'✓ Firmado':'○ Pendiente'} · Ref: ${contratosRef}</div></div></div>
    </div>
    ${e.reconocimientoMedico?`<div class="alert ${new Date(e.reconocimientoMedico)>new Date()?'alert-success':'alert-warning'}">Reconocimiento médico: ${formatDate(e.reconocimientoMedico)} ${new Date(e.reconocimientoMedico)<new Date()?'(actualizar)':''}</div>`:''}
    ${e.finContrato?`<div class="alert alert-warning">Contrato finaliza: ${formatDate(e.finContrato)}</div>`:''}
    <div class="card"><div style="font-size:13px;font-weight:600;margin-bottom:8px">Obligaciones laborales</div>
      <label class="flex items-center gap-8" style="cursor:pointer;margin:4px 0"><input type="checkbox" ${e.formacionPRL?'checked':''} onchange="Store._data.empleados.find(x=>x.id===${id}).formacionPRL=this.checked;Store.save()"> Formación PRL recibida (Ley 31/1995 Art.19)</label>
      <label class="flex items-center gap-8" style="cursor:pointer;margin:4px 0"><input type="checkbox" ${e.registroJornada?'checked':''} onchange="Store._data.empleados.find(x=>x.id===${id}).registroJornada=this.checked;Store.save()"> Registro de jornada (RD 8/2019)</label>
    </div>
    <div class="btn-group"><button class="btn btn-outline btn-sm" onclick="abrirFormEmpleado(Store._data.empleados.find(x=>x.id===${id}))">Editar</button>
    <button class="btn btn-danger btn-sm" onclick="confirmDialog('¿Dar de baja a ${e.nombre}? Se establecerá fin de contrato hoy.',ok=>{if(ok){Store.bajaEmpleado(${id});popDetail()}})">Dar de baja</button></div>`;
}

// ===================== PRL =====================
function renderPRL(){
  const c=document.getElementById('view-prl');
  const p=Store._data.prl;
  c.innerHTML=`
    <div class="card"><div class="card-title" style="margin-bottom:12px">Evaluación de Riesgos</div>
      <div class="detail-field"><div class="label">Fecha última evaluación</div><input class="form-input" type="date" id="prl-eval-fecha" value="${p.evaluacionFecha||''}" onchange="Store._data.prl.evaluacionFecha=this.value;Store.save()"></div>
      <div class="detail-field" style="margin-top:8px"><div class="label">Empresa evaluadora (SPA)</div><input class="form-input" id="prl-spa" value="${p.evaluacionEmpresa||''}" placeholder="Ej: FREMAP, Asepeyo..." onchange="Store._data.prl.evaluacionEmpresa=this.value;Store.save()"></div>
      <div style="margin-top:8px;font-size:12px;color:#6b7280">Ref: Ley 31/1995 Art.16 · RD 39/1997</div>
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Estado PRL</div>
      ${[
        {id:'formacionRealizada',label:'Formación PRL impartida',ley:'Ley 31/1995 Art.19'},
        {id:'botiquinOk',label:'Botiquín completo y visible',ley:'RD 486/1997 Anexo VI'},
        {id:'reconocimientosRealizados',label:'Reconocimientos médicos realizados',ley:'Ley 31/1995 Art.22'}
      ].map(item=>`
        <label class="flex items-center gap-8" style="cursor:pointer;margin:6px 0;font-size:14px">
          <input type="checkbox" ${p[item.id]?'checked':''} onchange="Store._data.prl['${item.id}']=this.checked;Store.save()">
          ${item.label}
          <span style="font-size:11px;color:#6b7280;margin-left:4px">(${item.ley})</span></label>`).join('')}
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">EPIs (Equipos Protección Individual)</div>
      <div style="font-size:12px;color:#6b7280;margin-bottom:8px">Registro de equipos de protección individual</div>
      ${p.epis && p.epis.length > 0 ? p.epis.map((epi, i) => `
        <div class="list-item" style="cursor:default">
          <div class="info"><div class="name">${epi.tipo || ''}</div><div class="detail">${epi.cantidad || 0} uds · Adq: ${formatDate(epi.fechaAdq)||'-'}</div></div>
          <div class="right"><button class="btn btn-sm btn-danger" onclick="eliminarPrlEpi(${epi.id||i})">${Icons.delete}</button></div>
        </div>`).join('') : '<div style="font-size:13px;color:#6b7280;margin-bottom:8px">Sin EPIs registrados</div>'}
      <button class="btn btn-outline btn-sm btn-block" onclick="abrirFormPrlEpi()" style="margin-top:8px">${Icons.add} Añadir EPI</button>
    </div>
    <button class="btn btn-primary btn-block" onclick="navigate('checklist')">${Icons.gavel} Ver Checklist Legal</button>`;
}
function abrirFormPrlEpi(){
  openModal('Añadir EPI',`
    <div class="form-group"><label class="form-label">Tipo de EPI</label>
      <select class="form-input" id="epi-tipo">
        <option>Calzado seguridad</option><option>Guantes mecánico</option><option>Guantes nitrilo</option>
        <option>Gafas seguridad</option><option>Protectores auditivos</option><option>Ropa trabajo</option><option>Mascarilla</option>
      </select></div>
    <div class="form-row"><div class="form-group"><label class="form-label">Cantidad</label><input class="form-input" id="epi-cantidad" type="number" value="1"></div>
    <div class="form-group"><label class="form-label">Fecha adquisición</label><input class="form-input" id="epi-fecha" type="date"></div></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="guardarPrlEpi()">Guardar</button></div>`);
}
function guardarPrlEpi(){
  const obj = {tipo:$('#epi-tipo').value,cantidad:parseInt($('#epi-cantidad').value)||1,fechaAdq:$('#epi-fecha').value};
  if(!Store._data.prl.epis)Store._data.prl.epis=[];
  Store._data.prl.epis.push(obj);
  Store.save();
  if(Store._apiActive)Api.createPrlEpi(obj).catch(()=>{});
  closeModal();renderView('prl');showToast('EPI añadido');
}
function eliminarPrlEpi(idOrIndex){
  confirmDialog('¿Eliminar este EPI?', ok => {
    if(!ok)return;
    const epis = Store._data.prl.epis;
    if(typeof idOrIndex === 'number' && idOrIndex < epis.length && !epis[idOrIndex].id){
      epis.splice(idOrIndex, 1);
    } else {
      const idx = epis.findIndex(e => e.id === idOrIndex);
      if(idx > -1){
        if(Store._apiActive && epis[idx].id)Api.deletePrlEpi(epis[idx].id).catch(()=>{});
        epis.splice(idx, 1);
      }
    }
    Store.save();renderView('prl');showToast('EPI eliminado');
  });
}

// ===================== MEDIO AMBIENTE =====================
function renderAmbiente(){
  const c=document.getElementById('view-ambiente');
  const m=Store._data.medioAmbiente;
  c.innerHTML=`
    <div class="card"><div class="card-title" style="margin-bottom:8px">Gestión de Residuos Peligrosos</div>
      <div class="section-title">Referencia legal: ${LEY.ambiente.residuos.nombre} · RD 833/1988</div>
      <div class="form-group" style="margin-top:8px"><label class="form-label">Gestor autorizado</label><input class="form-input" id="amb-gestor" value="${m.gestorNombre||''}" placeholder="Nombre del gestor" onchange="Store._data.medioAmbiente.gestorNombre=this.value;Store.save()"></div>
      <div class="form-group"><label class="form-label">Nº contrato</label><input class="form-input" id="amb-contrato" value="${m.gestorContrato||''}" placeholder="Nº de contrato" onchange="Store._data.medioAmbiente.gestorContrato=this.value;Store.save()"></div>
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Estado gestión ambiental</div>
      ${[
        {id:'almacenCorrecto',label:'Almacenamiento correcto de residuos',ley:LEY.ambiente.residuos.nombre+' Art.20'},
        {id:'registroCompleto',label:'Registro documental de residuos',ley:LEY.ambiente.residuos.nombre+' Art.21'},
        {id:'gestionAceites',label:'Gestión aceites usados correcta',ley:LEY.ambiente.aceite.nombre},
        {id:'archivoCronologico',label:'Archivo cronológico de residuos',ley:'RD 833/1988 Art.18'}
      ].map(item=>`<label class="flex items-center gap-8" style="cursor:pointer;margin:6px 0;font-size:14px">
        <input type="checkbox" ${m[item.id]?'checked':''} onchange="Store._data.medioAmbiente['${item.id}']=this.checked;Store.save()">
        ${item.label}
        <span style="font-size:11px;color:#6b7280">(${item.ley})</span></label>`).join('')}
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Tipos de residuos del taller</div>
      ${['Aceites usados (LER 13 02 05*)','Filtros aceite (LER 16 01 07*)','Baterías (LER 16 06 01*)','Líquido frenos (LER 16 01 13*)','Anticongelante (LER 16 01 14*)','Trapos contaminados (LER 15 02 02*)','Envases contaminados (LER 15 01 10*)','Neumáticos fuera de uso'].map(r=>`
        <label class="flex items-center gap-8" style="cursor:default;margin:4px 0;font-size:12px;color:#6b7280">⬤ ${r}</label>`).join('')}
    </div>`;
}

// ===================== MAQUINARIA =====================
function renderMaquinaria(){
  const c=document.getElementById('view-maquinaria');
  const m=Store._data.maquinaria;
  c.innerHTML=`
    <div class="card"><div class="card-title" style="margin-bottom:8px">Elevadores</div>
      ${m.elevadores.length===0?'<div style="font-size:13px;color:#6b7280;margin-bottom:8px">Sin elevadores registrados</div>':
        m.elevadores.map((e,i)=>`<div class="list-item" style="cursor:default"><div class="info"><div class="name">Elevador ${e.marca||''} ${e.modelo||''}</div><div class="detail">Revisión: ${formatDate(e.revision)}${new Date(e.revision)<new Date()?' (VENCIDA)':''}</div></div>
        <button class="btn btn-sm btn-danger" onclick="eliminarElevador(${i})">${Icons.delete}</button></div>`).join('')}
      <button class="btn btn-outline btn-sm btn-block" onclick="abrirFormElevador()" style="margin-top:8px">${Icons.add} Añadir elevador</button>
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Compresores (Equipos a presión)</div>
      ${m.compresores.length===0?'<div style="font-size:13px;color:#6b7280">Sin compresores registrados</div>':
        m.compresores.map((c,i)=>`<div class="list-item" style="cursor:default"><div class="info"><div class="name">Compresor ${c.marca||''}</div><div class="detail">Revisión OCA: ${formatDate(c.revision)}</div></div>
        <button class="btn btn-sm btn-danger" onclick="eliminarCompresor(${i})">${Icons.delete}</button></div>`).join('')}
      <button class="btn btn-outline btn-sm btn-block" onclick="abrirFormCompresor()" style="margin-top:8px">${Icons.add} Añadir compresor</button>
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Revisiones OBLIGATORIAS</div>
      <div style="margin:4px 0;font-size:13px">📅 Extintores: <strong>${m.instalaciones.extintores.revision?formatDate(m.instalaciones.extintores.revision):'No registrada'}</strong> ${m.instalaciones.extintores.revision&&new Date(m.instalaciones.extintores.revision)<new Date()?'<span style="color:#dc2626">(VENCIDA)</span>':''}</div>
      <div style="font-size:11px;color:#6b7280">Ref: RD 513/2017 Reglamento PCI</div>
      <label class="flex items-center gap-8" style="cursor:pointer;margin:6px 0;font-size:13px"><input type="checkbox" ${Store._data.empresa.alumbradoEmergenciaOk?'checked':''} onchange="Store._data.empresa.alumbradoEmergenciaOk=this.checked;Store.save()"> Alumbrado emergencia OK</label>
    </div>`;
}
function abrirFormElevador(){openModal('Añadir Elevador',`
    <div class="form-group"><label class="form-label">Marca</label><input class="form-input" id="el-marca"></div>
    <div class="form-group"><label class="form-label">Modelo</label><input class="form-input" id="el-modelo"></div>
    <div class="form-group"><label class="form-label">Última revisión OCA</label><input class="form-input" id="el-revision" type="date"></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarElevador()">Guardar</button></div>`);}
function guardarElevador(){Store._data.maquinaria.elevadores.push({marca:$('#el-marca').value.trim(),modelo:$('#el-modelo').value.trim(),revision:$('#el-revision').value});Store.save();closeModal();renderView('maquinaria');showToast('Elevador añadido');}
function eliminarElevador(i){Store._data.maquinaria.elevadores.splice(i,1);Store.save();renderView('maquinaria');}
function abrirFormCompresor(){openModal('Añadir Compresor',`
    <div class="form-group"><label class="form-label">Marca</label><input class="form-input" id="cp-marca"></div>
    <div class="form-group"><label class="form-label">Última revisión</label><input class="form-input" id="cp-revision" type="date"></div>
    <div class="form-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarCompresor()">Guardar</button></div>`);}
function guardarCompresor(){Store._data.maquinaria.compresores.push({marca:$('#cp-marca').value.trim(),revision:$('#cp-revision').value});Store.save();closeModal();renderView('maquinaria');showToast('Compresor añadido');}
function eliminarCompresor(i){Store._data.maquinaria.compresores.splice(i,1);Store.save();renderView('maquinaria');}

// ===================== INSTALACIONES =====================
function renderInstalaciones(){
  const c=document.getElementById('view-instalaciones');
  c.innerHTML=`
    <div class="card"><div class="card-title" style="margin-bottom:8px">Instalaciones del Taller</div>
      <div style="margin:8px 0;font-size:14px">⚡ Instalación eléctrica:</div>
      <input class="form-input" type="date" id="inst-elect" value="${Store._data.maquinaria.instalaciones.electrica.revision||''}" onchange="Store._data.maquinaria.instalaciones.electrica.revision=this.value;Store.save()">
      <div style="margin-top:8px;font-size:12px;color:#6b7280">Ref: REBT RD 842/2002 · Revisión periódica obligatoria</div>
      <div style="margin:12px 0 8px;font-size:14px">🔦 Alumbrado de emergencia:</div>
      <input class="form-input" type="date" id="inst-emerg" value="${Store._data.maquinaria.instalaciones.emergencia.revision||''}" onchange="Store._data.maquinaria.instalaciones.emergencia.revision=this.value;Store.save()">
      <div style="margin:12px 0 8px;font-size:14px">🔥 Protección contra incendios:</div>
      <input class="form-input" type="date" id="inst-fuego" value="${Store._data.maquinaria.instalaciones.incendios.revision||''}" onchange="Store._data.maquinaria.instalaciones.incendios.revision=this.value;Store.save()">
    </div>
    <div class="card">
      <div style="font-size:13px;font-weight:600;margin-bottom:8px">Extintores</div>
      <div class="form-group"><label class="form-label">Última revisión</label><input class="form-input" type="date" id="ext-revision" value="${Store._data.maquinaria.instalaciones.extintores.revision||''}" onchange="Store._data.maquinaria.instalaciones.extintores.revision=this.value;Store.save()"></div>
      <div style="font-size:12px;color:#6b7280">RD 513/2017 · Revisión anual obligatoria · Cada 5 años retimbrado</div>
    </div>`;
}

// ===================== PROTECCIÓN DATOS =====================
function renderProteccionDatos(){
  const c=document.getElementById('view-datos');
  const d=Store._data.proteccionDatos;
  c.innerHTML=`
    <div class="card"><div class="card-title" style="margin-bottom:8px">RGPD / LOPDGDD</div>
      <div style="font-size:12px;color:#6b7280;margin-bottom:12px">Ref: ${LEY.rgpd.nombre} · ${LEY.rgpd.lopdgdd}</div>
      ${[
        {id:'consentimientosGestionados',label:'Consentimientos de clientes gestionados',ley:'RGPD Art.7'},
        {id:'registroActividades',label:'Registro de actividades del tratamiento',ley:'RGPD Art.30'},
        {id:'cartelesRgpd',label:'Cartel informativo RGPD visible en local',ley:'RGPD Art.13 + LOPDGDD Art.11'},
        {id:'videovigilancia',label:'Videovigilancia: cartel informativo + límites',ley:'Ley 4/1997'}
      ].map(item=>`<label class="flex items-center gap-8" style="cursor:pointer;margin:6px 0;font-size:14px">
        <input type="checkbox" ${d[item.id]?'checked':''} onchange="Store._data.proteccionDatos['${item.id}']=this.checked;Store.save()">
        ${item.label}
        <span style="font-size:11px;color:#6b7280">(${item.ley})</span></label>`).join('')}
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Sanciones</div>
      <div style="font-size:13px;color:#6b7280">Infracciones RGPD: hasta <strong>20.000.000€</strong> o 4% de la facturación anual.</div>
      <div style="font-size:13px;color:#6b7280;margin-top:4px">Infracciones LOPDGDD: hasta <strong>20.000.000€</strong> (muy graves).</div>
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Conservación de datos</div>
      <div style="font-size:13px;color:#6b7280">Facturas: 4 años (Art. 66 LGT) · Datos clientes: mientras dure la relación + 5 años · Videovigilancia: 30 días máximo</div>
    </div>`;
}

// ===================== CHECKLIST LEGAL =====================
function renderChecklist(){
  const c=document.getElementById('view-checklist');
  const comp=COMPLIANCE.calcular();
  c.innerHTML=`
    <div class="card" style="text-align:center;padding:24px">
      <div style="font-size:48px;font-weight:700;color:${comp.porcentaje>80?'#059669':comp.porcentaje>50?'#d97706':'#dc2626'}">${comp.porcentaje}%</div>
      <div style="font-size:14px;color:#6b7280">Cumplimiento Legal</div>
      <div style="font-size:13px;margin-top:8px">${comp.cumplidos} de ${comp.total} requisitos cumplidos</div>
      <div style="width:100%;height:8px;background:#e5e7eb;border-radius:4px;margin-top:12px;overflow:hidden">
        <div style="height:100%;width:${comp.porcentaje}%;background:${comp.porcentaje>80?'#059669':comp.porcentaje>50?'#d97706':'#dc2626'};border-radius:4px;transition:width.5s"></div>
      </div>
    </div>
    <div class="section-title">REQUISITOS LEGALES</div>
    ${COMPLIANCE.items.map(i=>{
      const ok=i.check();
      return `<div class="list-item" style="cursor:default;border-left:3px solid ${ok?'#059669':'#dc2626'}">
        <div style="flex:1"><div style="font-weight:600;font-size:14px">${ok?'✓':'○'} ${i.label}</div>
        <div style="font-size:11px;color:#6b7280;margin-top:2px">${i.law} · Sanción: ${i.sanction}</div></div>
        <div style="font-size:11px;color:#6b7280">${i.group}</div>
      </div>`;
    }).join('')}
    <div class="card" style="margin-top:16px">
      <div class="card-title" style="margin-bottom:8px">📋 Interpretación</div>
      <div style="font-size:13px;color:#6b7280">
        ${comp.porcentaje===100?'✅ Cumplimiento total. Revisar periódicamente para mantenerlo.':
          comp.porcentaje>=80?'⚠️ Buen nivel. Faltan detalles menores por resolver.':
          comp.porcentaje>=50?'⚠️ Riesgo medio. Prioritario resolver los puntos pendientes.':
          '🔴 Riesgo alto. Contacta con tu gestoría y asesoría para regularizar la situación.'}
      </div>
    </div>`;
}

// ===================== INSPECTOR VIRTUAL =====================
function renderInspector(modulo){
  const m=modulo||'trabajo';const c=document.getElementById('view-inspector');
  c.innerHTML=`
    <div class="chips">${Object.entries(INSPECTOR.modulos).map(([k,v])=>`<button class="chip ${k===m?'active':''}" onclick="renderInspector('${k}')">${v.nombre}</button>`).join('')}</div>
    ${function(){
      const res=INSPECTOR.ejecutar(m);
      if(!res)return'';
      const ok=res.results.filter(r=>r.ok).length,total=res.results.length;
      return `<div class="card" style="text-align:center;padding:16px;margin-bottom:12px">
        <div style="font-size:24px;font-weight:700;color:${ok===total?'#059669':'#d97706'}">${ok}/${total}</div>
        <div style="font-size:14px;color:#6b7280">Preguntas superadas (${res.nombre})</div>
      </div>
      ${res.results.map(r=>`<div class="card" style="border-left:3px solid ${r.ok?'#059669':'#dc2626'}">
        <div style="font-weight:500;font-size:14px">${r.ok?'✓':'✗'} ${r.pregunta}</div>
        <div style="font-size:11px;color:#6b7280;margin-top:4px">Ref: ${r.ref}</div>
        ${!r.ok?`<div style="font-size:12px;color:#dc2626;margin-top:4px;font-weight:600">Riesgo: ${r.riesgo}</div>
        <div style="font-size:12px;color:#2563eb;margin-top:2px">Solución: Revisa el checklist legal y los módulos correspondientes de la app.</div>`:''}
      </div>`).join('')}`;
    }()}`;
}

// ===================== ALERTAS =====================
function renderAlertas(){
  const c=document.getElementById('view-alertas');
  const alertas=ALERTAS.generar();
  const criticas=alertas.filter(a=>a.tipo==='danger');
  const warnings=alertas.filter(a=>a.tipo==='warning');
  const infos=alertas.filter(a=>a.tipo==='info');
  c.innerHTML=`
    <div class="stats">
      <div class="stat-card red"><div class="icon">${Icons.warning}</div><div class="value">${criticas.length}</div><div class="label">Críticas</div></div>
      <div class="stat-card amber"><div class="icon">${Icons.warning}</div><div class="value">${warnings.length}</div><div class="label">Próximas</div></div>
      <div class="stat-card blue"><div class="icon">${Icons.calendar}</div><div class="value">${infos.length}</div><div class="label">Recordatorios</div></div>
    </div>
    ${criticas.length>0?`<div class="section-title">🔴 CRÍTICAS</div>
      ${criticas.map(a=>`<div class="card" style="border-left:3px solid #dc2626"><div style="font-size:14px;font-weight:600;color:#dc2626">${a.msg}</div><div style="font-size:11px;color:#6b7280;margin-top:2px">${a.ref||''}</div></div>`).join('')}`:''}
    ${warnings.length>0?`<div class="section-title">🟡 PRÓXIMAS</div>
      ${warnings.map(a=>`<div class="card" style="border-left:3px solid #d97706"><div style="font-size:14px">${a.msg}</div><div style="font-size:11px;color:#6b7280">${a.ref||''}</div></div>`).join('')}`:''}
    ${infos.length>0?`<div class="section-title">🔵 RECORDATORIOS FISCALES</div>
      ${infos.map(a=>`<div class="card"><div style="font-size:14px">${a.msg}</div><div style="font-size:11px;color:#6b7280">${a.ref||''}</div></div>`).join('')}`:''}
    ${alertas.length===0?'<div class="card" style="text-align:center;padding:24px;color:#059669">✅ Sin alertas. Todo al día.</div>':''}`;
}

// ===================== DOCUMENTOS =====================
function renderDocumentos(){
  const c=document.getElementById('view-documentos');
  const docs=[
    {nombre:'Orden de Reparación',desc:'Documento de recepción del vehículo',action:'generarOrdenDoc'},
    {nombre:'Presupuesto',desc:'Presupuesto para entregar al cliente',action:'generarPresupuestoDoc'},
    {nombre:'Factura',desc:'Factura con desglose IVA',action:'generarFacturaDoc'},
    {nombre:'Consentimiento RGPD',desc:'Consentimiento informado para clientes',action:'generarRgpdDoc'},
    {nombre:'Entrega de Vehículo',desc:'Resguardo de entrega al cliente',action:'generarEntregaDoc'},
    {nombre:'Registro de Residuos',desc:'Documento de control de residuos',action:'generarResiduosDoc'},
    {nombre:'Checklist Apertura',desc:'Verificación diaria del taller',action:'generarCheckApertura'},
    {nombre:'Checklist Cierre',desc:'Verificación de cierre del taller',action:'generarCheckCierre'},
  ];
  c.innerHTML=`
    <div class="section-title">GENERAR DOCUMENTOS</div>
    ${docs.map(d=>`<div class="list-item" onclick="${d.action}()">
      <div class="avatar" style="background:#dbeafe;color:#2563eb">${Icons.file}</div>
      <div class="info"><div class="name">${d.nombre}</div><div class="detail">${d.desc}</div></div>
      <div class="right"><div class="value">↓</div></div>
    </div>`).join('')}
    <div class="card" style="margin-top:16px;font-size:13px;color:#6b7280">
      Los documentos se generan en formato PDF descargable.
    </div>`;
}

function pdfDoc(html, filename) {
  if (typeof html2pdf === 'undefined') return showToast('Error: Librería PDF no disponible. Recarga la página.','error');
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'position:fixed;left:-9999px;top:0;width:800px;padding:40px;background:#fff;font-family:sans-serif;color:#000';
  wrapper.innerHTML = `
    <style>
      body{font-family:DejaVu Sans,sans-serif;color:#000;line-height:1.5}
      h1{text-align:center;color:#1e3a8a;font-size:22px;margin-bottom:8px}
      h2{font-size:16px;margin:16px 0 8px;color:#1e293b;border-bottom:2px solid #1e3a8a;padding-bottom:4px}
      hr{border:none;border-top:1px solid #cbd5e1;margin:16px 0}
      table{width:100%;border-collapse:collapse;margin:12px 0;font-size:13px}
      th{background:#1e3a8a;color:#fff;padding:8px 10px;text-align:left}
      td{padding:6px 10px;border:1px solid #cbd5e1}
      .meta{font-size:12px;color:#64748b;margin:4px 0}
      .total{font-size:20px;font-weight:700;text-align:right;color:#1e3a8a;margin-top:8px}
      .firma{display:flex;justify-content:space-between;margin-top:48px;font-size:13px}
      .firma div{border-top:1px solid #94a3b8;padding-top:4px;min-width:200px;text-align:center}
      .campo{display:inline-block;border-bottom:1px solid #94a3b8;min-width:180px;margin:0 4px}
    </style>
    ${html}`;
  document.body.appendChild(wrapper);
  const opt = { margin: [10,10,10,10], filename: filename+'.pdf', image:{type:'jpeg',quality:0.98}, html2canvas:{scale:2,useCORS:true}, jsPDF:{unit:'mm',format:'a4',orientation:'portrait'} };
  html2pdf().set(opt).from(wrapper).save().then(() => { wrapper.remove(); }).catch(() => { wrapper.remove(); showToast('Error al generar PDF','error'); });
}

function generarOrdenDoc() {
  const e = Store._data.empresa;
  pdfDoc(`<h1>ORDEN DE REPARACIÓN</h1><div class="meta">${e.nombre} · CIF: ${e.cif} · Fecha: ${formatDate(today())}</div><hr>
    <h2>Datos del Taller</h2><p>${e.direccion||''} · Tel: ${e.telefono||''} · ${e.email||''}</p>
    <h2>Datos del Cliente</h2><p>Nombre: <span class="campo"></span> Teléfono: <span class="campo"></span></p>
    <h2>Vehículo</h2><p>Matrícula: <span class="campo"></span> Marca/Modelo: <span class="campo"></span> KM: <span class="campo"></span></p>
    <h2>Trabajo a realizar</h2><p><span class="campo" style="min-width:400px"></span></p><p><span class="campo" style="min-width:400px"></span></p>
    <h2>Observaciones</h2><p><span class="campo" style="min-width:400px;min-height:40px"></span></p>
    <div class="firma"><div>Firma del cliente</div><div>Fdo. Taller</div></div>`,
    `Orden_Reparacion_${today()}`);
}

function generarPresupuestoDoc() {
  const e = Store._data.empresa;
  pdfDoc(`<h1>PRESUPUESTO</h1><div class="meta">${e.nombre} · CIF: ${e.cif} · Fecha: ${formatDate(today())}</div><hr>
    <p>Cliente: <span class="campo"></span> Teléfono: <span class="campo"></span></p>
    <p>Vehículo: <span class="campo"></span> Matrícula: <span class="campo"></span></p>
    <h2>Conceptos</h2>
    <table><tr><th style="width:60%">Concepto</th><th style="width:20%">Cantidad</th><th style="width:20%">Importe</th></tr>
    <tr><td><span class="campo" style="min-width:250px"></span></td><td>1</td><td>_____ €</td></tr>
    <tr><td><span class="campo" style="min-width:250px"></span></td><td>1</td><td>_____ €</td></tr>
    <tr><td><span class="campo" style="min-width:250px"></span></td><td>1</td><td>_____ €</td></tr></table>
    <div class="total">Total: _____________ €</div>
    <p style="font-size:12px;color:#64748b">IVA 21% incluido · Presupuesto válido 15 días</p>
    <div class="firma"><div>Conforme: ___________________</div></div>`,
    `Presupuesto_${today()}`);
}

function generarFacturaDoc() {
  const e = Store._data.empresa;
  const s = e.iva||21;
  pdfDoc(`<h1>FACTURA</h1>
    <div style="text-align:center;margin-bottom:4px"><strong>${e.nombre}</strong></div>
    <div class="meta">${e.direccion||''} · Tel: ${e.telefono||''} · ${e.email||''}<br>CIF: ${e.cif}</div><hr>
    <p><strong>Factura Nº:</strong> <span class="campo"></span> <strong>Fecha:</strong> ${formatDate(today())}</p>
    <p><strong>Cliente:</strong> <span class="campo"></span> <strong>NIF:</strong> <span class="campo"></span></p>
    <h2>Líneas de factura</h2>
    <table><tr><th style="width:60%">Concepto</th><th style="width:15%">Cant.</th><th style="width:25%">Importe</th></tr>
    <tr><td><span class="campo" style="min-width:250px"></span></td><td>1</td><td>_____ €</td></tr>
    <tr><td><span class="campo" style="min-width:250px"></span></td><td>1</td><td>_____ €</td></tr></table>
    <hr><div style="text-align:right;font-size:14px">
      Base: ___________ €<br>IVA ${s}%: ___________ €<br>
      <div class="total">Total: ___________ €</div></div>
    <p style="font-size:11px;color:#64748b;text-align:center;margin-top:12px">Transferencia: ${e.banco&&e.banco[0]?e.banco[0].iban:''}</p>`,
    `Factura_${today()}`);
}

function generarRgpdDoc() {
  const e = Store._data.empresa;
  pdfDoc(`<h1>CONSENTIMIENTO INFORMADO RGPD</h1><div class="meta">Reglamento (UE) 2016/679 · LOPDGDD 3/2018</div><hr>
    <p>En cumplimiento del Reglamento (UE) 2016/679 de Protección de Datos y la Ley Orgánica 3/2018, se informa:</p>
    <p><strong>Responsable del tratamiento:</strong> ${e.nombre} (${e.cif})</p>
    <p><strong>Finalidad:</strong> Gestión de clientes, reparaciones, facturación y mantenimiento del vehículo.</p>
    <p><strong>Legitimación:</strong> Consentimiento del interesado y ejecución del servicio contratado.</p>
    <p><strong>Destinatarios:</strong> No se cederán datos a terceros salvo obligación legal.</p>
    <p><strong>Derechos:</strong> Acceso, rectificación, supresión, limitación, portabilidad y oposición (Art. 15-22 RGPD).</p>
    <hr><p>D/Dña: <span class="campo" style="min-width:250px"></span>, con DNI: <span class="campo"></span></p>
    <p>Autorizo el tratamiento de mis datos personales para la gestión del servicio de taller.</p>
    <div class="firma"><div>Firma: ___________________</div><div>Fecha: ___/___/______</div></div>`,
    `Consentimiento_RGPD_${today()}`);
}

function generarEntregaDoc() {
  const e = Store._data.empresa;
  pdfDoc(`<h1>ENTREGA DE VEHÍCULO</h1><div class="meta">${e.nombre} · ${e.cif} · Fecha: ${formatDate(today())}</div><hr>
    <p><strong>Cliente:</strong> <span class="campo" style="min-width:250px"></span></p>
    <p><strong>Matrícula:</strong> <span class="campo"></span> <strong>Marca/Modelo:</strong> <span class="campo"></span></p>
    <p><strong>KM salida:</strong> <span class="campo"></span></p>
    <h2>Trabajos realizados</h2>
    <p><span class="campo" style="min-width:450px"></span></p>
    <p><span class="campo" style="min-width:450px"></span></p>
    <p><strong>Total factura:</strong> <span class="campo"></span> €</p>
    <p><strong>Forma de pago:</strong> Efectivo / Tarjeta / Transferencia</p>
    <p style="font-size:12px;color:#64748b">El cliente recibe el vehículo en buen estado y conforme con los trabajos realizados.</p>
    <div class="firma"><div>Recibí conforme</div><div>Entregado por</div></div>`,
    `Entrega_Vehiculo_${today()}`);
}

function generarResiduosDoc() {
  const e = Store._data.empresa;
  const residuos = Store._data.medioAmbiente.residuos || [];
  const filas = residuos.length > 0 ? residuos.map(r =>
    `<tr><td>${formatDate(r.fechaRecogida)}</td><td>${r.tipo||''}</td><td>${r.cantidad||0}</td><td>${r.unidad||'uds'}</td><td>${r.gestor||''}</td></tr>`
  ).join('') : `<tr><td colspan="5" style="text-align:center;color:#94a3b8">Sin registros</td></tr>`;
  pdfDoc(`<h1>REGISTRO DE RESIDUOS PELIGROSOS</h1>
    <div class="meta">${e.nombre} · CIF: ${e.cif}<br>${LEY.ambiente.residuos.nombre} · RD 833/1988</div><hr>
    <h2>Histórico de recogidas</h2>
    <table><tr><th>Fecha</th><th>Tipo residuo</th><th>Cantidad</th><th>Ud.</th><th>Gestor</th></tr>
    ${filas}</table>
    <p style="font-size:11px;color:#64748b">Archivo cronológico obligatorio · Conservar mínimo 3 años</p>`,
    `Registro_Residuos_${today()}`);
}

function generarCheckApertura() {
  pdfDoc(`<h1>CHECKLIST APERTURA DIARIA</h1><div class="meta">Fecha: ${formatDate(today())}</div><hr>
    <table><tr><th style="width:80%">Elemento</th><th style="width:20%;text-align:center">OK</th></tr>
    <tr><td>Extintores visibles y accesibles</td><td style="text-align:center">☐</td></tr>
    <tr><td>Alumbrado general funcionando</td><td style="text-align:center">☐</td></tr>
    <tr><td>Puertas de acceso operativas</td><td style="text-align:center">☐</td></tr>
    <tr><td>Elevador: prueba visual de funcionamiento</td><td style="text-align:center">☐</td></tr>
    <tr><td>Compresor: presión correcta</td><td style="text-align:center">☐</td></tr>
    <tr><td>Herramientas en orden</td><td style="text-align:center">☐</td></tr>
    <tr><td>Botiquín completo y accesible</td><td style="text-align:center">☐</td></tr>
    <tr><td>Señalización de seguridad visible</td><td style="text-align:center">☐</td></tr>
    <tr><td>Zona de residuos ordenada y etiquetada</td><td style="text-align:center">☐</td></tr>
    <tr><td>Suelo limpio y sin derrames</td><td style="text-align:center">☐</td></tr></table>
    <div class="firma"><div>Firma: ___________________</div></div>`,
    `Checklist_Apertura_${today()}`);
}

function generarCheckCierre() {
  pdfDoc(`<h1>CHECKLIST CIERRE DIARIO</h1><div class="meta">Fecha: ${formatDate(today())}</div><hr>
    <table><tr><th style="width:80%">Elemento</th><th style="width:20%;text-align:center">OK</th></tr>
    <tr><td>Vehículos guardados y llaves en lugar seguro</td><td style="text-align:center">☐</td></tr>
    <tr><td>Puertas y ventanas cerradas</td><td style="text-align:center">☐</td></tr>
    <tr><td>Elevador bajado y sin carga</td><td style="text-align:center">☐</td></tr>
    <tr><td>Compresor apagado / purgado</td><td style="text-align:center">☐</td></tr>
    <tr><td>Luces apagadas</td><td style="text-align:center">☐</td></tr>
    <tr><td>Herramientas guardadas en su lugar</td><td style="text-align:center">☐</td></tr>
    <tr><td>Residuos en zona de almacenamiento</td><td style="text-align:center">☐</td></tr>
    <tr><td>Alarma/conexión de seguridad activada</td><td style="text-align:center">☐</td></tr></table>
    <div class="firma"><div>Firma: ___________________</div></div>`,
    `Checklist_Cierre_${today()}`);
}

// ===================== CONFIG =====================
function renderConfig(){
  const c=document.getElementById('view-config');
  c.innerHTML=`
    <div class="card"><div class="card-title" style="margin-bottom:12px">Datos para Facturación</div>
      <div class="form-group"><label class="form-label">Tipo de IVA (%)</label><input class="form-input" type="number" id="cfg-iva" value="${Store._data.empresa.iva||21}"></div>
      <div class="form-group"><label class="form-label">Tipo de IRPF (%)</label><input class="form-input" type="number" id="cfg-irpf" value="${Store._data.empresa.irpf||15}"></div>
      <button class="btn btn-primary btn-sm btn-block" onclick="Store._data.empresa.iva=parseFloat($('#cfg-iva').value)||21;Store._data.empresa.irpf=parseFloat($('#cfg-irpf').value)||15;Store.save();showToast('Guardado')">${Icons.check} Guardar</button>
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Registro horario</div>
      <label class="flex items-center gap-8" style="cursor:pointer;font-size:14px"><input type="checkbox" ${Store._data.registroHorarioActivo?'checked':''} onchange="Store._data.registroHorarioActivo=this.checked;Store.save();if(Store._apiActive)Api.updateConfig({registroHorarioActivo:this.checked}).catch(()=>{})"> Registro de jornada activo (RD 8/2019)</label>
    </div>
    <div class="card"><div class="card-title" style="margin-bottom:8px">Datos</div>
      <div class="btn-group"><button class="btn btn-primary btn-sm" onclick="Store.exportar();showToast('Datos exportados')">${Icons.download} Exportar</button>
      <button class="btn btn-outline btn-sm" onclick="document.getElementById('import-file').click()">${Icons.upload} Importar</button></div>
      <input type="file" id="import-file" accept=".json" style="display:none" onchange="Store.importar(this.files[0],(err)=>{if(err)showToast(err,'error');else{showToast('Importado correctamente');renderConfig();}});this.value=''">
    </div>
    <div class="card" style="text-align:center;padding:16px">
      <div style="font-size:12px;color:#9ca3af">Taller ERP v2.0</div>
      <div style="font-size:11px;color:#9ca3af;margin-top:2px">Alcalá la Real (Jaén) · 23680</div>
      <div style="font-size:11px;color:#9ca3af;margin-top:8px">Datos guardados en el dispositivo (localStorage).</div>
      <div style="font-size:11px;color:#9ca3af">Usa Exportar/Importar para compartir con tu socio/a.</div>
    </div>
    <div class="card" style="text-align:center;padding:16px">
      <button class="btn btn-outline btn-block" onclick="authLogout()">Cerrar sesión</button>
    </div>`;
}

// ===================== APP INIT =====================
document.addEventListener('DOMContentLoaded', async function(){
  document.getElementById('menu-btn').onclick = () => toggleSidebar();
  document.getElementById('sidebar-overlay').onclick = () => toggleSidebar(false);
  document.getElementById('back-btn').onclick = () => popDetail();
  document.getElementById('profile-btn').onclick = () => navigate('profile');
  document.getElementById('notif-btn').onclick = () => navigate('alertas');

  document.getElementById('login-pass').onkeydown = e => { if (e.key === 'Enter') authLogin(); };
  document.getElementById('login-user').onkeydown = e => { if (e.key === 'Enter') authLogin(); };

  initSidebar();
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && !document.getElementById('sidebar').classList.contains('open')) {
      document.getElementById('sidebar').classList.add('open');
      document.getElementById('sidebar').classList.remove('close');
    }
    if (window.innerWidth <= 1024 && document.getElementById('sidebar').classList.contains('open') && !document.querySelector('#sidebar.close')) {
      // keep current state if user manually toggled
    }
  });

  await Store.init();

  // TOS button handlers (set once)
  const tosKey = 'tallerpro_tos';
  document.getElementById('accept-tos').onclick = () => {
    localStorage.setItem(tosKey, 'accepted');
    document.getElementById('tos-modal').classList.remove('open');
    navigate('dashboard');
  };
  document.getElementById('reject-tos').onclick = () => {
    localStorage.setItem(tosKey, 'rejected');
    document.getElementById('tos-modal').classList.remove('open');
  };

  if (Auth.user) Auth._checkTos();
});

