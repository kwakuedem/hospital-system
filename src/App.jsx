import "./App.css";
import "animate.css";
import d from "../src/assets/images/backgrounds/background.jpg";
import { Fade, Hinge, Roll, Slide, Zoom } from "react-awesome-reveal";

function App() {
  return (
    <>
      <div className="bg-[url('./assets/images/backgrounds/background.jpg')] opacity-90 bg-cover w-full min-h-screen flex justify-center items-center">
        <div className="w-full min-h-screen flex justify-center items-center">
        <Slide>
          <h1 className="flex flex-col items-center gap-6 bg-black p-20 text-3xl font-extrabold text-white">
            <span>Project Loading ....</span>
            <span>Management System</span>
            <span>For Yapei Clinic</span>
          </h1>
        </Slide>
        </div>
      </div>
    </>
  );
}

export default App;
