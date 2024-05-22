/**
 * Parallel routing means to add the content from more than one different route to one page.
 * For this, a slot needs to be defined by naming the folder starting with an @ for each route to be included.
 * Each content is passed by its name after the @ as children.
 */

import { IHaveJoinedNews } from "../types/IHaveJoinedNews";

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
