"use server";

import { revalidatePath } from "next/cache";
import { PlantStore } from "../../components/datasource/plantStore/PlantStore";
import { redirect } from "next/navigation";

export async function addPlantByName(name: string) {
  await PlantStore.addPlantByName(name);
  redirect("/05_caching/plantList");
}

export async function addPlantByNameAndReload(name: string) {
  await PlantStore.addPlantByName(name);
  // revalidatePath("/plantList");
  revalidatePath("/05_caching/plantList");
  revalidatePath("/05_caching", "layout");
  // revalidatePath("/05_caching", "page");
  redirect("/05_caching/plantList");
}
