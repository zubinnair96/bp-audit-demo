import './App.css';
import NavigationSteps from './NavigationSteps/index';

import { readaccess_icon as readAccessIcon } from './assets/icons/icon';
import { proposal_icon as proposalIcon } from './assets/icons/icon';

import { strategy_icon as strategyIcon } from './assets/icons/icon';

import { audit as auditSvg } from './assets/icons/common/common';
import { account_proposal as accProposalIcon } from './assets/icons/common/common';
import { google_strategy_icon as googleIcon } from './assets/icons/common/common';
import HeaderNavSteps from './HeaderNavSteps/index';
import BPAudit from './BPAudit/BPAudit';
const listOfIds = {
  questionnaire: 'questionnaire',
  readAcess: 'read-access',
  proposal: 'proposal',
  completeAccess: 'complete-access',
  form: 'form',
  strategy: 'strategy_deck_google',
  approval: 'approval',
  questBasicInform: 'QUEST_BASIC_INFORMATION',
  questPlatformInform: 'QUEST_PLATFORM_INFORMATION',
  questGrowthGoals: 'QUEST_GROWTH_GOALS',
  proposalProposal: 'PROPOSAL_PROPOSAL',
  proposalChangesInProposal: 'PROPOSAL_CHANGES_IN_PROPOSAL',
  accountClientDetails: 'ACCOUNT_CLIENT_DETAILS',
  accountOnboarding: 'ACCOUNT_ONBOARDING',
  accountScopeOfWorkAndPricing: 'ACCOUNT_SCOPE_OF_WORK_AND_PRICING',
  pricing: 'QUEST_PRICING',
  audit: 'AUDIT',
  auditGoogle: 'GOOGLE_AUDIT',
  proposalInputs: 'PROPOSAL_INPUTS',
  changesSuggested: 'CHANGES_SUGGESTED',
  strategyInput: 'STRATEGY_INPUT',
  strategyGoogle: 'STRATEGY_GOOGLE',
  strategyFacebook: 'STRATEGY_FACEBOOK',
  strategyDeck: 'STRATEGY_DECK',
  intakeFormProductInfo: 'INTAKE_FORM_PRODUCT_INFO',
  intakeFormPreferences: 'INTAKE_FORM_PREFERENCES',
  intakeFormAudience: 'INTAKE_FORM_AUDIENCE',
  intakeFormBranding: 'INTAKE_FORM_BRANDING',
  intakeFormSocialProof: 'INTAKE_FORM_SOCIAL_PROOF',
  strategyDeckIntro: 'STRATEGY_DECK_INTRO',
  strategyDeckGoogle: 'STRATEGY_DECK_GOOGLE',
  strategyDeckSuggestChanges: 'STRATEGY_DECK_SUGGEST_CHANGES',
  reviewIntakeForm: 'REVIEW_INTAKE_FORM',
  brandCampaign: 'BRAND_CAMPAIGN',
  competitorCampaign: 'COMPETITOR_CAMPAIGN',
  serviceCampaign: 'SERVICE_CAMPAIGN',
  sharedAssets: 'SHARED_ASSETS',
  sharedAssetsComplete: 'SHARED_ASSETS_COMPLETE',
  campaignForGoogle: 'CAMPAIGN_FOR_GOOGLE',
  CAMPAIGN_PREVIEW: 'CAMPAIGN_PREVIEW',
  AnalyticDashboard: 'AnalyticDashboard',
  facebook: 'facebook',
  facebookTargeting: 'FB_TARGETING',
  campaignPreviewFb: 'CAMPAIGN_PREVIEW_FACEBOOK',
  creativeApproval: 'CREATIVE_APPROVAL',
  creativeApprovalAdcopies: 'CREATIVE_APPROVAL_AD_COPIES',
  creativeApprovalCreatives: 'CREATIVE_APPROVAL_CREATIVES',
  creativeApprovalLandingPages: 'CREATIVE_APPROVAL_LANDING_PAGES',
  creativeAppovalAbTest: 'CREATIVE_APPROVAL_AB_TEST',
  approval: 'approval',
};
const listOfIdsHDM = {
  CLIENTANDACCESS: 'CLIENTANDACCESS',
  BRANDORMESSAGING: 'BRANDORMESSAGING',
  FACEBOOKTARGETING: 'FACEBOOKTARGETING',
  GOOGLETARGETING: 'GOOGLETARGETING',
  ABOUTYOURBUSSINESS: 'ABOUTYOURBUSSINESS',
  CREATIVEANDMONTAGEAD: 'CREATIVEANDMNTAGEAD',
  accessSharing: 'accessSharing',
  SELECTBRAND: 'SELECT BRAND',
  ONBOARDINGOC: 'ONBOARDINGDOC',
  ONBOARDING: 'ONBOARDING',
  REVIEWBRIEINGDOC: 'REVIEW BRIEFING DOC',
  EXPECTATIONS: 'EXPECTATIONS',
  onboardingInfo: 'onboardingInfo',
  AUDIT_FOR_GOOGLE: 'AUDIT_FOR_GOOGLE',
  AUDIT: 'AUDIT_FOR_FACEBOOK',
  AccountAnalysis: 'AccountAnalysis',
  AnalyticDashboard: 'AnalyticDashboard',
  strategyCreation: 'strategyCreation',
  StrategyCreationGoogle: 'StrategyCreationGoogle',
  StrategyCreationFacebook: 'StrategyCreationFacebook',
  STRATEGY_DECK: 'STRATEGY_DECK',
  Account: 'AuditAccount',
  Campaign: 'AuditCampaign',
  Adset: 'AuditAdset',
  Ad: 'AuditAd',
  proposalStatus: 'proposalStatus',
  AccountAnalysisGoogle: 'AccountAnalysisGoogle',
  AccountAnalysisFacebook: 'AccountAnalysisFacebook',
  AccountAnalysisWebsite: 'AccountAnalysisWebsite',
  AccountAnalysisCreatives: 'AccountAnalysisCreatives',
  AccountAnalysisCompetitor: 'AccountAnalysisCompetitor',
  BRANDCAMPAIGN: 'BRANDCAMPAIGN',
  COMPETITORCAMPAIGN: 'COMPETITORCAMPAIGN',
  SERVICECAMPAIGN: 'SERVICESCAMPAIGN',
  LOOKALIKE: 'TOF-LOOKALIKE',
  INTEREST: 'TOF-INTEREST',
  MOF: 'MOF',
  BOF: 'BOF',
  GOAL: 'GOAL',
  ANALYSIS: 'ANALYSIS',
  GOOGLESTRATEGY: 'GOOGLESTRATEGY',
  FBSTRATEGY: 'FBSTRATEGY',
  OURPLAN: 'OURPLAN',
  BESTPRACTICES: 'BESTPRACTICES',
  CHANGESSUGGESTED: 'CHANGESSUGGESTED',
  StrategyDeck: 'StrategyDeck',
  CampaignCreationFB: 'CampaignCreationFB',
  CampaignPreviewFB: 'CampaignPreviewFB',
  CampaignCreationGoogle: 'CampaignCreationGoogle',
  CampaignPreviewGoogle: 'CampaignPreviewGoogle',
  AuditHdm: 'AUDIT_FACEBOOK',
  CreativeApproval: 'CreativeApproval',
};
const AccountLeftSideBar = [
  {
    imgIcon: readAccessIcon,
    name: 'Client Onboarding Inputs',
    status: 'Done',
    isCurrentStep: false,
    id: listOfIds.accountOnboarding,
  },
  {
    imgIcon: proposalIcon,
    name: 'Pricing',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.accountScopeOfWorkAndPricing,
  },
  {
    imgIcon: readAccessIcon,
    name: 'Read Shared Assets',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.sharedAssets,
  },
  // {
  //   imgIcon: proposalInputIcon,
  //   name: 'Proposal Inputs',
  //   status: 'To be unlocked',
  //   isCurrentStep: false,
  //   id: listOfIds.proposalInputs,
  // },
  {
    imgIcon: auditSvg,
    name: 'Audit For Google',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.audit,
  },
  {
    imgIcon: auditSvg,
    name: 'Audit For Facebook',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIdsHDM.AuditHdm,
  },
  {
    imgIcon: accProposalIcon,
    name: 'Proposal',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.proposal,
  },
  {
    imgIcon: accProposalIcon,
    name: 'Review Intake Form',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.reviewIntakeForm,
  },
  {
    imgIcon: accProposalIcon,
    name: 'Complete Shared Assets',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.sharedAssetsComplete,
  },
  {
    imgIcon: strategyIcon,
    name: 'Strategy Creation Google',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.strategyInput,
  },
  {
    imgIcon: strategyIcon,
    name: 'Strategy Creation Facebook',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIdsHDM.StrategyCreationFacebook,
  },
  {
    imgIcon: strategyIcon,
    name: 'Strategy Deck',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.strategy,
  },
  {
    imgIcon: googleIcon,
    name: 'Campaign Creation Google',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.campaignForGoogle,
  },
  {
    imgIcon: googleIcon,
    name: 'Campaign Creation Facebook',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIdsHDM.CampaignCreationFB,
  },
  {
    imgIcon: proposalIcon,
    name: 'Campaign Preview Google',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.CAMPAIGN_PREVIEW,
  },
  {
    imgIcon: proposalIcon,
    name: 'Campaign Preview Facebook',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIdsHDM.CampaignPreviewFB,
  },
  {
    imgIcon: proposalIcon,
    name: 'Creative Approval',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.creativeApproval,
  },
  {
    imgIcon: proposalIcon,
    name: 'Analytics Dashboard',
    status: 'To be unlocked',
    isCurrentStep: false,
    id: listOfIds.AnalyticDashboard,
  },
];
const headerTabsAccountManager = {
  ['ONBOARDING FORM']: 'ONBOARDING FORM',
  ['PROPOSER DETAILS']: 'PROPOSER DETAILS',
  ['REQUIREMENT DETAILS']: 'REQUIREMENT DETAILS',
  ['GOOGLE ADS SETUP']: 'GOOGLE ADS SETUP',
  ['FACEBOOK ADS SETUP']: 'FACEBOOK ADS SETUP',
  ['CRO SETUP']: 'CRO SETUP',
  ['PRICING']: 'PRICING',
  ['GOOGLE ADS AUDIT']: 'GOOGLE ADS',
  ['PROPOSAL']: 'PROPOSAL',
  ['CHANGES SUGGESTED']: 'CHANGES SUGGESTED',
  ['BRAND CAMPAIGN']: 'BRAND CAMPAIGN',
  ['COMPETITOR CAMPAIGN']: 'COMPETITOR CAMPAIGN',
  ['SERVICES CAMPAIGN']: 'SERVICES CAMPAIGN',
  ['INTRODUCTION']: 'INTRODUCTION',
  ['GOOGLE']: 'GOOGLE',
  ['STRATEGY_SUGGEST_CHANGES']: 'SUGGESTED CHANGES',
  ['FACEBOOK']: 'FACEBOOK',
  ['LOOKALIKE']: 'TOF-LOOKALIKE',
  ['INTEREST']: 'TOF-INTEREST',
  ['MOF']: 'MOF',
  ['BOF']: 'BOF',
  ['AD COPIES']: 'AD COPIES',
  ['CREATIVES']: 'CREATIVES',
  ['LANDING PAGES']: 'LANDING PAGES',
  ['AB TEST']: 'AB TEST',
};
const headerNavbarAM = [
  {
    name: headerTabsAccountManager['PROPOSAL'],
    isActive: false,
  },
  {
    name: headerTabsAccountManager['CHANGES SUGGESTED'],
    isActive: false,
  },
];

function App() {
  return (
    <main class={`PROPOSAL_PUBLISH main_layout accountManger`}>
      <section className='nav_section'>
        <NavigationSteps
          navigateSteps={AccountLeftSideBar}
          active={'proposal'}
        />
      </section>
      <section
        style={{
          paddingBottom: '74px',
        }}
        className={`top_nav_item right_layout`}
      >
        <div className={`right_layout_inner`}>
          <div className='top_nav_section'>
            <div className='top_nav_inner'>
              <div
                style={{
                  width: '100%',
                  height: '64px',
                  display: 'flex',
                }}
              >
                <HeaderNavSteps
                  headerNavList={[
                    {
                      name: headerTabsAccountManager['PROPOSAL'],
                      isActive: false,
                    },
                    {
                      name: headerTabsAccountManager['CHANGES SUGGESTED'],
                      isActive: false,
                    },
                  ]}
                  active={'PROPOSAL'}
                  clientView={false}
                  clientCurrentCompoToRender={0}
                />
              </div>
            </div>
          </div>
          <div className={`proposal right_main_section`}>
            <BPAudit />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
