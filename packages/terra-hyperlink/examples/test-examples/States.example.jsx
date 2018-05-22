import React from 'react';

import A from '../../lib/Hyperlink';

const HyperlinkStates = () => (
  <div>
    <A href="https://my.cerner.com/?">hyperlink</A>
    <br />
    <A href="https://my.cerner.com/?" className="is-visited">visited hyperlink</A>
    <br />
    <A href="https://my.cerner.com/?" className="is-hovered">hovered hyperlink</A>
    <br />
    <A href="https://my.cerner.com/?" className="is-focused">focused hyperlink</A>
    <br />
    <A href="https://my.cerner.com/?" className="is-active">active hyperlink</A>
  </div>
);

export default HyperlinkStates;
