/* eslint-disable @typescript-eslint/no-unused-vars */
import basic from './basic';
import creational from './creational';
import structural from './structural';
import behavioral from './behavioral';

const title =
  'Design Patterns in TypeScript - Creational, Structural and Behavioral';

export default function (): void {
  console.log(`\t${title}`);
  basic();
  // creational();
  // structural();
  // behavioral();
}
