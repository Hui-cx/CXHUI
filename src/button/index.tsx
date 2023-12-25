import type { ReactNode } from 'react';
import React from 'react';
import t from 'prop-types'
import classnames from 'classnames'
import { Icon } from 'cxh-ui'
import '../icon/style'
const baseClassName='cxh-btn'
export interface IProps{
  children?: ReactNode |string
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  disabled?: boolean
  danger?: boolean
  href?: string
  target?: string
  block?: boolean
  size?: 'large' | 'middle ' | 'small'
  loading?: boolean
  onClick?: () => void 
}
const handleSize = (size: string) => {
  switch (size) {
    case 'middle':
      return ''
    case 'large':
      return 'large'
    case 'small':
      return 'small'
  }
}
const isLoading = (type: boolean) => {
  if (type) {
    return <Icon name='jiazaizhong' spin  />
  }
}
const Button: React.FC<IProps> = ({ children, type = 'default', onClick, disabled = false, danger = false, block=false, size='middle',loading=false ,href,target, ...item }) => {
  if (!href) {
    return (
      <button onClick={loading?()=>{}:onClick} className={classnames(`btn ${baseClassName}-${type}`, { 'danger': danger }, { 'block': block }, `${handleSize(size)}`)} disabled={disabled} {...item}>
        {isLoading(loading)}
        <span className={classnames({'left':loading})}>{children }</span>
      </button>
    )
  } else {
    return <a  onClick={onClick} className={classnames(`btn ${baseClassName}-${type}`, { 'danger': danger },{'block':block},`${handleSize(size)}`)} href={href} target={target}{...item}>{isLoading(loading)}
    <span className={classnames({'left':loading})}>{children }</span></a>
  }
};

Button.propTypes = {
  type: t.oneOf(['primary', 'dashed', 'link', 'text', 'default']),
  disabled:t.bool,
  danger:t.bool,
  block:t.bool,
  href:t.string,
  target: t.string,
  children: t.oneOfType([t.string,t.element]),
  onClick: t.func,
  loading:t.bool
};
Button.defaultProps = {
  type: 'default',
  disabled: false,
  danger: false,
  block:false
}

export default Button;