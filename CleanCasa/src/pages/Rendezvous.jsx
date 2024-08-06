import { useEffect, useRef, useState } from "react";
import { useSpring, animated, useInView } from "@react-spring/web";
import cover from "../img/newcover2.png";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import rend from "../img/rend.png";
import axios from "axios";
import toast from "react-hot-toast";

export default function Rendezvous() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    adresse: "",
    phone: "",
    date: "",
    message: "",
  });
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    const utcDate = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );

    setStartDate(utcDate);
    setForm({
      ...form,
      date: date,
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Check if any required fields are empty
    const { name, email, phone, date, message , adresse } = form;
    if (!name || !email || !phone || !date || !message || !adresse) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    axios
      .post("http://localhost:3000/appointment/addapp", form)
      .then(function (response) {
        toast.success("Your appointment sent successfully!");
        console.log(response);
        // Clear form inputs
        setForm({
          name: "",
          email: "",
          adresse: "",
          phone: "",
          date: "",
          message: "",
        });
        setStartDate(null);
      })
      .catch(function (error) {
        toast.error("There was an error sending your appointment.");
        console.log(error);
      });
  };

  // Animation for heading and paragraph
  const [headingSpring, headingApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(-100px)",
  }));
  const [textSpring, textApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(100px)",
  }));

  // Animation for the image
  const [imageSpring, imageApi] = useSpring(() => ({
    opacity: 0,
    transform: "scale(0.9)",
  }));

  // Trigger animations when in view
  const headingRef = useRef();
  const imageRef = useRef();

  const headingInView = useInView(headingRef);
  const imageInView = useInView(imageRef);

  useEffect(() => {
    if (headingInView) {
      headingApi.start({ opacity: 1, transform: "translateY(0)" });
      textApi.start({ opacity: 1, transform: "translateY(0)" });
    }
    if (imageInView) {
      imageApi.start({ opacity: 1, transform: "scale(1)" });
    }
  }, [headingInView, imageInView]);

  return (
    <div className="pb-36 bg-[#f1f1f1]">
      <div className="font-sans max-w-6xl sm:pt-[15vh] pt-[5vh] bg-[#f1f1f1] max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center z-50 relative">
          <animated.h2
            className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold md:!leading-[56px]"
            style={headingSpring}
            ref={headingRef}
          >
            <span className="text-blue-600">Book</span> an Appointment with{" "}
            <span className="text-blue-600">Clean Casa</span>
          </animated.h2>
          <animated.p
            className="text-gray-600 mt-6 text-base leading-relaxed"
            style={textSpring}
          >
            Whether you need house cleaning or garden care, Clean Casa is here to help. Schedule your appointment today and enjoy a pristine home and beautiful garden.
          </animated.p>
        </div>


          <animated.div
            className="lg:h-[550px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:h-[120%] before:w-[120%] before:right-0 before:z-0"
            style={imageSpring}
            ref={imageRef}
          >
            <img
              src={cover}
              className="rounded-md pt-16 lg:w-4/5 z-40"
              alt="Dining Experience"
            />
          </animated.div>
        </div>
      </div>
      <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-[#f1f1f1] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden ">
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-400"></div>
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400"></div>

        <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
          <div className="text-center flex flex-col items-center justify-center">
            <img src={rend} className="shrink-0 w-5/6" />
          </div>

          <form className="rounded-tl-3xl rounded-bl-3xl">
            <h2 className="text-2xl text-blue-600 font-bold text-center mb-6">
            Appointment
            </h2>
            <div className="max-w-md mx-auto space-y-3 relative">
              <input
                required
                type="text"
                onChange={handleChange}
                name="name"
                value={form.name}
                placeholder="Name"
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-blue-600 focus-within:bg-transparent"
              />
              <input
                required
                type="email"
                onChange={handleChange}
                name="email"
                value={form.email}
                placeholder="Email"
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-blue-600 focus-within:bg-transparent"
              />
              <input
                required
                type="text"
                onChange={handleChange}
                name="adresse"
                value={form.adresse}
                placeholder="Adresse"
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-blue-600 focus-within:bg-transparent"
              />
              <input
                required
                type="text"
                onChange={handleChange}
                name="phone"
                value={form.phone}
                placeholder="Phone No."
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-blue-600 focus-within:bg-transparent"
              />
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                </div>
                <DatePicker
                  required
                  className="w-full bg-gray-100 rounded-md py-3 pl-10 pr-4 text-sm outline-blue-600 bg-transparent"
                  selected={startDate}
                  onChange={handleDateChange}
                  name="date"
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Date"
                  showTimeSelect={false}
                />
              </div>

              <textarea
                placeholder="Message And Pack You Need It"
                onChange={handleChange}
                rows="6"
                name="message"
                value={form.message}
                className="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 outline-blue-600 focus-within:bg-transparent"
              ></textarea>

              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full relative bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-6 py-3 !mt-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2 inline"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
