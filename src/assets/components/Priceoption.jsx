import Feature from "./Feature";

const Priceoption = ({option}) => {
    const {name,price,features}=option
    return (
        <div className="bg-blue-300 px-10 py-5 mb-10 mx-10 rounded-xl">
            <h1 className="font-extrabold text-3xl ">{price}</h1>
            <h1 className="font-bold text-2xl">{name}</h1>

            <div>
            {
                features.map((feature,ind)=> <Feature key={ind} feature={feature}></Feature>)
            }
            </div>

        </div>
    );
};

export default Priceoption;