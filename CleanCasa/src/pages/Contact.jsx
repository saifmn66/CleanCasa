import { useSpring, animated, useInView } from '@react-spring/web';
import cover from "../img/contactcover.png";
import insta from "../img/instagram.svg";
import face from "../img/facebook.svg";
import gmail from "../img/gmail.svg";
import whats from "../img/whatsapp.svg";
import quality from "../img/quality.svg";
import availble from "../img/availble.svg";
import garden from "../img/darden.svg";
import { Link } from 'react-router-dom';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const yearsExperience = useSpring({
    from: { number: 0 },
    to: { number: 4  },
    config: { duration: 2000 },
  });
  const casesSolved = useSpring({
    from: { number: 0 },
    to: { number: 97  },
    config: { duration: 2000 },
  });
  const businessPartners = useSpring({
    from: { number: 0 },
    to: { number: 120  },
    config: { duration: 2000 },
  });

  const fadeInDiv1 = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
    delay: 200,
  });
  const fadeInDiv2 = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
    delay: 200,
  });
  const fadeInDiv3 = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
    delay: 400,
  });

  const fadeInContactDiv1 = useSpring({
    opacity: contactInView ? 1 : 0,
    transform: contactInView ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 1000 },
    delay: 200,
  });
  const fadeInContactDiv2 = useSpring({
    opacity: contactInView ? 1 : 0,
    transform: contactInView ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 1000 },
    delay: 400,
  });
  const fadeInContactDiv3 = useSpring({
    opacity: contactInView ? 1 : 0,
    transform: contactInView ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 1000 },
    delay: 600,
  });
  const fadeInContactDiv4 = useSpring({
    opacity: contactInView ? 1 : 0,
    transform: contactInView ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 1000 },
    delay: 800,
  });

  return (
    <div className="bg-[#f1f1f1]">
      <div className="font-sans max-w-6xl sm:pt-[25vh] pt-[15vh] bg-[#f1f1f1] max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
          <div className="max-md:order-1 max-md:text-center z-50 relative">
            <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]">
            <span className="text-blue-600">Impeccable</span> Clean with{" "}
            <span className="text-blue-600">Exceptional</span> Service
            </h2>
            <p className="text-gray-600 mt-6 text-base leading-relaxed">
            At Clean Casa, we provide meticulous cleaning services tailored to your needs. Contact us to schedule your appointment and enjoy a spotless, refreshing environment.
 
            </p>
            <Link to="/appointment">
            <button
              type="button"
              className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5"
            >
              Get Started
            </button>
            </Link>

            <div className="mt-12">
              <div className="grid sm:grid-cols-3 gap-4 items-center">
                <animated.div  className="flex flex-col items-center text-center">
                  <animated.h5 className="text-gray-800 font-bold text-xl mb-2">
                    {yearsExperience.number.to((n) => Math.floor(n))}
                  </animated.h5>
                  <p className="text-gray-600">Years Experience</p>
                </animated.div>
                <animated.div  className="flex flex-col items-center text-center">
                  <animated.h5 className="text-gray-800 font-bold text-xl mb-2">
                  {casesSolved.number.to((n) => `${Math.floor(n)}%`)}
                  </animated.h5>
                  <p className="text-gray-600">Client Satisfaction Rating</p>
                </animated.div>
                <animated.div  className="flex flex-col items-center text-center">
                  <animated.h5 className="text-gray-800 font-bold text-xl mb-2">
                    {businessPartners.number.to((n) => Math.floor(n))} 
                    
                  </animated.h5>
                  <p className="text-gray-600">Business Partners</p>
                </animated.div>
              </div>
            </div>
          </div>

          <div className="lg:h-[550px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-[#DEE2E5] before:h-[120%] before:w-[120%] before:right-0 before:z-0">
            <img
              src={cover}
              className="rounded-md lg:w-4/5 z-40"
              alt="Dining Experience"
            />
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-4 z-50 relative md:px-4 max-md:mt-12 mb-12">
          <animated.div style={fadeInDiv1} className="bg-white p-6 shadow rounded-md">
            <img src={quality} className='w-10 mb-2' /> 
            <h3 className="text-gray-800 text-xl font-bold mb-2">Quality Service</h3>
            <p className="text-sm text-gray-600">
              Providing top-notch cleaning services for all your needs.
            </p>
            
          </animated.div>
          <animated.div style={fadeInDiv2} className="bg-white p-6 shadow rounded-md">
            <img src={availble} className='w-8 mb-2' />
            <h3 className="text-gray-800 text-xl font-bold mb-2">24/7 Availability</h3>
            <p className="text-sm text-gray-600">
              Fast and reliable service available around the clock.
            </p>
            
          </animated.div>
          <animated.div style={fadeInDiv3} className="bg-white p-6 shadow rounded-md">
            <img src={garden} className='w-10 mb-2' />
            <h3 className="text-gray-800 text-xl font-bold mb-2">Garden Care</h3>
            <p className="text-sm text-gray-600">
              Expert garden and lawn care services for a beautiful outdoor space.
            </p>
            
          </animated.div>
        </div>
      </div>
      <div className="font-[sans-serif] pb-24 max-w-6xl mx-auto p-4">
      <div ref={contactRef} className="bg-white rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <animated.div style={fadeInContactDiv1} className="flex flex-col items-center bg-white">
            <img src={whats} className='w-8' />
            <div className="mt-4 text-center">
              <h4 className="text-gray-800 text-base font-bold">Call Us</h4>
              <p className="text-sm text-gray-500 mt-2"> +40 791 536 076</p>
            </div>
          </animated.div>

          <animated.div style={fadeInContactDiv2} className="flex flex-col items-center bg-white">
            <img src={gmail} className='w-8' />
            <div className="mt-4 text-center">
              <h4 className="text-gray-800 text-base font-bold">Our mail</h4>
              <p className="text-sm text-gray-500 mt-2">Casaclean420@gmail.com</p>
            </div>
          </animated.div>

          <animated.div style={fadeInContactDiv3} className="flex flex-col items-center bg-white">
            <img src={face} className='w-8' />
            <div className="mt-4 text-center">
              <h4 className="text-gray-800 text-base font-bold">Facebook</h4>
              <p className="text-sm text-gray-500 mt-2">Clean casa</p>
            </div>
          </animated.div>

          <animated.div style={fadeInContactDiv4} className="flex flex-col items-center bg-white">
            <img src={insta} className='w-8' /> 
            <div className="mt-4 text-center">
              <h4 className="text-gray-800 text-base font-bold">Instagram</h4>
              <p className="text-sm text-gray-500 mt-2">casa cleaned</p>
            </div>
          </animated.div>

        </div>

        
      </div>
    </div>
    </div>
  );
}
