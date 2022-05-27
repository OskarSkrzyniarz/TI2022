<?php
    if (isset($_POST["addNewTeam"]))
    {
        $mysqli = new mysqli("localhost", "root", "", "superliga");

        $email = ($_POST['email']);
        $teamName = ($_POST['teamName']);
                    
        $result = $mysqli->query("INSERT INTO teams (teamName, capitanMail) VALUES ('".$teamName."', '".($email)."')");
        $teamId = $mysqli->query("SELECT max(teamID) FROM teams");
        $teamId = mysqli_fetch_row($teamId);

        $counter = ($_POST['playerIDLast']);
        
        $i = 0;
        while ($i <= $counter)
        {
            $numID = 'pNum' . strval($counter);
            $nameID = 'pName' . strval($counter);
            $surnameID = 'pSurname' . strval($counter);
            $ageID = 'pAge' . strval($counter);

            $pNum = ($_POST[$numID]);
            $pName = ($_POST[$nameID]);
            $pSurname = ($_POST[$surnameID]);
            $pAge = ($_POST[$ageID]);

            $result = $mysqli->query("INSERT INTO players (teamID, playerName, playerSurname, playerAge, playerNumber) VALUES ('".($teamId[0])."', '".($pName)."', '".($pSurname)."', '".($pAge)."','".($pNum)."')");
            $i += 1;
        }

        header( "Location: index.html" );
    }
?>