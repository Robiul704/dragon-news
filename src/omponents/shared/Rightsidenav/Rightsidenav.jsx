
import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
import {AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FcGoogle} from 'react-icons/fc';

import pic1 from '../../../assets/qZone1.png'
import pic2 from '../../../assets/qZone2.png'
import pic3 from '../../../assets/qZone3.png'

const Rightsidenav = () => {
    return (
        <div className='p-5'>
            <h1 className="text-3xl">login with</h1>
            <div className='space-y-3'>
            <button className='w-full py-3 btn text-xl btn-outline'><FcGoogle></FcGoogle>login with google </button>
            <button className='w-full py-3 text-xl btn btn-outline'> <AiFillGithub></AiFillGithub>login with github</button>
               </div>

               <div>
               <h1 className="text-3xl font-bold my-5">login with</h1>
              <div className='rounded-lg bg-white'>
              <a className='flex text-2xl py-5 px-5 items-center gap-3 border' href="">
                <FaFacebookSquare></FaFacebookSquare>
                <span>facebook</span>
               </a>
               <a className='flex text-2xl  py-5 px-5 items-center gap-3 border' href="">
                <FaTwitterSquare></FaTwitterSquare>
                <span>twitterk</span>
               </a>
               <a className='flex text-2xl py-5 px-5 items-center gap-3 border' href="">
                <AiFillInstagram></AiFillInstagram>
                <span>instagram</span>
               </a>
              </div>
               </div>

               <div>
               <h1 className="text-3xl font-bold my-5">Q-Zone</h1>
               <div>
                <img src={pic1} alt="" />
               </div>
               <div>
                <img src={pic2} alt="" />
               </div>
               <div>
                <img src={pic3} alt="" />
               </div>
               </div>
            </div>
    );
};

export default Rightsidenav;