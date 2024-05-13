import { PlantListComponent } from "./PlantListComponent";

/**
 * Always test your app in production (build it, not just run it in dev mode)
 * Reason: The caching in production is a lot more aggressive and the app might need some "revalidatePath"
 */
export default async function Caching() {
  return <PlantListComponent />;
}
