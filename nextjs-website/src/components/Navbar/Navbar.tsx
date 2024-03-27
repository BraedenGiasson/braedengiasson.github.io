'use client'

import { useContext, useState, useEffect } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import {Fade} from 'react-awesome-reveal'

// import { NavLink } from "react-router-dom";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill, BsGear, BsTools } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import {
  FaUser,
  FaFolderOpen,
  FaTools,
  FaProjectDiagram,
  FaPlane
} from "react-icons/fa";
// import { makeStyles } from "tss-react/mui";
import {Drawer} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";
import { headerData } from "@/data/headerData";
import { ThemeContext } from "@/contexts/ThemeContext";
// import { Link } from "react-router-dom";
// import Close from "@mui/icons-material/Close";

import Link from 'next/link'
import { poppins } from "@/utils/fonts";

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);

  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    const changeNavBackgroundColor = (e: any) => {
      // Change navbar background color when scrolled past landing page
      window.scrollY > window.innerHeight - 208
        ? setNavbarBackgroundColor(true)
        : setNavbarBackgroundColor(false);

      // Get the new Value
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(true);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(false);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", changeNavBackgroundColor);

    return () => window.removeEventListener("scroll", changeNavBackgroundColor);
  }, []);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  // const useStyles = makeStyles((t) => ({
  //   // navMenu: {
  //   //   fontSize: "2.5rem",
  //   //   color: theme.tertiary,
  //   //   cursor: "pointer",
  //   //   transform: "translateY(-10px)",
  //   //   transition: "color 0.3s",
  //   //   "&:hover": {
  //   //     color: theme.primary,
  //   //   },
  //   //   [t.breakpoints.down("sm")]: {
  //   //     fontSize: "2.5rem",
  //   //   },
  //   //   [t.breakpoints.down("xs")]: {
  //   //     fontSize: "2rem",
  //   //   },
  //   // },
  //   // navMenuHovered: {
  //   //   fontSize: "2.5rem",
  //   //   color: theme.tertiary,
  //   //   cursor: "pointer",
  //   //   transform: "translateY(-10px)",
  //   //   transition: "color 0.3s",
  //   //   "&:hover": {
  //   //     color: theme.secondary,
  //   //   },
  //   //   [t.breakpoints.down("sm")]: {
  //   //     fontSize: "2.5rem",
  //   //   },
  //   //   [t.breakpoints.down("xs")]: {
  //   //     fontSize: "2rem",
  //   //   },
  //   // },
  //   // MuiDrawer: {
  //   //   padding: "0em 1.8em",
  //   //   width: "14em",
  //   //   fontFamily: " var(--primaryFont)",
  //   //   fontStyle: " normal",
  //   //   fontWeight: " normal",
  //   //   fontSize: " 24px",
  //   //   background: theme.secondary,
  //   //   overflow: "hidden",
  //   //   borderTopRightRadius: "40px",
  //   //   borderBottomRightRadius: "40px",
  //   //   [t.breakpoints.down("sm")]: {
  //   //     width: "12em",
  //   //   },
  //   // },
  //   // closebtnIcon: {
  //   //   fontSize: "2rem",
  //   //   fontWeight: "bold",
  //   //   cursor: "pointer",
  //   //   color: theme.primary,
  //   //   position: "absolute",
  //   //   right: 40,
  //   //   top: 40,
  //   //   transition: "color 0.2s",
  //   //   "&:hover": {
  //   //     color: theme.tertiary,
  //   //   },
  //   //   [t.breakpoints.down("sm")]: {
  //   //     right: 20,
  //   //     top: 20,
  //   //   },
  //   // },
  //   // drawerItem: {
  //   //   margin: "2rem auto",
  //   //   borderRadius: "78.8418px",
  //   //   background: theme.secondary,
  //   //   color: theme.primary,
  //   //   width: "85%",
  //   //   height: "60px",
  //   //   display: "flex",
  //   //   alignItems: "center",
  //   //   justifyContent: "space-evenly",
  //   //   padding: "0 30px",
  //   //   boxSizing: "border-box",
  //   //   border: "2px solid",
  //   //   borderColor: theme.primary,
  //   //   transition: "background-color 0.2s, color 0.2s",
  //   //   "&:hover": {
  //   //     background: theme.primary,
  //   //     color: theme.secondary,
  //   //   },
  //   //   [t.breakpoints.down("sm")]: {
  //   //     width: "100%",
  //   //     padding: "0 25px",
  //   //     height: "55px",
  //   //   },
  //   // },
  //   // drawerLinks: {
  //   //   fontFamily: "var(--primaryFont)",
  //   //   width: "50%",
  //   //   fontSize: "1.3rem",
  //   //   fontWeight: 600,
  //   //   [t.breakpoints.down("sm")]: {
  //   //     fontSize: "1.125rem",
  //   //   },
  //   // },
  //   // drawerIcon: {
  //   //   fontSize: "1.6rem",
  //   //   [t.breakpoints.down("sm")]: {
  //   //     fontSize: "1.385rem",
  //   //   },
  //   // },
  // }));

  // const classe = useStyles();

  // const shortname = (name) => {
  //   if (name.length > 12) {
  //     return name.split(" ")[0];
  //   } else {
  //     return name;
  //   }
  // };

  return (
    <div
      className={`${navbarBackgroundColor ? "navbar-bg" : "navbar"} ${
        show && "hidden"
      }`}
    >
      <div className="navbar--container">
        {/* <h1 style={{ color: theme.secondary }}> */}
        <h1 style={{ color: theme.tertiary }}>{headerData.name}</h1>

        <IoMenuSharp
          className={`text-[2.5rem] text-tertiary cursor-pointer -translate-y-2.5 sm:text-[2.5rem] max-[640px]:text-[2rem] transition-[color] duration-[0.3s] ${navbarBackgroundColor ? `hover:text-secondary` : `hover:text-primary`}`}
          onClick={handleDrawerOpen}
          aria-label="Menu"
        />
      </div>
      <Drawer
        variant="temporary"
        onClose={(event: any, reason: string) => {
          if (reason !== "backdropClick" || reason !== "escapeKeyDown") {
            handleDrawerClose();
          } 
          else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
          // if (reason !== "backdropClick") {
          //   handleDrawerClose();
          // } else if (reason !== "escapeKeyDown") {
          //   handleDrawerClose();
          // }
        }}
        anchor="left"
        open={open}
        // classes={{ paper: className }}
        // classes={{
        //   paper: 
        // }}
        PaperProps={{
          sx: {
            paddingTop: '0em',
            paddingBottom: '0em',
            paddingLeft: '1.8rem',
            paddingRight: '1.8rem',
            width: {
              xs: '12em',
              sm: '14em'
            },
            font: poppins,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '24px',
            backgroundColor: theme.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
          }
        }}
        className="drawer"
        disableScrollLock={true}
      >
        <div className="div-closebtn">
          <CloseIcon 
            onClick={handleDrawerClose} 
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className='!text-[2rem] font-bold cursor-pointer text-primary absolute right-[20px] top-[20px] transition-[color] duration-[0.2s] border-none focus:border-[0px] hover:text-tertiary sm:right-[40px] sm:top-[40px]'
            role="button"
            tabIndex={0}
            aria-label="Close"
            />
          {/* <CloseIcon
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className='text-[2rem] font-bold cursor-pointer text-primary absolute right-[40] top-[40] transition-[color] duration-[0.2s] hover:text-tertiary sm:right-[20] sm:top-[20]'
            // className={classe.closebtnIcon}
            role="button"
            tabIndex="0"
            aria-label="Close"
          /> */}
        </div>
        <br />

        <div onClick={handleDrawerClose}>
          <div className="navLink--container">
            <Fade direction='left'>
              <Link href="/" >
                <div className='drawerItem'>
                {/* <div className={classe.drawerItem}> */}
                  <IoHomeSharp className='drawerIcon' />
                  {/* <IoHomeSharp className={classe.drawerIcon} /> */}
                  <span className='drawerLinks'>Home</span>
                  {/* <span className={classe.drawerLinks}>Home</span> */}
                </div>
              </Link>
            </Fade>

            <Fade direction='left'>
              <Link href="/#about" >
                <div className='drawerItem'>
                  <FaUser className='drawerIcon' />
                  <span className='drawerLinks'>About</span>
                </div>
              </Link>
              {/* <NavLink to="/#about" smooth={true} spy="true" duration={2000}>
                <div className='drawerItem'>
                  <FaUser className='drawerIcon' />
                  <span className='drawerLinks'>About</span>
                </div>
              </NavLink> */}
            </Fade>
            
            <Fade direction='left'>
              <Link href="/trips" >
                <div className='drawerItem'>
                  <FaPlane className='drawerIcon' />
                  <span className='drawerLinks'>Trips</span>
                </div>
              </Link>
            </Fade>

            <Fade direction='left' >
              <Link href="/#skills" >
                <div className='drawerItem'>
                  <FaTools className='drawerIcon' />
                  <span className='drawerLinks'>Skills</span>
                </div>
              </Link>
            </Fade>

            <Fade direction='left'>
              <Link href="/#projects" >
                <div className='drawerItem'>
                  <FaProjectDiagram className='drawerIcon' />
                  <span className='drawerLinks'>Projects</span>
                </div>
              </Link>
            </Fade>

            <Fade direction='left'>
              <Link href="/#resume" >
                <div className='drawerItem'>
                  <HiDocumentText className='drawerIcon' />
                  <span className='drawerLinks'>Resume</span>
                </div>
              </Link>
            </Fade>

            <Fade direction='left'>
              <Link href="/#contacts" >
                <div className='drawerItem'>
                  <MdPhone className='drawerIcon' />
                  <span className='drawerLinks'>Contact</span>
                </div>
              </Link>
            </Fade>
            
            
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
