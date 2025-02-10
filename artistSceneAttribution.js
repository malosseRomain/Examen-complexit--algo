function assignStages(artists, stages) {
  for (let artist of artists) {
    for (let stage of stages) {
      if (stage.genres.includes(artist.genre)) {
        artist.stage = stage.id;
        break;
      }
    }
  }
}

function assignStagesOpti(artists, stages) {
  const genreToStage = new Map();
  // Associer chaque genre à un stage (le premier correspondant trouvé)
  for (let stage of stages) {
    for (let genre of stage.genres) {
      if (!genreToStage.has(genre)) {
        genreToStage.set(genre, stage.id);
      }
    }
  }
  // Assigner chaque artiste à son stage correspondant
  for (let artist of artists) {
    if (genreToStage.has(artist.genre)) {
      artist.stage = genreToStage.get(artist.genre);
    }
  }
}

const artists = [
  { id: '1', name: 'John', genre: 'Rock', stage: '' },
  { id: '2', name: 'Paul', genre: 'Pop', stage: '' },
  { id: '3', name: 'George', genre: 'Jazz', stage: '' },
  { id: '4', name: 'Ringo', genre: 'Rock', stage: '' }
];

const stages = [
  { id: 'A', name: 'Main Stage', genres: ['Rock', 'Pop'] },
  { id: 'B', name: 'Jazz Stage', genres: ['Jazz'] }
];

// Créer des copies des artistes pour tester
const artistsCopy1 = JSON.parse(JSON.stringify(artists));
const artistsCopy2 = JSON.parse(JSON.stringify(artists));
assignStages(artistsCopy1, stages);
assignStagesOpti(artistsCopy2, stages);

console.log("Results of assignStages:", JSON.stringify(artistsCopy1, null, 2));
console.log("Results of assignStagesOpti:", JSON.stringify(artistsCopy2, null, 2));

const isEqualAssignment = JSON.stringify(artistsCopy1) === JSON.stringify(artistsCopy2);

if (isEqualAssignment) {
  console.log("Stage assignment test successful, results are equal.");
  console.log("Running performance tests...");

  // Mesurer le temps pour la fonction classique
  const start2 = performance.now();
  assignStages([...artists], stages);
  const end2 = performance.now();
  console.log("Classic Stage Assignment - Elapsed time: ", end2 - start2, "ms");

  // Mesurer le temps pour la fonction optimisée
  const start3 = performance.now();
  assignStagesOpti([...artists], stages);
  const end3 = performance.now();
  console.log("Optimized Stage Assignment - Elapsed time: ", end3 - start3, "ms");
} else {
  console.log("The results of the two stage assignment functions do not match.");
}