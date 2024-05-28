import React from 'react';

interface Props {
  data: any[];
  groupCount: number;
}

export const useGroupedData = (props: Props) => {
  const { data, groupCount } = props;
  const groupedData = data.reduce<any>((result, item, index) => {
    if (index % groupCount === 0) {
      result.push([item]);
    } else {
      result[result.length - 1].push(item);
    }
    return result;
  }, []);

  return {
    groupedData,
  };
};
