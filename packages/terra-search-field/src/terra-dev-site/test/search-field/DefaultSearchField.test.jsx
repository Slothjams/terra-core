import React from 'react';
import Base from 'terra-base';
import SearchField from '../../../SearchField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <SearchField id="searchfield" />
  </Base>;
