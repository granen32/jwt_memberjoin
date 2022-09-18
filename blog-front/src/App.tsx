import React from "react";
import { BrowserRouter } from "react-router-dom";
import RenderRouter from "./routes/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
