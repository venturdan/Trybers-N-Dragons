import Energy from '../Energy';
import Simplefighter from './SimpleFighter';

interface Fighter extends Simplefighter {
  defense: number;
  energy?: Energy;

  special?(enemy: Simplefighter): void;
  levelUp?(): void;
}

export default Fighter;
