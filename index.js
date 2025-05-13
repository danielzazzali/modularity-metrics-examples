import { calculateMetrics } from '../modularity-metrics/src/index.js';

const metrics = await calculateMetrics({
    codePath: '/home/daniel/Workspace/modularity-metrics-examples/src/FunctionsAndMethodsPerFile/JS',
    useDefaultMetrics: false,
    customMetricsPath: '/home/daniel/Workspace/modularity-metrics/src/metrics/sep'
});

console.log(JSON.stringify(metrics, null, 2));
