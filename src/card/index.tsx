import React from 'react';
import t from 'prop-types';
import classnames from 'classnames'
export interface AlertProps {
  children?: React.ReactNode,
  title?: string,
  style?: object,
  extra?: React.ReactNode,
}

const prefixCls = 'cxh-card';

const Card: React.FC<AlertProps> = ({ children, title, style, extra, ...rest }) => (
  <div
    className={classnames(prefixCls, `${prefixCls}-bordered`)}
    style={style}
    {...rest}
  >
    {title ? (<div className={classnames(`${prefixCls}-head`)}>
      <div className={classnames(`${prefixCls}-head-wrapper`)}>
        <div className={classnames(`${prefixCls}-head-title`)}>{title}</div>
        {extra ? <div className={classnames(`${prefixCls}-extra`)}>{extra}</div> : null}
      </div>
    </div>) : null}
    <div className={classnames(`${prefixCls}-body`)}>{children}</div>
  </div>
);

Card.propTypes = {
  children: t.element,
  title:t.string,
  style: t.object,
  extra:t.element
};

export default Card;