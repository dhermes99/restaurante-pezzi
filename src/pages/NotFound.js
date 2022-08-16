import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <section className="flex items-center h-full p-16 dark:bg-rose-400 dark:text-black-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-black-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Página não encontrada
            </p>
            <p className="mt-4 mb-8 dark:text-black-400">
              Mas não se preocupe, você pode encontrar muitas outras coisas em
              nossa página inicial.
            </p>
            <Link to="/">
              <div>
                <a
                  rel="noopener noreferrer"
                  className="px-8 py-3 font-semibold rounded dark:bg-rose-600 dark:text-gray-900"
                >
                  Voltar à página inicial
                </a>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
