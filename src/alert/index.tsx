import React from 'react';
import t from 'prop-types';
import classnames from 'classnames'
export interface AlertProps {
  children?: React.ReactNode,
  type?: 'success' | 'info' | 'warning' | 'error',
  message?: string,
  description?: string
}

const prefixCls = 'cxh-alert';

const Alert: React.FC<AlertProps> = ({ children, type = 'info',message,description, ...rest }) => (
  <div
    className={classnames(prefixCls, `${prefixCls}-${type}`,{[`${prefixCls}-box`]:description})}
    {...rest}
  >
    <div className={`${prefixCls}-message`}>{message}</div>
    {description ? <div className={`${prefixCls}-description`}>{ description}</div>:null}
  </div>
);

Alert.propTypes = {
  type: t.oneOf(['success', 'info', 'warning', 'error']),
  message: t.string,
  description: t.string,
  children:t.element
  
};

export default Alert;