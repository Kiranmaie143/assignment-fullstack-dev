import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from '../SearchBar';

describe('<SearchBar />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      shallow(<SearchBar />);
    });
  });
});
