import { PlantListComponent } from "./PlantListComponent";
import { addPlantByNameAndReload } from "./addPlant";

/**
 * This can only be tested in production since caching is not as aggressive as in dev mode.
 * To run the app in production, run "npm run build" and then "npm start".
 * To trigger a reload of pages, call revalidatePath(). -> see {@link addPlantByNameAndReload}
 */

/**
 * Always test your app in production (build it, not just run it in dev mode)
 * Reason: The caching in production is a lot more aggressive and the app might need some "revalidatePath"
 */
export default async function Caching() {
  return <PlantListComponent />;
}
