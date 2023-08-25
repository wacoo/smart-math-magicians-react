import React from 'react';
import PropTypes from 'prop-types';

const Key = (props) => {
  const { lbl, cls, onSmash } = props;
  return (
    <button type="button" className={cls} onClick={onSmash}>
      {lbl}
    </button>
  );
};

Key.propTypes = { lbl: PropTypes.string.isRequired };
Key.propTypes = { cls: PropTypes.string.isRequired };
Key.propTypes = { onSmash: PropTypes.func.isRequired };
export default Key;
