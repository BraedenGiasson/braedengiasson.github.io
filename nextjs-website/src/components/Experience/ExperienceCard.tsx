import React, { useContext } from 'react';
// import { makeStyles } from '@mui/styles';
import {Fade} from 'react-awesome-reveal'

import { ThemeContext } from '@/contexts/ThemeContext';

import expImgWhite from '@/assets/svg/experience/expImgWhite.svg'
import expImgBlack from '@/assets/svg/experience/expImgBlack.svg'

import './Experience.css'

import type { ExperienceData } from '@/data/experienceData'
import Image from 'next/image';

function ExperienceCard(cardProps: ExperienceData) {

    const { theme } = useContext(ThemeContext);

    // const useStyles = makeStyles({
    //     experienceCard : {
    //         backgroundColor:theme.primary30,
    //         "&:hover": {
    //             backgroundColor:theme.primary50,
    //         },
    //     },
    // });

    // const classes = useStyles();


    return (
        <Fade direction='up' className='section-card-fade' triggerOnce>
            <div key={cardProps.id} className='experience-card bg-primary30 hover:bg-primary50'>
            {/* <div key={cardProps.id} className={`experience-card ${classes.experienceCard}`}> */}
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <Image src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary}}>{cardProps.startYear}-{cardProps.endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{cardProps.jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{cardProps.company}</h5>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard
