class Creature {
    #id = 0;
    constructor(name, healthPoints, damage){
        this.name = name;
        this.healthPoints = healthPoints;
        this.damage = damage;
        this.#id++;
    }
    static number = 0;
    defeat(){
        alert("Существо уничтожено!");
    }
    getterId(){
        return this.#id;
    }
    
};
class Player extends Creature{
    constructor(name, healthPoints, damage){
        super(name, healthPoints, damage);
    }
    #lvl;
    getterLvl(){
        return this.#lvl;
    }
    attack(other){
        other.healthPoints = other.healthPoints - this.damage;
        if(other.healthPoints<=0){
            this.defeat();
            this.#lvl++;
            return true;
        }
        return false;
            
    }
};
class Enemy extends Creature{
    constructor(name, healthPoints, damage){
        super(name, healthPoints, damage);
    }
    attack(other){
        other.healthPoints = other.healthPoints - this.damage;
        if(other.healthPoints<=0){
            this.defeat();
            return true;
        }
        return false;
    }
};

var hero = new Player("Artur", 100, 108);
var enemy = new Enemy("Dragon", 100, 20);
while(true){
    let forHero = hero.attack(enemy);
    console.log(forHero);
    let forEnemy = enemy.attack(hero);
    console.log(forEnemy);
    if(forHero == true || forEnemy == true)
        break;
}



