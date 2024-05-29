import { IPlant } from "./model/IPlant";

class PlantStoreDefault {
  private sql = require("better-sqlite3");
  private db = this.sql("plants.db");

  async addPlantByName(name: string) {
    return new Promise((resolve) => {
      this.db.prepare(`INSERT INTO plants (name) VALUES (@name)`).run({ name });
      resolve(true);
    });
  }

  async findAll(): Promise<IPlant[]> {
    return new Promise((resolve) => {
      resolve(this.db.prepare(`SELECT * FROM plants`).all());
    });
  }

  async findById(id: number): Promise<IPlant> {
    return new Promise((resolve) => {
      const plants = this.db
        .prepare(`SELECT * FROM plants where id = ${id}`)
        .all();
      resolve(plants[0]);
    });
  }
}
export const PlantStore = new PlantStoreDefault();
