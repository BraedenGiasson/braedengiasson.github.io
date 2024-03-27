'use client'

import React, { useContext, useEffect, useState } from 'react';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
// import { makeStyles } from '@mui/styles';
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaBloggerB,
    FaRedditAlien,
    FaStackOverflow,
    FaCodepen,
    FaInstagram,
    FaGitlab,
    FaMediumM,
    FaLink
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '@/contexts/ThemeContext';

import { socialsData } from '@/data/socialsData';
import { contactsData } from '@/data/contactsData';
import './Contacts.css';
import Image from 'next/image';
// const sgMail = require('@sendgrid/mail');

// import dynamic from 'next/dynamic'
// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

// export const config = {
//     unstable_runtimeJS: false
// };

function Contacts() {
    const { theme } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleClose = (event: any, reason: any) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // const useStyles = makeStyles({
    //     input: {
    //         border: `4px solid ${theme.primary80}`,
    //         backgroundColor: `${theme.secondary}`,
    //         color: `${theme.tertiary}`,
    //         fontFamily: 'var(--primaryFont)',
    //         fontWeight: 500,
    //         transition: 'border 0.2s ease-in-out',
    //         '&:focus': {
    //             border: `4px solid ${theme.primary600}`,
    //         },
    //     },
    //     message: {
    //         border: `4px solid ${theme.primary80}`,
    //         backgroundColor: `${theme.secondary}`,
    //         color: `${theme.tertiary}`,
    //         fontFamily: 'var(--primaryFont)',
    //         fontWeight: 500,
    //         transition: 'border 0.2s ease-in-out',
    //         '&:focus': {
    //             border: `4px solid ${theme.primary600}`,
    //         },
    //     },
    //     label: {
    //         backgroundColor: `${theme.secondary}`,
    //         color: `${theme.primary}`,
    //         fontFamily: 'var(--primaryFont)',
    //         fontWeight: 600,
    //         fontSize: '0.9rem',
    //         padding: '0 5px',
    //         transform: 'translate(25px,50%)',
    //         display: 'inline-flex',
    //     },
    //     socialIcon: {
    //         width: '45px',
    //         height: '45px',
    //         borderRadius: '50%',
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         fontSize: '21px',
    //         backgroundColor: theme.primary,
    //         color: theme.secondary,
    //         transition: '250ms ease-in-out',
    //         '&:hover': {
    //             transform: 'scale(1.1)',
    //             color: theme.secondary,
    //             backgroundColor: theme.tertiary,
    //         },
    //     },
    //     detailsIcon: {
    //         width: '45px',
    //         height: '45px',
    //         borderRadius: '50%',
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         fontSize: '23px',
    //         backgroundColor: theme.primary,
    //         color: theme.secondary,
    //         transition: '250ms ease-in-out',
    //         flexShrink: 0,
    //         '&:hover': {
    //             transform: 'scale(1.1)',
    //             color: theme.secondary,
    //             backgroundColor: theme.tertiary,
    //         },
    //     },
    //     submitBtn: {
    //         backgroundColor: theme.primary,
    //         color: theme.secondary,
    //         transition: '250ms ease-in-out',
    //         '&:hover': {
    //             transform: 'scale(1.08)',
    //             color: theme.secondary,
    //             backgroundColor: theme.tertiary,
    //         },
    //     },
    // });

    // const classes = useStyles();

    const handleContactForm = (e: any) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const currentDate = new Date();
                const formatDate = `${currentDate.toLocaleDateString("en-US")} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                    date: formatDate
                };

                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    // console.log('success');
                    // console.log(res);
                    setSuccess(true);

                    // Clear the 'sent' text
                    setTimeout(() => setSuccess(false), 4000);

                    setErrMsg('');
                    
                    setName('');
                    setEmail('');
                    setMessage('');

                    setErrMsg('Your message was sent');
                    setOpen(true);

                    //  sgMail.setApiKey('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');

                    // const msg = {
                    //     to: 'braedengiassonbusiness@gmail.com',
                    //     from: email,
                    //     subject: 'Testing',
                    //     text: message,
                    //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                    // };

                    // sgMail.send(msg);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className='contacts--container'>
                <h1 className='website-sections-title' style={{ color: theme.primary }}>Get in Touch</h1>

                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <form onSubmit={handleContactForm}>
                            <div className='input-container'>
                                <label htmlFor='Name' className="label">
                                    Name
                                </label>
                                <input
                                    placeholder='Your name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name='Name'
                                    className='form-input form-field'
                                />
                            </div>

                            <div className='input-container'>
                                <label htmlFor='Email' className='label'>
                                    Email
                                </label>
                                <input
                                    placeholder='xyz@gmail.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name='Email'
                                    className='form-input form-field'
                                />
                            </div>

                            <div className='input-container'>
                                <label
                                    htmlFor='Message'
                                    className='label'
                                    // className={classes.label}
                                >
                                    Message
                                </label>
                                <textarea
                                    placeholder='Type your message....'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    itemType='text'
                                    name='Message'
                                    className='form-message form-field'
                                />
                            </div>

                            <div className='submit-btn'>
                                <button
                                    type='submit'
                                    className='bg-primary text-secondary duration-[250ms] ease-in-out hover:scale-[1.08] hover:text-secondary hover:bg-tertiary'
                                    // className={classes.submitBtn}
                                >
                                    <p>{!success ? 'Send' : 'Sent'}</p>
                                    <div className='submit-icon'>
                                        <AiOutlineSend
                                            className='send-icon'
                                            style={{
                                                animation: !success
                                                    ? 'initial'
                                                    : 'fly 0.8s linear both',
                                                position: success
                                                    ? 'absolute'
                                                    : 'initial',
                                            }}
                                        />
                                        <AiOutlineCheckCircle
                                            className='success-icon'
                                            style={{
                                                display: !success
                                                    ? 'none'
                                                    : 'inline-flex',
                                                opacity: !success ? '0' : '1',
                                            }}
                                        />
                                    </div>
                                </button>
                            </div>
                        </form>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <SnackbarContent
                                action={
                                    <React.Fragment>
                                        <IconButton
                                            size='small'
                                            aria-label='close'
                                            color='inherit'
                                            onClick={handleClose}
                                            // **********************************************
                                            
                                            // **********************************************
                                        >
                                            <CloseIcon fontSize='small' />
                                        </IconButton>
                                    </React.Fragment>
                                }
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.secondary,
                                    fontFamily: 'var(--primaryFont)',
                                }}
                                message={errMsg}
                            />
                        </Snackbar>
                    </div>

                    <div className='contacts-details'>
                        <a
                            href={`mailto:${contactsData.email}`}
                            className='personal-details'
                        >
                            <div className="social-icon icon-details-text-size shrink-0">
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href={`tel:${contactsData.phone}`}
                            className='personal-details'
                        >
                            <div className="social-icon icon-details-text-size shrink-0">
                                <FiPhone />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.phone}
                            </p>
                        </a>
                        <div className='personal-details'>
                            <div className="social-icon icon-details-text-size shrink-0">
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div>

                        <div className='socialmedia-icons'>
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="social-icon icon-social-text-size"
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="social-icon icon-social-text-size"
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}
                            {socialsData.linktree && (
                                <a
                                    href={socialsData.linktree}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="social-icon icon-social-text-size"
                                >
                                    <FaLink aria-label='Linktree' />
                                </a>
                            )}
                            {socialsData.youtube && (
                                <a
                                    href={socialsData.youtube}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="social-icon icon-social-text-size"
                                >
                                    <FaYoutube aria-label='YouTube' />
                                </a>
                            )}
                            {socialsData.instagram && (
                                <a
                                    href={socialsData.instagram}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="social-icon  icon-social-text-size"
                                    // className={classes.socialIcon}
                                >
                                    <FaInstagram aria-label='Instagram' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src={theme.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
}

export default Contacts;
