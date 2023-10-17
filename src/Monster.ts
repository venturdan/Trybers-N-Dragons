import Simplefighter from './Fighter/SimpleFighter';

class Monster implements Simplefighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;

    if (damage <= 0) {
      this._lifePoints = 0;
    } else {
      this._lifePoints = damage;
    }

    return this._lifePoints;
  }

  attack(enemy: Simplefighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }
}

export default Monster;
