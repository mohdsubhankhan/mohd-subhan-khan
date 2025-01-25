import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import SocialMediaCards from "./SocialMediaCards";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="contact"
      style={{
        backgroundImage: darkMode
          ? "url('../assets/cloudBg.png')"
          : "url('../assets/cloudDark.png')",
        backgroundSize: "cover",
      }}
      className="pt-24 h-fit"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <form>
              <div className="my-6">
                <label
                  htmlFor="name"
                  className={`block mb-2 text-lg font-medium `}
                >
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block mb-2 text-lg font-medium `}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={`block mb-2 text-lg font-medium `}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div className="underline">
                  <a
                    href="mailto:khanmohdsubhan876@gmail.com"
                  >
                    Send me email directly
                  </a>
                </div>
                <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
                  <a href="mailto:khanmohdsubhan876@gmail.com">Submit</a>
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end mt-12 md:mt-6">
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="mailto:khanmohdsubhan876@gmail.com"
              className="mb-12 mt-4 font-semibold text-blue-700 block"
            >
              khanmohdsubhan876@gmail.com
            </a>
            <h1 className="text-3xl font-bold">Address</h1>
            <h1

              className="mt-4 mb-12 md:text-right font-semibold text-blue-700 block"
            >
              Lucknow, Uttar Pradesh,
              <br />
              India
            </h1>
            <h1 className="text-3xl font-bold">Social</h1>
            {/* <ul className="flex">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                  key={el.name}
                >
                  <img alt={el.name} src={el.url} />
                </a>
              ))}
            </ul> */}
            <SocialMediaCards/>
          </div>
        </div>
      </div>
      <div
        className={`w-full text-lg py-3 flex justify-center md:mt-20 ${darkMode ? "bg-white text-black" : "bg-gray-900 text-white"
          }`}
      >
        &copy; 2025 Mohd Subhan Khan. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
