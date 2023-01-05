import { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import axios from "axios";
import { formatCurrency } from "@/lib/utils";
import getStripe from "@/lib/get-stripe";
import {
  XCircleIcon,
  XIcon,
  MinusSmIcon,
  PlusSmIcon,
} from "@heroicons/react/outline";
import { Dialog, Transition, Tab } from "@headlessui/react";

const Cart = () => {
  const { cartDetails, totalPrice, cartCount, addItem, removeItem, clearCart } =
    useShoppingCart();
  const [redirecting, setRedirecting] = useState(false);

  const redirectToCheckout = async () => {
    // Create Stripe checkout
    const {
      data: { id },
    } = await axios.post("/api/checkout_sessions", {
      items: Object.entries(cartDetails).map(([_, { id, quantity }]) => ({
        price: id,
        quantity,
      })),
    });

    // Redirect to checkout
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Head>
        <title>My Shopping Cart</title>
      </Head>
      <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
        {cartCount > 0 ? (
          <>
            <h2 className="text-4xl font-semibold">Your shopping cart</h2>
            <p className="mt-1 text-xl">
              {cartCount} items{" "}
              <button
                onClick={clearCart}
                className="opacity-50 hover:opacity-100 text-base capitalize"
              >
                (Clear all)
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-4xl font-semibold">
              Your shopping cart is empty.
            </h2>
            <p className="mt-1 text-xl">
              Check out our food and drinks{" "}
              <Link href="/">
                <a className="text-red-500 underline">here!</a>
              </Link>
            </p>
          </>
        )}

        {cartCount > 0 ? (
          <div className="mt-12">
            {Object.entries(cartDetails).map(([key, product]) => (
              <div
                key={key}
                className="flex justify-between space-x-4 hover:shadow-lg hover:border-opacity-50 border border-opacity-0 rounded-md p-4"
              >
                {/* Image + Name */}
                <Link href={`/products/${product.id}`}>
                  <a className="flex items-center space-x-4 group">
                    <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <p className="font-semibold text-xl group-hover:underline">
                      {product.name}
                    </p>
                  </a>
                </Link>

                {/* Price + Actions */}
                <div className="flex items-center">
                  {/* Quantity */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => removeItem(product)}
                      disabled={product?.quantity <= 0}
                      className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1"
                    >
                      <MinusSmIcon className="w-6 h-6 flex-shrink-0" />
                    </button>
                    <p className="font-semibold text-xl">{product.quantity}</p>
                    <button
                      onClick={() => addItem(product)}
                      className="hover:bg-green-100 hover:text-green-500 rounded-md p-1"
                    >
                      <PlusSmIcon className="w-6 h-6 flex-shrink-0 " />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-end border-t py-4 mt-8">
              <p className="text-xl mr-2">
                Total:{" "}
                <span className="font-semibold">
                  {formatCurrency(totalPrice)}
                </span>
              </p>
              <button
                onClick={redirectToCheckout}
                disabled={redirecting}
                className="py-[14px] px-[49px] text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 max-w-max mt-4 mr-2 mb-2"
              >
                {redirecting ? 'Redirecting...' : 'Go to Checkout'}
              </button>
              <button
                onClick={openModal}
                type="button"
                class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-lg text-sm pl-5 pr-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
              >
                Order with
                <svg
                  width="96"
                  height="28"
                  viewBox="0 0 86 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M77.1128 22.0067L72.1479 11.1584H68.027L75.1197 25.7957L74.9921 26.2365C74.8144 26.8224 74.4395 27.3284 73.9311 27.668C73.4228 28.0077 72.8125 28.16 72.2046 28.099C71.493 28.0924 70.7948 27.904 70.1761 27.5516L69.5165 30.6867C70.4684 31.0799 71.4871 31.285 72.5167 31.2909C75.3538 31.2909 77.0702 30.2459 78.4888 27.1677L86 11.1584H82.021L77.1128 22.0067Z"
                    fill="white"
                  />
                  <path
                    d="M42.0235 5.99023H30.1219V25.9308H34.0229V18.6015H42.0235C46.3713 18.6015 49.2297 16.4048 49.2297 12.2959C49.2297 8.18689 46.3713 5.99023 42.0235 5.99023ZM41.8107 15.111H34.0087V9.42385H41.8107C44.0662 9.42385 45.357 10.4546 45.357 12.2674C45.357 14.0802 44.0662 15.111 41.8107 15.111Z"
                    fill="white"
                  />
                  <path
                    d="M65.539 22.1488V16.1418C65.539 12.5873 62.9928 10.7461 58.6236 10.7461C55.0773 10.7461 51.9706 12.4025 51.0982 14.9475L54.3042 16.0849C54.7794 14.8124 56.432 13.874 58.4889 13.874C60.9288 13.874 61.9572 14.8693 61.9572 16.0849V16.4759L56.1554 17.1157C52.8147 17.4711 50.6159 18.9711 50.6159 21.6512C50.6159 24.5872 53.1339 26.1653 56.4745 26.1653C58.6278 26.2326 60.7248 25.4692 62.3331 24.0327C62.9147 25.4545 63.5105 26.4071 67.4754 25.9023V22.9308C65.8866 23.3147 65.539 22.9308 65.539 22.1488ZM61.9927 20.2436C61.9927 22.1772 59.2903 23.2009 57.0278 23.2009C55.3042 23.2009 54.2687 22.6464 54.2687 21.5445C54.2687 20.4427 55.1198 20.0446 56.7653 19.8526L62.0069 19.2413L61.9927 20.2436Z"
                    fill="white"
                  />
                  <path
                    d="M22.7439 21.253C22.7714 21.3361 22.7714 21.4259 22.7439 21.5089C22.7279 21.5918 22.6885 21.6683 22.6304 21.7293L18.8783 25.6748C18.7956 25.7599 18.6968 25.8276 18.5875 25.8738C18.478 25.9219 18.3595 25.9462 18.24 25.9449H0.444308C0.361894 25.9456 0.280888 25.9235 0.210248 25.8809C0.139655 25.8328 0.0833028 25.7665 0.0471156 25.689C0.0221236 25.6104 0.0221236 25.5259 0.0471156 25.4473C0.0618237 25.3655 0.0986193 25.2892 0.153506 25.2269L3.91265 21.2815C3.99533 21.1963 4.09422 21.1286 4.20346 21.0824C4.31277 21.0337 4.43137 21.0094 4.551 21.0113H22.3183C22.404 21.0097 22.4882 21.0345 22.5594 21.0824C22.6393 21.1154 22.7047 21.1759 22.7439 21.253ZM18.8854 13.7602C18.8009 13.6773 18.7025 13.6099 18.5946 13.5612C18.484 13.5164 18.3663 13.4924 18.2471 13.4901H0.444308C0.360864 13.4913 0.27943 13.5159 0.209231 13.5612C0.139032 13.6064 0.0828724 13.6704 0.0471156 13.746C0.0225831 13.8247 0.0225831 13.909 0.0471156 13.9877C0.0590607 14.0704 0.0962206 14.1474 0.153506 14.2081L3.91265 18.1606C3.99717 18.2436 4.09561 18.311 4.20346 18.3597C4.31383 18.405 4.43173 18.4291 4.551 18.4308H22.3183C22.404 18.4324 22.4882 18.4076 22.5594 18.3597C22.6311 18.3178 22.6861 18.2526 22.7155 18.1749C22.7518 18.0992 22.7639 18.0141 22.7499 17.9314C22.7359 17.8486 22.6966 17.7722 22.6375 17.7128L18.8854 13.7602ZM0.210248 10.8455C0.280888 10.8881 0.361894 10.9102 0.444308 10.9095H18.2471C18.3666 10.9108 18.4851 10.8865 18.5946 10.8384C18.7038 10.7922 18.8027 10.7246 18.8854 10.6394L22.6375 6.69394C22.6956 6.63288 22.7349 6.55639 22.7509 6.47356C22.7755 6.39487 22.7755 6.31055 22.7509 6.23186C22.7216 6.15414 22.6665 6.08889 22.5949 6.04702C22.5237 5.99912 22.4395 5.9743 22.3538 5.97593H4.52263C4.403 5.97402 4.2844 5.99828 4.17509 6.04702C4.06585 6.09322 3.96696 6.1609 3.88428 6.24607L0.132229 10.2057C0.0727337 10.2658 0.0331119 10.3427 0.0187441 10.4261C-0.00624802 10.5047 -0.00624802 10.5892 0.0187441 10.6678C0.0647789 10.7438 0.131116 10.8054 0.210248 10.8455V10.8455Z"
                    fill="url(#paint0_linear_127_5312)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_127_5312"
                      x1="1.922"
                      y1="26.4209"
                      x2="20.1989"
                      y2="5.40994"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.08" stop-color="#9945FF" />
                      <stop offset="0.3" stop-color="#8752F3" />
                      <stop offset="0.5" stop-color="#5497D5" />
                      <stop offset="0.6" stop-color="#43B4CA" />
                      <stop offset="0.72" stop-color="#28E0B9" />
                      <stop offset="0.97" stop-color="#19FB9B" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              Would you like to make a donation?
                              <button
                                onClick={closeModal}
                                className="absolute top-0 right-0 hover:text-rose-500 mt-2"
                              >
                                <XCircleIcon className="absolute top-0 right-0 w-6 h-6 opacity-50 hover:opacity-100 transition-opacity mr-2" />
                              </button>
                            </Dialog.Title>

                            <div className="mt-4">
                              <img
                                src="/emongrel.png"
                                layout="fill"
                                objectFit="contain"
                              />

                              <p className="text-sm text-gray-500 mt-2">
                                Exclusively Mongrels Limited is a Non-Profit
                                Organization.
                              </p>
                              <p className="text-sm text-gray-500 mt-2">
                                Exclusively Mongrels supports and promotes
                                programs that improve the welfare of mongrels.
                                We provide funding for mongrel survivors who are
                                often found in difficult circumstances and need
                                help with medical and food costs.
                              </p>
                              <p className="text-sm text-gray-500 mt-2">
                                We also work to reduce the population of stray
                                mongrels through trap-neuter-release programs.
                              </p>
                              <p className="text-sm text-gray-500 mt-2">
                                Would you be willing to make a donation of $0.50
                                to help us in our mission? Every contribution,
                                no matter the size, makes a difference.
                              </p>
                            </div>

                            <div className="mt-4 grid grid-cols-2">
                              <a
                                type="button"
                                href={`solana:https%3A%2F%2Fmonstre-solanapay-nft.vercel.app%2Fapi%2Fverify2%3Fverify-nft%3D${(
                                  totalPrice
                                )}`}
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm text-center font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              >
                                Checkout with Donation!
                              </a>  
                              <a
                                type="button"
                                href={`solana:https%3A%2F%2Fmonstre-solanapay-nft.vercel.app%2Fapi%2Fverify2%3Fverify-nft%3D${(
                                  totalPrice
                                )}`}
                                className="inline-flex align-middle justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 ml-4 align-text-middle text-sm text-center sm:align- font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              >
                                No, thank you!
                              </a>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
