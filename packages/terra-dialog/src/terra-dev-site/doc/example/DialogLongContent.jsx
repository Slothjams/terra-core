/* eslint-disable no-alert */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Dialog from 'terra-dialog/lib/Dialog';

const header = 'Header Stuff';

const footer = <div><span>Footer Stuff</span><span>Footer Stuff</span><span>Footer Stuff</span><span>Footer Stuff</span><span>Footer Stuff</span></div>;

const body = (<div>
  <p>This is my body content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
  <p>This is some more content.</p>
</div>);

const DialogLongContent = () => (
  <div style={{ height: '200px', width: '350px', border: 'dashed' }}>
    <Dialog header={header} footer={footer} onClose={() => alert('Close')}>
      {body}
    </Dialog>
  </div>
);

export default DialogLongContent;
/* eslint-enable no-alert */
