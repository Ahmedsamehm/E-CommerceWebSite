import React, { useContext } from "react";
import Slider from "react-slick";
import { ProductsContext } from "../../Context/ProductsContext";

export default function ProductSlider() {
  const { products } = useContext(ProductsContext);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For screens less than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens less than 768px
        settings: {
          slidesToShow: 4,
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
  <section id="ProductSlider" className="overflow-hidden w-full md:w-full  p-0 md:p-10   mx-auto">
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="px-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="aspect-w-1 aspect-h-1 ">
              <img 
                src={product.imageCover} 
                className="object-cover w-full h-full"
                alt={product.title || "Product image"} 
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </section>
);


}
