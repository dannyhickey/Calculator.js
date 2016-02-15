/**
 * Created by Danny on 12/02/2016.
 */

var numberDisplay = document.getElementById('numberDisplay');

function addIt(x)
{
    numberDisplay.value +=x;
    if( x == 'c')
    {
        numberDisplay.value = '';
    }
}

function answer()
{
    x = numberDisplay.value;
    x = eval(x);
    numberDisplay.value = x;
}

function backSpace()
{
    var num = numberDisplay.value;
    var len = num.length-1;
    var newNumber = num.substring(0,len);
    numberDisplay.value = newNumber;
}

function squared(y)
{
    var x = numberDisplay.value;
    x = Math.pow(x,y);
    numberDisplay.value = x;
}
/*
function percent(x)
{
    x = numberDisplay.value;
    alert(x.search("+"));
    var n =  x.search('+');
    if(n != -1)
    {
        alert("+ is there");
        if(x == '+' || x == '-' || x == '*' || x == '/')
        {
            alert("You have entered an operand");
        }
    }
}
*/