import { NewsInfo } from "../../../services/NewsInfo";
import { IHaveYearParams } from "../../../types/IHaveYearParams";

export default function YearlyNews({ params }: IHaveYearParams) {
  const news = NewsInfo.findNewsByYear(params.year);

  return (
    <div>
      <div>{news?.year}</div>
      <div>{news?.content}</div>
    </div>
  );
}
