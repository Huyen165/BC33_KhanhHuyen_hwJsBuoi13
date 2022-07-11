// Ex1: 
// Sơ đồ 3 khối: 
/** 
 * 
 * INPUT: NHập vào 3 số nguyên.
 * 
 * PROCESS:- Nhận 3 số nguyên từ input
 *         - So sánh lần lượt các số nguyên
 *         - In 3 số nguyên ra màn hình.
 * 
 * 
 * OUTPUT: In ra 3 số nguyên theo thứ tự tăng dần
 */

console.log("Bài tập 1 : IN SỐ NGUYÊN TĂNG DẦN");
var a = prompt("a = ", "");
var b = prompt("b =", "");
var c = prompt("c =", "");

if ((a < b) && (a < c)) {
    if (b < c) {
        console.log(a, b, c);
    } else {
        console.log(a, c, b);
    }
} else if ((b < a) && (b < c)) {
    if (a < c) {
        console.log(b, a, c);
    } else {
        console.log(b, c, a);
    }
} else if ((c < a) && (c < b)) {
    if (a < b) {
        console.log(c, a, b);
    } else {
        console.log(c, b, a);
    }
}

// BÀi 2 
// Sơ đồ 3 khối :
/**
 * INPUT: Người dùng cho biết ai đang sử dụng máy
 * 
 * 
 * 
 * PROCESS: 1.Nhận input
 *          2.Dựa vào các kí tự đầu vào để đưa ra lời chào.
 *          3. In lời chào ra màn hình
 * 
 * 
 * OUTPUT: Từ input đưa ra lời chào phù hợp
 */

console.log("BÀi TẬP 2: IN LỜI CHÀO");
var greeting = prompt("Xin chào! Ai đang sử dụng máy ?", "");
if (greeting === "B") {
    console.log("Chào bố ! Chúc bố một ngày tốt lành!");
} else if (greeting === "M") {
    console.log("Chào mẹ ! Chúc mẹ một ngày tốt lành!");
} else if (greeting === "A") {
    console.log("Chào anh trai ! Chúc anh một ngày tốt lành!");
} else if (greeting === "E") {
    console.log("Chào em gái ! Chúc em một ngày tốt lành!");
} else {
    console.log("Chào bạn ! Chúc bạn một ngày tốt lành!");
}

// BÀI 3: IN SỐ CHẴN, SỐ LẺ 
// SƠ ĐỒ  3 KHỐI 
/**
 * INPUT: Nhập 3 số nguyên từ bàn phím
 * 
 * PROCESS: 1. Nhận 3 số từ input
 *          2. Nếu số đó chia hết cho 2 thì in ra là số chẵn, không chia hết thì là số lẻ.
 *          3. In số lượng số chẵn, số lẻ ra màn hình.
 * 
 * OUTPUT: In số lượng số chẵn,số lẻ ra màn hình
 * 
 */

console.log("BÀI 3: Xuất các số chẵn, lẻ ra màn hình");
var a, b, c;
a = prompt("Số thứ nhất: ", "");
b = prompt("Số thứ hai : ", "");
c = prompt("Số thứ ba : ", "");
var countEven = 0;
var countOdd = 0;
if (a % 2 === 0) {
    countEven += 1;
}
countOdd += 1;

if (b % 2 === 0) {
    countEven += 1;
}
countOdd += 1;


if (c % 2 === 0) {
    countEven += 1;
}
countOdd += 1;


console.log("3 số nguyên là", a, b, c);
console.log("Tổng số chẵn là :", countEven);
console.log("Tổng số lẻ là :", countOdd);

// Bài 4 : ctrinh hnhap 3 cạnh tam giác
// Sơ đồ 3 khối 
/**
 * INPUT: Nhập vào 3 canh của một tam giác
 * 
 * 
 * PROCESS:
 * 
 * 
 * OUTPUT: In ra màn hình xem tam giác là tam giác gì.
 * 
 */

console.log("Bài 4: Xác định tam giác");
var a, b, c;
a = prompt("cạnh a =", "");
b = prompt("cạnh b =", "");
c = prompt("cạnh c =", "");

console.log("Các cạnh của tam giác là :", a, b, c);
if (a === b && b === c && c === a) {
    console.log("Tam giác đều");
} else if (a === b || b === c || c === a) {
    console.log("Tam giác cân");
} else if ((a * a === b * b + c * c) || (b * b === a * a + c * c) || (c * c === a * a + b * b)) {
    console.log("Tam giác vuông");
} else {
    console.log("Tam giác thường");
}