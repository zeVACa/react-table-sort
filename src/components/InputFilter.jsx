import React from 'react';

export default function InputFilter({ SetfilterInputValue }) {
  const inputRef = React.useRef();
  console.log(inputRef);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input
        type="button"
        value="filter"
        onClick={(event) => {
          SetfilterInputValue();
        }}
      />
    </div>
  );
}
