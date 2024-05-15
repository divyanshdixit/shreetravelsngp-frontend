import "./App.css";
import Footer from "./components/Footer";
// import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "./components/Home";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
const Contact = lazy(() => import("./components/Contact"));

function App() {
  // const count = useSelector((state) => state.example.count);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/privacy"
          element={
            <Suspense fallback="Loading...">
              <Privacy />
            </Suspense>
          }
        />
        <Route
          path="/terms"
          element={
            <Suspense fallback="Loading...">
              <Terms />
            </Suspense>
          }
        />
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
