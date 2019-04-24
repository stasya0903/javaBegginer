function calculateTemp () {
    var userAnswer = document.getElementById("userAnswer").value;
    var userAnswer = parseInt(userAnswer)
    var TF = (9 / 5) * userAnswer + 32
    alert("температурa в градусах по Фаренгейту равна  " + TF) 
}