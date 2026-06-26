require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function run() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'Taller_MoTor',
    charset: 'utf8mb4',
    multipleStatements: true
  });

  // Check if already seeded
  const [rows] = await pool.query("SELECT COUNT(*) AS cnt FROM empleados");
  if (rows[0].cnt > 0) {
    console.log('Database already has data, skipping seed');
    await pool.end();
    process.exit(0);
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

  // Ensure admin exists with plain text password
  await pool.query(
    "INSERT IGNORE INTO empleados (nombre, usuario, contrasena, rol, alta_ss, contrato_escrito) VALUES ('Admin del Sistema', 'admin', 'admin', 'admin', 1, 1)"
  );

  await pool.end();
  console.log('Seed complete. Admin: admin / admin');
  process.exit(0);
}

run().catch(e => { console.error('Seed error:', e.message); process.exit(1); });
