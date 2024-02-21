import { Fragment } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


const RootLayout=()=>{
    return(
        <Fragment>
           <Navbar/>
           <main>
            <Outlet/>
           </main>
        </Fragment>
    );
};

export default RootLayout;