import { useLoaderData } from "react-router-dom";
import Leftsidenav from "../shared/Leftsidenav/Leftsidenav";
import Navbar from "../shared/Navbar/Navbar";
import Rightsidenav from "../shared/Rightsidenav/Rightsidenav";
import Header from "../shared/header/Header";
import Breakingnews from "./Breakingnews";
import News from "./News";


const Home = () => {

  const news=useLoaderData();
  console.log(news)


    return (
        <div>
          <Header></Header>
          <Breakingnews ></Breakingnews>
          <Navbar></Navbar>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="bg-red-200"><Leftsidenav></Leftsidenav></div>
            <div className=" md:col-span-2">

                {
                  news.map(anews=><News anews={anews} key={anews.id}></News>)
                }


            </div>
            <div className="bg-red-200"><Rightsidenav></Rightsidenav></div>
          </div>
        </div>
    );
};

export default Home;