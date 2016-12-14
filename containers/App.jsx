import React from 'react';
import 'grommet/grommet.min.css';
import App from 'grommet/components/App';

import '../src/main.css';
import Contents from '../components/Contents';

const app = () => (
  <App centered={false}>
    <Contents />
  </App>
);

export default app;
