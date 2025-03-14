import { ToastContainer } from "react-toastify";
import {CarList} from "./Components/Car";
import Header from "./Components/Header/Header";

function Home() {
  return (
    <div className="d-flex flex-column p-3 gap-3" style={{backgroundColor:"#F8FAFC"}}>
      <ToastContainer />
      <Header />
      <CarList />
    </div>
  );
}

export default Home;
