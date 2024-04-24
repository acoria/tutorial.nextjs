"use server";

import { revalidatePath } from "next/cache";
import { PlantStore } from "../../components/datasource/plantStore/PlantStore";
import { redirect } from "next/navigation";

/**
 * This will not trigger a reload in production and will show
 * the same amount of entries as before adding the new entry.
 */
export async function addPlantByName(name: string) {
  await PlantStore.addPlantByName(name);
  redirect("/05_caching/plantList");
}

/**
 * Calling "revalidatePath" will trigger a reload of the page.
 * The default is the page/route that you hand over.
 */
export async function addPlantByNameAndReload(name: string) {
  await PlantStore.addPlantByName(name);
  //this would not be enough, since the default is to only reload one page
  // revalidatePath("/05_caching");
  //default:
  // revalidatePath("/05_caching", "page");

  //You can either refresh the correct page directly
  // revalidatePath("/05_caching/plantList");
  //Or refresh with "layout" -> this will reload the page and all subsequent pages
  revalidatePath("/05_caching", "layout");

  //You can refresh the entire application like this:
  // revalidatePath("/", "layout");
  redirect("/05_caching/plantList");
}
