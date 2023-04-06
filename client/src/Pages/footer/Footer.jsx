import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#141414]" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="xl:col-span-1">
              <div className="text-orange-600">Md Yasin</div>
              <p className="w-1/2 mt-2 text-sm text-gray-500">
                Unwrapped your mind
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="font-semibold leading-6 uppercase text-orange-600">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-4 space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-orange-600"
                      >
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-orange-600"
                      >
                        Analytics
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-orange-600"
                      >
                        Commerce
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-orange-600"
                      >
                        Insights
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="font-semibold leading-6 uppercase text-orange-600">
                    Support
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-orange-600"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-orange-600"
                      >
                        Alpine.js
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-orange-600"
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-orange-600"
                      >
                        API Status
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden lg:justify-end md:grid md:grid-cols-1">
                <div className="w-full mt-12 md:mt-0">
                  <div className="mt-8 lg:justify-end xl:mt-0">
                    <h3 className="font-semibold leading-6 uppercase text-orange-600">
                      Subscribe to our newsletter
                    </h3>
                    <p className="mt-4 text-sm font-light text-gray-500 lg:ml-auto">
                      The latest news, articles, and resources, sent to your
                      inbox weekly.
                    </p>
                    <div className="inline-flex items-center gap-2 mt-12 list-none lg:ml-auto">
                      <form
                        className="flex flex-col items-center justify-center max-w-sm mx-auto"
                        action=""
                      >
                        <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                          <input
                            name="email"
                            type="email"
                            className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50"
                            placeholder="Enter your email..."
                            required=""
                          />
                          <button
                            type="button"
                            className="items-center inline-flex  justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-orange-600 border-2 border-orange-600 rounded-full nline-flex hover:bg-transparent hover:border-orange-600 hover:text-orange-600 focus:outline-none lg:w-auto focus-visible:outline-orange-600 text-sm focus-visible:ring-orange-600"
                          >
                            <div></div>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="w-4 h-auto ml-2"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 py-12 mx-auto border-t max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
          <div className="mt-8 md:mt-0 md:order-1">
            <span className="mt-2 text-sm font-light text-gray-500">
              Copyright © 2020 - 2021
              <a
                href="#"
                className="mx-2 text-wickedblue hover:text-gray-500"
                rel="noopener noreferrer"
              >
                MD Yasin
              </a>
              . Since 2020
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
