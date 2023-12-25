import React from 'react';
import { Grid } from 'cxh-ui'
const style = {
    background: '#f2f2f2',
};
const gridStyle = {
    color: '#fff',
    lineHeight: '30px',
    textAlign: 'center',
    background: '#3399ff',
};
const App = () => (<div style={style}>
    <Grid gutter={8}>
      {Array.from({ length: 8 })
        .map((_, i) => i + 1)
        .map(i => (<Grid key={i} width={1 / 8}>
            <div style={gridStyle as any}>1/8</div>
          </Grid>))}
    </Grid>
  </div>);
export default App;