function windowPopUpAlert () { //section 1
    // creates a window pop up alert which goes away after clicking [okay]
    // window.alert('hello world');
    document.getElementById('alert').innerHTML = `JS:  window.alert( 'what you want to alert' )`;
}

function windowPrompt () { //section 2
    // creates a window prompt (can ask for user input) which goes away after user answers and/or clicking [okay]
    document.getElementById('prompt').innerHTML = `JS:  window.prompt( 'the question it will ask' )`;
}

function variablesAndType () { // string, number, boolean
    // A variable is a container for storing data and behaves as if it was the value that it contains
    let firstName = 'bro'; //string
    let age = 21; //number
    let student = true; // boolean (true or false)
    
    console.log("hello", firstName); //seperated by comment because the string is the first value it logs 
    console.log(`hello ${firstName}`);
}

function ChangingInnerHTMLofElements () { //section 3
    // Changing InnerHTML in JavaScript by targeting element ID
    document.getElementById('p1').innerHTML = `document.getElementById('elementId').innerHTML = 'What you want to print'`;
    // document.getElementById('p2').innerHTML = `you are ${age} years old`;
    // document.getElementById('p3').innerHTML = `Enrolled: ${student}`;
}

function acceptInputValuesInJS () { //section 4
// How to accept user prompt (EASY)
// window.prompt(`what's your name`)
// console.log(username)

    let name;
    let Age;
    let gender;
    
    document.getElementById('myButtonName').onclick = function() {
        name = document.getElementById('myTextName').value
        nameA = name.toUpperCase()
        document.getElementById('inputName').innerHTML = ` Name given: ${nameA}`
    }
    
    document.getElementById('myButtonAge').onclick = () => {
        Age = document.getElementById('myTextAge').value;
        document.getElementById('inputAge').innerHTML = `Age: ${Age}`
    }
    
    document.getElementById('myButtonGender').onclick = () => {
        gender = document.getElementById('myTextGender').value
        genderC = gender.toUpperCase()
        document.getElementById('inputGender').innerHTML = `Gender: ${genderC}`
    }
}acceptInputValuesInJS()

function valueTypeConversion () { // converting variables to different types
    // type conversion = change the datatype of a value to another (strings, numbers, booleans)
    // let agex = window.prompt('how old are you')
    console.log(agex, typeof agex) // gives you the user input and what kind of variabel type it is
    
    // to convert it to a number type variable:
    agex = Number(agex)
    console.log(agex, typeof agex)
    // to convert it to a string type variable:
    agex = String(agex)
    console.log(agex, typeof agex)
    // to convert it to a Boolean type variable:
    agex = Boolean(agex)
    console.log(agex, typeof agex)
}

function MathFunctions () { // Math.functions
let x = 3.54

x = Math.round(x) //rounds the value normally .5up .49down
x = Math.floor(x) // rounds the value down to the nearest whole number
x = Math.ceil(x)  // rounds the value up to the nearest whole number
x = Math.pow(x, 2) // calculates to the power of 2 (x, -> 2 <-)
x = Math.sqrt(x) // calculates the squareroot of x
x = Math.abs(x) // calculates the absolute value/ distance away from 0
// console.log(x)

let maximum;
let minimum;

maximum = Math.max( 9, 2, 5) // picks the max number 
minimum = Math.min( 9, 2, 5) // picks the min number

// console.log(maximum, minimum)
}

function rightAngleTriangleHypotenuse () { //solving hypotenuse using prompt inputs
let a;
let b;
let c;
let hypotenuse;

// a = Number(window.prompt('Enter side A'))
// b = Number(window.prompt('Enter side B'))
hypotenuse = Number(Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2))))
// console.log('Side C: ', hypotenuse)
}

function rightAngleTriangleHypotenuseHTML() { // section 5
    let sideA;
    let sideB;
    let hypotenuse;

    document.getElementById('buttonSideA').onclick = () => {
        sideA = Number(document.getElementById('sideA').value);
        // document.getElementById('angleA').innerHTML = sideA;
    }

    document.getElementById('buttonSideB').onclick = () => {
        sideB = Number(document.getElementById('sideB').value);
        // document.getElementById('angleB').innerHTML = sideB;

    }

    document.getElementById('buttonSideC').onclick = () => {
        hypotenuse = Number((Math.sqrt((Math.pow(sideA, 2)) + (Math.pow(sideB, 2)))));
        document.getElementById('angleC').innerHTML = `if side A is ${sideA} and side B is ${sideB}, the Hypotenuse is = ${hypotenuse}`;
    }
}rightAngleTriangleHypotenuseHTML()

function counterProgram () { //section 6
let count = 0;

document.getElementById('countAt').innerHTML = count

document.getElementById('decrease').onclick = () => {
    count -= 1;
    document.getElementById('countAt').innerHTML = count
}

document.getElementById('reset').onclick = () => {
    count = 0
    document.getElementById('countAt').innerHTML= count
}

document.getElementById('increase').onclick = () => {
    count += 1
    document.getElementById('countAt').innerHTML = count
}

} counterProgram()

function diceGame() { //section7
    let diceX;
    let diceY;
    let diceZ;

    document.getElementById('diceX').innerHTML = 'DiceX'
    document.getElementById('diceY').innerHTML = 'DiceY'
    document.getElementById('diceZ').innerHTML = 'DiceZ'

    document.getElementById('buttonRoll').onclick = () => {
         diceX = Math.floor(Math.random() * 6) + 1;
         diceY = Math.floor((Math.random() * 6) + 1);
         diceZ = Math.floor((Math.random() * 6) + 1);
        document.getElementById('diceX').innerHTML = diceX
        document.getElementById('diceY').innerHTML = diceY
        document.getElementById('diceZ').innerHTML = diceZ
    }
}diceGame()

function usefulStringPropertiesAndMethods () {
    let PMname = "Bro Code"

    // console.log(PMname.length) //equal to the length of the string
    // console.log(PMname.charAt(2)) // logs the character at the index() you search for
    // console.log(PMname.indexOf('C')) // logs the index position of the character() searched for
    // console.log(PMname.trim()) //gets rid of any spaces before and after fist and last characters
    // console.log(PMname.toUpperCase()) // MAKES ALL CHARACTERS UPPERCASE
    // console.log(PMname.toLowerCase()) // makes all characters lowercase
    // console.log(PMname.replaceAll('o', 'x')) // replaces the all that matches first argument to the second argument

    // let firstName = PMname.slice(0, 4) //only logs the characters in the index range chosen. 0 to 4
    // let firstN = PMname.slice(PMname.indexOf(' ') + 1) // logs every character after a space/ " ". +1 is to take out the space.
    // // console.log(firstName)
    // console.log(firstN)
}

function subcribedOrNotSubcribed () { //section 8
    let verify;
    let visaCard;
    let masterCard;
    let paypalCard;

    document.getElementById('checkBoxButton').onclick = () => {
    verify = document.getElementById('myCheckBox');
    visaCard = document.getElementById('visaBtn');
    masterCard = document.getElementById('mastercardBtn');
    paypalCard = document.getElementById('paypalBtn');

    if (!verify.checked) {
        document.getElementById('subscribeAndCard').innerHTML = 'You are not subcribed'
    }
    else if (verify.checked && visaCard.checked) {
        document.getElementById('subscribeAndCard').innerHTML = "Thank you for subscribing! You are paying with Visa Card"
    }
    else if (verify.checked && masterCard.checked) {
        document.getElementById('subscribeAndCard').innerHTML = 'Thank you for subscribing! You are paying with MasterCard'
    }
    else if (verify.checked && paypalCard.checked) {
        document.getElementById('subscribeAndCard').innerHTML = 'Thank you for subscribing! You are paying with Paypal Card'
    }
    else {
        document.getElementById('subscribeAndCard').innerHTML = 'Must select a payment option'
    }
}
} subcribedOrNotSubcribed()

function breakAndContinueStatementsInLoops() {
    //break = breaks out of a look entirely
    for (let i = 0 ; i < 20 ; i++) {
        if(i == 13) {
            break; //stops at and doesn't print 13 (last log 12) 
        }
        // console.log(i)
    }
    // continue = skips that specific iteration and continues with the loop
    for (let i = 0 ; i < 20 ; i++) {
        if (i == 13) {
            continue; //logs 1-12, skips 13, logs 14-20 
        }
        // console.log(i)
    }
}

function nestedLoopsToBuildRectangle () { //section 9
    let symbol;
    let rows;
    let columns;


    document.getElementById('shapeButton').onclick = () => {

        symbol = document.getElementById('shapeSymbol').value
        rows = document.getElementById('shapeRow').value
        columns = document.getElementById('shapeColumn').value
        
        for (let i = 0 ; i <= rows ; i++) {
            for (j = 0 ; j <= columns ; j++) {
                document.getElementById('myRectangle').innerHTML += symbol
            }
            document.getElementById('myRectangle').innerHTML += '<br>'
        }
    }
} nestedLoopsToBuildRectangle()

function NumberGuessingGame () { //section10
let userGuess;
let winningGuess;
let difference;

document.getElementById('guessBtn').onclick = () => {
    userGuess = Number(document.getElementById('guess').value)
    winningGuess = Math.floor(Math.random() * 10) + 1;
    difference = Math.abs(userGuess - winningGuess)

    if (isNaN(userGuess) || userGuess > 10 || userGuess <= 0) {
        document.getElementById('notANumber').innerHTML = 'Pick between 1 - 10'
    }
    else if (userGuess == winningGuess) {
        document.getElementById('notANumber').innerHTML = 'CONGRATS YOU WIN!'
    }
    else if (userGuess !== winningGuess) {
        document.getElementById('notANumber').innerHTML = `Sorry! off by ${difference}`
    }

    document.getElementById('inputGuess').innerHTML = userGuess
    document.getElementById('winningGuess').innerHTML = winningGuess
}

} NumberGuessingGame()

function TemperatureCelciusFahrenheit () { //section11
    let temp;
    let convertToCelcuis = document.getElementById('celciusC')
    let convertToFahrenheit = document.getElementById('fahrenheitF')
    
    function toCelcius(temp) {
        temp = Number(document.getElementById('tempBox').value)
        return (temp - 32) * (5/9)
    }

    function toFahrenheit(temp) {
        temp = Number(document.getElementById('tempBox').value)
        return temp * 9 / 5 + 32
    }

    document.getElementById('convertCF').onclick = () => { 
        if (convertToCelcuis.checked) {
            temp = toCelcius(temp)
            document.getElementById('tempConverted').innerHTML = `${temp}°C`
        }
        else if (convertToFahrenheit.checked) {
            temp = toFahrenheit(temp)
            document.getElementById('tempConverted').innerHTML = `${temp}°F`
        }
    }
}TemperatureCelciusFahrenheit()

function twoDArrays () {
    let fruits = ["apples","oranges", "bananas"];
    let vegetables = ['carrots', 'onions', 'potatoes'];
    let meats = ['eggs', 'chicken', 'fish'];

    let groceryList = [fruits, vegetables, meats]

    console.log(groceryList)

    for (let i = 0; i < groceryList.length; i++) {
        for (let j = 0; j < i; j++) {
            console.log(groceryList[i])
        }
    }
}

function spreadOperators() {
    // spread operators = allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected.
    //...beforeVariable. the ... is the spread operator
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let max = Math.max(numbers) // will display NaN because it's looking at the array as a max
    let maximum = Math.max(...numbers) // now the array values are spread and independent so it can now look at them.

    console.log(maximum)
}

function restParameter() {
    // rest parameters = represents an indefinite number of parameters (packs arguments into an array)
    // ... for rest parameter.

    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;
    let e = 5;

    console.log(sum(a, b, c, d, e)); // now that we made numbers into an indefinite variable we can pass on any amount of parameters in sum.

    function sum(...numbers) {
        let total = 0; // starting with a variable whose value we can control

        for (let number of numbers) {
            total += number
        } return total
    }
}

function callBackFunction() {
    //callback = a function passed as an argument to another function.

    function displayconsole(output) { // output is used as an argument to manipulate or replace later on if calling the function with another defined parameter
        console.log(output) // simply returning the output so that it prints.
    }

    function displayDOM(output) { // output is used as an argument to manipulate or replace later on if calling the function with another defined parameter
        document.getElementById('myLabel').innerHTML = output; // in this case we want to display the results in the html of that id.
    }

   // This example is not using a call back
    let total = sum(2, 3);
    displayDOM(total) // passing total as a replacement to "output" in the displayDOM function
    
    function sum(x, y) {
        let result = x + y
        return result
    }
    console.log(total)


    //Using a "callback" doesn't have to be named callback.
    function sumCB(x, y, callBack) { // now we have "callBack" as an argument in sumCB but is also a function inside it.
        let result = x + y;
        callBack(result)
    }
    sumCB(2, 3, displayDOM) // we are calling the sumCB function, however the displayDOM is now replacing the callBack as an argument. 

}

function arrayForEachMethod() { 
    //.forEach() = executes a provided callback function once for each array element.

    let students = ['spongebob', 'patrick', 'squidward']
    students.forEach(capitalize);
    students.forEach(print)

    function capitalize(element, index, array) {
        array[index] = element[0].toUpperCase() + element.substring(1); // this line targets the first index of every elent in an array.
    }

    function print(element) {
        console.log(element)
    }

}

function arrayFilterMethod() {
    // array.filter() = creates a new array with all elements that pass the test provided by a function

    let ages = [18, 16, 21, 17, 19, 90];
    let adults = ages.filter(print)

    function checkAge(element) {
        return element >= 18;
    }

    function print(element) {
        console.log(element)
    }
}

function reduceToTotal() {
// this will be the prices
let prices = [100, 50, 90, 60, 80, 70]

//to figure out the total we use .reduce method
//inside the .reduce method we have a function that will dictate how to add to total.
const sum = prices.reduce((total, currentvalue) => {
    //above we have 2 arguments total & currentvalue
    return total + currentvalue
    //it starts with total = 0, adds the first index[0] which is 100 and now total = 100
    // repeats but now with total = 100 + index[1] <- which is the currentvalue we are on. now total = 150
    // repeats till it goes through all index and end with a total.
}) 
console.log(sum)
}

function shuffleArray() {
    let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    function shuffle(array){
        let currentIndex = array.length;

        while(currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * array.length)
            currentIndex -= 1

            let temp = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temp
        }
        return array
    }
    shuffle(cards)

    cards.forEach(card => console.log(card))
}

function nestedFunctions() {
    // nested functions are functions that function inside other functions. Outer functions have access to inner functions. Inner functions are "hidden" from outside functions.

    let username = 'Bro'
    let userIndox = 0

    function login() {
        // login function has to be invoked if you want access to the function inside.
        function displayUserName() {
            console.log(`welcome ${username}`)
        }
        function displayUserIndox() {
            console.log(`you have ${userIndox} new messages`)
        }
        // must also invoke each of the inside functions
        displayUserName()
        displayUserIndox()
    } login()
        
}

function newMap() {// shoppingcart example
// Map = object that holds key-value pairs of any data type.

const store = new Map([
    ['t-shirt', 20],
    ['jeans', 30],
    ['socks', 10],
    ['underwear', 15]
])
// here we are using the .get() method to look for an item and getting the cost for it.
let shoppingCart = 0
shoppingCart += store.get('t-shirt')
console.log(shoppingCart)
// here we using the foreach method to loop through the array and print out the contents as we want them.
store.forEach((value, key) => console.log(`$${value} for each ${key}`))
}

function classInJS () {
    // class is a blueprint for creating objects. Within a class we can define what properties and methods the object should have. Typically contains an constructor to assign some unique properties. 

    //this is how you create a class. class name can be whatever. In this example its a 'player(s)'.
    class Player {
        score = 0; // set starting score to 0

        //this is an example of a method. you don't need the function keyword.
        pause() {
            console.log('you paused the game');
        }
        //another example of a method.
        exit() {
            console.log('you exited the game');
        }
    }
    // now to be able to use the class "Player", you need to create an object.
    //const player1 is the first object. then use the "new" keyword folloewd by the name of the class and ().
    const player1 = new Player()
    // you can adjust the score for the "player1" if wanted. he scored 1 point
    player1.score += 1

    console.log(player1.score) // seeing the score on the console.
    // printing the player method 
    player1.pause()
    player1.exit()

    //you can create as many players as you want because you can access the class, use its methods and even change whats in the class to fit your needs.

}classInJS()

function classInJSWithConstructor() {
    // constructor = a special method of a class. Accepts arguments and assigns properties.

    class student {

        constructor(name, age, gpa) {
            this.name = name
            this.age = age
            this.gpa = gpa
        }
        study() {
            console.log(`${this.name} is studying`)
        }
    }
    const student1 = new Student(`spongebob`, 30, 3.2) 

    console.log(student1.name)
    console.log(student1.age)
    console.log(student1.gpa)
    student1.study()
}