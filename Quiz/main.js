// listeners
document.getElementById('submit').addEventListener('click', submit)

// functions
function submit(){
    var answer_one = document.getElementById('answer_one').value;
    var answer_two = document.getElementById('answer_two').value;
    var answer_three = document.getElementById('answer_three').value;
    var answer_four = document.getElementById('answer_four').value.toLowerCase();

    if (answer_one == 15){
        document.getElementById('one').innerHTML = "Correct!";
        document.getElementById('one').style.color = "green";
    }
    else {
        document.getElementById('one').innerHTML = "Incorrect!";
        document.getElementById('one').style.color = "red";
    }
    if (answer_two == 75600){
        document.getElementById('two').innerHTML = "Correct!";
        document.getElementById('two').style.color = "green";
    }
    else {
        document.getElementById('two').innerHTML = "Incorrect!";
        document.getElementById('two').style.color = "red";
    }
    if (answer_three == 210){
        document.getElementById('three').innerHTML = "Correct!";
        document.getElementById('three').style.color = "green";
    }
    else {
        document.getElementById('three').innerHTML = "Incorrect!";
        document.getElementById('three').style.color = "red";
    }
    if (answer_four == 'factorial'){
        document.getElementById('four').innerHTML = "Correct!";
        document.getElementById('four').style.color = "green";
    }
    else {
        document.getElementById('four').innerHTML = "Incorrect!";
        document.getElementById('four').style.color = "red";
    }
}