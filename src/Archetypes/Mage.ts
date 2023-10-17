import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _mageInstances = 0;

  constructor(n: string) {
    super(n);
    Mage._mageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._mageInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;