// Fonction de recherche d'artiste classique
function findArtistIndex(artists, name) {
    for (var i = 0; i < artists.length; i++) {
        if (artists[i].name === name) {
            return artists[i].id;
        }
    }
    return -1;
}
// Fonction de recherche d'artiste optimisée
function findArtistIndexOpti(artists, name) {
    for (var i = 0; i < artists.length; i++) {
        if (artists[i].name === name) {
            return artists[i].id;
        }
    }
    return -1;
}
// Test des fonctions de recherche d'artiste
var artists = [
    { id: '1', name: 'John' },
    { id: '2', name: 'Paul' },
    { id: '3', name: 'George' },
    { id: '4', name: 'Ringo' }
];
var artistName = 'George';
var isEqualArtist = findArtistIndex(artists, artistName) === findArtistIndexOpti(artists, artistName);
if (isEqualArtist) {
    console.log("Artist search test successful, results are equal.");
    console.log("Running performance tests...");
    // Mesurer le temps pour la fonction classique
    var start2 = performance.now();
    findArtistIndex(artists, artistName);
    var end2 = performance.now();
    console.log("Classic Artist Search - Elapsed time: ", end2 - start2, "ms");
    // Mesurer le temps pour la fonction optimisée
    var start3 = performance.now();
    findArtistIndexOpti(artists, artistName);
    var end3 = performance.now();
    console.log("Optimized Artist Search - Elapsed time: ", end3 - start3, "ms");
}
else {
    console.log("The results of the two artist search functions do not match.");
}
