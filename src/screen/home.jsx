import Header from "../components/header";
import Enterprises from "../components/enterprises";
import { BestSeller, CarouselProduct } from "../components/showProducts";

import { productList } from "../lists";
import ShopCollection from "../components/shopCollection";
import PromotionCount from "../components/promotionCount";
import HomeInfo from "../components/homeInfo";

function Home() {
  return (
    <>
      <Header/>
      <Enterprises/>
      <CarouselProduct productList={productList} />
      <ShopCollection/>
      <BestSeller/>
      <PromotionCount/>
      <HomeInfo/>
    </>
  );
}

export default Home;
