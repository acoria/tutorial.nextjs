import { IHaveJoinedNews } from "../types/IHaveJoinedNews";

/**
 * By catching all routes, only one page is implemented for several routes
 * but the content can be shown depending on the different routes.
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
