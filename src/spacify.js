/* eslint-disable no-extend-native */
Object.defineProperty(String.prototype, 'spacify', {
    value() {
        return this.split('').join(' ');
    }
});
