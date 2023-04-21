import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';

export const scopeWorkMapping = {
  'GOOGLE ADS SETUP': 'googleAdsManaged',
  'FACEBOOK ADS SETUP': 'fbAdsManaged',
  'CRO SETUP': 'implementCro',
  pricing: 'pricing',
  ['ONBOARDING FORM']: 'ONBOARDING FORM',
  ['PROPOSER DETAILS']: 'PROPOSER DETAILS',
  ['REQUIREMENT DETAILS']: 'REQUIREMENT DETAILS',
  ['GOOGLE ADS AUDIT']: 'GOOGLE ADS',
  ['PROPOSAL']: 'PROPOSAL',
  ['CHANGES SUGGESTED']: 'CHANGES SUGGESTED',
};
const HeaderNavSteps = ({ headerNavList, active, clientView }) => {
  console.log(headerNavList);
  return (
    <>
      {headerNavList.map(({ name }, index) => {
        return (
          <Button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#F1F7FF',
              color: name === active ? '#0869FB' : '',
              cursor: 'pointer',
              width: `calc(100%/${Object.values(headerNavList).length})`,
            }}
            key={index}
            // disabled={(name === "CHANGES SUGGESTED" && !form?.published) || (!form?.companyInfo[scopeWorkMapping[name]])}

            // onClick={() => onClickHandler(name)}
          >
            <Typography
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 16,
                color: name === active ? '#0869FB' : '#505050',
                display: 'flex',
                alignItems: 'center',
                gap: ['PRICING', 'CRO SETUP'].includes(name) ? 8 : 0,
              }}
            >
              {name}
              {console.log(name)}
            </Typography>
          </Button>
        );
      })}
    </>
  );
};

export default HeaderNavSteps;
