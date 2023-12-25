import React from 'react';
import { Button } from 'cxh-ui'
export default () => (
  <div>
    <Button type='primary'  block >Primary Button</Button>
    <Button  block>Default Button</Button>
    <Button type='dashed' block>Dashed Button</Button>
    <Button type='text' block>Text Button</Button>
    <Button type='link' block>Link Button</Button>
  </div>
);