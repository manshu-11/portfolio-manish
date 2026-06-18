import { LuSquareMenu } from "react-icons/lu";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Button from "./components/button/Button";
import { useState } from "react";
import Header from "./components/header/Header";
function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [over, setOver] = useState(false);
  const handleMenu = () => {
    setMenuToggle((preState) => !preState);
  };
  const handleMenuButton = () => {
    setMenuToggle(true);
  };
  return (
    <main className="main">
      <header className="headerBox">
        <Header />
      </header>
      <SideBar
        menuButtonAction={handleMenuButton}
        status={menuToggle}
        overState={over}
      />
      <div className="menu-button-box">
        <Button action={handleMenu}>
          <LuSquareMenu
            fontSize={30}
            color={over ? "var(--icon-hover-color)" : "var(--icon-color)"}
            strokeWidth={0.75}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
          />
        </Button>
      </div>
      <section className="comp-box">
        <div className="comp-area"></div>
      </section>
    </main>
  );
}

export default App;
