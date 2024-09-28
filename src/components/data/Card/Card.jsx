import style from "./card.module.scss";
export default function Card(props) {
  return (
    <div className={style["card-wrapper"]}>
      {props.data.map((item, index) => {
        return (
          <div className={style["card"]} key={index}>
            <div className={style["card-inner"]} key={index}>
              <h2 className={style["card-country"]} key={index}>
                {item.name}
              </h2>
              <div className={style["country-continent"]}>{item.continent}</div>
              <div className={style["country-population"]}>
                Population: {item.population}
              </div>
              {item.tournament.map((item, index) => {
                return (
                  <div className={style["card-matches"]} key={index}>
                    <div className={style["match-name"]}>{item.name}</div>
                    <div className={style["card-events"]} key={index}>
                      {item.event.map((item, index) => {
                        return (
                          <div className={style["card-event"]} key={index}>
                            <div className={style["event-name"]} key={index}>
                              {item.player}
                            </div>
                            <div className={style["event-minute"]} key={index}>
                              {item.minute} minutes
                            </div>
                            <div className={style["event-team"]} key={index}>
                              Team: {item.team}
                            </div>
                            <div className={style["event-type"]} key={index}>
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
