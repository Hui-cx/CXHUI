import type { FC } from 'react';
import React from 'react'

export interface Props {
  tab: React.ReactNode
  disabled?: boolean
  children?: any
}

const TabPane: FC<Props> = ({ children }) => (
  <div className="mk-tab-panel">{children}</div>
)

export default TabPane
