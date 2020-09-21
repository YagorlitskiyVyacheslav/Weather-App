import refs from './refs';
import fetchWeather from './fetch-weather';
import renderingCurrentWeather from './renderingCurrentWeather';
import { error, defaultModules } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';
import fetchImage from './fetch-bg-image';

import { defaults } from '@pnotify/core';

defaults.width = '250px';
defaults.delay = 1000;

export default {
    renderingWeatherAndNotification() {
        if (refs.searchFormInput.value !== '') {
            fetchWeather.currentWeather(refs.searchFormInput.value).then(data => {
                if (data === null) {
                    error({
                        text: "Can't show such city!",
                    })
                } else {
                    renderingCurrentWeather(data);
                    fetchImage.fetchImage(refs.searchFormInput.value).then(data => {
                        refs.backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
                    })
                }
            })
        } else {
            error({
                text: "Please write search city!",
            })
        }
    }
}