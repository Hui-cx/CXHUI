---
title: Button 按钮
order: 3
group:
  title: 通用
nav:
  title: 组件
  order: 2
---

# Button 按钮

常用的一些Button按钮。

## 代码演示


<code src="./demo/basic.tsx" description='按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。'>基本用法</code>
<code src="./demo/disabled.tsx" description='添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变'>不可用状态</code>
<code src="./demo/danger.tsx" description='危险警示按钮'>危险按钮</code>
<code src="./demo/block.tsx" description='block 属性将使按钮适合其父宽度。'>Block按钮</code>
<code src="./demo/size.tsx" description='按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。'>按钮尺寸</code>
<code src="./demo/loading.tsx" description='添加 loading 属性即可让按钮处于加载状态，最后三个按钮演示点击后进入加载状态'>加载中状态</code>





## API

| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| type | 警告类型 | `primary` / `dashed` / `link` / `default`/`text` | `default` |
| disabled | 设置按钮失效状态 | `boolean`  | `false` |
| danger | 设置按钮危险警示状态 | `boolean`  | `false` |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | `string`  | `-` |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | `string`  | `-` |
| block | 将按钮宽度调整为其父宽度的选项 | `boolean`  | `false` |
| size | 设置按钮大小 | `large` / `middle` / `small` | `middle` |
| loading | 是否加载中 | `boolean` | `false` |
| onClick | 	点击按钮时的回调 | `(event: MouseEvent) => void`  | `-` |