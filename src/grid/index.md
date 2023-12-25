---
title: Grid 栅格
group:
  title: 布局
  order: 2
nav:
  title: 组件
  order: 2
---

# Grid 栅格

动态栅格体系，用于某些不适合使用 flex 的地方

## 代码演示


<code src="./demo/basic.tsx" description='Grid 的栅格体系是动态生成，可以实现任意等份。'>基本</code>
<code src="./demo/offset.tsx" description='offset 属性可以设置偏移，取值方式和宽度相同。'>offset</code>
<code src="./demo/qiantao.tsx" description='嵌套的栅格。'>嵌套</code>
<code src="./demo/gutter.tsx" description='通过 gutter 属性设置栅格间距。'>间距</code>

## API

| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| className | 扩展className | `string` | `-` |
| gutter | 栅格之间间距 | `number` | `-` |
| offset | 左偏移百分比，0 <= offset < 1 | `number` | `0` |
| responsive | 激活响应式的最小尺寸：<br />sm: 568px <br />md: 768px <br />lg: 992px <br />xl: 1200px <br />例如：设置为 sm 时，屏幕尺寸若低于568px，栅格系统的响应性将不会生效。 | `sm` | `md` |
| stretch | 是否撑满容器高度 | `boolean` | `-` |
| style | 最外层扩展样式 | `object` | `-` |
| width | 宽度百分比，0 < number <= 1| `number` | `1` |