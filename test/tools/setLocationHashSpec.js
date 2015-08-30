'use strict';

import setLocationHash from 'javascript/tools/setLocationHash';

describe('Tools', () => {
  describe('setLocationHash', () => {
    it('sets the location hash', () => {
      let object = { number: 1 };

      setLocationHash(object);

      expect(window.location.hash).toEqual('#number=1');
    });
  });
});
