import React from 'react';
import { Button } from 'cxh-ui'
export default () => (
  <>
    <Button type='primary' danger>Primary Button</Button>
    <Button danger>Default Button</Button>
    <Button type='dashed' danger>Dashed Button</Button>
    <Button type='text' danger>Text Button</Button>
    <Button type='link' danger>Link Button</Button>
  </>
);