	import refs from './refs';
import fetchWeather from './fetch-weather';
import renderingCurrentWeather from './renderingCurrentWeather';
import { error, defaultModules } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';
import fetchImage from './fetch-bg-image';

import { defaults } from '@pnotify/core';

defaults.width = '250px';
defaults.delay = 1000;

export default (data) => {
    console.log(data)
    if (data === null) {
        refs.searchFormInput.value = '';
      return error({
        text: "Can't show such city!",
      });
    } else if (refs.searchFormInput.value === '') {
      return error({
        text: "Please write search city!",
      });
    }
}