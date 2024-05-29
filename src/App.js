import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import Response from "./components/Response";
import ErrorPage from "./components/ErrorPage";
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
      <Box className="main-container">
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/privacy"
            element={<Privacy />}
          />
          <Route
            path="/terms"
            element={<Terms />}
          />
          <Route
            path="/cancellation"
            element={<Cancellation />}
          />
          <Route
            path="/payment"
            element={<Payment />}
          />
          <Route
            path="/services"
            element={<Services />}
          />
          {/* <Route path="/about" Component={<About/>}/> */}
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/response"
            element={<Response />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      </Box>
      <Suspense fallback="Loading...">
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
