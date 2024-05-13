/**
 * run "node initdb.ts" to create the db-file plant.db
 */

const sql = require("better-sqlite3");
const db = sql("plants.db");

const dummyPlants = [{ name: "Palm tree" }, { name: "Sunflower" }];

db.prepare(`DROP TABLE plants`).run();
db.prepare(
  `
     CREATE TABLE IF NOT EXISTS plants (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         name TEXT NOT NULL
      )
  `
).run();

async function initData() {
  const stmt = db.prepare(`
        INSERT INTO plants VALUES (
           null,
           @name
        )
     `);

  for (const plant of dummyPlants) {
    stmt.run(plant);
  }
}

initData();
