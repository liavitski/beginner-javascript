import { uniq } from 'lodash';

import User, { createUrl, gravatar } from './src/user';

const pavel = new User(
  'Pavel Liavitski',
  'pashalevy@gmail.com',
  'pl.com'
);
const profile = createUrl(pavel.name);
const image = gravatar(pavel.email);

console.log(image);
console.log(profile);
