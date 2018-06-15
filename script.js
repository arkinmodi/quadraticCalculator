document.getElementById('submit').onclick = function () {
    var a = $("#avalue").val();
    var b = $("#bvalue").val();
    var c = $("#cvalue").val();
    
    // gets a, b, c values
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    
    var discriminant = (Math.pow(b, 2) - 4*a*c);
    var denominator = (2*a);
    console.log(a)
    
    //Chekcs if input is valid
    if (isNaN(a) || isNaN(b) || isNaN(c) || a == 0) {
        document.getElementById("xValueFirst").innerHTML = "Must be a Quadratic Equation";
    }
    
    //Checks if roots are real
    else if (discriminant >= 0) {
        var positiveNumerator = (-1*b + Math.sqrt(discriminant));
        var negativeNumerator = (-1*b - Math.sqrt(discriminant));

        var finalAnswerPlus = ("x = " + (positiveNumerator/denominator));
        var finalAnswerNegative = ("x = " + (negativeNumerator/denominator));

        document.getElementById("xValueFirst").innerHTML = finalAnswerPlus;
        document.getElementById("xValueSecond").innerHTML = finalAnswerNegative;
    } 
    
    //Checks if roots are imaginary
    else {
        var real = (-1*b);
        var imaginary = Math.sqrt(Math.abs(discriminant));
        
        var finalAnswerPlus = ("x = " + (real/denominator) + " + " + (imaginary/denominator) + "i");
        var finalAnswerNegative = ("x = " + (real/denominator) + " - " + (imaginary/denominator) + "i");

        document.getElementById("xValueFirst").innerHTML = finalAnswerPlus;
        document.getElementById("xValueSecond").innerHTML = finalAnswerNegative;
    }
};
