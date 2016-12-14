import React from 'react';
import Helmet from 'react-helmet';

const Template = props => (
  <div>
    <Helmet defaultTitle="grommet boilerplate" />
    {props.children}
  </div>
);

Template.propTypes = {
  children: React.PropTypes.shape(),
};

export default Template;

