var photo_1;
var photo_2;
var photo_3;
var photo_4;
var photo_5;
var photo_6;
var photo_7;
var photo_8;
var photo_9;
var photo_10;
var photo_11;
var photo_12;

window.onload = function ()
{
    photo_1 = document.getElementById("photo_1");
    photo_2 = document.getElementById("photo_2");
    photo_3 = document.getElementById("photo_3");
    photo_4 = document.getElementById("photo_4");
    photo_5 = document.getElementById("photo_5");
    photo_6 = document.getElementById("photo_6");
    photo_7 = document.getElementById("photo_7");
    photo_8 = document.getElementById("photo_8");
    photo_9 = document.getElementById("photo_9");
    photo_10 = document.getElementById("photo_10");
    photo_11 = document.getElementById("photo_11");
    photo_12 = document.getElementById("photo_12");

    var photo_selection_1 = document.getElementById("photo_selection_1");
    photo_selection_1.onclick = ShowPhoto_1;

    var photo_selection_2 = document.getElementById("photo_selection_2");
    photo_selection_2.onclick = ShowPhoto_2;

    var photo_selection_3 = document.getElementById("photo_selection_3");
    photo_selection_3.onclick = ShowPhoto_3;

    var photo_selection_4 = document.getElementById("photo_selection_4");
    photo_selection_4.onclick = ShowPhoto_4;

    var photo_selection_5 = document.getElementById("photo_selection_5");
    photo_selection_5.onclick = ShowPhoto_5;

    var photo_selection_6 = document.getElementById("photo_selection_6");
    photo_selection_6.onclick = ShowPhoto_6;

    var photo_selection_7 = document.getElementById("photo_selection_7");
    photo_selection_7.onclick = ShowPhoto_7;

    var photo_selection_8 = document.getElementById("photo_selection_8");
    photo_selection_8.onclick = ShowPhoto_8;

    var photo_selection_9 = document.getElementById("photo_selection_9");
    photo_selection_9.onclick = ShowPhoto_9;

    var photo_selection_10 = document.getElementById("photo_selection_10");
    photo_selection_10.onclick = ShowPhoto_10;

    var photo_selection_11 = document.getElementById("photo_selection_11");
    photo_selection_11.onclick = ShowPhoto_11;

    var photo_selection_12 = document.getElementById("photo_selection_12");
    photo_selection_12.onclick = ShowPhoto_12;

    photo_1.classList.remove("false");
    photo_2.classList.add("false");
    photo_3.classList.add("false");
    photo_4.classList.add("false");
    photo_5.classList.add("false");
    photo_6.classList.add("false");
    photo_7.classList.add("false");
    photo_8.classList.add("false");
    photo_9.classList.add("false");
    photo_10.classList.add("false");
    photo_11.classList.add("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `var(--gradient-color)`; 
}

function ShowPhoto_1()
{
    photo_1.classList.remove("false");
    photo_2.classList.add("false");
    photo_3.classList.add("false");
    photo_4.classList.add("false");
    photo_5.classList.add("false");
    photo_6.classList.add("false");
    photo_7.classList.add("false");
    photo_8.classList.add("false");
    photo_9.classList.add("false");
    photo_10.classList.add("false");
    photo_11.classList.add("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `var(--gradient-color)`; 
    document.getElementsByClassName("photo")[1].style.background = `transparent`; 
    document.getElementsByClassName("photo")[2].style.background = `transparent`; 
    document.getElementsByClassName("photo")[3].style.background = `transparent`; 
    document.getElementsByClassName("photo")[4].style.background = `transparent`; 
    document.getElementsByClassName("photo")[5].style.background = `transparent`; 
    document.getElementsByClassName("photo")[6].style.background = `transparent`; 
    document.getElementsByClassName("photo")[7].style.background = `transparent`; 
    document.getElementsByClassName("photo")[8].style.background = `transparent`; 
    document.getElementsByClassName("photo")[9].style.background = `transparent`; 
    document.getElementsByClassName("photo")[10].style.background = `transparent`; 
    document.getElementsByClassName("photo")[11].style.background = `transparent`; 
}

function ShowPhoto_2()
{
    photo_1.classList.add("false");
    photo_2.classList.remove("false");
    photo_3.classList.add("false");
    photo_4.classList.add("false");
    photo_5.classList.add("false");
    photo_6.classList.add("false");
    photo_7.classList.add("false");
    photo_8.classList.add("false");
    photo_9.classList.add("false");
    photo_10.classList.add("false");
    photo_11.classList.add("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `transparent`; 
    document.getElementsByClassName("photo")[1].style.background = `var(--gradient-color)`; 
    document.getElementsByClassName("photo")[2].style.background = `transparent`; 
    document.getElementsByClassName("photo")[3].style.background = `transparent`; 
    document.getElementsByClassName("photo")[4].style.background = `transparent`; 
    document.getElementsByClassName("photo")[5].style.background = `transparent`; 
    document.getElementsByClassName("photo")[6].style.background = `transparent`; 
    document.getElementsByClassName("photo")[7].style.background = `transparent`; 
    document.getElementsByClassName("photo")[8].style.background = `transparent`; 
    document.getElementsByClassName("photo")[9].style.background = `transparent`; 
    document.getElementsByClassName("photo")[10].style.background = `transparent`; 
    document.getElementsByClassName("photo")[11].style.background = `transparent`; 
}

function ShowPhoto_3()
{
    photo_1.classList.add("false");
    photo_2.classList.add("false");
    photo_3.classList.remove("false");
    photo_4.classList.add("false");
    photo_5.classList.add("false");
    photo_6.classList.add("false");
    photo_7.classList.add("false");
    photo_8.classList.add("false");
    photo_9.classList.add("false");
    photo_10.classList.add("false");
    photo_11.classList.add("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `transparent`; 
    document.getElementsByClassName("photo")[1].style.background = `transparent`; 
    document.getElementsByClassName("photo")[2].style.background = `var(--gradient-color)`; 
    document.getElementsByClassName("photo")[3].style.background = `transparent`; 
    document.getElementsByClassName("photo")[4].style.background = `transparent`; 
    document.getElementsByClassName("photo")[5].style.background = `transparent`; 
    document.getElementsByClassName("photo")[6].style.background = `transparent`; 
    document.getElementsByClassName("photo")[7].style.background = `transparent`; 
    document.getElementsByClassName("photo")[8].style.background = `transparent`; 
    document.getElementsByClassName("photo")[9].style.background = `transparent`; 
    document.getElementsByClassName("photo")[10].style.background = `transparent`; 
    document.getElementsByClassName("photo")[11].style.background = `transparent`; 
}

function ShowPhoto_4()
{
    photo_1.classList.add("false");
    photo_2.classList.add("false");
    photo_3.classList.add("false");
    photo_4.classList.remove("false");
    photo_5.classList.add("false");
    photo_6.classList.add("false");
    photo_7.classList.add("false");
    photo_8.classList.add("false");
    photo_9.classList.add("false");
    photo_10.classList.add("false");
    photo_11.classList.add("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `transparent`; 
    document.getElementsByClassName("photo")[1].style.background = `transparent`; 
    document.getElementsByClassName("photo")[2].style.background = `transparent`; 
    document.getElementsByClassName("photo")[3].style.background = `var(--gradient-color)`; 
    document.getElementsByClassName("photo")[4].style.background = `transparent`; 
    document.getElementsByClassName("photo")[5].style.background = `transparent`; 
    document.getElementsByClassName("photo")[6].style.background = `transparent`; 
    document.getElementsByClassName("photo")[7].style.background = `transparent`; 
    document.getElementsByClassName("photo")[8].style.background = `transparent`; 
    document.getElementsByClassName("photo")[9].style.background = `transparent`; 
    document.getElementsByClassName("photo")[10].style.background = `transparent`; 
    document.getElementsByClassName("photo")[11].style.background = `transparent`; 
}

function ShowPhoto_5()
{
    photo_1.classList.add("false");
    photo_2.classList.add("false");
    photo_3.classList.add("false");
    photo_4.classList.add("false");
    photo_5.classList.remove("false");
    photo_6.classList.add("false");
    photo_7.classList.add("false");
    photo_8.classList.add("false");
    photo_9.classList.add("false");
    photo_10.classList.add("false");
    photo_11.classList.add("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `transparent`; 
    document.getElementsByClassName("photo")[1].style.background = `transparent`; 
    document.getElementsByClassName("photo")[2].style.background = `transparent`; 
    document.getElementsByClassName("photo")[3].style.background = `transparent`; 
    document.getElementsByClassName("photo")[4].style.background = `var(--gradient-color)`;  
    document.getElementsByClassName("photo")[5].style.background = `transparent`; 
    document.getElementsByClassName("photo")[6].style.background = `transparent`; 
    document.getElementsByClassName("photo")[7].style.background = `transparent`; 
    document.getElementsByClassName("photo")[8].style.background = `transparent`; 
    document.getElementsByClassName("photo")[9].style.background = `transparent`; 
    document.getElementsByClassName("photo")[10].style.background = `transparent`; 
    document.getElementsByClassName("photo")[11].style.background = `transparent`; 
}

function ShowPhoto_6()
{
    photo_1.classList.add("false");
    photo_2.classList.add("false");
    photo_3.classList.add("false");
    photo_4.classList.add("false");
    photo_5.classList.add("false");
    photo_6.classList.remove("false");
    photo_7.classList.add("false");
    photo_8.classList.add("false");
    photo_9.classList.add("false");
    photo_10.classList.add("false");
    photo_11.classList.add("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `transparent`; 
    document.getElementsByClassName("photo")[1].style.background = `transparent`; 
    document.getElementsByClassName("photo")[2].style.background = `transparent`; 
    document.getElementsByClassName("photo")[3].style.background = `transparent`; 
    document.getElementsByClassName("photo")[4].style.background = `transparent`; 
    document.getElementsByClassName("photo")[5].style.background = `var(--gradient-color)`; 
    document.getElementsByClassName("photo")[6].style.background = `transparent`; 
    document.getElementsByClassName("photo")[7].style.background = `transparent`; 
    document.getElementsByClassName("photo")[8].style.background = `transparent`; 
    document.getElementsByClassName("photo")[9].style.background = `transparent`; 
    document.getElementsByClassName("photo")[10].style.background = `transparent`; 
    document.getElementsByClassName("photo")[11].style.background = `transparent`; 
}

function ShowPhoto_7()
{
    photo_1.classList.add("false");
    photo_2.classList.add("false");
    photo_3.classList.add("false");
    photo_4.classList.add("false");
    photo_5.classList.add("false");
    photo_6.classList.add("false");
    photo_7.classList.remove("false");
    photo_8.classList.add("false");
    photo_9.classList.add("false");
    photo_10.classList.add("false");
    photo_11.classList.add("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `transparent`; 
    document.getElementsByClassName("photo")[1].style.background = `transparent`; 
    document.getElementsByClassName("photo")[2].style.background = `transparent`; 
    document.getElementsByClassName("photo")[3].style.background = `transparent`; 
    document.getElementsByClassName("photo")[4].style.background = `transparent`; 
    document.getElementsByClassName("photo")[5].style.background = `transparent`; 
    document.getElementsByClassName("photo")[6].style.background = `var(--gradient-color)`; 
    document.getElementsByClassName("photo")[7].style.background = `transparent`; 
    document.getElementsByClassName("photo")[8].style.background = `transparent`; 
    document.getElementsByClassName("photo")[9].style.background = `transparent`; 
    document.getElementsByClassName("photo")[10].style.background = `transparent`; 
    document.getElementsByClassName("photo")[11].style.background = `transparent`; 
}

function ShowPhoto_8()
{
    photo_1.classList.add("false");
    photo_2.classList.add("false");
    photo_3.classList.add("false");
    photo_4.classList.add("false");
    photo_5.classList.add("false");
    photo_6.classList.add("false");
    photo_7.classList.add("false");
    photo_8.classList.remove("false");
    photo_9.classList.add("false");
    photo_10.classList.add("false");
    photo_11.classList.add("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `transparent`; 
    document.getElementsByClassName("photo")[1].style.background = `transparent`; 
    document.getElementsByClassName("photo")[2].style.background = `transparent`; 
    document.getElementsByClassName("photo")[3].style.background = `transparent`; 
    document.getElementsByClassName("photo")[4].style.background = `transparent`; 
    document.getElementsByClassName("photo")[5].style.background = `transparent`; 
    document.getElementsByClassName("photo")[6].style.background = `transparent`; 
    document.getElementsByClassName("photo")[7].style.background = `var(--gradient-color)`; 
    document.getElementsByClassName("photo")[8].style.background = `transparent`; 
    document.getElementsByClassName("photo")[9].style.background = `transparent`; 
    document.getElementsByClassName("photo")[10].style.background = `transparent`; 
    document.getElementsByClassName("photo")[11].style.background = `transparent`; 
}

function ShowPhoto_9()
{
    photo_1.classList.add("false");
    photo_2.classList.add("false");
    photo_3.classList.add("false");
    photo_4.classList.add("false");
    photo_5.classList.add("false");
    photo_6.classList.add("false");
    photo_7.classList.add("false");
    photo_8.classList.add("false");
    photo_9.classList.remove("false");
    photo_10.classList.add("false");
    photo_11.classList.add("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `transparent`; 
    document.getElementsByClassName("photo")[1].style.background = `transparent`; 
    document.getElementsByClassName("photo")[2].style.background = `transparent`; 
    document.getElementsByClassName("photo")[3].style.background = `transparent`; 
    document.getElementsByClassName("photo")[4].style.background = `transparent`; 
    document.getElementsByClassName("photo")[5].style.background = `transparent`; 
    document.getElementsByClassName("photo")[6].style.background = `transparent`; 
    document.getElementsByClassName("photo")[7].style.background = `transparent`; 
    document.getElementsByClassName("photo")[8].style.background = `var(--gradient-color)`; 
    document.getElementsByClassName("photo")[9].style.background = `transparent`; 
    document.getElementsByClassName("photo")[10].style.background = `transparent`; 
    document.getElementsByClassName("photo")[11].style.background = `transparent`; 
}

function ShowPhoto_10()
{
    photo_1.classList.add("false");
    photo_2.classList.add("false");
    photo_3.classList.add("false");
    photo_4.classList.add("false");
    photo_5.classList.add("false");
    photo_6.classList.add("false");
    photo_7.classList.add("false");
    photo_8.classList.add("false");
    photo_9.classList.add("false");
    photo_10.classList.remove("false");
    photo_11.classList.add("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `transparent`; 
    document.getElementsByClassName("photo")[1].style.background = `transparent`; 
    document.getElementsByClassName("photo")[2].style.background = `transparent`; 
    document.getElementsByClassName("photo")[3].style.background = `transparent`; 
    document.getElementsByClassName("photo")[4].style.background = `transparent`; 
    document.getElementsByClassName("photo")[5].style.background = `transparent`; 
    document.getElementsByClassName("photo")[6].style.background = `transparent`; 
    document.getElementsByClassName("photo")[7].style.background = `transparent`; 
    document.getElementsByClassName("photo")[8].style.background = `transparent`; 
    document.getElementsByClassName("photo")[9].style.background = `var(--gradient-color)`; 
    document.getElementsByClassName("photo")[10].style.background = `transparent`; 
    document.getElementsByClassName("photo")[11].style.background = `transparent`; 
}

function ShowPhoto_11()
{
    photo_1.classList.add("false");
    photo_2.classList.add("false");
    photo_3.classList.add("false");
    photo_4.classList.add("false");
    photo_5.classList.add("false");
    photo_6.classList.add("false");
    photo_7.classList.add("false");
    photo_8.classList.add("false");
    photo_9.classList.add("false");
    photo_10.classList.add("false");
    photo_11.classList.remove("false");
    photo_12.classList.add("false");

    document.getElementsByClassName("photo")[0].style.background = `transparent`; 
    document.getElementsByClassName("photo")[1].style.background = `transparent`; 
    document.getElementsByClassName("photo")[2].style.background = `transparent`; 
    document.getElementsByClassName("photo")[3].style.background = `transparent`; 
    document.getElementsByClassName("photo")[4].style.background = `transparent`; 
    document.getElementsByClassName("photo")[5].style.background = `transparent`; 
    document.getElementsByClassName("photo")[6].style.background = `transparent`; 
    document.getElementsByClassName("photo")[7].style.background = `transparent`; 
    document.getElementsByClassName("photo")[8].style.background = `transparent`; 
    document.getElementsByClassName("photo")[9].style.background = `transparent`; 
    document.getElementsByClassName("photo")[10].style.background = `var(--gradient-color)`;  
    document.getElementsByClassName("photo")[11].style.background = `transparent`; 
}

function ShowPhoto_12()
{
    photo_1.classList.add("false");
    photo_2.classList.add("false");
    photo_3.classList.add("false");
    photo_4.classList.add("false");
    photo_5.classList.add("false");
    photo_6.classList.add("false");
    photo_7.classList.add("false");
    photo_8.classList.add("false");
    photo_9.classList.add("false");
    photo_10.classList.add("false");
    photo_11.classList.add("false");
    photo_12.classList.remove("false");

    document.getElementsByClassName("photo")[0].style.background = `transparent`; 
    document.getElementsByClassName("photo")[1].style.background = `transparent`; 
    document.getElementsByClassName("photo")[2].style.background = `transparent`; 
    document.getElementsByClassName("photo")[3].style.background = `transparent`; 
    document.getElementsByClassName("photo")[4].style.background = `transparent`; 
    document.getElementsByClassName("photo")[5].style.background = `transparent`; 
    document.getElementsByClassName("photo")[6].style.background = `transparent`; 
    document.getElementsByClassName("photo")[7].style.background = `transparent`; 
    document.getElementsByClassName("photo")[8].style.background = `transparent`; 
    document.getElementsByClassName("photo")[9].style.background = `transparent`; 
    document.getElementsByClassName("photo")[10].style.background = `transparent`; 
    document.getElementsByClassName("photo")[11].style.background = `var(--gradient-color)`;  
}