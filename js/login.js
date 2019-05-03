var count= 2;

function validate()
{
    var un = document.login.username.value;
    var pw = document.login.password.value;

    if (un == "wegamenude" && pw == "sandvikenyao")
    {
        window.location = "html/Yeet.html";
    }

    else if (document.getElementById("wrong").innerHTML == "Wrong password or username!")
    {
        document.getElementById("wrong").innerHTML = "Wrong password or username again!"
    }

    else if (document.getElementById("wrong").innerHTML == "Wrong password or username again!")
    {
        document.getElementById("wrong").innerHTML = "What are you even doing?"
    }

    else if (document.getElementById("wrong").innerHTML == "What are you even doing?")
    {
        document.getElementById("wrong").innerHTML = "You get one more try!"
    }

    else if (document.getElementById("wrong").innerHTML == "You get one more try!")
    {
        document.getElementById("wrong").innerHTML = "Alright now it's locked."
        document.login.username.disabled = true;
        document.login.password.disabled = true;
    }

    else if (document.getElementById("wrong").innerHTML == "Alright now it's locked.")
    {
        document.getElementById("wrong").innerHTML = "Alright now it's locked."
    }

    else
    {
        document.getElementById("wrong").innerHTML = "Wrong password or username!";
    }
}