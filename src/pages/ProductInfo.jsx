import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Annapurna/Layout'
import myContext from '../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../components/Annapurna/cartSlice';
import {db} from '../firebase';

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [products, setProducts] = useState('')
    const params = useParams()
    // console.log(products.title)

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(db, "products", params.id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getProductData()

    }, [])



    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    // console.log(cartItems)

    // add to cart
    const addCart = (products) => {
        dispatch(addToCart(products))
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])




    return (
        // <Layout>
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
            {products && 
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                    alt="ecommerce"
                    className="lg:w-1/3 w-full lg:h-auto  object-cover object-center rounded"
                    src={products.imageUrl}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        ANNAPURNA
                    </h2>
                    <h1 className="text-white text-3xl title-font font-medium mb-1">
                        {products.title}
                    </h1>
                    <div className="flex mb-4">
                        {/* <span className="flex items-center">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg> */}
                            {/* <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg> */}
                            {/* <span className="text-gray-600 ml-3">14 Reviews</span> */}
                        {/* </span> */}
                        
                    </div>
                    <p className="leading-relaxed border-b-2 mb-5 pb-5">
                        {products.description}
                    </p>

                    <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900"
                        style={{ color: "white" }}>
                        ₹{products.price}
                        </span>
                        <button  onClick={()=>addCart(products)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                        style={{ backgroundColor: "#7A316F", color: "white" }}>
                            Add To Cart
                        </button>
                        
                    </div>
                </div>
            </div>}
        </div>
    </section>
        /* </Layout> */
    )
}

export default ProductInfo