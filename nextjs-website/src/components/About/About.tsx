import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '@/contexts/ThemeContext';
import { aboutData } from '@/data/aboutData'

import type { ThemeData } from '@/theme/theme'
import Image from 'next/image';

function About() {

    const { theme } = useContext(ThemeContext);

    return (
        // Can change to Tailwind if needed but not important for now!
        
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 className='website-sections-title' style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}
                    {/* <br/><br/>  
                    {aboutData.description3}
                    <a 
                        href='/#contacts'
                        behavior='smooth'
                        duration={1000}
                        spy='true'> you</a>
                    ! */}
                    </p>
                </div>
                <div className="about-img">
                    <Image 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
