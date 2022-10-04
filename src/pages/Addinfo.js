/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from "@heroicons/react/solid";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function Info() {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;

  const { data: product } = useFetch(url);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-0 sm:px-6">
        <div>
          {product && (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <dl>
                <div className="bg-gray-50 px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"></div>
                <div className="bg-white px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500"></dt>
                  <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-3 px-4 rounded-full mx-8 my-8 ">
                    COMPRAR
                  </button>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Endereço de retirada
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Avenida Paulista - São Paulo - Brasil
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Informações
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Pode conter traços de leite e glúten e outras substâncias
                    consideradas alergênicas
                  </dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
