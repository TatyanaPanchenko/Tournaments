import Card from "../Card/Card";
import data from "../../data/data.json";
import { getNewObj } from "../../getNewObj";
import style from "./main.module.scss";

export default function Main() {
  const { tournaments, countries, events } = data;
  const newObj = [];
  const tournamentsArr = getNewObj(tournaments, countries, events, newObj);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style["main-wrapper"]}>
          <h1 className={style["main-title"]}>Tournaments</h1>
          <Card data={tournamentsArr} />
        </div>
      </div>
    </div>
  );
}
