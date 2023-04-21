import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import backgroundImage from './BPAsset/bp-background.png';
import auditBreakdownImage from './BPAsset/audit-breakdown.svg';
import './bp-audit.scss';
import './auditbreakdown.scss';
import AuditProcess from './AuditProcess';
import AuditScore from './AuditScore';
import AuditBreakdown from './AudiBreakdown';
import backArrow from './BPAsset/back-arrow.svg';
import readIcon from '../assets/icons/creative/read-icon.svg';
import writeIcon from '../assets/icons/creative/write-icon.svg';
import selectedReadIcon from '../assets/icons/creative/selected-read-icon.svg';
import selectedWriteIcon from '../assets/icons/creative/selected-write-icon.svg';
import auditBreakdownData from './renderDataIntoNewData';
const BPAudit = () => {
  const bpHeadingStyle = {
    // width: '60%',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 72,
    lineHeight: '88px',
    color: 'white',
    position: 'absolute',
    bottom: 48,
    left: 48,
    display: 'flex',
    flexDirection: 'column',
  };
  const [read, setRead] = useState(true);
  return (
    <>
      <div className='bp-audit-container'>
        <div className='bp-audit-header-container'>
          <div
            className='read-write-icon'
            style={{
              display: 'flex',
              flexDirection: 'row',
              position: 'absolute',
              background: '#ffffff',
              borderRadius: 8,
              right: 24,
              top: 24,
            }}
          >
            <div
              className='read-icon'
              style={{
                width: 40,
                height: 40,
                border: read ? '1px solid #0869FB' : '1px solid #CCCCCC',
                borderRadius: '8px 0px 0px 8px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                background: read ? 'rgba(8, 105, 251, 0.07)' : '#ffffff',
              }}
              onClick={() => setRead(true)}
            >
              <img
                src={read ? selectedReadIcon : readIcon}
                alt=''
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </div>
            <div
              className='write-icon'
              style={{
                width: 40,
                height: 40,
                border: !read ? '1px solid #0869FB' : '1px solid #CCCCCC',
                borderRadius: '0px 8px 8px 0px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                background: !read ? 'rgba(8, 105, 251, 0.07)' : '#ffffff',
              }}
              onClick={() => setRead(false)}
            >
              <img
                src={!read ? selectedWriteIcon : writeIcon}
                alt=''
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </div>
          </div>

          <img src={backgroundImage} />
          <Typography style={bpHeadingStyle}>
            <span>Microscope Central</span>
            <span>PPC Audit</span>
          </Typography>
        </div>
        <div className='bp-search-audit-agenda-container'>
          <Typography
            style={{
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 18,
              lineHeight: '26px',
              color: '#2E3044',
              paddingTop: 24,
              paddingLeft: 24,
            }}
          >
            Search Audit Agenda
          </Typography>
          <div className='search-audit-feature'>
            <div className='audit-process'>
              <Typography className='bp-heading'>Our Audit Process</Typography>
              <Typography className='bp-detail'>
                The components we look at, for insights into your account's
                overall health.
              </Typography>
            </div>
            <div className='audit-score'>
              <Typography className='bp-heading'>Your Audit Score</Typography>
              <Typography className='bp-detail'>
                How well your campaigns are preforming
              </Typography>
            </div>
            <div className='audit-breakdown'>
              <Typography className='bp-heading'>Audit Breakdown</Typography>
              <Typography className='bp-detail'>
                Specific findings and recommendations for each
                investigated/audited component.
              </Typography>
            </div>
          </div>
        </div>
        <div className='audit-process-score-container'>
          <AuditProcess />
          <AuditScore />
        </div>
        <div className='audit-breakdown-header-container'>
          <img src={auditBreakdownImage} alt='' />
          <Typography
            style={{
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 50,
              lineHeight: '60px',
              color: '#060CBB',
              position: 'absolute',
              bottom: '50%',
              left: '23.5%',
              transform: 'translateY(50%)',
            }}
          >
            Audit Breakdown
          </Typography>
        </div>
        <>
          {Object.values(auditBreakdownData).map((auditData, index) => {
            if (auditData.recommendation.length && auditData.finding.length) {
              return (
                <AuditBreakdown
                  sno={index + 1}
                  title={auditData.title}
                  read={read}
                  finding={auditData.finding}
                  recommendation={auditData.recommendation}
                />
              );
            }
            return <></>;
          })}
        </>
        <div className='audit_thankyou'>
          <Typography
            style={{
              fontFamily: 'Inter',
              fontSize: '55px',
              fontWeight: '600',
              lineHeight: '80px',
              color: '#ffffff',
            }}
          >
            Thank You
          </Typography>
        </div>
      </div>
      <div className='preview_footer'>
        <button className='bp-audit-footer-back-button'>
          <img src={backArrow} alt='back-arrow' />
          Back
        </button>
        <button className='bp-audit-footer-save-button'>Proceed</button>
      </div>
    </>
  );
};

export default BPAudit;
