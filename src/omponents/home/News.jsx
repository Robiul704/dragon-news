import { Link } from "react-router-dom";

const News = ({anews}) => {
    const {title,details,thumbnail_url,image_url,_id}=anews;
    return (
        <div className="mb-10">
            <div className="card bg-base-100 ">
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <figure className="px-2 pt-2">
    <img src={thumbnail_url} alt="Shoes" className="rounded-xl" />
  </figure>
    {
        details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-500">read more....</Link></p>:
        <p>{details}</p>
    }
   
  </div>
</div>
        </div>
    );
};

export default News;