import style from "./header.module.scss";
import logo from "../../assets/logo.png";
export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style["header-wrapper"]}>
          <div className={style.logo}>
            <img src={logo} alt="logotip" />
          </div>
        </div>
      </div>
    </header>
  );
}
