<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

$req_body = file_get_contents('php://input');
$data = json_decode($req_body, true);
$calcul = (STRING) $data['operation'];
$result = $data['result'];

define('DBHOST', 'localhost');
define('DBUSER', 'root');
define('DBPASS', '');
define("DBNAME", "calculator9000");

$dsn = "mysql:dbname=". DBNAME .";host=". DBHOST;

try {
    $bdd = new PDO($dsn, DBUSER, DBPASS);
    
    $bdd->exec("SET NAMES utf8");
    $bdd->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
    $bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
}
catch(PDOException $e) {
    die("Erreur: ". $e->getMessage());
}

// requete d'insert
$req = "INSERT INTO calculs(calcul, resultat) VALUES (:calcul, :resultat)";
$req_res = $bdd->prepare($req);
$req_res->execute([
    ":calcul"=>$calcul,
    ":resultat"=>$result
]);

?>