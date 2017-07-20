/**
 * Created by mohanr on 7/20/2017.
 */
import './index.css';
import numeral from 'numeral';

const couseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${couseValue} for this awesome course`); // eslint-disable-line no-console