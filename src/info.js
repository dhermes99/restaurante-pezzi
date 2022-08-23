import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { useFetch } from "./hooks/useFetch";
import Addinfo from "./pages/Addinfo";
import Home from "./pages/home";

export default function Info() {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;

  const { data: product } = useFetch(url);

  return (
    <div className="content-center  ">
      <Navbar />
      <div className="justify-items-center">
        {product && (
          <div class="flex justify-center my-16 ">
            <div class="flex flex-col md:flex-row md:max-w-96 rounded-lg bg-white shadow-lg bg-rose-400">
              <img
                className=" w-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={product.imageSrc}
                alt={product.imageAlt}
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  {product.name}
                </h5>
                <p class="text-gray-700 text-base mb-4">{product.imageAlt}</p>
                <p class="text-black-600">{product.price}</p>
                <br />
                <br />
              </div>
            </div>
          </div>
        )}
        <Addinfo />
      </div>
      <Footer />
    </div>
  );
}

//<p>ID do produto: {id}</p>
//    {error && <p>Ocorreu um erro...</p>}
//  {loading && <p>Carregando página</p>}
//{product && (
//<div>
//
//</div>
//)}
