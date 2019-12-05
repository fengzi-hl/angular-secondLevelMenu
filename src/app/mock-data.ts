import { FirstLevel } from './first-level';
import { SecondLevel } from './second-level';

export const FIRSTLEVEL: FirstLevel[] =[
  {firstId: 1, name: 'friut'},
  {firstId: 2, name: 'pet'},
  {firstId: 3, name: 'sport'},
  {firstId: 4, name: 'color'}
];

export const SECONDLEVEL: SecondLevel[] = [
  {secondId: 1, preId: 1, name: 'apple'},
  {secondId: 2, preId: 1, name: 'pear'},
  {secondId: 3, preId: 1, name: 'strawberry'},
  {secondId: 4, preId: 1, name: 'durian'},
  {secondId: 5, preId: 2, name: 'dog'},
  {secondId: 6, preId: 2, name: 'cat'},
  {secondId: 7, preId: 2, name: 'bird'},
  {secondId: 8, preId: 2, name: 'fish'},
  {secondId: 9, preId: 3, name: 'basketball'},
  {secondId: 10, preId: 3, name: 'football'},
  {secondId: 11, preId: 3, name: 'tennies'},
  {secondId: 12, preId: 4, name: 'green'},
  {secondId: 13, preId: 4, name: 'blue'},
  {secondId: 14, preId: 4, name: 'orange'},
  {secondId: 15, preId: 4, name: 'skyblue'},
  {secondId: 16, preId: 4, name: 'purple'},
  {secondId: 17, preId: 4, name: 'lightgray'},
  {secondId: 18, preId: 4, name: 'red'},
  {secondId: 19, preId: 4, name: 'yellow'},
  {secondId: 20, preId: 4, name: 'pink'}
]