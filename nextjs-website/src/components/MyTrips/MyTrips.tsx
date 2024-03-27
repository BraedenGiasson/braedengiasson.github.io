import React, { useContext } from "react";

import "./MyTrips.css";
import { ThemeContext } from "@/contexts/ThemeContext";

import { tripSectionData } from "@/data/tripsData";

import type { ThemeData } from "@/theme/theme";
import Image from "next/image";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

function MyTrips() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="trips"
      id="trips"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="trips-body">
        <div className="trips-description">
          <h2
            className="website-sections-title"
            style={{ color: theme.primary }}
          >
            {tripSectionData.title}
          </h2>
          <p style={{ color: theme.tertiary80 }}>
            {tripSectionData.description}
          </p>
        </div>
        <div className="trips-img overflow-hidden">
          <Link href="/trips" className="trips-data-img-link relative w-[100%] h-[100%] overflow-hidden ease-in-out object-cover">
            {tripSectionData.images.map((image) => {
              return (
                <Image
                  key={image}
                  src={image}
                  alt=""
                  className="trips-all-image opacity-[50%] object-cover rounded-[20px] ease-in-out block"
                />
              );
            })}
            <div className="text-container font-poppins absolute top-[50%] left-[60%] -translate-x-[60%] -translate-y-[50%] w-[100%] text-center">
              <div className="flex items-center justify-center cursor-pointer  text-center">
                <h1 className="text-primary ">
                  {tripSectionData.buttonText}
                </h1>
                <MdChevronRight
                  className="trips-section-img-text-arrow text-primary ml-[-2.5px] "
                  // size="4rem"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
