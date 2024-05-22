import { IHaveJoinedNews } from "./types/IHaveJoinedNews";

/**
 * Parallel routing means to add the content from more than one different route to one page.
 * For this, a slot needs to be defined by naming the folder starting with an @ for each route to be included.
 * Each content is passed by its name after the @ as children.
 * 
 * Parallel routing is used when more nested routing is needed for at least one of the routes (e.g. like here with the years)
 * If the other route does not need or have subsequent content (e.g. like here no content for a specific year), a default.tsx needs to be added.
 * Otherwise it will result in a "not found" error.
 * 
 * IMPORTANT:
 * Slots (the folders starting with an @) are not part of the routing, so cannot be addressed with "/news". They are excluded from the routing.
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
