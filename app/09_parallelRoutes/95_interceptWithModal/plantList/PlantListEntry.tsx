"use client";

import { useRouter } from "next/navigation";
import { IPlantListEntryProps } from "./IPlantListEntryProps";
import styles from "./PlantListEntry.module.css";

export const PlantListEntry: React.FC<IPlantListEntryProps> = (props) => {
  const router = useRouter();

  return (
    <h2
      key={props.index}
      className={styles.plant}
      onClick={() =>
        router.push(
          `/09_parallelRoutes/95_interceptWithModal/${props.plant.id}/plantDetails`
        )
      }
    >
      {`${props.plant.id}) ${props.plant.name}`}
    </h2>
  );
};
