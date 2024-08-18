import React, { useContext, useEffect, useState } from "react";
import Products from "../Products/Products";
import { ProductsContext } from "../../Context/ProductsContext";
import ProductSlider from "../ProductSlider/ProductSlider";
import Loading from "../loading/Loading";
import Slider from "react-slick";
import HomeTopSlider from "../HomeTopSlider/HomeTopSlider";
import Image1 from '../../images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg'
import Image2 from '../../images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg'




export default function Home() {
  const { products ,isLoading,setIsLoading } = useContext(ProductsContext);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 50)
  }, [])

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 50);
  }, []);
  

  

  

  return (
   
      
    <>
    <section id="home" className="container mx-auto px-4 py-4">
  <div className="flex flex-col lg:flex-row items-center gap-6">
    <div className="w-full lg:w-2/3">
      <HomeTopSlider />
    </div>
    <div className="w-full lg:w-1/3 space-y-4 flex flex-col items-center">
      <img src={Image1} className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" alt="Promotional image 1" />
      <img src={Image2} className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" alt="Promotional image 2" />
    </div>
  </div>

  {isLoading ? (
    <Loading />
  ) : (
    <div className="mt-8">
      <div className="mb-8">
        <ProductSlider />
      </div>


              <div className=" grid grid-cols-1 sm:grid-cols-2 md:gird-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-5  ">
                
                {products.map((product, index) => (
                  <Products product={product} key={index} />
                ))}
            
  
</div>


    </div>
  )}
</section>
   
      
      </>

  );
  
}