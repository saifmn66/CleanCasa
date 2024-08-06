import house from "../img/house.jpg"
import company from "../img/comapny.jpg"
import garden from "../img/garden.jpg"


export default function Aboutus() {
    return (
      <div className="bg-[#f1f1f1]">
        <div className="py-40 ">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="mb-12 space-y-2 text-center">
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
                About Casa Cleaning
              </h2>
              <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12">
                At Casa Cleaning, we believe a clean environment leads to a happier life. Our dedicated team provides top-notch cleaning and gardening services to ensure your home and workspace are pristine and inviting.
              </p>
            </div>
  
            <div className="lg:w-3/4 xl:w-2/4 lg:mx-auto">
              <div className="group my-6 relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
                <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                  <img
                    src={house}
                    alt="House Cleaning"
                    loading="lazy"
                    width="1000"
                    height="667"
                    className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
  
                <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    House Cleaning
                  </h3>
                  <p className="my-6 text-gray-600 dark:text-gray-300">
                    Our thorough and efficient house cleaning services ensure every corner of your home is spotless. From routine cleaning to deep sanitization, we keep your living space fresh and clean.
                  </p>
                </div>
              </div>
  
              <div className="group my-6 relative hover:z-10 -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                  <img
                    src={company}
                    alt="Corporate and Restaurant Cleaning"
                    loading="lazy"
                    width="1000"
                    height="667"
                    className="h-52 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
  
                <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Corporate and Restaurant Cleaning
                  </h3>
                  <p className="my-6 text-gray-600 dark:text-gray-300">
                    We offer specialized cleaning for businesses, including restaurants and corporate offices, to ensure a hygienic environment for both employees and customers.
                  </p>
                </div>
              </div>
  
              <div className="group my-6 relative hover:z-10 -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                  <img
                    src={garden}
                    alt="Garden and Grass Clipping"
                    loading="lazy"
                    width="1000"
                    height="667"
                    className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
  
                <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Garden and Grass Clipping
                  </h3>
                  <p className="my-6 text-gray-600 dark:text-gray-300">
                    Our gardening services keep your outdoor spaces neat and well-maintained. We provide grass trimming and garden shaping to enhance the beauty of your surroundings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  