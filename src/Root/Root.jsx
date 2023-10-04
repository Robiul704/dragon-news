import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="mx-auto container font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;