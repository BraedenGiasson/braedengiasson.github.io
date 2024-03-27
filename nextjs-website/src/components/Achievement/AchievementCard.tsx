import React, { useContext } from 'react';
// import { makeStyles } from '@mui/styles';
import {Fade} from 'react-awesome-reveal'

import { ThemeContext } from '@/contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css'

import type { AchievementsData } from '@/data/achievementData'
import Image from 'next/image';

function AchievementCard(
    {
        id, 
        title, 
        details, 
        date, 
        field
    }
    : AchievementsData
    ) {

    const { theme } = useContext(ThemeContext);

    // const useStyles = makeStyles({
    //     achievementCard : {
    //         backgroundColor:theme.primary30,
    //         "&:hover": {
    //             backgroundColor:theme.primary50,
    //         },
    //     },
    // });

    // const classes = useStyles();
    
    return (
        <Fade direction='up' className='w-[100%]'>
           <div key={id} className='achievement-card bg-primary30 hover:bg-primary50'>
               <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{color: theme.tertiary}}>{title}</h2>
                        <p style={{color: theme.tertiary80}}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{color: theme.primary}}>
                        <h5>{date}</h5>
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <h5>{field}</h5>
                        </div>   
                    </div>
                </div> 
                {/* <div className="achievecard-imgcontainer">
                    <Image src={image} alt="" />
                </div> */}
           </div>
        </Fade>
        
    )
}

export default AchievementCard
