export const getParsedData = ({summary, type}) => {
  if (['array', 'string'].includes(type)) summary = [summary];
  if (type === 'object') summary = {summary};
  return summary;
};

export const parseData = data => {
  return JSON.parse(data);
};

export const stringData = 'string data';
export const numberData = 644662;

export const objectData = {
  location: [{address: 'address'}],
  name: 'address',
};

export const arrayData = [
  {
    stop: false,
    station: 'station',
    pinPoint: -888662947.1117201,
    objectData: {
      location: [{address: 'address'}],
    },
  },
];
