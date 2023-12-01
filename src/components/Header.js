// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Header = ({ active, setActive, user, handleLogout }) => {
//   const userId = user?.uid;

//   const cartItems = useSelector((state) => state.cart);
//   return (
//     <nav className="bg-slate-100 p-1">
//       <div className="container mx-auto">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="text-white text-lg font-bold">
//             <img src="images/logo.png" alt="error" className="w-20 h-20 mr-8" />
//           </Link>

//           <ul className="flex space-x-8">
//             {user.email !== "mansi1028@gmail.com" ? (
//               <li className={`nav-item ${active === "home" ? "active" : ""}`}>
//                 <Link
//                   to="/"
//                   className="nav-link"
//                   onClick={() => setActive("home")}
//                 >
//                   Home
//                 </Link>
//               </li>
//             ) : (
//               ""
//             )}
//             {user.email !== "mansi1028@gmail.com" ? (
//               <li className={`nav-item ${active === "create" ? "active" : ""}`}>
//                 <Link
//                   to="/create"
//                   className="nav-link"
//                   onClick={() => setActive("create")}
//                 >
//                   Create
//                 </Link>
//               </li>
//             ) : (
//               ""
//             )}

//             {/* <li className={`nav-item ${active === "About" ? "active" : ""}`}>
//               <Link
//                 to="/about"
//                 className="nav-link"
//                 onClick={() => setActive("About")}
//               >
//                 About
//               </Link>
//             </li> */}
//             {user.email !== "mansi1028@gmail.com" ? (
//               <li
//                 className={`nav-item ${active === "annapurna" ? "active" : ""}`}
//               >
//                 <Link
//                   to="/annapurna"
//                   className="nav-link"
//                   onClick={() => setActive("annapurna")}
//                 >
//                   Annapurna
//                 </Link>
//               </li>
//             ) : (
//               ""
//             )}
//           </ul>

//           <div className="flex items-center space-x-4">
//             {userId ? (
//               <>
//                 <div className="profile-logo ">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
//                     alt="logo"
//                     className="w-8 h-8 rounded-full"
//                   />
//                 </div>
//                 <p className="mt-3 mb-3">{user?.displayName}</p>
                // {user.email !== "mansi1028@gmail.com" ? (
                //   <Link
                //     to={"/cart"}
                //     className="group -m-2 flex items-center p-2"
                //     style={{ color: "black" }}
                //   >
                //     <svg
                //       xmlns="http://www.w3.org/2000/svg"
                //       fill="none"
                //       viewBox="0 0 22 22"
                //       strokeWidth={1.9}
                //       stroke="currentColor"
                //       className="w-6 h-6"
                //     >
                //       <path
                //         strokeLinecap="round"
                //         strokeLinejoin="round"
                //         d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                //       />
                //     </svg>

                //     <span
                //       className="ml-2 text-sm font-medium text-gray-700 group-"
                //       style={{ color: "black" }}
                //     >
                //       {cartItems.length}
                //     </span>
                //   </Link>
                // ) : (
                //   " "
                // )}
//                 <li
//                   className="nav-item nav-link cursor-pointer"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </li>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/adminauth"
//                   className={`nav-item nav-link ${
//                     active === "login" ? "active" : ""
//                   }`}
//                   onClick={() => setActive("login")}
//                 >
//                   Admin Login
//                 </Link>
//                 <Link
//                   to="/auth"
//                   className={`nav-item nav-link ${
//                     active === "login" ? "active" : ""
//                   }`}
//                   onClick={() => setActive("login")}
//                 >
//                   Login
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;

  const cartItems = useSelector((state) => state.cart);
  return (
    <nav className="bg-[#662549] p-1">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-lg font-bold">
            <img src="images/logo.png" alt="error" className="w-20 h-20 mr-8" />
          </Link>

          <ul className="flex space-x-8">
           
              <li className={`nav-item ${active === "home" ? "active" : ""}`}>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setActive("home")}
                   style= {{color: '#ED9ED6', fontWeight: "bold"}}
                >
                  Home
                </Link>
              </li>
            
           
              <li className={`nav-item ${active === "create" ? "active" : ""}`}>
                <Link
                  to="/create"
                  className="nav-link"
                  onClick={() => setActive("create")}
                  style= {{color: '#ED9ED6', fontWeight: "bold"}}
                >
                  Create
                </Link>
              </li>
           

            <li className={`nav-item ${active === "About" ? "active" : ""}`}>
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setActive("About")}
                style= {{color: '#ED9ED6', fontWeight: "bold"}}
              >
                Map
              </Link>
            </li>
          
              <li
                className={`nav-item ${active === "annapurna" ? "active" : ""}`}
              >
                <Link
                  to="/annapurna"
                  className="nav-link"
                  onClick={() => setActive("annapurna")}
                  style= {{color: '#ED9ED6', fontWeight: "bold"}}
                >
                  Annapurna
                </Link>
              </li>
            
          </ul>

          <div className="flex items-center space-x-4">
            {userId ? (
              <>
                <div className="profile-logo ">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="logo"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <p className="mt-3 mb-3" style= {{color: '#FEC260', fontWeight: 'bold'}}>{user?.displayName}</p>
                {user.email !== "mansi1028@gmail.com" ? (
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: "black" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 22 22"
                      strokeWidth={1.9}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: "black" }}
                    >
                      {cartItems.length}
                    </span>
                  </Link>
                ) : (
                  " "
                )}
                <li
                  className="nav-item nav-link cursor-pointer mr-1"
                  onClick={handleLogout}
                  style= {{color: '#ED9ED6', fontWeight: "bold"}}
                >
                  Logout
                </li>
              </>
            ) : (
              <>
                <Link
                  to="/adminauth"
                  className={`nav-item nav-link ${
                    active === "login" ? "active" : ""
                  }`}
                  onClick={() => setActive("login")}
                  style= {{color: '#ED9ED6', fontWeight: "bold"}}
                >
                  Admin Login
                </Link>
                <Link
                  to="/auth"
                  className={`nav-item nav-link ${
                    active === "login" ? "active" : ""
                  }`}
                  onClick={() => setActive("login")}
                  style= {{color: '#ED9ED6', fontWeight: "bold"}}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
