import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "./cartSlice";

function ProductCard({user}) {
  const context = useContext(myContext);
  const { product, searchkey, filterType } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  // add to cart
  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("add to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section className="text-gray-600 body-font h-full" style={{backgroundColor: "#22092C"}}>
      <div className="container px-1 py-5 md:py-16 mx-auto h-full">
        {/* <div className="lg:w-1/3 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 ml-1 text-gray-900"
            style={{ color: "black" }}
          >
            {" "}
            Featured Menu Items{" "}
          </h1>
      
          <div className="h-1 w-20 bg-[#02006c] rounded"></div>
        </div> */}

        <div className="flex flex-wrap -m-4" >
          {product
            .filter((obj) => obj.title.toLowerCase().includes(searchkey))
            .map((item, index) => {
              const { title, price, description, imageUrl, id } = item;
              return (
                <div
                  onClick={() =>
                    (window.location.href = `/productinfo/${item.id}`)
                  }
                  className="p-4 md:w-1/4  drop-shadow-lg  "
                >
                  <div
                    className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-[#00072d] border-opacity-90 rounded-2xl overflow-hidden"
                    style={{ backgroundColor: "#662549", color: "white" }}
                  >
                    <div className="flex justify-center cursor-pointer">
                      <img
                        className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                        src={imageUrl}
                        alt="blog"
                      />
                    </div>
                    <div className="p-5 border-t-2">
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                        style={{ color: "white" }}
                      >
                        Annapurna
                      </h2>
                      <h1
                        className="title-font text-lg font-medium text-gray-900 mb-3"
                        style={{ color: "#FFB07F", fontWeight: "bolder"}}
                      >
                        {title}
                      </h1>
                      {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                      <p
                        className="leading-relaxed mb-3"
                        style={{ color: "#7AA874", fontWeight: "bolder" }}
                      >
                        ₹ {price}
                      </p>
                      <div className=" flex justify-center ">
                        <button
                          onClick={() => addCart(item)}
                          type="button"
                          className="focus:outline-none text-white bg-[#22092C] hover:bg-[#22092C] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {/* <div className=" flex justify-center">
                                            <button onClick={()=>addCart()} type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                        </div> */}
      </div>
    </section>
  );
}

export default ProductCard;
