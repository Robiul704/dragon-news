import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breakingnews = () => {
    return (
        <div className="flex my-10">
            <button className="btn btn-secondary" >Breaking news</button>
            <Marquee className="bg-sky-200 rounded-lg text-3xl">
           <Link className="mr-10" to={'/'}> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
           <Link className="mr-10" to={'/'}> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
           <Link className="mr-10" to={'/'}> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
           <Link className="mr-10" to={'/'}> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
</Marquee>
        </div>
    );
};

export default Breakingnews;