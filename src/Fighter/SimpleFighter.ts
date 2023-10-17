interface Simplefighter {
  lifePoints: number;
  strength: number;
  
  attack(enemy: Simplefighter): void;
  receiveDamage(attackPoints: number): number;
}
  
export default Simplefighter;