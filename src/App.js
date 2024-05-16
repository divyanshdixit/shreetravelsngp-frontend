import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const Contact = lazy(() => import("./components/Contact"));
const Privacy = lazy(() => import("./components/Privacy"));
const Terms = lazy(() => import("./components/Terms"));
const Home = lazy(() => import("./components/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Cancellation = lazy(() => import("./components/Cancellation"));
const Payment = lazy(() => import("./components/Payment"));
const Services = lazy(() => import("./components/Services"));

function App() {
  // const count = useSelector((state) => state.example.count);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Suspense fallback="Loading...">
              <Home />
            </Suspense>} />
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
         <Route
          path="/cancellation"
          element={
            <Suspense fallback="Loading...">
              <Cancellation />
            </Suspense>
          }
        />
        <Route
          path="/payment"
          element={
            <Suspense fallback="Loading...">
              <Payment />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback="Loading...">
              <Services />
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
