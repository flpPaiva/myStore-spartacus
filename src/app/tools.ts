export const isEmpty = (data: any) : boolean=> {
  if (typeof data === 'string') {
    return data.replace(/ /g, '') === '';
  }
  
  return data === undefined || data === null;
};