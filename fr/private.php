ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
<?php
// Vérifiez si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Affiche les valeurs récupérées pour le débogage
    echo "Nom d'utilisateur : " . $username . "<br>";
    echo "Mot de passe : " . $password . "<br>";

    // Remplacez cette partie par la vérification de votre base de données
    if ($username === "votre_nom_utilisateur" && $password === "votre_mot_de_passe") {
        echo "Informations d'identification correctes. Rediriger l'utilisateur...";
    } else {
        echo 'Les informations saisies sont incorrectes. Veuillez réessayer.';
    }
}
?>
