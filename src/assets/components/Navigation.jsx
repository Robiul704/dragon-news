import { useState } from "react";
import Link from "./Link";
import { AiOutlineMenu,AiOutlineCloseCircle } from 'react-icons/ai';

const Navigation = () => {
    const[open,setopen]=useState(false)


    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
      ];
      


    return ( 
        <nav>
            <div className="lg:hidden text-2xl" onClick={()=>setopen(!open)}> 
            {
                open===true ? 
                <AiOutlineCloseCircle></AiOutlineCloseCircle> : 
                <AiOutlineMenu></AiOutlineMenu>
            }
            
            </div>
           <ul className={`lg:flex duration-1000 absolute lg:static bg-red-600 ${open? 'top-12' : '-top-60'}`}>
           {
                routes.map((route)=><Link route={route} key={route.id}></Link>)
            }
           </ul>
            
        </nav>
    );
};

export default Navigation;