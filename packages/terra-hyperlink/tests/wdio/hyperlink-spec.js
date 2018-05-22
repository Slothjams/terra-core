/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Hyperlink', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/hyperlink/default-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
