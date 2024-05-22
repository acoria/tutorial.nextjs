import Link from "next/link";
import { NewsInfo } from "../../services/NewsInfo";

export default function News() {
  return (
    <div>
      <ul>
        {NewsInfo.getAllNews().map((news) => (
          <div key={news.year}>
            <Link href={`/09_parallelRoutes/${news.year}`}>
              {news.year}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
