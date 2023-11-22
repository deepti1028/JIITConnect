
// import { createContext, useState } from 'react';

// const MyContext = createContext();

// const MyContextProvider = ({ children }) => {
//   const [searchkey, setSearchkey] = useState('');
//   const [filterType, setFilterType] = useState('');
//   const [product, setProduct] = useState([]);

//   const contextValue = {
//     searchkey,
//     setSearchkey,
//     filterType,
//     setFilterType,
//     product,
//     setProduct,
//   };

//   return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
// };

// export { MyContext, MyContextProvider };
import {createContext} from 'react';

const myContext = createContext();
export default myContext;
