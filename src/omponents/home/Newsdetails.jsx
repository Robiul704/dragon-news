import { useParams } from "react-router-dom";
import Rightsidenav from "../shared/Rightsidenav/Rightsidenav";
import Header from "../shared/header/Header";
import Detail from "./Detail";
import Navbar from "../shared/Navbar/Navbar";


const Newsdetails = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 lg:grid-cols-4">
               <div className="col-span-3">
                    JKHSIJKFHJKDHG
               </div>
               <div>
               <Rightsidenav></Rightsidenav>
               </div>
            </div>
          
        </div>
    );
};

export default Newsdetails;