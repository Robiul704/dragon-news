import Priceoption from "./Priceoption";


const Priceoptions = () => {
    
        const priceoptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": "$30/month",
            "features": [
              "Access to gym facilities",
              "Basic workout equipment",
              "Locker room access",
              "Fitness assessment",
              "Online workout tracking"
            ]
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "price": "$50/month",
            "features": [
              "Access to gym facilities",
              "Full range of workout equipment",
              "Group fitness classes",
              "Locker room access",
              "Personalized workout plan",
              "Nutritional guidance",
              "Fitness assessment"
            ]
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "price": "$80/month",
            "features": [
              "Access to gym facilities",
              "Full range of workout equipment",
              "Group fitness classes",
              "Personal trainer sessions",
              "Locker room access",
              "Sauna and steam room access",
              "Nutritional guidance",
              "Fitness assessment",
              "Massage therapy"
            ]
          }
        ]
      
      

    return (
        <div className="my-10">
            <h1 className="text-7xl text-center font-bold">the body bulding gym</h1>
           <div className="md:grid grid-cols-3 my-10 gap-5 ">
           {
                priceoptions.map(option=><Priceoption option={option} key={option.id}></Priceoption>)
            }
           </div>
        </div>
    );
};

export default Priceoptions;