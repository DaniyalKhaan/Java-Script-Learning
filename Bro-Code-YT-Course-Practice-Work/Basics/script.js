// Topic : checked property,
// There is a propery named .checked in js by which we can find out that radio button or
// a checkbox is selected or not selected.



document.getElementById("checkBoxBtnsSummit").onclick = function (){
    if (document.getElementById("studentCheckBox").checked) {
        console.log("Welcome Student. In which subject you want to get tuition")
    } else if (document.getElementById("teacherCheckBox").checked){
        console.log("Welcome Sir, How many of teaching experience do you have, and what are your experties")
    }
}


document.getElementById("radioBtnsSummit").onclick = function(){
    const maleRadioButton = document.getElementById("maleRadioButton");
    if (maleRadioButton.checked){
        console.log("Male is selected: ")
    } else if (document.getElementById("femaleRadioButton").checked){
        console.log("Female is selected: ")
    }
}
