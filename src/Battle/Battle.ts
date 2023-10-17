import Fighter from '../Fighter/fighterIndex';

abstract class Battle {
  constructor(protected player: Fighter) { }

  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
