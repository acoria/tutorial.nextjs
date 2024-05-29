"use client";

import {
  addPlantByName,
  addPlantByNameAndReload,
} from "@/app/06_caching/addPlant";
import Link from "next/link";
import { useState } from "react";

export const PlantListComponent: React.FC = () => {
  const [plantNames, setPlantNames] = useState<string[]>([
    "Xmas tree",
    "Oleander",
    "Rose",
    "Ginko",
    "Birch",
    "Dandelion",
    "Angel's trumpet",
  ]);

  const getPlantName = (): string => {
    let plantName: string = "";
    setPlantNames((previous) => {
      plantName = previous.pop() ?? "plant with no name";
      return [...previous];
    });
    return plantName;
  };

  const addWithReload = async () => {
    await addPlantByNameAndReload(getPlantName());
  };

  const addWithoutReload = () => {
    addPlantByName(getPlantName());
  };

  return (
    <div>
      <h2>Add a new plant or navigate</h2>
      <button onClick={addWithoutReload}>Add without reload (default)</button>
      <button onClick={addWithReload}>Add with reload</button>
      <Link href={"/06_caching/plantList"}>Go to plant list</Link>
    </div>
  );
};
