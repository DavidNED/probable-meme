// Write your JS here

const hero = {
name: 'David',
heroic: false,
inventory: [],
health: 10,
weapon: {
    type: 'Gun',
    damage: 2
}
}//hero



const rest = (object) => {
object.health = 10;
return object}//rest


const equipWeapon = (hero) => {
if (hero.inventory.length === 0) {
return;}

hero.weapon = hero.inventory[0];



}//equipWeapon



const pickUpItem = (firstObj, object) => {
firstObj.inventory[1] = object;

const newObj = {type: 'dagger', 'damage': 2}
firstObj.inventory.push(newObj);
}


