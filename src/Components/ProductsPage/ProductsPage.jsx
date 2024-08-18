import React, { useContext, useEffect } from 'react'

import { ProductsContext } from '../../Context/ProductsContext'
import Products from '../Products/Products';
import Loading from '../loading/Loading';



export default function ProductsPage() {
  const { products, isLoading ,setIsLoading} = useContext(ProductsContext)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 50)
  }, [])
  return (
    <>
      <section id="ProductsPage ">
      {isLoading ? <Loading /> :
         <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-5 py-10">
         {products.map((product, index) => {
           return <Products product={product} key={index}  />;
        })}
       </div>
      
      
      }
      </section>
    
       
      
      
 
    
    
    </>
  )
}
