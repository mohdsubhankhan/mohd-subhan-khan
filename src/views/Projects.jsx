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
          <Card title="Calculator" desc="Hello this is 1st project Hello this is 1st project Hello this is 1st project" imagePath="/calculator.png" liveLink="https://mohdsubhankhan.github.io/calculator-app/"/>
          <Card title="QR Generator" desc="Hello this is 1st project Hello this is 1st project Hello this is 1st project" imagePath="/qr.png" liveLink="https://mohdsubhankhan.github.io/Qr-generator-app/"/>
          <Card title="Space" desc="Hello this is 1st project Hello this is 1st project Hello this is 1st project" imagePath="/nasa.png" liveLink="https://mohdsubhankhan.github.io/space/"/>
          <Card title="Drawing" desc="Hello this is 1st project Hello this is 1st Hello this is 1st project Hello this is 1st Hello this is 1st project Hello this is 1st  project Hello this is 1st project" imagePath="/drawing.png" liveLink="https://mohdsubhankhan.github.io/drawing/"/>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
