import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Sort from "./Sort";
import Search from "./Search";
import { LineWave } from "react-loader-spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [query, setQuery] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  const allQuery = `?search=${query.search || ""}&sort=${
    query.sort || ""
  }&priceMin=${query.priceMin || ""}&priceMax=${query.priceMax || ""}&brands=${
    query.brands?.join("+") || ""
  }&category=${query.category || ""}&currPage=${currentPage}&limit=${limit}`;

  useEffect(() => {
    setIsLoading(true);
    axios(`https://ai-hire-server.vercel.app/products${allQuery}`)
      .then((data) => {  
        const newTotalPages = Math.ceil(data.data.total / limit);
        setProducts(data.data.products);
        setTotalPages(newTotalPages);
        if (newTotalPages < currentPage) {
          setCurrentPage(1);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, [allQuery,currentPage]);
  return (
    <div>


      <section className="px-4 py-8">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[300px_1fr] gap-6">
          <Sort query={query} setQuery={setQuery} />
          <main>
            <Search query={query} setQuery={setQuery} />

            {isloading ? (
              <p className=" flex justify-center items-center">  <LineWave
                visible={true}
                height="300"
                width="500"
                color="#7357D3"
                ariaLabel="line-wave-loading"
                wrapperStyle={{}}
                wrapperClass=""
                firstLineColor="#7327D3"
                middleLineColor="#7957D3"
                lastLineColor="#7627D3"
                /></p>
            ) : (
              <>
                <div className={`max-w-screen-xl mx-auto my-8`}>
                  <div className=" grid grid-cols-3  gap-6">
                    {products.map((product) => (
                      <>
                        <div className=" bg-white border border-gray-200 rounded-lg shadow w-[290px] text-start">
                          <figure className="relative">
                            <img
                              src={product.image}
                              className="w-full h-60 rounded-t-lg object-cover pt-3 px-3"
                              alt=""
                            />
                          </figure>
                          <div className="p-4">
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                              {product.name}
                            </h3>
                            <p className="mb-2 text-sm text-gray-600">
                              {(product.description).slice(0,100)}
                            </p>
                            <p className="mb-2">Category: {product.category}</p>
                            <p className="mb-2">Brand: {product.brand}</p>
                            <p className="mb-2">
                              <p className="mb-2">Published at: {(product.date).toLocaleString()}</p>
                            </p>
                            <p className="text-xl font-semibold text-primary">
                              ${product.price}
                            </p>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
              </>
            )}
          </main>
        </div>
      </section>
    </div>
  );
};

export default Products;
