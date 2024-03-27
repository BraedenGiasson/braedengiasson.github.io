"use client";

import { motion, useTransform, useScroll } from "framer-motion";

import { TripsNavbar } from "@/components";
import { useContext, useRef } from "react";

import "./TripsPage.css";
import { ThemeContext } from "@/contexts/ThemeContext";
import { MdChevronRight } from "react-icons/md";

import { tripsData } from "@/data/tripsData";
import TripPreview from "@/components/Trips/SingleTripPreview/TripPreview";

interface pageProps {}

function Trips() {
  const { theme } = useContext(ThemeContext);

  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div className="tripsPage" style={{ backgroundColor: theme.secondary }}>
      <TripsNavbar title="Braeden's Travels"/>
      <div className="tripsPage-body ">
        <h1 className="text-primary website-sections-title">
          {tripsData.title}
        </h1>
        <div className="trips-description">
          <p className="text-[#e0d9d9] font-var">
            {tripsData.description}
          </p>
        </div>

        <section className="w-[100%] h-[100%] pb-0 flex items-center justify-center gap-[3rem] lg:flex-row md:flex-col sm:flex-col xs:flex-col">
          {tripsData.trips.map((trip) => {
            return <TripPreview trip={trip}/>
          })}
        </section>

        <div className={`scroll-btn items-center justify-end p-[1rem] w-[100%] ${tripsData.trips.length < 3 ? 'hidden': 'flex'}`}>
          <div className='flex items-center justify-center cursor-pointer transition-transform duration-[300ms] hover:translate-x-1 ease-in-out'>
            <p className='font-var text-primary'>Scroll</p>
            <MdChevronRight className=' text-primary ml-[-2.5px]' size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trips;