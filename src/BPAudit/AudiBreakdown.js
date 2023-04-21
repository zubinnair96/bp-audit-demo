import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './auditbreakdown.scss';
import Delete from './BPAsset/delete-icon.svg';
import AuditFindRecomComp from './AuditFindRecomComp';

const AuditBreakdown = ({ sno, title, read, finding, recommendation }) => {
  return (
    <>
      <div>
        <div className='accordian_1'>
          <Accordion
            style={{
              padding: 6,
            }}
          >
            <AccordionSummary
              className='accordian_1_head'
              sx={{
                height: '112px',
                borderRadius: '5px',
              }}
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    border: '1px solid #ffffff',
                    background: '#ffffff',
                    borderRadius: '5px',
                    height: '40px',
                    width: '40px',
                    marginRight: '5px',
                  }}
                />
              }
              aria-controls='panel1a-content'
            >
              <>
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <p className='acc_box'>0{sno}</p>
                  <Typography className='accordian_heading'>{title}</Typography>
                </div>
                {!read && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      //   width: '87%',
                    }}
                  >
                    <button className='audit-delete-bt'>
                      {' '}
                      <img
                        src={Delete}
                        style={{
                          width: '40px',
                          height: '40px',
                          objectFit: 'cover',
                        }}
                        alt=''
                      />
                    </button>
                  </div>
                )}
              </>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <div className='audit_header'>
                  <Typography className='audit_text'>Finding</Typography>
                  <Typography className='audit_text'>Recommendation</Typography>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '12px',
                  }}
                >
                  <AuditFindRecomComp
                    read={read}
                    finding={finding}
                    recommendation={recommendation}
                  />
                </div>
                {!read && <button className='add_point'>+ Add Point</button>}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default AuditBreakdown;
