import { useEffect, useState } from "react";
import { TProduct } from "../type/Types";
import axios from "axios";
import Container from "../components/container/Container";
import Banner from "../components/banner/Banner";
// import { getProducts } from "../services/api";

function Store() {
  const [data, setData] = useState<TProduct[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8890/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <Container>
          <Banner/>
        <div className="grid grid-cols-1 gap-4 my-6 mx-4 md:grid-cols-3 lg:grid-cols-4">
          {data.map((res) => (
            <div
              key={res.id}
              className="flex  justify-center items-center text-justify flex-col border shadow-inner p-2 rounded"
            >
              <img src={res.image} alt="image" className="w-52 h-fit m-4 " />
              <p>{res.title}</p>
              <p>{res.des}</p>
              <p>{res.category}</p>
                <p className="text-white bg-green-700  py-2 px-6 rounded ">
                  {`${res.price} €`}
                </p>
                <div className="flex w-full justify-center my-4 [&>*]:mx-2 [&>*]:font-bold hover:[&>*]:scale-105">
                  <button className='text-white bg-blue-500 w-1/4 rounded shadow-inner '>+</button>
                  <button className='text-white bg-blue-500 w-1/4 rounded shadow-inner '>خرید </button>
                  <button className='text-white bg-blue-500 w-1/4 rounded shadow-inner '>-</button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
