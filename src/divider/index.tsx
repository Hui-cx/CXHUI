import React from 'react';
import t from 'prop-types';
import classnames from 'classnames'
export interface AlertProps {
  children?: React.ReactNode,
  text?: string
}

const prefixCls = 'cxh-divider';

const Divider: React.FC<AlertProps> = ({text, ...rest }) => (
  <div
    className={classnames(prefixCls,)}
    {...rest}>
    {text?<span className={classnames(`${prefixCls}-span`)}>{text}</span>:null}
  </div>
);

Divider.propTypes = {
  children: t.element,
  text:t.string
};

export default Divider;