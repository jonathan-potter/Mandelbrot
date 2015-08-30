'use strict';

import { parseLocationHash } from 'javascript/tools';

describe('Tools', () => {
  describe('parseLocationHash', () => {
    it('parses location.hash into an object', () => {
      /* this doesn't actually test doesn’t actually test anything… */
      /* its just here to get the jasmine ball rolling */
      let object = parseLocationHash();

      expect(typeof object).toEqual('object');
    });
  });
});
