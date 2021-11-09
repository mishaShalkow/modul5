//Задача к модулю 5.6
let car = new Map ([
    ["bmw", "German"],
    ["Honda", "japaneez"],
    ["volvo", "UK"]
])
for (let marka of car.keys()){
    console.log("Ключ :", marka);
}
for (let contry of car.values()){
    console.log("Значение:", contry)
}