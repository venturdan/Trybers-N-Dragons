import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _elfInstances = 0;

  constructor(name: string, description: number) {
    super(name, description);
    Elf._elfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._elfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
