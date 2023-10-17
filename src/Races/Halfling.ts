import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _halflingInstances = 0;

  constructor(name: string, description: number) {
    super(name, description);
    Halfling._halflingInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._halflingInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
