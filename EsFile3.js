$("#btnplus").click(function(){
    var input1 = $("#num1");
    var input2 = $("#num2");
    if(input1.val() && input2.val()){
        var n1= parseInt(input1.val());
        var n2= parseInt(input2.val());
        var risultato = n1 + n2;
        var string = 
        "<tr><td>" + n1 + "</td><td style ='text-allign:center'>+</td><td>" + n2 +"</td><td>"+ risultato +"</td></tr>";
        $('#table').append(string);
        input1.val("");
        input2.val("");
    }
});
$("#btn-").click(function(){
    var input1 = $("#num1");
    var input2 = $("#num2");
    if(input1.val() && input2.val()){
        var n1= parseInt(input1.val());
        var n2= parseInt(input2.val());
        var risultato = n1 - n2;
        var string = 
        "<tr><td>" + n1 + "</td><td style ='text-allign:center'>-</td><td>" + n2 +"</td><td>"+ risultato +"</td></tr>";
        $('#table').append(string);
        input1.val("");
        input2.val("");
    }
});

$("#btnper").click(function(){
    var input1 = $("#num1");
    var input2 = $("#num2");
    if(input1.val() && input2.val()){
        var n1= parseInt(input1.val());
        var n2= parseInt(input2.val());
        var risultato = n1 * n2;
        var string = 
        "<tr><td>" + n1 + "</td><td style ='text-allign:center'>*</td><td>" + n2 +"</td><td>"+ risultato +"</td></tr>";
        $('#table').append(string);
        input1.val("");
        input2.val("");
    }
});

$("#btndiviso").click(function(){
    var input1 = $("#num1");
    var input2 = $("#num2");
    if(input1.val() && input2.val()){
        var n1= parseInt(input1.val());
        var n2= parseInt(input2.val());
        var risultato = n1/n2;
        var string = 
        "<tr><td>" + n1 + "</td><td style ='text-allign:center'>/</td><td>" + n2 +"</td><td>"+ risultato +"</td></tr>";
        $('#table').append(string);
        input1.val("");
        input2.val("");
    }
});