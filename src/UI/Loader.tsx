import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
   return (
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: 10}}>
          <Spinner animation="border" variant="secondary" />
      </div>
   );
};

export default Loader;