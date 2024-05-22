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
