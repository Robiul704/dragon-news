
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {

    return (
        <div className='flex justify-start items-center gap-3'>
            <AiFillCheckCircle></AiFillCheckCircle>
            <h1>  {feature}</h1>
        </div>
    );
};

export default Feature;