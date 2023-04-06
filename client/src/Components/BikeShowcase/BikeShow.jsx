import React from "react";

const BikeShow = () => {
  return (
    <div>
      <section>
        <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="text-left">
            <div className="items-center mx-auto lg:inline-flex">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    Bike Services & Repair
                  </p>
                </div>
                <div className="lg:ml-auto">
                  <p className="mt-4 text-lg tracking-tight text-gray-600 lg:mt-0">
                    Whether you're a beginner or an experienced programmer, our
                    SaaS product offers the tools you need to be successful.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative items-center w-full mx-auto mt-12">
            <img
              className="object-cover object-center w-full   h-96"
              src="./image/bikeBG/bikeHero1.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="pt-12 mx-auto lg:max-w-7xl">
              <dl className="grid grid-cols-1 gap-6 space-y-0 lg:gap-24 lg:grid-cols-3">
                <div>
                  <div>
                    <p className="text-lg font-medium leading-6 text-black">
                      Developer experience
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Plus, our platform is constantly evolving to meet the
                    changing needs of the tech industry, ensuring you'll always
                    be ahead.
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-lg font-medium leading-6 text-black">
                      Designers go-to app
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Plus, our platform is constantly evolving to meet the
                    changing needs of the tech industry, ensuring you'll always
                    be ahead.
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-lg font-medium leading-6 text-black">
                      Easy onboarding
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Plus, our platform is constantly evolving to meet the
                    changing needs of the tech industry, ensuring you'll always
                    be ahead.
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BikeShow;
