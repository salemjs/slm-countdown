import {monthDiff, newDate} from './util-month-diff.js';

const DEFAULT_REFRESH_INTERVAL = 30000;

const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;
const DAYS_IN_YEAR = 365;

class SlmCountdown extends HTMLElement {
    connectedCallback() {
        let refreshInterval = DEFAULT_REFRESH_INTERVAL;
        const datetime = newDate(this.getAttribute('datetime'));
        const nounOrPlural = (noun, count) => (count > 1 ? noun + 's' : noun);
        const updateText = () => {
            this.textContent = text();
            this._timeout = setTimeout(updateText, refreshInterval);
        };
        const text = () => {
            const now = Date.now();
            if (datetime == now) {
                return 'just now';
            }
            const isBefore = now < datetime;
            const suffix = isBefore ? ' from now' : ' ago';
            const div = (count, proportion) => Math.floor(count / proportion);
            const friendlyValue = (count, noun) => count + ' ' + nounOrPlural(noun, count) + suffix;
            const seconds = div(Math.abs(datetime - now), MILLISECONDS_IN_SECOND);
            refreshInterval = MILLISECONDS_IN_SECOND;
            if (seconds < SECONDS_IN_MINUTE) {
                return friendlyValue(seconds, 'second');
            }
            const minutes = div(seconds, SECONDS_IN_MINUTE);
            if (minutes < MINUTES_IN_HOUR) {
                return friendlyValue(minutes, 'minute');
            }
            refreshInterval = DEFAULT_REFRESH_INTERVAL;
            const hours = div(minutes, MINUTES_IN_HOUR);
            if (hours < HOURS_IN_DAY) {
                return friendlyValue(hours, 'hour');
            }
            const days = div(hours, HOURS_IN_DAY);
            if (days < DAYS_IN_WEEK) {
                return friendlyValue(days, 'day');
            }
            const years = div(days, DAYS_IN_YEAR);
            if (years) {
                return friendlyValue(years, 'year');
            }
            const months = monthDiff(
                newDate(isBefore ? now : datetime),
                newDate(isBefore ? datetime : now)
            );
            if (months) {
                return friendlyValue(months, 'month');
            }
            return friendlyValue(div(days, DAYS_IN_WEEK), 'week');
        };
        updateText();
    }

    disconnectedCallback() {
        clearTimeout(this._timeout);
    }
}
window.customElements.define('slm-countdown', SlmCountdown);
