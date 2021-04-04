alert("Задание 3");
let a = 2;
let b = -3;
if (a >= 0 && b >= 0)
    alert(b - a);


else if (a < 0 && b < 0)
    alert(b * a);

else (a < 0 && b < 0 || a > 0 && b > 0)
alert(b + a);




alert("Задание 4. Решение появится на экране. ")
let d = +prompt("Введите число от 0 до 15");

if (d > 15) {
    alert("Введите число на более 15")
}
else if (d <= 15) {
    document.write("Получаем по 4 заданию: <br>");

    for (let i = d; i <= 15; i++) {


        switch (d) {
            case d:

                document.write("<br>" + d++ + "<br>");

        }
    }

}















