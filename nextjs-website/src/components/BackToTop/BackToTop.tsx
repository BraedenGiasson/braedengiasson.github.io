'use client'

import React, { useState, useContext, useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
// import { makeStyles } from '@mui/styles';

import { ThemeContext } from '@/contexts/ThemeContext';
import './BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const { theme } = useContext(ThemeContext);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        if (typeof window !== undefined){
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    // if (typeof window !== undefined){
    //     window.addEventListener('scroll', toggleVisible);
    // }

    useEffect(() => {
        if (typeof window !== undefined){
            // Add scroll event listener when the component mounts
            window.addEventListener('scroll', toggleVisible);
        
            // Remove the event listener when the component unmounts
            return () => {
              window.removeEventListener('scroll', toggleVisible);
            };
        }
      }, []);

    // const useStyles = makeStyles({
    //     icon: {
    //         fontSize: '3rem',
    //         color: theme.tertiary,
    //     },
    // });

    // const classes = useStyles();

    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }}
            className='backToTop'
        >
            <button onClick={scrollToTop} aria-label='Back to top'>
                <IoIosArrowDropupCircle className='text-[3rem] text-tertiary' />
            </button>
        </div>
    );
}

export default BackToTop;
