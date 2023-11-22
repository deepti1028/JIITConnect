// import React from 'react'
// import { Fragment, useContext, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { Link } from 'react-router-dom'
// import { BsFillCloudSunFill } from 'react-icons/bs'
// import { FiSun } from 'react-icons/fi'
// import myContext from '../../context/data/myContext'


// // import { RxCross2 } from 'react-icons/rx'


// import { useSelector } from 'react-redux'

// export default function Navbar() {
//   const [open, setOpen] = useState(false)

  
//   const user = JSON.parse(localStorage.getItem('users'))

//   const context = useContext(myContext)
// //   const { toggleMode, mode } = context

//   const logout = () => {
//     localStorage.clear('users')
//     window.location.href = "/"
// }

// const cartItems = useSelector((state) => state.cart)
//   return (
//     <div className="bg-white sticky top-0 z-50  " >
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full"
//             >
//               <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-[#001d3d] pb-12 shadow-xl" style={{ backgroundColor: 'rgb(40, 44, 52)' , color:'white' , }}>
//                 <div className="flex px-4 pb-2 pt-28">
//                   <button
//                     type="button"
//                     className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400  "
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     {/* <RxCross2 /> */}
//                   </button>
//                 </div>
//                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                   
//                   {user ?  " " : <div className="flow-root">
//                     <Link to={'/signup'} style={{ color: 'white' }} className="-m-2 block p-2 font-medium text-white">
//                       Signup
//                     </Link>
//                   </div> }

//                   {user ? <div className="flow-root">
//                     <Link to={'/order'} style={{ color: 'white' }} className="-m-2 block p-2 font-medium text-gray-900">
//                       Order
//                     </Link>
//                   </div> : " "}

//                   {user?.user?.email === '21103167@mail.jiit.ac.in' ?
//                   <div className="flow-root">
//                   <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: 'white' }}>
//                     Admin
//                   </Link> 
//                 </div> 
//                 : " "}
                   

//                   <div className="flow-root">
//                     {user ? <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: 'white' }}>
//                       Logout
//                     </a> : " "}
//                   </div>
                  
//                 </div>

               
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>
//       {/* desktop  */}
//       <header className="relative bg-white">
//       <p className="flex h-10 items-center justify-center bg-[#001d3d] px-4 text-sm font-medium text-[#38aecc] sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(62 64 66)' , color: 'white' }}>
//           JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY, NOIDA
//         </p>

//         <nav aria-label="Top" className="bg-[#034078] px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: '#282c34' , color: 'white'  }}>
//           <div className="">
//             <div className="flex h-16 items-center">
//               <button
//                 type="button"
//                 className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
//                 onClick={() => setOpen(true)} style={{ backgroundColor: '#282c34' , color: 'white'  }}
//               >
//                 <span className="sr-only">Open menu</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                 </svg>

//               </button>

//               {/* Logo */}
//               <div className="ml-4 flex lg:ml-0">
//                 <Link to={'/'} className='flex'>
//                   <div className="flex ">
//                     <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color:'white' }}>Annapurna</h1>
//                   </div>
//                 </Link>
//               </div>

//               <div className="ml-auto flex items-center">
//                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

//                 {user ?  " " : <Link to={'/signup'} className="text-sm font-medium text-white " style={{ color: 'white' }}>
//                     Signup
//                   </Link>}

//                   {user ? <Link to={'/order'} className="text-sm font-medium text-white " style={{ color: 'white', }}>
//                     Order
//                   </Link> : " "}
//                   {user?.user?.email === '21103167@mail.jiit.ac.in' ?
//                   <Link to={'/dashboard'} className="text-sm font-medium text-white " style={{ color: 'white' }}>
//                     Admin
//                   </Link>
//                   : " "}

//                   {user ? <a onClick= {logout} className="text-sm font-medium text-white cursor-pointer  " style={{ color:'white'}}>
//                     Logout
//                   </a> : " "}
//                 </div> 

                
                

//                 {/* Search */}
//                 {/* <div className="flex lg:ml-6">
//                   <button className='' onClick={toggleMode}>
//                     <MdDarkMode size={35} style={{ color:  'white'  }} />
//                     <FiSun className='' size={30} />
                      
//                   </button>
//                 </div> */}

//                 {/* Cart */}
//                 <div className="ml-4 flow-root lg:ml-6">
//                   <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: 'white' }}>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//                     </svg>

//                     <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: 'white' }}>{cartItems.length}</span>
//                     <span className="sr-only">items in cart, view bag</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }
