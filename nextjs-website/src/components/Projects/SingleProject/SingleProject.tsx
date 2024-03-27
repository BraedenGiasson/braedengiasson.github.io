import React from 'react';
// import { makeStyles } from '@mui/styles';
import { FaPlay, FaCode } from 'react-icons/fa';
import {Fade} from 'react-awesome-reveal'

import placeholder from '@/assets/png/placeholder.png';
import './SingleProject.css';
import Image from 'next/image';
import Link from 'next/link';

type SingleProjectProps = {
    theme: any,
    id: number,
    name: string,
    desc: string,
    tags: string[],
    code: string,
    demo: string,
    image: string
}

function SingleProject({
    id,
    theme,
    name,
    desc,
    tags,
    code,
    demo,
    image
}: 
    SingleProjectProps
) {
    // const useStyles = makeStyles({
    //     iconBtn: {
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         width: 40,
    //         height: 40,
    //         borderRadius: 50,
    //         border: `2px solid ${theme.tertiary}`,
    //         color: theme.tertiary,
    //         transition: 'all 0.2s',
    //         '&:hover': {
    //             backgroundColor: theme.secondary,
    //             color: theme.primary,
    //             transform: 'scale(1.1)',
    //             border: `2px solid ${theme.secondary}`,
    //         },
    //     },
    //     icon: {
    //         fontSize: '1.1rem',
    //         transition: 'all 0.2s',
    //         '&:hover': {},
    //     },
    // });

    // const classes = useStyles();

    return (
        <Fade direction='up' delay={0} fraction={0} triggerOnce>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.primary400 }}
            >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>
                    <Image 
                    src={image ? image : placeholder} alt={name} />
                    <div className='project--showcaseBtn'>
                        <Link
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className='iconBtn'
                            // className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                        >
                            <FaPlay
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                className='icon'
                                // className={classes.icon}
                                aria-label='Demo'
                            />
                        </Link>
                        <Link
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className='iconBtn'
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                        >
                            <FaCode
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                className='icon'
                                aria-label='Code'
                            />
                        </Link>
                    </div>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {desc}
                </p>
                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary80,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;
