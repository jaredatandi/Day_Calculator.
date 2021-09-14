
function birthDay(){
    var date = document.getElementById('date').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    var century = year.slice(0,2);
    var DOB = year.slice(2,4);

    var userGender = document.getElementById("gender");
    var gender = userGender.options[userGender.selectedIndex].text;

    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
    
}
