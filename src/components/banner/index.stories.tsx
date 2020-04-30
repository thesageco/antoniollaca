import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import Banner from '../banner'

export default {
  title: 'Banner',
  component: Banner,
};

export const Normal = () =>  {
  return (
    Banner({lang: 'EN'})
)
}
