function getTriangleArea(a, h) {
    var value = a*h/2;
    if (a <= 0) {
        return 'Nieprawidłowe dane';
    } else if (h <= 0) {
        return 'Nieprawidłowe dane';
    } else {
        return value;
    }
}
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 10);
var triangle3Area = getTriangleArea(3, 6);

console.log(triangle3Area);