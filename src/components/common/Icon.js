import React from 'react';
import { FiX } from 'react-icons/fi';

const mapping = {
  close: <FiX />
};

const Icon = ({ name }) => {
  return mapping[name];
};

export { Icon };
