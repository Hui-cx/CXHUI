import React, { useState } from 'react';
import { Grid } from 'cxh-ui'
const gridStyle = { color: '#fff', paddingLeft: 8, background: '#3399ff' };
const style = { background: '#f2f2f2', marginBottom: 4, lineHeight: '30px' };
export default () => {
  const [count] = useState(5);
  return<>
  <div>
  {Array.from({ length: count }).map((_n, i) => (<div key={i} style={style}>
          <Grid width={(i + 1) / count} style={gridStyle}>
            {`${i + 1}/${count}`}
          </Grid>
        </div>))}
  </div>
</>
}