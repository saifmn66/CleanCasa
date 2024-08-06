import garimg from "../img/gardensec.jpg"
export default function Garden() {
  return (
    <div>
        <div className="bg-[#f1f1f1]">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <a
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
            Transform Your Garden
            <br className="hidden md:block" />
            Into a Lush Paradise
            <span className="inline-block text-green-600">
                with Expert Care
            </span>
            </h5>
            <p className="mb-6 text-gray-900">
            At Clean Casa, we specialize in turning your outdoor spaces into thriving, beautiful gardens. Our team of experts provides comprehensive gardening services, from planting vibrant plants to meticulous garden care. Let us help you create and maintain a stunning garden that enhances your home s beauty and serenity.
            </p>
            <hr className="mb-5 border-gray-300" />
            
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={garimg}
              alt=""
            />
          </div>
        </div>
      </div>
      
    </div>
      
    </div>
  )
}
