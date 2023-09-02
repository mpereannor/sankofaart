"use client"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Close } from "./Icons"
import { CSSProperties } from "react"

function Cart({
  cartOpen,
  handleToggle,
}: {
  cartOpen: boolean
  handleToggle: () => void
}) {
  return (
    <>
      <AnimatePresence>
        {cartOpen && (
          <motion.aside
            className=" fixed top-20 bottom-0 bg-white  right-0 h-fit z-[999] [--width:90%] md:[--width:60%] lg:[--width:50%]"
            initial={{ width: 0 }}
            animate={{
              width: "var(--width)",
            }}
            exit={{ width: 0, transition: { delay: 0.5, duration: 0.3 } }}
          >
            <motion.div initial="closed" animate="open" exit="closed">
              <div className=" z-10 absolute top-0 left-0 m-1 opacity-50 hover:opacity-100">
                <Close
                  onClick={handleToggle}
                  size={25}
                  className="rounded-2xl bg-black p-1.5"
                />
              </div>
              <div className="relative h-full mx-auto justify-between flex flex-col  sm:bg-transparent  m-4">
                <div className="">
                  <div className="">
                    <div className=" mb-2 sm:py-4 sm:px-4 py:2 px:2 border-gray-300 border-b flex    ">
                      <img
                        src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="product-image"
                        className=" sm:block hidden  w-20"
                      />
                      <div className=" ml-4 flex w-full justify-between flex-col sm:flex-row sm:gap-y-0 gap-y-6">
                        <div className="mt-5  w-full sm:w-1/3">
                          <h2 className="text-md font-semibold text-gray-900">
                            Nike Air Max 2019
                          </h2>
                          <p className="mt-1 text-xs font-light italic text-gray-700">
                            Color impasto on board, gold leaf Color impasto on
                            board, gold leaf
                          </p>
                        </div>
                        <div className=" flex flex-col sm:flex-row justify-between space-y-0 sm:space-y-6 sm:block space-x-6 w-full sm:w-2/3 sm:gap-y-0 gap-y-6">
                          <div className="flex items-center sm:justify-center ">
                            <span className="cursor-pointer mx-2 bg-black py-1 px-3.5 duration-100 hover:bg-gray-800 hover:text-blue-50">
                              {" "}
                              -{" "}
                            </span>
                            <input
                              className="h-10 w-14 border border-gray-500 text-center text-xs outline-none text-black"
                              type="number"
                              value="2"
                              min="1"
                            />
                            <span className="cursor-pointer mx-2 bg-black py-1 px-3 duration-100 hover:bg-gray-800 hover:text-blue-50">
                              {" "}
                              +{" "}
                            </span>
                          </div>
                          <div className="flex sm:items-center items:left space-x-4 py-4 sm:py-0">
                            <p className="text-sm text-black font-light">
                              GHS 250, 000. 00
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 text-black"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className=" mb-2 p-4 border-gray-300 border-b flex">
                      <img
                        src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                        alt="product-image"
                        className=" w-20"
                      />
                      <div className=" ml-4 flex w-full justify-between">
                        <div className="mt-5 mt-0">
                          <h2 className="text-md font-semibold text-gray-900">
                            Nike Max 2021
                          </h2>
                          <p className="mt-1 text-xs font-light italic text-gray-700">
                            Color impasto on board, gold leaf
                          </p>
                        </div>
                        <div className=" flex justify-between space-y-6 sm:block space-x-6">
                          <div className="flex items-center justify-center">
                            <span className="cursor-pointer mx-2 bg-black py-1 px-3.5 duration-100 hover:bg-gray-800 hover:text-blue-50">
                              {" "}
                              -{" "}
                            </span>
                            <input
                              className="h-10 w-14 border border-gray-500 text-center text-xs outline-none text-black"
                              type="number"
                              value="5"
                              min="1"
                            />
                            <span className="cursor-pointer mx-2 bg-black py-1 px-3 duration-100 hover:bg-gray-800 hover:text-blue-50">
                              {" "}
                              +{" "}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm text-black font-light">
                              GHS 50, 800. 00
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 text-black"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="">
                  <div className="  border-b  px-4  py-2 ">
                    <div className="mb-2 flex justify-between">
                      <p className="text-gray-700">Subtotal</p>
                      <p className="text-gray-700 font-light">GHS 300,800.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Shippng</p>
                      <p className="text-gray-700 font-light">GHS 200</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between font-light text-gray-700">
                      <p className=" ">Total</p>
                      <div className="">
                        <p className="mb-1 ">GHS 301, 000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around mt-8 ">
                    <Link href="/checkout">
                      <button className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light ">
                        Checkout
                      </button>
                    </Link>
                    <Link href="/shop">
                      <button className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light ">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default Cart
