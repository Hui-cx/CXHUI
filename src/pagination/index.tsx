import React,{useState} from 'react';
// import t from 'prop-types';
import classnames from 'classnames'
import { Icon } from 'cxh-ui';
export interface AlertProps {
  total?: number,
  defaultCurrent?: number,
  pageSize?: number,
  onChange?: (e: any,size: any) => void 
}
const prefixCls = 'cxh-pagination';
const totalArr = (num: number) => {
  const arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(i)
  }
  return arr
}
const Pagination: React.FC<AlertProps> = ({ total, defaultCurrent=1,pageSize=10,onChange, ...rest }) => {
  const [active, setActive] = useState(defaultCurrent)
  const previous = async (func?: any,size?: number) => {
    if (active <= 1) {
      return 
    } else {
      setActive(active - 1)
      func(active - 1,size)

    }
  }
  const next = (func?: any,size?: number) => {
    if (active>=Math.ceil((total as number)/pageSize)) {
      return 
    } else {
      setActive(active + 1)
      func(active +1,size)

    }
  }
  const handleCurrent = (key: number,func?: any,size?: number) => {
    setActive(key)
    func(key,size)

  }
  return (
    <ul className={classnames(prefixCls)}
      {...rest}>
      <li className={classnames(`${prefixCls}-item`)} onClick={()=>previous(onChange,pageSize)}><Icon name='left-outlined' width='1.5em' height='1.5em' /></li>
      {totalArr(Math.ceil((total as number)/pageSize)).map(item => <li key={item} onClick={()=>handleCurrent(item,onChange,pageSize)} className={classnames(`${prefixCls}-item`,{'active':active==item})}>{item}</li>)}
      <li className={classnames(`${prefixCls}-item`)} onClick={()=>next(onChange,pageSize)}><Icon name='right-outlined' width='1.5em' height='1.5em' /></li>
    </ul>
  )
};

Pagination.propTypes = {
};

export default Pagination;