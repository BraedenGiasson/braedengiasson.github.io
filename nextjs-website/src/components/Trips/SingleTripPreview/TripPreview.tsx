import { FlagData, TripData } from "@/data/tripsData";
import Flag from "react-flagkit";
// import Flag from 'react-flagpack'
import "./TripPreview.css";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

type Trip = {
  trip: TripData;
};

function TripPreview({ trip }: Trip) {
  return (
    <Fade direction="up" duration={500}  className='clickable cursor-pointer trip-preview h-[500px] w-[100%]  object-cover rounded-[20px] relative overflow-hidden  max-w-[850px] ease-in-out'>
        <Link href={`/trips/${trip.endpoint}`} > 
      {/* pointer-events-none */}
        {/* <div className="trip-preview h-[500px] min-w-[700px] object-cover rounded-[20px] relative sm:min-w-[100%] xs:min-w-[100%]"> */}
          <Image
            src={trip.bgImg}
            alt=""
            fill={true}
            className="bgImg block w-[100%] h-[100%] object-cover bg-cover bg-center rounded-[20px] opacity-[50%] ease-in-out"
          />
          <div className="container absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[100%] min-w-[100%]">
            <div className="h-[100%] min-w-[100%] flex items-center justify-center">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-primary600 text-[70px] italic font-semibold">
                  {trip.title}
                </h1>
                <h3 className="text-primary400 text-[20px] font-semibold">{trip.date}</h3>
              </div>
              <div className="absolute bottom-0 left-0 p-[1rem] w-[100%]  min-h-[60px]">
                <div className="flex items-center justify-center gap-[10px] ">
                  {trip.flags.map((flag, index) => {
                    return (
                      <Fade direction="up" delay={index > 0 ? index * 100: index}>
                          <Flag
                            country={flag.countryCode}
                            role="img"
                            alt={flag.name}
                            size={40}
                            className="hover:-translate-y-[1rem] ease-in-out duration-[400ms] rounded-[5px] min-w-[40px] border-none"
                          />
                      </Fade>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </Link>
    </Fade>
    // <Link href='#' className='clickable cursor-pointer trip-preview h-[500px] w-[100%]  object-cover rounded-[20px] relative overflow-hidden pointer-events-none max-w-[850px]'>
    //   {/* <div className="trip-preview h-[500px] min-w-[700px] object-cover rounded-[20px] relative sm:min-w-[100%] xs:min-w-[100%]"> */}
    //     <Image
    //       src={trip.bgImg}
    //       alt=""
    //       fill={true}
    //       className="bgImg block w-[100%] h-[100%] object-cover bg-cover bg-center rounded-[20px] opacity-[50%] pointer-events-auto"
    //     />
    //     <div className="container absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[100%] w-[100%]">
    //       <div className="h-[100%] w-[100%] flex items-center justify-center">
    //         <div className="flex flex-col justify-center items-center">
    //           <h1 className="text-primary600 text-[50px] italic">
    //             {trip.title}
    //           </h1>
    //           <h3 className="text-primary400 text-[20px]">{trip.date}</h3>
    //         </div>
    //         <div className="absolute bottom-0 p-[1rem] w-[100%] overflow-auto">
    //           <div className="flex items-center justify-center gap-[10px] ">
    //             {trip.flags.map((flag) => {
    //               return (
    //                 <Flag
    //                   country={flag.countryCode}
    //                   role="img"
    //                   alt={flag.name}
    //                   size={40}
    //                   className="z-[999] hover:-translate-y-[1rem] ease-in-out duration-[400ms] rounded-[5px]"
    //                 />
    //               );
    //             })}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   {/* </div> */}
    // </Link>
  );
}

export default TripPreview;
