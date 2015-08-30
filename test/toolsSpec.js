'use strict';

import { parseLocationHash } from 'javascript/tools';

describe('Tools', () => {
  describe('parseLocationHash', () => {
    it('returns an object', () => {
      let object = parseLocationHash();

      expect(typeof object).toEqual('object');
    });

    it('parses numbers numbers into numbers', () => {
      let object = parseLocationHash('#number=1');

      expect(typeof object.number).toEqual('number');
    });

    it('parses strings into strings', () => {
      let object = parseLocationHash('#string=imastring');

      expect(typeof object.string).toEqual('string');
    });

    it('parses float values', () => {
      let object = parseLocationHash('#number=1.25');

      expect(object.number).toEqual(1.25);
    });

    it('parses multiple values', () => {
      let number = 'integer=1234';
      let float  = 'float=1.234';
      let string = 'string=rawr';

      let locationHash = `#${number}&${float}&${string}`;
      let object = parseLocationHash(locationHash);

      expect(object).toEqual({
        integer: 1234,
        float: 1.234,
        string: 'rawr'
      });
    });
  });
});
