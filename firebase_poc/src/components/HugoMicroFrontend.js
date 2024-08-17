import React from 'react';

function HugoMicroFrontend() {
  return (
    <iframe
      src="https://fastidious-twilight-b089f4.netlify.app"
      title="Hugo Micro App"
      style={{ width: '100%', height: '100vh', border: 'none' }}
      sandbox="allow-same-origin allow-scripts"
    ></iframe>
  );
}

export default HugoMicroFrontend;
