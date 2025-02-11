// Fonction pour créer une Map optimisée des artistes
function createArtistMap(artists) {
    const artistMap = new Map();
    for (const artist of artists) {
        artistMap.set(artist.name, artist.id);
    }
    return artistMap;
}

// Fonction de recherche d'artiste classique (O(n))
function findArtistIndex(artists, name) {
    for (var i = 0; i < artists.length; i++) {
        if (artists[i].name === name) {
            return artists[i].id;
        }
    }
    return -1;
}

// Fonction de recherche optimisée (O(1))
function findArtistIndexOpti(artistMap, name) {
    return artistMap.get(name) ?? -1;
}

// Données d'exemple
var artists = [
    { id: '1', name: 'John' },
    { id: '2', name: 'Paul' },
    { id: '3', name: 'George' },
    { id: '4', name: 'Ringo' }
];

// Création de la Map optimisée
const artistMap = createArtistMap(artists);

// Vérification de l'égalité des résultats
var artistName = 'George';
var isEqualArtist = findArtistIndex(artists, artistName) === findArtistIndexOpti(artistMap, artistName);

if (isEqualArtist) {
    console.log("Artist search test successful, results are equal.");
    
    console.log("Running performance tests...");

    // Nombre d'itérations pour un test plus précis
    const iterations = 1000000;
    
    // Test de performance de la recherche classique
    var start1 = performance.now();
    for (let i = 0; i < iterations; i++) {
        findArtistIndex(artists, artistName);
    }
    var end1 = performance.now();
    console.log("Classic Artist Search - Elapsed time: ", (end1 - start1).toFixed(4), "ms");

    // Test de performance de la recherche optimisée
    var start2 = performance.now();
    for (let i = 0; i < iterations; i++) {
        findArtistIndexOpti(artistMap, artistName);
    }
    var end2 = performance.now();
    console.log("Optimized Artist Search - Elapsed time: ", (end2 - start2).toFixed(4), "ms");

} else {
    console.log("The results of the two artist search functions do not match.");
}
