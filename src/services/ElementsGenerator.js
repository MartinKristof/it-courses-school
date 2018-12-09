import React from 'react';

export const generate = (element, count) => {
  return [...Array(count).keys()].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
};
