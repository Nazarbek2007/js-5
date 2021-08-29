const user = {};

for (let i = 0; i < 10; i++) {
   let name = prompt('Введите имя')
   let age = prompt('Введите возраст')
   user[i + 1] = {
       name: name,
       age: age
       
   }
}
  for(const key in user){
       console.log(`Пользователь: ${key}`);
       console.log(`Имя пользователся: ${user[key].name}`);
       console.log(`Возраст пользователя: ${user[key].age}`);
   }