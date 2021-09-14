
function birthDay(){
    var user_birthday =document.getElementById('birthday').value;
    var Day= user_birthday.split("-");
    var cc = Day[0].slice(0,2);
    var CC= parseInt(cc, 10);
    var yy = Day[0].slice(2, 4);
    var YY = parseInt(yy, 10);
    var mm = Day[1];
    var MM = parseInt(mm, 10);
    var dd = Day[2];
    var DD = parseInt(dd, 10);

    var Centaury = (CC/4)-2*CC-1 ;
    var absCentaury = Math.abs(Centaury);
    var Year = (5*YY/4);
    var Month = (26*(MM+1)/10);

    // var d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;
    var d = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
}
