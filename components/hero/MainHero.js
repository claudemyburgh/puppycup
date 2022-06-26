import React from "react";

const MainHero = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="wrapper">
          <div className="relative z-10 max-w-2xl bg-white py-40">
            <svg
              className="absolute inset-y-0 left-full hidden min-h-full w-[700px]  -translate-x-12 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 500 500"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <filter id="shadow" colorInterpolationFilters="sRGB">
                <feDropShadow
                  dx="6"
                  dy="6"
                  stdDeviation="3"
                  floodOpacity="0.25"
                />
              </filter>

              <path
                filter="url(#shadow)"
                id="bottom-layer"
                className="fill-primary-700"
                d="M196,394l-23.6,3.1C143,400.9,115,409,92,425l-50,38H0V0h378.2l17.6,85.4
	c6,29.1-2.5,59-23.3,82.5l-49.9,56.4c-14.8,16.8-23.5,36.9-25,57.9v0C294,332.2,254.1,386.4,196,394z"
              />
              <path
                filter="url(#shadow)"
                id="middle-layer"
                className="fill-primary-500"
                d="M183,386c-75.2,10.3-81,14.6-141,77H0V0h360.1c15.6,79.8,33.5,121.7-5.5,167.9
	c-47,55.7-68.9,67.6-71.6,108.1C279.7,326.6,237.7,378.5,183,386z"
              />
              <path
                filter="url(#shadow)"
                id="top-layer"
                className="fill-white"
                d="M164,381l-20.2,3.1c-25,3.8-47.9,16.5-64.4,35.6L42,463H0V0h323l15,85.4
	c5.1,29.1-2.1,59-19.9,82.5l-42.6,56.4c-12.7,16.8-20.1,36.9-21.3,57.9v0C251.1,332.2,213.6,373.4,164,381z"
              />
            </svg>

            <main>
              <div className="max-w-4xl sm:text-center lg:text-left ">
                <h1 className="text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Extend your craft design with
                  </span>{" "}
                  <span className="block text-secondary-600 xl:inline">
                    ETSY{" "}
                  </span>
                  <span className="block xl:inline">files</span>{" "}
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Look through our listing and find something awesome designs.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-100 px-8 py-3 text-base font-medium text-primary-700 hover:bg-primary-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MainHero;
