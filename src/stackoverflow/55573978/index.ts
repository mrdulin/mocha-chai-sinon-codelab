import { replaceYears, getFinancialYears } from './utils/years';

export const replaceAssetFileName = () => {
  const years = getFinancialYears();
  console.log(years);
  for (let i = 0; i < years.length; i++) {
    replaceYears(years[i], 'NEWNAME');
  }
  return true;
};
