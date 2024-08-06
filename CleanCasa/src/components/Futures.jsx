import { useInView } from 'react-intersection-observer';
import { useSpring, animated, useSpringRef, useChain } from '@react-spring/web';
import clean1 from "../img/clean1.svg";
import clean2 from "../img/clean2.svg";
import clean3 from "../img/clean3.svg";
import clean4 from "../img/clean4.svg";

export default function Futures() {
  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInRef = useSpringRef();
  const slideUpRef = useSpringRef();
  const fadeIn1Ref = useSpringRef();
  const fadeIn2Ref = useSpringRef();
  const fadeIn3Ref = useSpringRef();
  const fadeIn4Ref = useSpringRef();

  const fadeIn = useSpring({
    ref: fadeInRef,
    opacity: containerInView ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  const slideUp = useSpring({
    ref: slideUpRef,
    transform: containerInView ? 'translateY(0)' : 'translateY(30px)',
    opacity: containerInView ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  const fadeIn1 = useSpring({
    ref: fadeIn1Ref,
    opacity: containerInView ? 1 : 0,
    config: { tension: 200, friction: 20 },
    from: { opacity: 0 },
    delay: 200, // Delay for sequential animation
  });

  const fadeIn2 = useSpring({
    ref: fadeIn2Ref,
    opacity: containerInView ? 1 : 0,
    config: { tension: 200, friction: 20 },
    from: { opacity: 0 },
    delay: 400, // Delay for sequential animation
  });

  const fadeIn3 = useSpring({
    ref: fadeIn3Ref,
    opacity: containerInView ? 1 : 0,
    config: { tension: 200, friction: 20 },
    from: { opacity: 0 },
    delay: 600, // Delay for sequential animation
  });

  const fadeIn4 = useSpring({
    ref: fadeIn4Ref,
    opacity: containerInView ? 1 : 0,
    config: { tension: 200, friction: 20 },
    from: { opacity: 0 },
    delay: 800, // Delay for sequential animation
  });

  useChain(containerInView ? [fadeInRef, slideUpRef, fadeIn1Ref, fadeIn2Ref, fadeIn3Ref, fadeIn4Ref] : [], [0, 0.2, 0.4, 0.6, 0.8, 1]);

  return (
    <animated.div
      ref={containerRef}
      style={slideUp}
      className="bg-[#f1f1f1] pt-12"
    >
      <div className="bg-[#f1f1f1] font-[sans-serif] flex max-lg:flex-col px-4 py-8 gap-12 max-w-[1400px] mx-auto">
        <animated.div style={fadeIn}>
          <h2 className="text-gray-800 text-4xl font-extrabold mb-6">
            Discover Our Exclusive Services
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We offer a comprehensive range of services to meet all your needs. From detailed house cleaning to professional gardening, explore how we can enhance your space.
          </p>
        </animated.div>

        <div className="grid md:grid-cols-2 gap-8 max-md:max-w-lg mx-auto">
          <animated.div style={fadeIn1}>
            <div className="text-left bg-blue-50 rounded-lg shadow p-6 ">
              <div className="p-3 bg-white rounded-full w-fit">
                <img src={clean1} className="w-10" alt="House Cleaning" />
              </div>
              <h3 className="text-gray-800 text-xl font-semibold mt-6 mb-3">
                House Cleaning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our house cleaning service is thorough and efficient, ensuring every corner of your home is spotless. From routine cleaning to deep sanitization, we handle it all with care and attention to detail.
              </p>
            </div>
          </animated.div>

          <animated.div style={fadeIn2}>
            <div className="text-left bg-blue-50 rounded-lg shadow p-6">
              <div className="p-3 bg-white rounded-full w-fit">
                <img src={clean2} className="w-10" alt="Corporate and Restaurant Cleaning" />
              </div>
              <h3 className="text-gray-800 text-xl font-semibold mt-6 mb-3">
                Corporate & Restaurant Cleaning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We provide specialized cleaning services for businesses, including restaurants and corporate offices. Our team ensures a hygienic environment, promoting a healthier and more pleasant space for employees and customers.
              </p>
            </div>
          </animated.div>

          <animated.div style={fadeIn3}>
            <div className="text-left bg-blue-50 rounded-lg shadow p-6">
              <div className="p-3 bg-white rounded-full w-fit">
                <img src={clean3} className="w-10" alt="Garden and Grass Clipping" />
              </div>
              <h3 className="text-gray-800 text-xl font-semibold mt-6 mb-3">
                Garden & Grass Clipping
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our garden and grass clipping service keeps your outdoor spaces neat and well-maintained. Whether it’s trimming overgrown grass or shaping your garden, we ensure your green spaces look their best.
              </p>
            </div>
          </animated.div>

          <animated.div style={fadeIn4}>
            <div className="text-left bg-blue-50 rounded-lg shadow p-6">
              <div className="p-3 bg-white rounded-full w-fit">
                <img src={clean4} className="w-10" alt="Garden Decorating and Care" />
              </div>
              <h3 className="text-gray-800 text-xl font-semibold mt-6 mb-3">
                Garden Decorating & Care
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer garden decorating and care services to enhance your outdoor spaces. From designing beautiful garden layouts to ongoing care and maintenance, we create vibrant, inviting environments for you to enjoy.
              </p>
            </div>
          </animated.div>
        </div>
      </div>
    </animated.div>
  );
}
