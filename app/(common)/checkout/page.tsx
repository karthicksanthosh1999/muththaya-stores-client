import Hero from '@/components/custom/Hero';
import { Separator } from '@/components/ui/separator';
import React from 'react'

function page() {

  const products = {
    total : "1000",
    products:[
      {
        id: "1",
        productName : "Apple",
        price: "100"
      },
      {
        id: "2",
        productName : "Mongo",
        price: "100"
      },
      {
        id: "1",
        productName : "Orange",
        price: "100"
      },
    ]
  };

  return (
    <>
     <Hero page="Checkout" bread={["Home","Checkout"]} />

     <section className="w-full flex items-center justify-between">
      <div className="w-full">
        <h1 className="text-xl font-semibold">Billing Details</h1>
      </div>
      <div className="w-full">
        <h1 className="text-xl font-semibold my-5">Your Order</h1>
        <div className="bg-gray-200">
          <div className="flex items-center uppercase justify-between p-5 text-base font-semibold">
            <h5>Product</h5>
            <h5>Subtotal</h5>
          </div>
          <Separator/>
          {
            products && products.products.map((item) => (
            <div className="flex items-center justify-between px-5 py-2 text-sm text-gray-500">
              <h5>{item.productName}</h5>
              <h5>${item.price}</h5>
            </div>
            ))
          }
        </div>
      </div>
     </section>
    </>
  )
}

export default page
