'use client'

import { FC } from "react";
import { useContext, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import "./ProjectPage.css";
import { SingleProject } from '@/components';
import { ThemeContext } from "@/contexts/ThemeContext";
import { projectsData } from '@/data/projectsData'
import { headerData } from "@/data/headerData";

interface pageProps {
  
}

export default function Projects() {
    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags
        return content.toLowerCase().includes(search.toLowerCase())
    })

    // const useStyles = makeStyles((t) => ({
    //     search : {
    //         color: theme.tertiary, 
    //         width: '40%',
    //         height: '2.75rem',
    //         outline: 'none',
    //         border: 'none',
    //         borderRadius: '20px',
    //         padding: '0.95rem 1rem',
    //         fontFamily: "'Noto Sans TC', sans-serif",
    //         fontWeight: 500,
    //         fontSize: '0.9rem',  
    //         backgroundColor: theme.secondary, 
    //         boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
    //         "&::placeholder": {
    //             color: theme.tertiary80, 
    //         },
    //         [t.breakpoints.down('sm')]: {
    //             width:'350px',
    //         },
    //     },
    //     home: {
    //         color: theme.secondary,
    //         position: 'absolute',
    //         top: 25,
    //         left: 25,
    //         padding: '7px',
    //         borderRadius: '50%',
    //         boxSizing: 'content-box',
    //         fontSize: '2rem',
    //         cursor: 'pointer',
    //         boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
    //         transition: 'all 0.3s ease-in-out',
    //         "&:hover": 
    //         {
    //             color: theme.tertiary,
    //             transform: 'scale(1.1)',
    //         },
    //         [t.breakpoints.down('sm')]: {
    //             fontSize: '1.8rem',
    //         },
    //     },
    // }));

    // const classes = useStyles();

    return (
        <div className="projectPage" style={{backgroundColor: theme.secondary}}>
            <Head>
                <title>{headerData.name} | Projects</title>
            </Head>
            <div className="projectPage-header" style={{backgroundColor:theme.primary}}>
                <Link href="/" className="absolute top-[25px] left-[25px]">
                        <AiOutlineHome className={`text-secondary  p-[7px] rounded-[50%] box-content text-[2rem] cursor-pointer  ${theme.type === 'dark' ? 'shadow-[3px_3px_6px_#ffffff40,-3px_-3px_6px_#00000050]' : 'shadow-[3px_3px_6px_#ffffff40,-3px_-3px_6px_#00000050]'} transition-all duration-[0.3s] ease-in-out hover:text-tertiary hover:scale-[1.1] sm:text-[1.8rem]`}/>
                        {/* <AiOutlineHome className={classes.home}/> */}
                </Link>
                <h1 style={{color: theme.secondary}}>Projects</h1>
            </div>
           <div className="projectPage-container">
               <div className="projectPage-search">
                   <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project..." className={`text-tertiary w-[40%] h-[2.75rem] border-none rounded-[20px] py-[0.95rem] px-[1rem] font-noto-sans-tc font-medium text-[0.9rem] bg-secondary ${theme.type === 'dark' ? 'shadow-[inset_3px_3px_6px_#ffffff10,inset_-3px_-3px_6px_#00000060]' : 'shadow-[inset_3px_3px_6px_#ffffffbd,inset_-3px_-3px_6px_#00000030]'} placeholder:text-tertiary80 sm:w-[350px]`}
                   style={{
                    outline: 'none'
                   }} />
                   {/* <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project..." className={classes.search} /> */}
               </div>
               <div className="project-container">
                   <Grid className="project-grid" container direction="row" alignItems="center" justify="center">
                        {filteredArticles.map(project => (
                            <SingleProject
                                theme={theme}
                                key={project.id}
                                id={project.id}
                                name={project.projectName}
                                desc={project.projectDesc}
                                tags={project.tags}
                                code={project.code}
                                demo={project.demo}
                                image={project.image} 
                            />
                        ))}
                   </Grid>
               </div>
           </div>    
        </div>
    )
}
