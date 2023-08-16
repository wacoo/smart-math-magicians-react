import React from 'react';
import PropTypes from 'prop-types';

const Key = (props) => {
  const { lbl, cls } = props;
  return (
    <button type="button" className={cls}>
      {lbl}
    </button>
  );
};

Key.propTypes = { lbl: PropTypes.string.isRequired };
Key.propTypes = { cls: PropTypes.string.isRequired };
export default Key;
