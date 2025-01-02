import React from "react";
import Header from "../layout/Header";

function HomePage() {
  return (
    <>
      <section>
        <Header />

        <div className="relative w-full">
          <div className="overflow-hidden">
            <video className="" loop muted autoplay="autoplay">
              <source
                src="https://www.netguru.com/hubfs/_N19%20Modules/Homepage/Videos/ng-com-header-background.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="content absolute top-52 left-24 w-1/2">
            <div className="mb-12">
              <h1 className="text-8xl   space-x-4 font ">
                <span className="text-green-600">Own</span>
                <span className="text-white">the change</span>
              </h1>
            </div>
            <div className="mb-10">
              <p className=" text-gray-300 font-semibold w-96">
                We speed up AI adoption and ramp up engineering and design
                capacity to help you lead your industry.
              </p>
            </div>
            <div className="flex gap-8 items-center">
              <div className="">
                <p className="text-gray-200 text-sm font-bold">Trusted By:</p>
              </div>
              <div className="flex gap-3 invert ">
                <img
                  src="https://www.netguru.com/hubfs/_N23/assets/logos/ikea.svg"
                  alt=""
                  width={45}
                />
                <img
                  src="https://www.netguru.com/hubfs/_N23/assets/logos/ubs.svg"
                  alt=""
                  width={45}
                />

                <img
                  src="https://www.netguru.com/hubfs/_N23/assets/logos/volkswagen.svg"
                  alt=""
                  width={25}
                />
                <img
                  src="https://www.netguru.com/hubfs/_N23/assets/logos/olx.svg"
                  alt=""
                  width={30}
                />
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-36 overflow-hidden w-36">
            <img
              src="https://www.netguru.com/hs-fs/hubfs/ebook%20HP%20promo.png?width=340&height=340&name=ebook%20HP%20promo.png"
              alt=""
              width={200}
              className="hover:scale-110 transition-all duration-100 cursor-pointer"
            />
            <div className="bg-gray-900 px-4 p-2 text-white text-sm font-semibold flex flex-col gap-y-2 ">
              <h6>NetGuru Guide AI Assistance</h6>
              <h6>
                Get Yours <spna>&#8594;</spna>
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container px-4 py-10 mx-auto">
          <div className="flex justify-between py-10">
            <h1 className="text-2xl ">
              See top examples of design, development{" "}
              <span className="font-bold">& applied AI</span>{" "}
            </h1>
            <h1 className="text-sm font-bold underline hover:text-gray-500">
              More case studies
            </h1>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="sm:w-1/2  px-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  className="h-full w-full hover:scale-125 transition-all duration-500 cursor-pointer"
                  src="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/national-cancer-institute-ct10qdGv1hQ-unsplash.jpg?width=1022&height=1022&name=national-cancer-institute-ct10qdGv1hQ-unsplash.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-2xl font-bold">
                  <img src="https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg" />
                </div>
                <div className="text-sm font-semibold uppercase">
                  Mobile App Redesign{" "}
                </div>
              </div>
              <div className="">
                <h2 className="title-font text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Speeding up Merck’s process from 6 months to 6 hours{" "}
                </h2>
              </div>
              <div className="">
                <p className="leading-relaxed text-base">
                  An AI Assistant that boosts R&D delivered in five weeks and
                  under budget{" "}
                </p>
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  className="h-full w-full hover:scale-125 transition-all duration-500 cursor-pointer"
                  src="https://www.netguru.com/hs-fs/hubfs/Newzip%20HP.jpg?width=1022&height=1022&name=Newzip%20HP.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-2xl font-bold">
                  <img src="https://www.netguru.com/hubfs/_N23/assets/logos/newzip.svg" />
                </div>
                <div className="text-sm font-semibold uppercase">
                  Mobile App Redesign{" "}
                </div>
              </div>
              <div className="">
                <h2 className="title-font text-2xl font-bold text-gray-900 mt-6 mb-3">
                  60% more user engagement with hyper-personalization{" "}
                </h2>
              </div>
              <div className="">
                <p className="leading-relaxed text-base">
                  AI PoC in under 6 weeks to test a hypothesis on
                  hyper-localizing real estate content to increase customer
                  engagement{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 py-10 mx-auto">
          <div className="flex justify-between flex-wrap text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="overflow-hidden">
                <img
                  src="https://www.netguru.com/hs-fs/hubfs/UBS-CS-02-Visual-05.jpg?width=1460&height=1022&name=UBS-CS-02-Visual-05.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500 cursor-pointer "
                />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-2xl font-bold">
                  <img src="https://www.netguru.com/hubfs/_N23/assets/logos/ubs.svg" />
                </div>
                <div className="text-sm font-semibold uppercase">
                  Mobile App Redesign{" "}
                </div>
              </div>
              <div className="py-3">
                <h1 className="text-xl font-bold">
                  Team extension for mobile design revamp at speed{" "}
                </h1>
              </div>

              <div className="">
                <p className="text-lg  text-gray-500  ">
                  Seamless and consistent experience, unified payment flows, and
                  easier in-app navigation
                </p>
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="overflow-hidden">
                <img
                  src="https://www.netguru.com/hs-fs/hubfs/Prospero%20CS%20HP.png?width=1022&height=1022&name=Prospero%20CS%20HP.png"
                  alt=""
                  className="hover:scale-125 transition-all duration-500 cursor-pointer "
                />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-2xl font-bold">
                  <img src="https://www.netguru.com/hubfs/_N23/assets/logos/prospero.svg" />
                </div>
                <div className="text-sm font-semibold uppercase">
                  Mobile MVP
                </div>
              </div>
              <div className="py-3">
                <h1 className="text-xl font-bold">
                  Mobile app MVP in 5 weeks for a New York fintech
                </h1>
              </div>
              <div className="">
                <p className="text-lg  text-gray-500  ">
                  New version of a financial predictions app, complete with a
                  revamped user interface and additional features Seamless and
                  consistent experience, unified payment flows, and easier
                  in-app navigation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="flex justify-between flex-wrap">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg overflow-hidden">
                <video
                  className="hover:scale-125 transition-all duration-500 cursor-pointer "
                  src="https://www.netguru.com/hubfs/_N19%20Modules/Homepage/Videos/kw.mp4"
                  alt=""
                />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-2xl font-bold">keller-williams </div>
                <div className="text-sm font-semibold uppercase">
                  Design system
                </div>
              </div>
              <div className="py-3">
                <h1 className="text-xl font-bold">
                  Increased engineering efficiency and more consistent design.
                </h1>
              </div>
              <div className="">
                <p className="text-lg  text-gray-500  ">
                  Improved developer experience and more efficient engineering
                  for the world's largest real estate franchise
                </p>
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  className="hover:scale-125 transition-all duration-500 cursor-pointer "
                  src="https://www.netguru.com/hs-fs/hubfs/NewGlobe%20HP.jpg?width=1022&height=1022&name=NewGlobe%20HP.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-2xl font-bold">new-globe </div>
                <div className="text-sm font-semibold uppercase">Edtech AI</div>
              </div>
              <div className="py-3">
                <h1 className="text-xl font-bold">
                  Boosting content creation with GenAI from hours to seconds.
                </h1>
              </div>
              <div className="">
                <p className="text-lg  text-gray-500 ">
                  Content creation transformed into a streamlined process
                  without compromising on quality{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
