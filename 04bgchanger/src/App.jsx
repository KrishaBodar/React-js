import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("black");
  return (
    <div className="w-full h-screen duration-200"
    style={{ backgroundColor: bgColor }}>

      <div className="fixed flex flex-col items-center justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setBgColor("red")}
          >Red</button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setBgColor("green")}
          >Green</button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setBgColor("blue")}
          >Blue</button>

          <button
            className="outline-slate-500 px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "white" }}
            onClick={() => setBgColor("white")}
          >White</button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "magenta" }}
            onClick={() => setBgColor("magenta")}
          >Magenta</button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "gray" }}
            onClick={() => setBgColor("gray")}
          >Gray</button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "fuchsia" }}
            onClick={() => setBgColor("fuchsia")}
          >Fuchsia</button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}
            onClick={() => setBgColor("black")}
          >Black</button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "aqua" }}
            onClick={() => setBgColor("aqua")}
          >Aqua</button>

        </div>
      </div>
    </div>
  )
}

export default App
