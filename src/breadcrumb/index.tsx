import React from 'react';
import t from 'prop-types';
import classnames from 'classnames'
export interface AlertProps {
  items?: { title?: React.ReactNode }[],
  separator?: string
}

const prefixCls = 'cxh-breadcrumb';

const Breadcrumb: React.FC<AlertProps> = ({ items,separator='/' ,...rest }) => (
  <nav
  className={classnames(`${prefixCls}`)}
    {...rest}
  >
    <ol>
      {items?.map((item, index) => <><li key={index}>{item.title}</li>{index+1<items.length?<li> {separator} </li>:null }</>)}
    </ol>
  </nav>
);

Breadcrumb.propTypes = {
  items: t.array,
  separator:t.string
};

export default Breadcrumb;