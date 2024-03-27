'use client'

import { useContext, useState } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

import './BaseTripTemplate.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { SpecificTripSectionData } from '@/data/tripsData';
import { europeTripData } from '@/data/trips/europe/europeTripData';
import { TripTemplate } from '@/enums/tripTemplate';
import TemplateOne from '../One/TemplateOne';
import { Fade } from 'react-awesome-reveal';

function BaseTripTemplate(){
  const { theme } = useContext(ThemeContext);

  const [tripDataIndex, setTripDataIndex] = useState(0);

  const leftArrowClick = () => {
    if (tripDataIndex <= 0) return;

    setTripDataIndex(tripDataIndex - 1);
  };
  
  const rightArrowClick = () => {
    if (tripDataIndex >= europeTripData[0].length - 1) return;

    setTripDataIndex(tripDataIndex + 1);
  };

  const template = (): JSX.Element | any => {
    const trip = europeTripData[0][tripDataIndex];

    switch (trip.template) {
      case TripTemplate.One:
        return <TemplateOne trip={trip}/>
      default:
        return;
    }
  };

  return (
    <div className="europe-trip-body overflow-hidden">
      <div className='fixed left-0 top-[50%] translate-y-[-50%]'>
        <div className="slideshow-arrows-container">
          <div className="slideshow-arrows">
            <Fade direction='left' className='w-[100%] h-[100%]'>
              <MdChevronLeft 
                onClick={leftArrowClick}
                className="chevron-arrow hover:-translate-x-1 text-primary" />
            </Fade>
          </div>
        </div>
      </div>
      <div className="europe-trip-main-section">
        {
          template()
        }
      </div>
      <div className='fixed right-0 top-[50%] translate-y-[-50%]'>
        <div className="slideshow-arrows-container">
          <div className="slideshow-arrows">
            <Fade direction='right' className='w-[100%] h-[100%]'>
              <MdChevronRight 
                onClick={rightArrowClick}
                className="chevron-arrow hover:translate-x-1 text-primary" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseTripTemplate