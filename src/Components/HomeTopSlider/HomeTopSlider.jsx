import React, { useContext } from "react";
import Slider from "react-slick";
import { ProductsContext } from "../../Context/ProductsContext";


export default function HomeTopSlider() {
  const { products } = useContext(ProductsContext);
 
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For screens less than 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens less than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens less than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="HomeTopSlider" className="overflow-hidden w-full md:w-2/3  lg:w-2/3 2xl:w-2/5 mx-auto">
  <Slider {...settings}>
      { products.slice(0,3)?.map((product, index) => {
        return  (
          <div key={index} className="rounded-lg shadow-md ">
           <img src={product.imageCover} className="w-1/3 lg:w-1/2 2xl:w-1/2 mx-auto object-cover bg-center"  alt="" />

          
                
            </div>
        
            
        );
      })}
    </Slider>
    </section>
  
    
  );
}
