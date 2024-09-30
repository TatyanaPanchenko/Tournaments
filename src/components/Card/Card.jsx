import style from "./card.module.scss";
import createUniqueID from "../../createUniqueID";

export default function Card(props) {
  return (
    <div className={style["card-wrapper"]}>
      {props.data.map((item) => {
        return (
          <div className={style["card"]} key={createUniqueID()}>
            <div className={style["card-inner"]} key={createUniqueID()}>
              <h2 className={style["card-country"]} key={createUniqueID()}>
                {item.name}
              </h2>
              <div className={style["country-continent"]}>{item.continent}</div>
              <div className={style["country-population"]}>
                Population: {item.population}
              </div>
              {item.tournament.map((item, index) => {
                return (
                  <div className={style["card-matches"]} key={createUniqueID()}>
                    <div className={style["match-name"]}>{item.name}</div>
                    <div
                      className={style["card-events"]}
                      key={createUniqueID()}
                    >
                      {item.event.map((item, index) => {
                        return (
                          <div
                            className={style["card-event"]}
                            key={createUniqueID()}
                          >
                            <div
                              className={style["event-name"]}
                              key={createUniqueID()}
                            >
                              {item.player}
                            </div>
                            <div
                              className={style["event-minute"]}
                              key={createUniqueID()}
                            >
                              {item.minute} minutes
                            </div>
                            <div
                              className={style["event-team"]}
                              key={createUniqueID()}
                            >
                              Team: {item.team}
                            </div>
                            <div
                              className={style["event-type"]}
                              key={createUniqueID()}
                            >
                              Type: {item.type}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
