import Banner from "../../components/home/banner";
import Header from "../../components/home/header";
import Products from "../../components/home/products";

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
