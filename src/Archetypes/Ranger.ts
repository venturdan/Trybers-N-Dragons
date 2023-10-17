import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _rangerInstances = 0;

  constructor(n: string) {
    super(n);
    Ranger._rangerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._rangerInstances;   
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;