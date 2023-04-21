import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { pixis_icon as pixisIcon } from '../assets/icons/icon';
import backgroundImage from '../assets/images/leftsidepanelbg.svg';
import { profile_icon as profileIcon } from '../assets/icons/icon';
import { arrow_down_icon as arrowDown } from '../assets/icons/icon';
import { brand_nav_illustration as brandNavIllustration } from '../assets/icons/icon';
import './navigationSteps.css';
const NavigationSteps = ({ navigateSteps, active }) => {
  const [completedNavbarObj, setCompletedNavBarObj] = useState({});
  const leftBarStatus = {
    toBeUnlocked: 'To Be Unlocked',
    ongoing: 'Ongoing',
    completed: 'Completed',
  };
  return (
    <Box
      style={{
        background: `url(${backgroundImage}),white`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPositionY: -38,
        height: '100vh',
      }}
    >
      <div className='sidebar_layout amlayout'>
        <div className='logoContainer'>
          <img src={pixisIcon} alt='' />
          <Typography
            variant='h4'
            component='h3'
            style={{
              color: '#0869FB',
              marginTop: 10,
            }}
          >
            Onboarding
          </Typography>
          {/* <h2>Automations</h2> */}
        </div>
        <div className='steps'>
          <div className='steps_inner'>
            {navigateSteps ? (
              navigateSteps?.map((step, key) => (
                <div className='stepHelper' key={key}>
                  <div
                    className='step'
                    id={step.id}
                    // onClick={() => onClickHandler(step.id)}
                  >
                    <div
                      className={
                        completedNavbarObj[step.id] === leftBarStatus.completed
                          ? 'question-logo completedQuest'
                          : completedNavbarObj[step.id] ===
                            leftBarStatus.ongoing
                          ? 'question-logo selectedBackground '
                          : 'question-logo'
                      }
                    >
                      <span className='left_nav_icon'></span>
                    </div>
                    <div className='step-description'>
                      <Typography
                        style={{
                          marginBottom: 0,
                          fontSize: '14px',
                          color:
                            completedNavbarObj[step.id] ===
                            leftBarStatus.completed
                              ? '#000'
                              : step.id === active
                              ? '#000000'
                              : '#adadad',
                        }}
                      >
                        {step.name}
                      </Typography>
                      <Typography
                        style={{
                          marginTop: 0,
                          fontSize: 12,
                          color: '#aeaeae',
                        }}
                      >
                        {step.id === 'AnalyticDashboard' ||
                        step.id === 'CREATIVE_APPROVAL'
                          ? ' '
                          : completedNavbarObj[step.id] || 'To Be Unlocked'}
                      </Typography>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='brand_navigation'>
                <div className='brand_nav_illustration'>
                  <img src={brandNavIllustration} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='navigation_footer'>
          <div className='nav-footer-icons'>
            <div className='account_manger_detials'>
              <p>ABC</p>
              <p>abc@gmail.com</p>
            </div>
            <div
              className='footer-icon profile-icon'
              //   onClick={() => setProfilePopUp(!profilePopUp)}
            >
              <img src={profileIcon} alt='' />
              <img src={arrowDown} alt='' className='arrow-img' />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default NavigationSteps;
