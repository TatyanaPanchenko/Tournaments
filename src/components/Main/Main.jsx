import style from "./main.module.scss";

export default function Main(props) {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style["main-wrapper"]}>
          <h1 className={style["main-title"]}>Tournaments</h1>
          <div className={style["card-wrapper"]}>
            {props.data.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-inner" key={index}>
                    <h2 className={style["card-country"]} key={index}></h2>
                    <div className={style["card-matches"]} key={index}>
                      <div className={style["card-name"]} key={index}>
                        {item[0].name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
