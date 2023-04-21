import { Typography } from '@material-ui/core';
import React from 'react';

const AuditProcess = () => {
  const bpHeadingStyle = {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '26px',
    color: '#2E3044',
    paddingTop: 24,
    paddingLeft: 24,
    paddingBottom: 15,
  };
  const bpAuditHeadingTableText = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '20px',
    color: '#2E3044',
  };
  const bpAuditProcessValue = {
    ...bpAuditHeadingTableText,
    color: '#434557',
  };
  return (
    <div className='audit-process-container'>
      <Typography style={bpHeadingStyle}>Our Audit Process</Typography>
      <div className='audit-process-details'>
        <div className='heading-audit-process-table'>
          <Typography
            style={bpAuditHeadingTableText}
            className='bp-area-of-focus'
          >
            Area of Focus
          </Typography>
          <Typography style={bpAuditHeadingTableText} className='bp-score'>
            Score
          </Typography>
          <Typography style={bpAuditHeadingTableText} className='bp-total'>
            Total
          </Typography>
        </div>
        {/* Use this component for rendering rows in loop */}
        <div className='bp-audit-process-row'>
          <Typography style={bpAuditProcessValue} className='bp-area-of-focus'>
            Ad
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-score'>
            5
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-total'>
            7
          </Typography>
        </div>
        <div className='bp-audit-process-row'>
          <Typography style={bpAuditProcessValue} className='bp-area-of-focus'>
            Keyword
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-score'>
            0
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-total'>
            3
          </Typography>
        </div>
        <div className='bp-audit-process-row'>
          <Typography style={bpAuditProcessValue} className='bp-area-of-focus'>
            Ad Group
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-score'>
            3
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-total'>
            4
          </Typography>
        </div>
        <div className='bp-audit-process-row'>
          <Typography style={bpAuditProcessValue} className='bp-area-of-focus'>
            Asset Group
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-score'>
            0
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-total'>
            1
          </Typography>
        </div>
        <div className='bp-audit-process-row'>
          <Typography style={bpAuditProcessValue} className='bp-area-of-focus'>
            Campaign
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-score'>
            5
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-total'>
            10
          </Typography>
        </div>
        {/* <div className='bp-audit-process-row'>
          <Typography style={bpAuditProcessValue} className='bp-area-of-focus'>
            Merchant Centre
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-score'>
            5
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-total'>
            5
          </Typography>
        </div> */}
        <div className='bp-audit-process-row'>
          <Typography style={bpAuditProcessValue} className='bp-area-of-focus'>
            Conversion
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-score'>
            1
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-total'>
            4
          </Typography>
        </div>
        <div className='bp-audit-process-row'>
          <Typography style={bpAuditProcessValue} className='bp-area-of-focus'>
            Account
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-score'>
            1
          </Typography>
          <Typography style={bpAuditProcessValue} className='bp-total'>
            4
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AuditProcess;
