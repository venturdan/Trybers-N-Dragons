import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _orcInstances = 0;

  constructor(name: string, description: number) {
    super(name, description);
    Orc._orcInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._orcInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
