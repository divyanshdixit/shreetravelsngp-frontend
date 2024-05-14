import "./App.css";
import Footer from "./components/Footer";
// import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "./components/Home";
const Contact = lazy(() => import("./components/Contact"));

function App() {
  // const count = useSelector((state) => state.example.count);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" Component={<About/>}/> */}
        <Route
          path="/contact"
          element={
            <Suspense fallback="Loading...">
              <Contact />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
