import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { value } = props;
  return <input type="text" className="display" value={value} />;
};

Display.propTypes = { value: PropTypes.string.isRequired };
Display.defaultProp = {
  value: 0,
};
export default Display;
