
import React from 'react';
import { Grid } from 'cxh-ui'
const style = {
    background: '#f2f2f2',
};
const gridStyle = {
    color: '#fff',
    lineHeight: '60px',
    textAlign: 'center',
    background: '#3399ff',
};
const App = () => (<div style={style}>
    <Grid width={1 / 3} offset={1 / 3} style={gridStyle}>
      With 1/3, Offset 1/3
    </Grid>
  </div>);
export default App;