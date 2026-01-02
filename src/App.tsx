import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import Products from "./components/products";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Products />
      </main>
    </>
  );
}

export default App;
