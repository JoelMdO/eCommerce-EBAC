// import "./App.css";
import Banner from "./banner";
import Header from "./header";
import Products from "./products";
//import "./styles/main.css";

function Home() {
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

export default Home;
