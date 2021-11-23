import { formatDate } from './formatters.js';
import { sum } from './helpers.js';

console.log(`Hoje é ${formatDate(new Date())} !`);
console.log(`2 + 2 = ${sum(2, 2)}`);
