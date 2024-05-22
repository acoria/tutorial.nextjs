import { news } from "../data/news";
import { INews } from "../model/INews";

class NewsInfoDefault {
  findNewsByYear(year: string) {
    return news.find((singleNews) => singleNews.year === year);
  }

  getAllNews(): INews[] {
    return news;
  }
}
export const NewsInfo = new NewsInfoDefault();
