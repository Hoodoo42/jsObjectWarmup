// WARMUP:
// 1. Create a folder called JsObjectWarmup, connect to Git/GitHub
// 2. Create an index.html & app.js file. Link them together
// 3. Configure your debugger
// 4. Create a variable called my_city (object) with the following key-value 
// pairs:
// 4.1. name (string)
// 4.2. population (number)
// 4.3. is_capital (boolean)
// 5. Write a conditional that will print out the city name and population 
// if is_capital is true
// 6. Add an else statement that will print out `not important enough` 
// otherwise

// 7. Add in a new key-value pair to my_city:
// 7.1. communities (array of strings)
// 8. Use push to add 5 communities into the array
// 9. Write a while loop that will print out each community one by one
// 10. Modify the communities key-value pair to now be an array of objects, 
// where each object has the following key-value pairs:
// 10.1. name (string)
// 10.2 population (number)
// 11. Modify the while loop to now only print out a community name IF the 
// community has a population of at least 100



let myCity =[{
    name: `Sylvan Lake`,
    population: 14816,
    isCapital: false,

    communities: []
}];



let counter = 0;
if(myCity[counter][`isCapital`]===true){
    console.log(myCity[counter][`name`],myCity[counter][`population`]);
}else{
    console.log(`Not a capital however still super important!`);
}

myCity[counter][`communities`].push(`WillowSprings`, `Crestwood`, `RiderRidge`, `Belmont`, `Fox Run`);

counter=0;
let counter1 =0;
while(counter< myCity[counter][`communities`].length){
    console.log(myCity[counter][`communities`][counter1]);
    counter1++;
}
counter++