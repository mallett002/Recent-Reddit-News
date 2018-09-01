import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
  return (
    <div style={{
        textAlign: 'center', marginTop: '5em'}}>
      <CircularProgress  size={70} style={{color: '#de7a21'}} />
    </div>
  );
}

export default Loading;