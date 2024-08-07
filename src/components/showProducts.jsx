import Product from "./product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { productList } from "../lists";

export function CarouselProduct({ productList }) {
  return (
    <div className="pt-12 flex-row">
      <h1 className="mx-40 text-5xl font-medium">New Arrivals</h1>
      {/* product list */}
      <section className="my-12 ml-40 flex">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            820: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1000: {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
            1320: {
              slidesPerView: 4.5,
              spaceBetween: 50,
            },
            1780: {
              slidesPerView: 5.5,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 aspect-2/3 gap-x-6 gap-y-12">
            {productList
              .filter((product) => product.tag === "NEW")
              .map((product) => (
                <SwiperSlide key={product.id}>
                  <Product
                    product={product}
                    title={product.title}
                    price={product.price}
                    img={product.img}
                    stars={product.stars}
                    tag={product.tag}
                    sale={product.sale}
                    saleValue={product.saleValue}
                  />
                  <p className="pb-14"></p>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </section>
    </div>
  );
}

export function BestSeller() {
  return (
    <div className="mx-40 flex-row mt-12 mb-24">
      <h1 className=" text-5xl font-medium">Best Seller</h1>
      <section className="my-12 grid grid-cols-4 gap-x-6 gap-y-12">
        {productList
          .filter((product) => product.tag === "HOT")
          .map((product) => (
            <Product
              key={product.id} // Use a unique identifier from the product object
              id={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
              stars={product.stars}
              tag={product.tag}
              sale={product.sale}
              saleValue={product.saleValue}
            />
          ))}
      </section>
    </div>
  );
}
