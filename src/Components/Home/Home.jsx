import React, { useContext, useEffect, useState } from "react";
import Products from "../Products/Products";
import { ProductsContext } from "../../Context/ProductsContext";
import ProductSlider from "../ProductSlider/ProductSlider";
import Loading from "../loading/Loading";
import Slider from "react-slick";
import HomeTopSlider from "../HomeTopSlider/HomeTopSlider";
import Image1 from "../../images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg";
import Image2 from "../../images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg";

export default function Home() {
  const { products, isLoading, setIsLoading } = useContext(ProductsContext);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, []);

  return (
    <>
      {
        isLoading ? <Loading /> : 
          
        <section id="home" className="container mx-auto px-4 py-4 overflow-hidden">
        <div className="flex flex-col lg:flex-row  md:flex-row  items-center  gap-3 md:px-6">
            <HomeTopSlider />
          <div className="w-full lg:w-1/3  md:w-1/3   space-y-4 flex flex-col items-center mx-auto ">
            <img
              src={Image1}
              className=" object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              alt="Promotional image 1"
            />
            <img
              src={Image2}
              className=" object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              alt="Promotional image 2"
            />
          </div>
        </div>

          <div className="mt-8">
              <ProductSlider />
              
            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3  ">
              {products.map((product, index) => (
                <Products product={product} key={index} />
              ))}
            </div>
          </div>
 
      </section>
          
      }
  
    </>
  );
}
