import React from 'react';

function HugoMicroFrontend() {
  // Get the current URL path
  const currentPath = window.location.pathname;

  // Determine the iframe src based on the path
  let iframeSrc = 'https://marketing.alphantech.fyi';

  if (currentPath.startsWith('/posts') || currentPath.startsWith('/about')) {
    iframeSrc = `https://marketing.alphantech.fyi${currentPath}`;
  }

  return (
    <iframe
      src={iframeSrc}
      title="Hugo Micro App"
      style={{ width: '100%', height: '100vh', border: 'none' }}
      sandbox="allow-same-origin allow-scripts"
    ></iframe>
  );
}

export default HugoMicroFrontend;
