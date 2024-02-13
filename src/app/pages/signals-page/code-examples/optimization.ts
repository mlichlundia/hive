export const optimization = `import _ from 'lodash';
const data = signal(['test'], {equal: _.isEqual});
// Even though this is a different array instance, the deep equality
// function will consider the values to be equal, and the signal won't
// trigger any updates.
data.set(['test']);`
