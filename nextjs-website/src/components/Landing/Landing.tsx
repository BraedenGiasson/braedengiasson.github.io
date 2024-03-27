import { useContext } from 'react';
import { Button } from '@mui/material';
import {  NextRouter } from 'next/router';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
import Link from 'next/link';
// import { Link } from 'react-scroll'
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { makeStyles } from '@mui/styles';
// import { makeStyles } from 'tss-react/mui';

import './Landing.css';
import { ThemeContext } from '@/contexts/ThemeContext';
import { headerData } from '@/data/headerData';
import { socialsData } from '@/data/socialsData';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
    FaInstagram,
    FaLink
} from 'react-icons/fa';
import Image from 'next/image';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    // const useStyles = makeStyles((t) => ({
        // const resumeBtn = {
        //         color: theme.primary,
        //         borderRadius: '30px',
        //         textTransform: 'inherit',
        //         textDecoration: 'none',
        //         width: '150px',
        //         fontSize: '1rem',
        //         fontWeight: '500',
        //         height: '50px',
        //         fontFamily: 'var(--primaryFont)',
        //         border: `3px solid ${theme.primary}`,
        //         transition: '100ms ease-out',
        //         '&:hover': {
        //             backgroundColor: theme.tertiary,
        //             color: theme.secondary,
        //             border: `3px solid ${theme.tertiary}`,
        //         },
        //         [t.breakpoints.down('sm')]: {
        //             width: '180px',
        //         },
        //     },
        // }
    //     contactBtn: {
    //         backgroundColor: theme.primary,
    //         color: theme.secondary,
    //         borderRadius: '30px',
    //         textTransform: 'inherit',
    //         textDecoration: 'none',
    //         width: '150px',
    //         height: '50px',
    //         fontSize: '1rem',
    //         fontWeight: '500',
    //         fontFamily: 'var(--primaryFont)',
    //         border: `3px solid ${theme.primary}`,
    //         transition: '100ms ease-out',
    //         '&:hover': {
    //             backgroundColor: theme.secondary,
    //             color: theme.tertiary,
    //             border: `3px solid ${theme.tertiary}`,
    //         },
    //         [t.breakpoints.down('sm')]: {
    //             display: 'none',
    //         },
    //     },
    // }));

    // const classes = useStyles();

    const variables = {
        backgroundColor: theme.primary
    };

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className="landing--container-left bg-primary"
                    // style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.github && (
                            <Link
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </Link>
                        )}
                        {socialsData.linkedIn && (
                            <Link
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </Link>
                        )}
                        {socialsData.linktree && (
                            <Link
                                href={socialsData.linktree}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLink
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Linktree'
                                />
                            </Link>
                        )}
                        {socialsData.youtube && (
                            <Link
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='YouTube'
                                />
                            </Link>
                        )}
                        {socialsData.instagram && (
                            <Link
                                href={socialsData.instagram}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaInstagram
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Instagram'
                                />
                            </Link>
                        )}
                    </div>
                </div>
                <Image
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <Link
                                    href='/BraedenGiasson_CV.pdf'
                                    // href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <button className='landing-btn text-primary hover:bg-tertiary hover:text-secondary w-[180px] sm:w-[150px] flex items-center justify-center text-center'>
                                        Download CV
                                    </button>
                                </Link>
                            )}
                            <Link
                                href='/#contacts' 
                                // smooth={true}
                                // spy={true}
                                // duration={2000}
                                // className='landing-btn bg-primary text-secondary hover:bg-secondary hover:text-tertiary sm:w-[180px] hidden'
                            >
                                <button className='landing-btn bg-primary text-secondary hover:bg-secondary hover:text-tertiary hidden sm:block lg'>
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
