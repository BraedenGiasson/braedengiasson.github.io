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
  FaGlobe,
  FaPlane,
  FaEuroSign,
  FaMapPin
} from "react-icons/fa";
// import { makeStyles } from "tss-react/mui";
import {Drawer} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./TripsNavbar.css";
import { headerData } from "@/data/headerData";
import { ThemeContext } from "@/contexts/ThemeContext";
// import { Link } from "react-router-dom";
// import Close from "@mui/icons-material/Close";

import Link from 'next/link'
import { poppins } from "@/utils/fonts";
import { tripsData } from "@/data/tripsData";

function TripsNavbar({
  title
}
: {
  title: string
}) {
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

  return (
    <div
      className={`${navbarBackgroundColor ? "navbar-bg" : "navbar"} ${
        show && "hidden"
      }`}
    >
      <div className="navbar--container">
        {/* <h1 style={{ color: theme.secondary }}> */}
        <h1 style={{ color: theme.tertiary }}>{title}</h1>

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
        }}
        anchor="left"
        open={open}
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
              <Link href="/trips" >
                <div className='drawerItem'>
                  <FaPlane className='drawerIcon' />
                  <span className='drawerLinks'>Trips</span>
                </div>
              </Link>
            </Fade>

            <div className='pl-[2.5rem]'>
              {tripsData.trips.map((trip) => {
                return (
                  <Fade direction="left" delay={400}>
                    <Link href={`/trips/${trip.endpoint}`}>
                      <div className="drawerItem">
                        <FaMapPin className="drawerIcon" />
                        <span className="drawerLinks">{trip.title}</span>
                      </div>
                    </Link>
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default TripsNavbar;
