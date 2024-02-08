import React from "react";
import Bbackground from "./components/Background";
import Foreground from "./components/foreground";
            
function App() {
  return (
    <div className="w-full h-screen relative bg-zinc-900">
      <Bbackground />
      <Foreground />
    </div>
  );
}

export default App;
