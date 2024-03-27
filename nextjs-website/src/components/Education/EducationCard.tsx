import React, { useContext } from 'react';
// import { makeStyles } from '@mui/styles';
// import Fade from 'react-reveal/Fade';

import { ThemeContext } from '@/contexts/ThemeContext';

import eduImgWhite from '@/assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '@/assets/svg/education/eduImgBlack.svg'
import './Education.css'

import type { EducationData } from '@/data/educationData'
import Image from 'next/image';
import {Fade} from 'react-awesome-reveal'

function EducationCard(cardProps: EducationData) {

    const { theme } = useContext(ThemeContext);

    // const useStyles = makeStyles({
    //     educationCard : {
    //         backgroundColor:theme.primary30,
    //         "&:hover": {
    //             backgroundColor:theme.primary50,
    //         },
    //     },
    // });

    // const classes = useStyles();

    return (
        <Fade direction='up' delay={0} className='education-card-fade' triggerOnce>
            <div key={cardProps.id} className='education-card bg-primary30 hover:bg-primary50'>
            {/* <div key={cardProps.id} className={`education-card ${classes.educationCard}`} > */}
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <Image src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{cardProps.startYear}-{cardProps.endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{cardProps.course}</h4>
                    <h5 style={{color: theme.tertiary80}}>{cardProps.institution}</h5>
                </div>
            </div>
        </Fade>        
    )
}

export default EducationCard
