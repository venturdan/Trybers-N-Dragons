import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _warriorInstances = 0;

  constructor(n: string) {
    super(n);
    Warrior._warriorInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._warriorInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;