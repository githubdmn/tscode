const title = 'Creational Design Patterns in TypeScript';

import factoryMethod01 from './factory-example01';
import factoryMethod02 from './factory-example02';
import factoryMethod03 from './factory-example03';
import abstractFactory01 from './abstract-factory-example01';
import abstractFactory02 from './abstract-factory-example02';
import builder01 from './builder-example01';
import builder02 from './builder-example02';
import prototype01 from './prototype-example01';
import prototype02 from './prototype-example02';

export default function (): void {
  console.log(`\->${title}`);
  prototype02();
}
