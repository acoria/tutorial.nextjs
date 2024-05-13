"use server";

import { revalidatePath } from "next/cache";
import { PlantStore } from "../../components/datasource/plantStore/PlantStore";
import { redirect } from "next/navigation";

export async function addPlantByName(name: string) {
  await PlantStore.addPlantByName(name);
  redirect("/05_caching/plantList");
}

/**
 * revalidatePath:
 *  - takes the path to revalidate e.g. "/05_caching"
 *  - additionally takes the depth
 *      - default: "page" -> revalidatePath("/05_caching", "page") only reloads this one page
 *      - other option: "layout" -> additionally reloads all siblings
 *      - revalidatePath("/*", "layout") -> reloads the entire app
 */
export async function addPlantByNameAndReload(name: string) {
  await PlantStore.addPlantByName(name);
  revalidatePath("/05_caching/plantList");
  revalidatePath("/05_caching", "layout");
  // revalidatePath("/05_caching", "page");
  redirect("/05_caching/plantList");
}
