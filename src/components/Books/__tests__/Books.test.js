import React from 'react';
import { shallow } from 'enzyme';

import Books from '../Books';

describe('<Books />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      shallow(<Books />);
    });
  });
});
