import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Loading, NavbarComponent, NotFound } from './components';
import { URL } from "./constant";

// IMPORT COMPONENTS
const Home = lazy(() => import("./pages/Home"));
const CarDetail = lazy(() => import("./pages/CarDetail/CarDetail"));
const Diagnosis = lazy(() => import("./pages/Diagnosis/Diagnosis"));

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
            <Route path={URL.NOTFOUND} element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
