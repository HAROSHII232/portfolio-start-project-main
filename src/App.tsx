import "./App.css";
import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <GoTopBtn/>
    </div>
  );
}

export default App;
