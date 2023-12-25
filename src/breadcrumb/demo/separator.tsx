import React from 'react';
import { Breadcrumb } from 'cxh-ui'
export default () => {
  const itemList=[{title:'首页'},{title:'热搜'},{title:<a style={{textDecoration:'none'}} href=''>排行榜</a>}]
  return (
    <Breadcrumb items={itemList} separator='>'/>
  )
}