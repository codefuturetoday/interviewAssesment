import React from 'react';

export type Props = {
  children?: React.ReactChild | React.ReactChild[];
  options: string[];
  onSelect: (event: React.ChangeEvent) => void;
};
