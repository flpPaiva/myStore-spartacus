export const isEmpty = (data: any) : boolean=> {
  if (typeof data === 'string') {
    return data.replace(/ /g, '') === '';
  }
  
  return data === undefined || data === null;
};

export const prettifyToUrl = (text: string): string => {
  return text.toLocaleLowerCase().replace(/ /g, '-');
};