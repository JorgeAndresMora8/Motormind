import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Loading, NavbarComponent } from './Components';
import { URL } from "./Constant";

// IMPORT COMPONENTS
const Home = lazy(() => import("./Pages/Home"));
const CarDetail = lazy(() => import("./Pages/CarDetail/CarDetail"));
const Diagnosis = lazy(() => import("./Pages/Diagnosis/Diagnosis"));

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <NavbarComponent />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={URL.HOME} element={<Home />} />
            <Route path={URL.CARDETAIL} element={<CarDetail />} />
            <Route path={URL.DIAGNOSIS} element={<Diagnosis />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
