<?php
    ini_set('memory_limit', '256M');
    //$afspath = $_SERVER["AeroFSdir"];
    $begDate = $_GET['begDate'];
    $endDate = $_GET['endDate'];
    $smplRate = $_GET['smplRate'];

    //echo gethostname();
    //echo get_current_user();
    $currentUser = get_current_user();

    if (gethostname() == 'aramis.astro.yale.edu') {
        $afspath = "/mg/AeroFS/";    
    } else {
        $afspath = "/Users/" . $currentUser . "/AeroFS/";
    }
    
    if (gethostname() == 'exoplanets.astro.yale.edu') {
        //echo "You are on exoplanets! \r\n";
        $afspath = "/Library/WebServer/creds/";    
    }
    //  
    //echo "afspath is: ";

    //echo $afspath; 
    //echo $afspath;
    $credsfile = $afspath . '.credentials/SQL/csaye';
    //echo "credsfile is: ";
    //echo $credsfile;
    $file = file_get_contents($credsfile);
    //echo "hello";
    //echo "The host is: ";
    //echo $file[0];
    //echo $file;
    //echo "File should have been above.";
    
    $creds = explode("\n", $file);
    //echo $creds[0];
    //echo "\n ";

    $host = $creds[0];
    $port = $creds[1];
    $username = $creds[2];
    $password = $creds[3];
    $database = $creds[4];

    
    $server = mysql_connect($host, $username, $password);
    //echo $server;
    //echo "\n";
    $connection = mysql_select_db($database, $server);
    //echo $connection;
    //echo "\n";

    $whereclause = 'WHERE ';

    $selection = 'sampleTime as date';

    if (isset($_GET['gratingTemp'])){
        if ($_GET['gratingTemp'] == 'True'){
            $selection = $selection . ', gratingTemp';
        }
    }

    if (isset($_GET['tableCenterTemp'])){
        if ($_GET['tableCenterTemp'] == 'True'){
            $selection = $selection . ', tableCenterTemp';
        }
    }

    if (isset($_GET['enclosureTemp'])){
        if ($_GET['enclosureTemp'] == 'True'){
            $selection = $selection . ', enclosureTemp';
        }
    }

    if (isset($_GET['iodineCellTemp'])){
        if ($_GET['iodineCellTemp'] == 'True'){
            $selection = $selection . ', iodineCellTemp';
        }
    }

    if (isset($_GET['enclosureSetpoint'])){
        if ($_GET['enclosureSetpoint'] == 'True'){
            $selection = $selection . ', enclosureSetpoint';
        }
    }

    if (isset($_GET['iodineCellSetpoint'])){
        if ($_GET['iodineCellSetpoint'] == 'True'){
            $selection = $selection . ', iodineCellSetpoint';
        }
    }

    if (isset($_GET['enclosureTemp2'])){
        if ($_GET['enclosureTemp2'] == 'True'){
            $selection = $selection . ', enclosureTemp2';
        }
    }

    if (isset($_GET['tableTempLow'])){
        if ($_GET['tableTempLow'] == 'True'){
            $selection = $selection . ', tableTempLow';
        }
    }

    if (isset($_GET['structureTemp'])){
        if ($_GET['structureTemp'] == 'True'){
            $selection = $selection . ', structureTemp';
        }
    }

    if (isset($_GET['instrumentSetpoint'])){
        if ($_GET['instrumentSetpoint'] == 'True'){
            $selection = $selection . ', instrumentSetpoint';
        }
    }

    if (isset($_GET['instrumentTemp'])){
        if ($_GET['instrumentTemp'] == 'True'){
            $selection = $selection . ', instrumentTemp';
        }
    }

    if (isset($_GET['coudeTemp'])){
        if ($_GET['coudeTemp'] == 'True'){
            $selection = $selection . ', coudeTemp';
        }
    }

    if (isset($_GET['heaterSetpoint'])){
        if ($_GET['heaterSetpoint'] == 'True'){
            $selection = $selection . ', heaterSetpoint';
        }
    }

    if (isset($_GET['barometer'])){
        if ($_GET['barometer'] == 'True'){
            $selection = $selection . ', barometer';
        }
    }

    if (isset($_GET['echellePressure'])){
        if ($_GET['echellePressure'] == 'True'){
            $selection = $selection . ', echellePressure';
        }
    }

    if (isset($_GET['ccdTemp'])){
        if ($_GET['ccdTemp'] == 'True'){
            $selection = $selection . ', ccdTemp';
        }
    }

    if (isset($_GET['neckTemp'])){
        if ($_GET['neckTemp'] == 'True'){
            $selection = $selection . ', neckTemp';
        }
    }

    if (isset($_GET['ccdSetpoint'])){
        if ($_GET['ccdSetpoint'] == 'True'){
            $selection = $selection . ', ccdSetpoint';
        }
    }

    //echo $selection;

    if ($smplRate =='Smpl-Daily') {
        $myquery = "
        SELECT " . $selection . " FROM environ WHERE sampleTime > '" . $begDate . "' AND sampleTime < '" . $endDate . "' AND MINUTE(sampleTime) < 3 AND HOUR(sampleTime) < 1  ORDER BY sampleTime ASC;
        ";   
    }

    if ($smplRate =='Smpl-Hourly') {
        $myquery = "
        SELECT " . $selection . " FROM environ WHERE sampleTime > '" . $begDate . "' AND sampleTime < '" . $endDate . "' AND MINUTE(sampleTime) < 3 ORDER BY sampleTime ASC;
        ";   
    }

    if ($smplRate =='Smpl-All') {
        $myquery = "
        SELECT " . $selection . " FROM environ WHERE sampleTime > '" . $begDate . "' AND sampleTime < '" . $endDate . "' ORDER BY sampleTime ASC;
        ";   
    }

    $query = mysql_query($myquery);
    
    if ( ! $query ) {
        echo mysql_error();
        die;
    }
    
    $data = array();
    
    for ($x = 0; $x < mysql_num_rows($query); $x++) {
        $data[] = mysql_fetch_assoc($query);
    }
    
    echo json_encode($data);     
     
    mysql_close($server);
    //*/

?>