import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
// import pieGraph from './assets/pie-graph.svg';
const AuditScore = () => {
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
    color: '#9798A1',
  };
  const bpAuditScoreRangeText = {
    ...bpAuditHeadingTableText,
    fontWeight: 700,
    color: '#434557',
  };
  const bpAccountHealthDescription = {
    ...bpAuditHeadingTableText,
    fontWeight: 500,
    color: '#585969',
    paddingRight: 31,
  };
  const percentageFromBacked = 45; //Value should be in terms of value that is from 0 to 100
  return (
    <div className='audit-score-container'>
      <Typography style={bpHeadingStyle}>Your Audit Score</Typography>
      {/* <div className='bp-scor-pie-graph'>
        <div className='bp-score-progress'></div>
        <img src={pieGraph} alt='' />
      </div> */}
      <div
        class={
          percentageFromBacked >= 0 && percentageFromBacked < 30
            ? 'half-arc-1'
            : percentageFromBacked >= 30 && percentageFromBacked < 70
            ? 'half-arc-2'
            : 'half-arc-3'
        }
        style={{
          '--percentage': `${percentageFromBacked}%`,
          margin: 'auto',
          marginTop: 28,
          marginBottom: 82,
        }}
      >
        <div className='bp-score-detail'>
          <span className='bp-score-percent'>{percentageFromBacked}%</span>
          <span className='bp-score-text'>Score</span>
        </div>
        {/* <span class='label'>20%</span> */}
      </div>
      <div className='audit-score-table'>
        <div className='audit-score-table-header'>
          <Typography
            style={bpAuditHeadingTableText}
            className='bp-score-value'
          >
            Score
          </Typography>
          <Typography
            style={bpAuditHeadingTableText}
            className='bp-account-health'
          >
            Account Health
          </Typography>
        </div>
        <div className='audit-score-table-row'>
          <Typography style={bpAuditScoreRangeText} className='bp-score-value'>
            0-30
          </Typography>
          <Typography
            style={bpAccountHealthDescription}
            className='bp-account-health'
          >
            Poor: The account needs significant work to improve health and
            attain optimal performance.
          </Typography>
        </div>
        <div className='audit-score-table-row'>
          <Typography style={bpAuditScoreRangeText} className='bp-score-value'>
            30-70
          </Typography>
          <Typography
            style={bpAccountHealthDescription}
            className='bp-account-health'
          >
            Moderate: Though this account is account is in decent shape and
            follows a few known 'best practices', there still is a lot of space
            for improvement.
          </Typography>
        </div>
        <div className='audit-score-table-row'>
          <Typography style={bpAuditScoreRangeText} className='bp-score-value'>
            70-100
          </Typography>
          <Typography
            style={bpAccountHealthDescription}
            className='bp-account-health'
          >
            Good: The account is in good shape. The focus can now be entirely on
            strategically improving ROI/scaling profitability.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AuditScore;
