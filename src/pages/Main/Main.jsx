import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <div className="h-[68px]">
            <Navbar></Navbar>
            </div>
          <Outlet/>  
        </div>
    );
};

export default Main;