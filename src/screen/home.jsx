import Header from "../components/header";
import Enterprises from "../components/enterprises";
import { BestSeller, CarouselProduct } from "../components/showProducts";

import { productList } from "../lists";
import ShopCollection from "../components/shopCollection";

function Home() {
  return (
    <>
      <Header/>
      <Enterprises/>
      <CarouselProduct productList={productList} />
      <ShopCollection/>
      <BestSeller/>
    </>
  );
}

export default Home;
