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
  redirect("/06_caching/plantList");
}

/**
 * revalidatePath:
 *  - takes the path to revalidate e.g. "/06_caching"
 *  - additionally takes the depth
 *      - default: "page" -> revalidatePath("/06_caching", "page") only reloads this one page
 *      - other option: "layout" -> additionally reloads all siblings
 *      - revalidatePath("/", "layout") -> reloads the entire app
 */
export async function addPlantByNameAndReload(name: string) {
  await PlantStore.addPlantByName(name);
  //this would not be enough, since the default is to only reload one page
  // revalidatePath("/06_caching");
  //default:
  // revalidatePath("/06_caching", "page");

  //You can either refresh the correct page directly
  // revalidatePath("/06_caching/plantList");
  //Or refresh with "layout" -> this will reload the page and all subsequent pages
  revalidatePath("/06_caching", "layout");

  //You can refresh the entire application like this:
  // revalidatePath("/", "layout");
  redirect("/06_caching/plantList");
}
