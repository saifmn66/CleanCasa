import { useSpring, animated } from "@react-spring/web";
import bgImage from "../img/blob-scene-haikei.svg";
import cov from "../img/newcover.png";
import { ReactTyped } from "react-typed";

export default function Header() {
  // Animations
  const headingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  const imageAnimation = useSpring({
    transform: "translateY(0)",
    from: { transform: "translateY(50px)" },
    config: { tension: 220, friction: 120 },
  });

  return (
    <div>
      <div
        className="h-screen w-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 sm:mt-[17vh] mt-12 row-gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <animated.div style={headingAnimation} className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  <ReactTyped
                    strings={[
                      "Experience a Sparkling Clean Today",
                      "Enjoy a Fresh and Inviting Space",
                      "Trust Us for a Thorough Clean",
                    ]}
                    typeSpeed={70}
                    backSpeed={60}
                  />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  At Clean Casa, we deliver exceptional cleaning services for a
                  spotless and welcoming environment. From routine cleaning to
                  deep sanitization, trust us to make a difference.
                </p>
              </animated.div>
              <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                Features
              </p>
              <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Professional House Cleaning
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Corporate and Restaurant Cleaning
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Comprehensive Garden Care
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Customized Cleaning Plans
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Eco-Friendly Products
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Trained and Trusted Staff
                  </li>
                </ul>
              </div>
            </div>

            <animated.div style={imageAnimation}>
              <img
                className="w-full sm:w-[47vw] h-56 sm:h-96"
                src={cov}
                alt=""
              />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}
