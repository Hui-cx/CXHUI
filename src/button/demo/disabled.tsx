import React from 'react';
import { Button } from 'cxh-ui'
export default () => (
  <>
    <div >
      <Button type='primary'>Primary Button</Button>
      <Button type='primary' disabled>Primary Button</Button>
    </div>
    <div >
      <Button >Default Button</Button>
      <Button disabled>Default Button</Button>
    </div>
    <div >
      <Button type='dashed'>Dashed Button</Button>
      <Button type='dashed' disabled>Dashed Button</Button>
    </div>
    <div >
      <Button type='text' >Text Button</Button>
      <Button type='text' disabled>Text Button</Button>
    </div>
    <div >
      <Button type='link'>Link Button</Button>
      <Button type='link' disabled>Link Button</Button>
    </div>

  </>
);