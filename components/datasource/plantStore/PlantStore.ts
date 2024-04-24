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
}
export const PlantStore = new PlantStoreDefault();
