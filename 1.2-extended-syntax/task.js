'use strict'
function getResult(a,b,c){
    let d = b**2 - 4 * a * c;
    let x = [];
    let x1;
    let x2;

    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / 2 * a;
        x2 = (-b - Math.sqrt(d)) / 2 * a;
        x.push(x1,x2);
    } else if (d === 0) {
        x1 = (-b + Math.sqrt(d)) / 2 * a;
        x.push(x1);
    };
   
    return x;
};

function getAverageMark(marks){
    let message = 'Количество оценок превышает допустимое';
    
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log (message);
        marks.slice (0, 5);
    };

    let sum = 0;
    for (let i=0; i <= marks.length; i++) {
        sum += marks[i];
    };

    let averageMark = sum / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let today = new Date();
    let year = today.getFullYear();
    let age = year - dateOfBirthday.getFullYear();

    let result;

    if (age >= 18) {
        result = 'Не желаете ли олд-фэшн, ' + name + '?';
    } else if (age < 18) {
        result = 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!';
    }; 

    return result;
}