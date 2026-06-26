require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

function getConfig() {
  if (process.env.MYSQL_URL) {
    const url = new URL(process.env.MYSQL_URL);
    return {
      host: url.hostname,
      port: parseInt(url.port) || 3306,
      user: decodeURIComponent(url.username),
      password: decodeURIComponent(url.password),
      database: url.pathname.replace(/^\//, ''),
      ssl: { rejectUnauthorized: false }
    };
  }
  return {
    host: process.env.DB_HOST || process.env.MYSQL_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || process.env.MYSQL_PORT) || 3306,
    user: process.env.DB_USER || process.env.MYSQL_USER || 'root',
    password: process.env.DB_PASSWORD || process.env.MYSQL_PASSWORD || '',
    database: process.env.DB_NAME || process.env.MYSQL_DATABASE || 'Taller_MoTor'
  };
}

async function run() {
  const pool = mysql.createPool({
    ...getConfig(),
    charset: 'utf8mb4',
    multipleStatements: true
  });

  // Check if tables exist (catch error if no tables at all)
  try {
    const [rows] = await pool.query("SELECT COUNT(*) AS cnt FROM empleados");
    if (rows[0].cnt > 0) {
      console.log('Database already has data, skipping seed');
      await pool.end();
      process.exit(0);
    }
  } catch (e) {
    // Table doesn't exist, proceed with seed
  }

  const sqlPath = path.join(__dirname, '..', 'database.sql');
  if (fs.existsSync(sqlPath)) {
    const sql = fs.readFileSync(sqlPath, 'utf8');
    const cleanSql = sql
      .replace(/CREATE DATABASE .*?;/i, '')
      .replace(/USE .*?;/i, '');
    await pool.query(cleanSql);
    console.log('Schema + seed data loaded');
  }

  // Ensure admin exists
  await pool.query(
    "INSERT IGNORE INTO empleados (nombre, usuario, contrasena, rol, alta_ss, contrato_escrito) VALUES ('Admin del Sistema', 'admin', 'admin', 'admin', 1, 1)"
  );

  await pool.end();
  console.log('Seed complete. Admin: admin / admin');
  process.exit(0);
}

run().catch(e => { console.error('Seed error:', e.message); process.exit(1); });
