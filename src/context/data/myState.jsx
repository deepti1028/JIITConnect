// import React, { useEffect, useState } from 'react'
// import MyContext from './myContext';
// import { db } from '../../firebase';
// import {doc,setDoc,deleteDoc, Timestamp, addDoc, collection, onSnapshot, orderBy, query, getDocs } from 'firebase/firestore';
// import { toast } from 'react-toastify';


// function MyState(props) {
//   const [mode, setMode] = useState('light');  
//   const [loading, setLoading] = useState(false); 

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = 'rgb(17, 24, 39)';
//     }
//     else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//     }
//   }

//   const [products, setProducts] = useState({
//     title: null,
//     price: null,
//     imageUrl: null,
//     category: null,
//     description: null,
//     time: Timestamp.now(),
//     date: new Date().toLocaleString(
//       "en-US",
//       {
//         month: "short",
//         day: "2-digit",
//         year: "numeric",
//       }
//     )

//   })

//   // ********************** Add Product Section  **********************
//   const addProduct = async () => {
//     if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
//       return toast.error('Please fill all fields')
//     }
//     const productRef = collection(db, "products")
//     setLoading(true)
//     try {
//       await addDoc(productRef, products)
//       toast.success("Product Added successfully")
//       setTimeout(() => {
//         window.location.href = '/dashboard'
//       }, 800);
//       getProductData()
//      // closeModal()
//       setLoading(false)
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//     }
//     setProducts("")
//   }

//   const [product, setProduct] = useState([]);

//   // ****** get product
//   const getProductData = async () => {
//     setLoading(true)
//     try {
//       const q = query(
//         collection(db, "products"),
//         orderBy("time"),
//         // limit(5)
//       );
//       const data = onSnapshot(q, (QuerySnapshot) => {
//         let productsArray = [];
//         QuerySnapshot.forEach((doc) => {
//           productsArray.push({ ...doc.data(), id: doc.id });
//         });
//         //console.log(productsArray);
//         setProduct(productsArray)
//         setLoading(false);
//       });
//       return () => data;
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//     }
//   }

//   const edithandle = (item) => {
//     setProducts(item)
//   }
//   // update product
//   const updateProduct = async (item) => {
//     setLoading(true)
//     try {
//       await setDoc(doc(db, "products", products.id), products);
//       toast.success("Product Updated successfully")
//       setTimeout(() => {
//         window.location.href = '/dashboard'
//       }, 800);
//       getProductData();
//       setLoading(false)
//       window.location.href = '/dashboard'
//     } catch (error) {
//       setLoading(false)
//       console.log(error)
//     }
//     setProducts("")
//   }

//   const deleteProduct = async (item) => {

//     try {
//       setLoading(true)
//       await deleteDoc(doc(db, "products", item.id));
//       toast.success('Product Deleted successfully')
//       setLoading(false)
//       getProductData()
//     } catch (error) {
//       // toast.success('Product Deleted Falied')
//       setLoading(false)
//     }
//   }

//   const [order, setOrder] = useState([]);

//   const getOrderData = async () => {
//     setLoading(true)
//     try {
//       const result = await getDocs(collection(db, "order"))
//       const ordersArray = [];
//       result.forEach((doc) => {
//         ordersArray.push(doc.data());
//         setLoading(false)
//       });
//       setOrder(ordersArray);
//       console.log(ordersArray)
//       setLoading(false);
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//     }
//   }

//   const [user, setUser] = useState([]);

//   const getUserData = async () => {
//     setLoading(true)
//     try {
//       const result = await getDocs(collection(db, "users"))
//       const usersArray = [];
//       result.forEach((doc) => {
//         usersArray.push(doc.data());
//         setLoading(false)
//       });
//       setUser(usersArray);
//       console.log(usersArray)
//       setLoading(false);
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//     }
//   }



//   useEffect(() => {
//     getProductData();
//     getOrderData();
//     getUserData();

//   }, []);

//   const [searchkey, setSearchkey] = useState('')
//   const [filterType, setFilterType] = useState('')
//   //const [filterPrice, setFilterPrice] = useState('')

//   return (
//     <MyContext.Provider value={{ 
//       mode, toggleMode, loading,setLoading,product, order, user,
//       products, setProducts,addProduct, edithandle, updateProduct, deleteProduct, getProductData,
//       searchkey, setSearchkey,filterType, setFilterType }}>
//       {props.children}
//     </MyContext.Provider>
//   )
// }

// export default MyState




import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { db } from '../../firebase';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query, getDocs, deleteDoc, where } from 'firebase/firestore';
import { toast } from 'react-toastify';


function MyState(props) {
  const [mode, setMode] = useState('light');  
  const [loading, setLoading] = useState(false); 

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  // ********************** Add Product Section  **********************
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(db, "products")
    setLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Added successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getProductData()
     // closeModal()
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
    setProducts("")
  }

  const [product, setProduct] = useState([]);

  // ****** get product
  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(db, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        //console.log("Products Fetched:", productsArray);
        setProduct(productsArray)
        setLoading(false);

        // setTimeout(() => {
        //   console.log("Products Updated:", product);
        // }, 0);
      });
      return () => data;
    } catch (error) {
      setLoading(false)
    }
  }

  const edithandle = (item) => {
    setProducts(item)
  }
  // update product
  // const updateProduct = async (item) => {
  //   setLoading(true)
  //   try {
  //     await setDoc(doc(db, "products", products.id), products);
  //     toast.success("Product Updated successfully")
  //     setTimeout(() => {
  //       window.location.href = '/dashboard'
  //     }, 800);
  //     getProductData();
  //     setLoading(false)
  //     window.location.href = '/dashboard'
  //   } catch (error) {
  //     setLoading(false)
  //     console.log(error)
  //   }
  //   setProducts("")
  // }

  const deleteProduct = async (title) => {
    try {
      setLoading(true);
      const productSnapshot = await getDocs(query(collection(db, "products"), where("title", "==", title)));
      if (!productSnapshot.empty) {
        const productDoc = productSnapshot.docs[0];
        await deleteDoc(productDoc.ref);
        toast.success('Product Deleted successfully');
        setLoading(false);
        getProductData();
      } else {
        toast.error('Product not found');
        setLoading(false);
      }
    } catch (error) {
      toast.error('Product Deletion Failed');
      setLoading(false);
    }
  };
  

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(db, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      setLoading(false);
    } catch (error) {
      setLoading(false)
    }
  }

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    
    setLoading(true)
    try {
      const result = await getDocs(collection(db, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      
      setLoading(false);
    } catch (error) {
      setLoading(false)
    }
  }
  // Assuming 'usersArray' contains the user data fetched from Firestore




  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();

  }, []);

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  //const [filterPrice, setFilterPrice] = useState('')

  return (
    <MyContext.Provider value={{ 
      mode, toggleMode, loading,setLoading,product, order, user, 
      products, setProducts,addProduct, edithandle, deleteProduct, getProductData,
      searchkey, setSearchkey,filterType, setFilterType }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState