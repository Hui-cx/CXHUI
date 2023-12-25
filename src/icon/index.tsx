import React from 'react';
import PropTypes from 'prop-types';
import './iconData/index.js'
import classnames from 'classnames'
export interface IconProp {
  color?: string
  name: string
  width?: string
  height?: string
  spin?: boolean
  [key: string]: any;
}
const Icon: React.FC<IconProp> = ({ width = '1em', height = '1em',spin=false, color, name,...item }) => {
  return <>
    <svg style={{ width, height,fill:'currentcolor'}} className={classnames({rotate:spin})} aria-hidden="true" {...item}>
      <use xlinkHref={`#icon-${name}`} fill={color} />
    </svg>
  </>
}
Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Icon;