import React from 'react';
import { StoryFn } from '@storybook/addons';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';

import { Theme } from '@themes';
import { AvailableThemes } from '@themes/available-themes'

export const withTheme = (story: StoryFn<StoryFnReactReturnType>) => (
  <Theme theme={AvailableThemes.Dark}>{story()}</Theme>
);
