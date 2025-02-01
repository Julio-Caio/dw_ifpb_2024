//| b - c | < a < b + c
//| a - c | < b < a + c
//| a - b | < c < a + b

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function areNaturalNumbers(a, b, c) {
    return a > 0 && b > 0 && c > 0;
}

export function typeTriangle(n1, n2, n3) {
    if (!areNaturalNumbers(n1, n2, n3)) {
        return "none";
    }

    if (!isTriangle(n1, n2, n3)) {
        return "none";
    }

    if (n1 === n2 && n2 === n3) {
        return "equilateral";
    }

    if (n1 === n2 || n2 === n3 || n1 === n3) {
        return "isosceles";
    }

    return "scalene";
}