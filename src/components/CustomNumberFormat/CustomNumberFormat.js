import { forwardRef } from 'react';
import NumberFormat from 'react-number-format';

const CustomNumberFormat = forwardRef((props, inputRef) => {
  return (
    <NumberFormat
      {...props}
      getInputRef={inputRef}
      placeholder="0.00"
      // prefix="₴"
      decimalSeparator="."
      decimalScale={2}
      fixedDecimalScale={true}
      isNumericString
    />
  );
});

export default CustomNumberFormat;
