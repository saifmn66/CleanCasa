import { Link } from "react-router-dom";

export default function Prices() {
  return (
    <div>
      <div className="xl:container bg-[#f1f1f1] m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-7/12">
          <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
            Explore Our Service Packages
            <br />
            <span className="text-blue-600">Tailored for Your Needs</span>
          </h2>
        </div>
        <div className="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
          {/* Home Cleaning Package */}
          <div className="group relative md:col-span-1 lg:w-[32%]">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative space-y-8 p-8">
              <h3 className="text-center text-3xl font-semibold text-gray-700">Home Cleaning</h3>
              <div className="relative flex justify-around">
                <div className="flex">
                  <span className="-ml-6 mt-2 text-3xl font-bold text-primary">€</span>
                  <span className="leading-0 text-8xl font-bold text-gray-800">79</span>
                </div>
                <span className="absolute right-9 bottom-2 text-xl font-bold text-primary">/ Service</span>
              </div>
              <ul role="list" className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  <span>Thorough home cleaning</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  <span>Deep cleaning and sanitization</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  <span>Flexible scheduling</span>
                </li>
              </ul>
              <Link to="/appointment">
              <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span className="relative text-base font-semibold text-sky-600">Book Now</span>
              </button>
              </Link>
            </div>
          </div>

          {/* Garden Care Package */}
          <div className="group relative md:col-span-1 lg:w-[32%]">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative space-y-8 p-8">
              <h3 className="text-center text-3xl font-semibold text-gray-700">Garden Care</h3>
              <div className="relative flex justify-around">
                <div className="flex">
                  <span className="-ml-6 mt-2 text-3xl font-bold text-primary">€</span>
                  <span className="leading-0 text-8xl font-bold text-gray-800">59</span>
                </div>
                <span className="absolute right-9 bottom-2 text-xl font-bold text-primary">/ Service</span>
              </div>
              <ul role="list" className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  <span>Garden maintenance and trimming</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  <span>Weed control and fertilization</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  <span>Garden design and decoration</span>
                </li>
              </ul>
              <Link to="/appointment">
              <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span className="relative text-base font-semibold text-sky-600">Book Now</span>
              </button>
              </Link>
            </div>
          </div>

          {/* Company Cleaning Package */}
          <div className="group relative md:col-span-1 lg:w-[32%]">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative space-y-8 p-8">
              <h3 className="text-center text-3xl font-semibold text-gray-700">Company Cleaning</h3>
              <div className="relative flex justify-around">
                <div className="flex">
                  <span className="-ml-6 mt-2 text-3xl font-bold text-primary">€</span>
                  <span className="leading-0 text-8xl font-bold text-gray-800">149</span>
                </div>
                <span className="absolute right-9 bottom-2 text-xl font-bold text-primary">/ Service</span>
              </div>
              <ul role="list" className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  <span>Comprehensive office cleaning</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  <span>Regular maintenance and sanitation</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  <span>Specialized cleaning for businesses</span>
                </li>
              </ul>
              <Link to="/appointment">
              <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span className="relative text-base font-semibold text-sky-600">Book Now</span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
