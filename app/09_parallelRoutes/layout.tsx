import { ReactNode } from "react";
import { IHaveJoinedNews } from "./types/IHaveJoinedNews";

/**
 * Parallel routing means to add the content from more than one different route to one page.
 * For this, the folder name needs an @ for each route to be included.
 * Each content is passed by its name after the add as children
 */
export default function Layout({ latest, news }: IHaveJoinedNews) {
  return (
    <div>
      <h3>Latest news:</h3>
      {latest}
      <h3>News:</h3>
      {news}
    </div>
  );
}
