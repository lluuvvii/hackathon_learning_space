'use client';

import { useEffect } from 'react';

const BootstrapInitializer = () => {
  useEffect(() => {
    // Impor file JavaScript Bootstrap
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null; // Tidak perlu render apa pun
};

export default BootstrapInitializer;
