import Battle from './Battle';
import Fighter from '../Fighter/fighterIndex';

class PVP extends Battle {
  constructor(protected player: Fighter, private player2: Fighter) {
    super(player);
    super.fight();
  }

  override fight(): number {
    while (this.player.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    return super.fight();
  }
}

export default PVP;