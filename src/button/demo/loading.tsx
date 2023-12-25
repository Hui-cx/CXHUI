import React,{useState} from 'react';
import { Button } from 'cxh-ui'
export default () => {
  const[loadingPrimary,setLoadingPrimary]=useState<boolean>(false)
  const[loadingDefault,setloadingDefault]=useState<boolean>(false)
  const[loadingDashed,setLoadingDashed]=useState<boolean>(false)
  const[loadingText,setLoadingText]=useState<boolean>(false)
  const[loadingLink,setLoadingLink]=useState<boolean>(false)
  return(
    <>
      <Button type='primary' loading onClick={() => console.log()}>Primary Button</Button>
      <Button loading>Default Button</Button>
      <Button type='dashed' loading>Dashed Button</Button>
      <Button type='text' loading>Text Button</Button>
      <Button type='link' loading>Link Button</Button>
      <br />
      <Button type='primary' loading={loadingPrimary} onClick={() => setLoadingPrimary(true)}>Primary Button</Button>
      <Button loading={loadingDefault} onClick={() => setloadingDefault(true)}>Default Button</Button>
      <Button type='dashed' loading={loadingDashed} onClick={() => setLoadingDashed(true)}>Dashed Button</Button>
      <Button type='text' loading={loadingText} onClick={() => setLoadingText(true)}>Text Button</Button>
      <Button type='link' loading={loadingLink} onClick={() => setLoadingLink(true)}>Link Button</Button>
    </>
  )
}