function change_formats()
{
    document.getElementById("para1").style.fontSize="30pt";
    document.getElementById("para1").style.fontFamily="Times New Roman";
    document.getElementById("para1").style.borderBlockStyle="dotted";
    document.getElementById("para1").style.color='yellow';
}


function showuses()
        {
        document.getElementById('adv').innerHTML="<ul type='square'>" +
        "<li> JavaScript was designed to add interactivity to HTML pages</li>" +
        "<li>JavaScript is a scripting language</li> " +
        "<li>A scripting language is a lightweight programming language</li> "+
        "<li>JavaScript is usually embedded directly into HTML pages </li>"+
        "<li>JavaScript is an interpreted language (means that scripts execute without preliminary compilation)</li> "
       
        }
       
        function reset()
        {
        document.getElementById('adv').innerHTML="";
        }
