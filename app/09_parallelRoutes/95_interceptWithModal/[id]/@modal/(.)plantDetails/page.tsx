import { PlantStore } from "@/components/datasource/plantStore/PlantStore";
import { IHavePlantIdParams } from "../../../types/IHavePlantIdParams";


export default async function PlantDetails({ params }: IHavePlantIdParams) {
  const plant = await PlantStore.findById(params.id);
  return (
    <main style={{ backgroundColor: "gray" }}>
      <div>Intercepted Plant details of</div>
      <div>{`${plant.id}) ${plant.name}`}</div>
    </main>
  );
}
