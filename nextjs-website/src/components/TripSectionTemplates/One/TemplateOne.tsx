import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { SpecificTripSectionData } from '@/data/tripsData';

import './TemplateOne.css';
import Flag from 'react-flagkit';
import Image from 'next/image';

function TemplateOne({
    trip
}:
{
    trip: SpecificTripSectionData
}) {

    const { theme } = useContext(ThemeContext);

    return (
      <div className="template-one-root">
        <div className="main-info-section">
          {/* <div className="info-icon-section">
            {trip.isIconImage ? (
              <Image src={trip.titleIcon} alt="" />
            ) : (
              trip.titleIcon
            )}
          </div> */}
          <div className="flex items-center justify-center h-[100%] w-[100%]">
            {trip.isIconImage ? (
              <Image
                src={trip.titleIcon}
                alt=""
                className="h-[45px] w-[45px] sm:h-[55px] sm:w-[55px] md:h-[65px] md:w-[65px] lg:h-[75px] lg:w-[75px]"
              />
            ) : (
              trip.titleIcon
            )}
          </div>
          <div className="flex flex-col ">
            <h1 className="text-primary text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold">
              {trip.title}
            </h1>
            <h3 className="text-primary600 font-bold">{trip.dates}</h3>
          </div>
          <div></div>
          <div className='flex flex-col gap-[3rem] pt-[2rem] h-[100%]'>
            <div className="title-description-section">
              <h4 className='text-tertiary font-bold'>{trip.subTitle}</h4>
              <p className='text-tertiary80'>{trip.description}</p>
            </div>
            <div className="flags-section">
              {trip.flagCountryCodes?.map((flag) => {
                return (
                  <Flag
                    key={flag}
                    country={flag}
                    role="img"
                    alt=""
                    size={30}
                    className="rounded-[5px] min-w-[30px] border-none"
                  />
                );
              })}
            </div>
          </div>
          {/* <div className="information-section">
            <div className="title-description-section">
              <div className="flex justify-center items-center">
                <div className='flex justify-center items-center h-[100%] w-[100%]'>
                    {trip.isIconImage ? (
                    <Image src={trip.titleIcon} alt="" className='h-[45px] w-[45px] md:h-[55px] md:w-[55px] lg:h-[66px] lg:w-[66px]' />
                    ) : (
                    trip.titleIcon
                    )}
                </div>
                <div className='flex flex-col '>
                    <h1 className="text-primary text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
                    {trip.title}
                    </h1>
                    <h3 className="text-primary600">
                        {trip.dates}
                    </h3>
                </div>
              </div>
            </div>
            <div className="title-description-section">
              <h4>{trip.subTitle}</h4>
              <p>{trip.description}</p>
            </div>
            <div className="flags-section">
              {trip.flagCountryCodes?.map((flag) => {
                return (
                  <Flag
                    key={flag}
                    country={flag}
                    role="img"
                    alt=""
                    size={30}
                    className="rounded-[5px] min-w-[30px] border-none"
                  />
                );
              })}
            </div>
          </div> */}
        </div>
        <div className="photos-preview-section">
            <div className="preview-photos-container">
                {trip.previewImages?.map((previewImage, index) => {
                return (
                        <div className={`${index === 0 && 'top-[0] left-[2rem]'} ${index === 1 && 'right-[2rem] bottom-[0]'} absolute`}>
                            <Image 
                                src={previewImage} 
                                alt=""
                                width={300}
                                height={300}
                                layout='raw'
                                className={`${index === 0 && 'top-[0] left-[2rem]'} ${index === 1 && 'right-[2rem] bottom-[0]'} block max-w-[100%] max-h-[100%]`}
                                style={{
                                    zIndex: index * 2,
                                }} />
                        </div>
                        // <div className={`preview-photo-div  ${index === 0 && 'top-[2rem] left-[2rem]'} ${index === 1 && 'right-[2rem] bottom-[2rem]'} ${index === 0 ? 'hover:rotate-[-10deg]' : 'hover:rotate-[10deg]'}`}>
                        //     <Image 
                        //     src={previewImage} 
                        //     alt=""
                        //     objectFit='contain'
                        //     layout='responsive'
                        //     className={`preview-image ${index === 0 && 'top-[0] left-[2rem]'} ${index === 1 && 'right-[2rem] bottom-[0]'}`}
                        //     style={{
                        //         zIndex: index * 2,
                        //     }} />
                        // </div>
                    );
                })}
            </div>
            <div className="more-photos-btn-container"></div>
          </div>
      </div>
    );
}

export default TemplateOne
