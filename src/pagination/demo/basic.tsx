import React from 'react';
import { Pagination } from 'cxh-ui'
export default () => <Pagination total={50} defaultCurrent={2}  onChange={(e,size)=>console.log(e,size)}/>