import React from 'react';

function OutputDisplay({ value }) {
  return (
    <textarea
      className="display-output"
      id="output-text"
      rows="5"
      cols="35"
      readOnly={true}
      placeholder="Results here..."
      value={value}
    />
  );
}

export default OutputDisplay;
