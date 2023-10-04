// import { useState } from 'react';
// import { LineChart, Line,XAxis,YAxis } from 'recharts';

// import { Audio } from  'react-loader-spinner'
// const Linechart = () => {
//     const [loading,setloading]=useState(true)
//     setloading(false)

//     const studentData = [
//         { id: 101, name: "John", mathMarks: 85 },
//         { id: 102, name: "Emily", mathMarks: 78 },
//         { id: 103, name: "Michael", mathMarks: 92 },
//         { id: 104, name: "Sarah", mathMarks: 76 },
//         { id: 105, name: "David", mathMarks: 89 },
//         { id: 106, name: "Jessica", mathMarks: 95 }
//     ]
//     return (
//         <div>
//             {loading &&
//                 <Audio
//                 height="100"
//                 width="100"
//                 color="#4fa94d"
//                 ariaLabel="audio-loading"
//                 wrapperStyle={{}}
//                 wrapperClass="wrapper-class"
//                 visible={true}
//               />
//             }


//             <LineChart width={400} height={400} data={studentData}>
//                 <XAxis dataKey={`name`}> </XAxis>
//                 <YAxis dataKey=''></YAxis>
//                 <Line dataKey='mathMarks' stroke='blue'> </Line>
//                 <Line dataKey='id' stroke='red'></Line>
//             </LineChart>

//         </div>
//     );
// };

// export default Linechart;