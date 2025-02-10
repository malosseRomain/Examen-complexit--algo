class AlgorithmTester {
    constructor(testName) {
      this.testName = testName;
      this.algorithms = [];
      this.iterations = 100;
      this.testCases = [];
    }
  
    // Ajouter une version d'algorithme
    addAlgorithm(name, func) {
      this.algorithms.push({ name, func });
    }
  
    // Définir le nombre d'exécutions par version
    setIterations(iterations) {
      this.iterations = iterations;
    }
  
    // Ajouter un jeu de test (les mêmes paramètres pour toutes les versions)
    addTestCase(...params) {
      this.testCases.push(params);
    }
  
    // Exécuter les tests et mesurer les performances
    runTests() {
      console.log(`\n🔬 Test: ${this.testName}`);
      console.log(`Nombre d'itérations : ${this.iterations}\n`);
  
      let results = [];
  
      for (let algo of this.algorithms) {
        let totalTime = 0;
  
        for (let i = 0; i < this.iterations; i++) {
          for (let params of this.testCases) {
            const start = performance.now();
            algo.func(...params); // Exécution de l'algorithme avec les paramètres
            const end = performance.now();
            totalTime += end - start;
          }
        }
  
        let avgTime = totalTime / (this.iterations * this.testCases.length);
        results.push({ name: algo.name, avgTime });
        console.log(`📌 ${algo.name} - Temps moyen : ${avgTime.toFixed(4)} ms`);
      }
  
      // Trier les résultats
      results.sort((a, b) => a.avgTime - b.avgTime);
      console.log(`\n🏆 Version la plus rapide : ${results[0].name} (${results[0].avgTime.toFixed(4)} ms)`);
      console.log(`🐢 Version la plus lente : ${results[results.length - 1].name} (${results[results.length - 1].avgTime.toFixed(4)} ms)`);
    }
  }
  
  // ============================
  // 📌 Utilisation de l'outil de test
  // ============================
  
  const tester = new AlgorithmTester("Comparaison des Algorithmes");
  
  // Ajout des algorithmes à tester
  tester.addAlgorithm("containsDuplicate", function (array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          return true;
        }
      }
    }
    return false;
  });
  
  tester.addAlgorithm("findCommonElements", function (array1, array2) {
    let commonElements = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          commonElements.push(array1[i]);
        }
      }
    }
    return commonElements;
  });
  
  tester.addAlgorithm("fibonacci", function (n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  });
  
  // Configuration du nombre d'itérations
  tester.setIterations(10);
  
  // Ajout des jeux de test
  tester.addTestCase([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]); // containsDuplicate
  tester.addTestCase([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]); // findCommonElements
  tester.addTestCase(20); // fibonacci (Attention, complexité élevée)
  
  // Exécution des tests
  tester.runTests();
  