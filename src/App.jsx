import { LuSquareMenu } from "react-icons/lu";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Button from "./components/button/Button";
import { useState } from "react";
import Header from "./components/header/Header";
function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [currentComp, setCurrentComp] = useState(null);
  const [over, setOver] = useState(false);
  const handleMenu = () => {
    setMenuToggle((preState) => !preState);
  };
  const handleMenuButton = (ele) => {
    setCurrentComp(ele);
    setMenuToggle(false);
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
        currentTitle={currentComp}
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
      <section
        className="comp-box"
        onClick={(e) => {
          setMenuToggle(false);
        }}
      >
        <div className="comp-area"></div>
      </section>
    </main>
  );
}

export default App;
