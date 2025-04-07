"use server";

import { PlantStore } from "@/components/datasource/plantStore/PlantStore";
import styles from "./page.module.css";
import Link from "next/link";

export default async function PlantList() {
  const plantList = await PlantStore.findAll();

  console.log("reloaded");
  return (
    <div>
      Plant list in store:
      {plantList.map((plant, index) => (
        <h2 key={index} className={styles.plant}>
          {plant.name}
        </h2>
      ))}
      <Link href="/06_caching">Go back</Link>
    </div>
  );
}
