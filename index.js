import { calculateMetrics } from '../modularity-metrics/src/index.js';

const fileMetrics = await calculateMetrics({
    codePath: '/home/daniel/Workspace/modularity-metrics-examples/src/methods-per-class',
    useDefaultMetrics: false,
    customMetricsPath: '/home/daniel/Workspace/modularity-metrics/src/metrics/'
});
console.log(JSON.stringify(fileMetrics, null, 2));
