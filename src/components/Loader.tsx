import React from 'react';

const loader = require('../assets/images/loader.gif');

function Loader() {
  return (
    <div className="loader-container">
      <img className="loader" src={loader} alt="loader" />
    </div>
  );
}

export default Loader;
