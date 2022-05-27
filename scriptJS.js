var counter = 0;

function social() 
{
    var ig = document.getElementById("ig");
    var tw = document.getElementById("tw");
    var fb = document.getElementById("fb");
    var i = 0;
    var table = [fb, tw, ig];

    setInterval(function()
    {
        table[i].style.display = "flex";
        setTimeout(function(){
            table[i].style.display = "none";
            if(i == 2)
            {
                i = 0;
            }
            else
            {
                i++;
            }
        }, 9900);
    }, 15000);
}

window.onscroll = function() 
{
  if (window.pageYOffset > 70) 
  {
    document.getElementById("menu").style.right = "-100px";
  } 
  else 
  {
    document.getElementById("menu").style.right = "-400px";
  }
}

function addPlayer()
{
    counter += 1;
    if(counter < 14)
    {
        var pIDLast = document.getElementById("playerIDLast");
        pIDLast.setAttribute('id', 'playerID');
        pIDLast.setAttribute('name', 'playerID');
        
        var pID = document.createElement("input")
        var pNum = document.createElement("input")
        var pName = document.createElement("input")
        var pSurname = document.createElement("input")
        var pAge = document.createElement("input")
        
        pNum.type = "number";
        pName.type = "text";
        pSurname.type = "text";
        pAge.type = "number";
        pID.type = "text";
            
        const idNum = 'pNum' + counter;
        const idName = 'pName' + counter;
        const idSurname = 'pSurname' + counter;
        const idAge = 'pAge' + counter;

        pID.setAttribute('id', 'playerIDLast');
        pNum.setAttribute('id', idNum);
        pName.setAttribute('id', idName);
        pSurname.setAttribute('id', idSurname);
        pAge.setAttribute('id', idAge);
        
        pID.setAttribute('name', 'playerIDLast');
        pNum.setAttribute('name', idNum);
        pName.setAttribute('name', idName);
        pSurname.setAttribute('name', idSurname);
        pAge.setAttribute('name', idAge);

        pID.setAttribute('value', counter);
        pID.readOnly = true;
        pNum.required = true;
        pName.required = true;
        pSurname.required = true;
        pAge.required = true;

        document.getElementById("players").appendChild(pID);    
        document.getElementById("players").appendChild(pNum);
        document.getElementById("players").appendChild(pName);
        document.getElementById("players").appendChild(pSurname);
        document.getElementById("players").appendChild(pAge);
    }
}

function addTeamPopUp()
{
    document.getElementById("addTeam").style.display = "inline-block";
    setTimeout(function() {
        document.getElementById("addTeam").style.height = "70%";
    }, 30);
    setTimeout(function() {
        document.getElementById("team").style.display = "grid";
        document.getElementById("players").style.display = "inline-grid";
        document.getElementById("buttons").style.display = "flex";
    }, 1050);

    counter = 1;
}

function adminPanel()
{
    document.getElementById("adminPanel").style.display = "flex";
}

function closeTeamPopUp()
{
    document.getElementById("addTeam").style.display = "none";
}
