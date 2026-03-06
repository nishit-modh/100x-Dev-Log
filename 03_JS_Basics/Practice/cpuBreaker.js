const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const os = require('os');

if (isMainThread) {
  const threadCount = os.cpus().length;
  console.log(`🚀 Spawning ${threadCount} workers to torture your i5-13500HX...`);

  for (let i = 0; i < threadCount; i++) {
    // Self-referencing this file to spawn workers
    new Worker(__filename, { workerData: i });
  }

  console.log("🔥 Check your monitor now. If it's not at 100%, check your warranty.");
} else {
  // Each worker runs this infinite loop
  let sum = 0;
  while (true) {
    for (let i = 0; i < 1_000_000_000; i++) {
      sum += i;
    }
    // Prevent the JIT compiler from optimizing the loop away by occasionally "using" sum
    if (sum < 0) console.log(sum); 
  }
}