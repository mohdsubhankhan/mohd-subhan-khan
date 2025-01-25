import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Card title="Calculator" desc="This is a simple, responsive calculator web app built using HTML, CSS, and JavaScript. It provides basic arithmetic operations like addition, subtraction, multiplication, and division." imagePath="calculator.png" liveLink="https://mohdsubhankhan.github.io/calculator-app/"/>
          <Card title="QR Generator" desc="A simple and user-friendly web application to generate QR codes. This app allows users to input any text, URL, or contact information, and instantly generate a corresponding QR code." imagePath="qr.png" liveLink="https://mohdsubhankhan.github.io/Qr-generator-app/"/>
          <Card title="Space" desc="Space Explorer: Your gateway to the solar system! Discover fascinating facts about the planets with this interactive app. Simply click on a planet to learn key details about its unique features, from Mercury's proximity to the Sun to Neptune's deep blue mysteries." imagePath="nasa.png" liveLink="https://mohdsubhankhan.github.io/space/"/>
          <Card title="Drawing" desc="Dive into the world of art with our versatile drawing app! Designed for creators of all levels, it offers an array of tools like precision brushes, vibrant color palettes, and layer support to help you craft masterpieces effortlessly" imagePath="drawing.png" liveLink="https://mohdsubhankhan.github.io/drawing/"/>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
