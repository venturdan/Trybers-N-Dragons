import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monsters: Array<SimpleFighter | Fighter>,
  ) {
    super(_player);
  }

  fight(): number {
    while (this._player.lifePoints 
        > 0 && this._monsters.some((m) => m.lifePoints > 0)) {
      const thisMonsters = this._monsters.find((m) => m.lifePoints > 0);

      if (thisMonsters) {
        this._player.attack(thisMonsters);
        thisMonsters.attack(this._player);
      }
    }

    return super.fight();
  }
}

export default PVE;
