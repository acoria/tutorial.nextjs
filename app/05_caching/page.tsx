import { PlantListComponent } from "./PlantListComponent";
import { addPlantByNameAndReload } from "./addPlant";

/**
 * This can only be tested in production since caching is not as aggressive as in dev mode.
 * To run the app in production, run "npm run build" and then "npm start".
 * To trigger a reload of pages, call revalidatePath(). -> see {@link addPlantByNameAndReload}
 */

export default async function Caching() {
  return <PlantListComponent />;
}
