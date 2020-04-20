import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import Hamburger from '../hamburger'

import {LanguageSetStore} from '../../App'

export default {
  title: 'Hamburger',
  component: Hamburger,
};

export const Default = () =>  {
  return (
    <LanguageSetStore.Provider value={action('LangChanged')}>
      <Hamburger />
    </LanguageSetStore.Provider>
  );
}
