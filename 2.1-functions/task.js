// Задание №1
function getSolutions (a, b, c) {
    let D = b**2 - 4 * a * c;
    let x1 = -b / 2 * a;

    if (D < 0) {
        return {
            D: D,
            roots: []
        }
    } else if (D === 0) {
        return {
            D: D,
            roots: [x1]
        }
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / 2 * a;
        let x2 = (-b - Math.sqrt(D)) / 2 * a;
        return {
            D: D,
            roots: [x1, x2]
        }
    };
};

function getSolutionsMessage (a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта ${result.D}`);

    if (result.D < 0) {
        console.log ('Уравнение не имеет вещественных корней');
    } else if (result.D === 0) {
        console.log (`Уравнение имеет один корень. X₁ = ${result.roots}`);
    } else if (result.D > 0) {
        console.log (`Уравнение имеет два корня. X₁ = ${result.rooots[0]}, X₂ = ${result.rooots[1]}`)
    };
};

// Задание №2
function getAverageMark(marks) {
    let sum = 0;
    for (let i=0; i < marks.length; i++) {
        sum += marks[i];
    };

    let average = sum/marks.length;

    return average;
};

function getAverageScore(data) {
    let sum = 0;
    
    for (prop in data) {
        let marks = data[prop]
        getAverageMark(marks);
        sum += data[prop]
    };


    data.average = sum/Object.keys(data).length;

    return data;

};

// Задание №3

function getDecodedValue(secret) {
    if (secret === 1) {
        secret = 'Эмильо'
    } else if (secret === 0) {
        secret = 'Родриго'
    };

    return secret;
};

function getPersonData(secretData) {
    
    for (prop in secretData) {
        let secret = secretData[prop];
        getDecodedValue(secret);
    };


    return secretData = {
        firstName: secret,
        lastName: secret
    };
};



