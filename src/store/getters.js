import types from './types'
export default {
  GetLoading: state => state.ShowLoading,
  [types.HeaderIsActive]: state => state.HeaderIsActive,
  [types.BenfinheritOneDisable]: state => state.BenfinheritOneDisable,
  GetJob: state => state.JOB,
  GetJobData: state => state.JOBDATA,
  GetCity: state => state.CITY,
  GetCityData: state => state.CITYDATA,
  GetBank: state => state.BANK,
  GetBankData: state => state.BANKDATA,
  GetBankBranches: state => state.BANKBRANCHESDATA,
  GetBeneficiary: state => state.BENEFICIARY,
  GetNation: state => state.NATION,
  GetNationData: state => state.NATIONDATA,
  GetOccupation: state => state.OCCUPATION,
  GetOccupationData: state => state.OCCUPATIONDATA,
  GetDistrictData: state => state.DISTRICTDATA,
  GetAnnuityPayType: state => state.ANNUITYPAYTYPE,
  GetContactCheckBox: state => state.CONTACTCHECKBOX,
  GetNotifyCheckBox: state => state.NOTIFYCHECKBOX
}
