---
title: Pagination 分页
order: 2
group:
  title: 数据
nav:
  title: 组件
  order: 2
---

# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面

## 代码演示


<code src="./demo/basic.tsx" description='基础的分页。'>基本</code>

## API

| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| total | 总条数 | `number` | `-` |
| defaultCurrent | 默认的当前页数 | `number` | `1` |
| pageSize | 每页条数 | `number` | `10` |
| onChange | 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数 | `function(page, pageSize)` | `-` |
