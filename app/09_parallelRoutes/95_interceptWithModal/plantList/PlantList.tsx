import { PlantStore } from "@/components/datasource/plantStore/PlantStore";
import { PlantListEntry } from "./PlantListEntry";

export const PlantList: React.FC = async () => {
  const plantList = await PlantStore.findAll();

  return (
    <>
      <div>
        Plant list in store:
        {plantList.map((plant, index) => (
          <PlantListEntry index={index} plant={plant} key={plant.id} />
        ))}
      </div>
    </>
  );
};
