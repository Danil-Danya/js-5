///////////////////////////////////////////////////////////


 let col = +prompt("Введите количесвтво итераций");
let object = {}


for (let i = 1; i <= col; i++){
    object.users = i;
    object.name = prompt("Введите свое имя");
    object.age = +prompt("Введите ваш возраст");
    console.log(`Пользователь ${object.users}`);
    console.log(`имя ${object.name}`);
    console.log(`Возраст ${object.age}`);
} 


//////////////////////////////////////////////////////


