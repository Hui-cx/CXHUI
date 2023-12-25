import React from 'react';
import { Icon} from 'cxh-ui'
import list from '../iconData/lineIcon.json'
export default () => {
  const copy = (id: string) => {
    const text = (document.getElementById(id) as HTMLDivElement).innerText
    const oInput = document.createElement('textarea')
    oInput.setAttribute('id', 'cp_hgz_input')
    oInput.value = text
    document.body.appendChild(oInput)
    oInput.select()
    document.execCommand('Copy')
    oInput.remove()
    alert('复制成功')
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {list.glyphs.map((item => (
        <div className='box' key={item.font_class} onClick={() => copy(item.font_class)}>
          <Icon name={item.font_class} width='2em' height='2em' />
          <div id={item.font_class}>{item.font_class}</div>
        </div>
      )))}
    </div>
  )
}