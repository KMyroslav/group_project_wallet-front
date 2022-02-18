import React from 'react';
import Select from 'react-select';

const Selector = ({
  options,
  value,
  selected,
  className,
  classNamePrefix,
  onChange,
}) => {
  return (
    <Select
      className={className}
      classNamePrefix={classNamePrefix}
      options={options}
      defaultValue={selected}
      value={value}
      onChange={onChange}
    />
  );
};

export default Selector;
