import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _necromancerInstances = 0;

  constructor(n: string) {
    super(n);
    Necromancer._necromancerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._necromancerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;