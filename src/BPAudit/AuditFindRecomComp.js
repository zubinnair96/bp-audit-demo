import React from 'react';
import { Typography, TextField } from '@mui/material';
const AuditFindRecomComp = ({ read, finding, recommendation }) => {
  return (
    <>
      {finding.map((finding, index) => (
        <div
          style={{
            position: 'relative',
          }}
        >
          <div className='audit_subcontainer'>
            {read ? (
              <div className='audit_info'>
                <Typography className='info_text'>{finding}</Typography>
              </div>
            ) : (
              <TextField
                multiline
                value={finding}
                sx={{
                  width: 422,
                  height: 72,
                  background: 'white',
                  padding: 0,
                }}
                inputProps={{
                  fontFamily: 'Inter',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#585969',
                  lineHeight: '20px',
                  background: 'white',
                }}
                rows={4}
                variant='outlined'
              />
            )}
            <div
              style={{
                height: '48px',
                background: '#dfe0e4',
                border: '1px solid #dfe0e4',
              }}
            ></div>
            {read ? (
              <div className='audit_info'>
                <Typography className='info_text'>
                  {recommendation[index]}
                </Typography>
              </div>
            ) : (
              <TextField
                multiline
                value={recommendation[index]}
                variant='outlined'
                sx={{
                  width: 422,
                  height: 72,
                  fontFamily: 'Inter',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#585969',
                  lineHeight: '20px',
                  background: 'white',
                }}
                inputProps={{
                  fontFamily: 'Inter',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#585969',
                  lineHeight: '20px',
                  background: 'white',
                }}
                rows={4}
              />
            )}
          </div>
          {!read && (
            <>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  marginLeft: '5px',
                  position: 'absolute',
                  right: -32,
                  top: '45%',
                  transform: 'translateY(-50%)',
                }}
              >
                X
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default AuditFindRecomComp;
