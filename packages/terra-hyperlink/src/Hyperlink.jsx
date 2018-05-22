import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Hyperlink.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const Hyperlink = ({ name, ...customProps }) => {
  const HyperlinkClassNames = cx([
    'hyperlink',
    customProps.className,
  ]);

  return (<div {...customProps} className={HyperlinkClassNames}>{name}</div>);
};

Hyperlink.propTypes = propTypes;
Hyperlink.defaultProps = defaultProps;

export default Hyperlink;
