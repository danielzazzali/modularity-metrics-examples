import { calculateMetrics } from '../modularity-metrics/src/index.js';

const metrics = await calculateMetrics({
    codePath: '/home/daniel/Workspace/modularity-metrics-examples/src/ClassesPerFile/JS',
    useDefaultMetrics: false,
    customMetricsPath: '/home/daniel/Workspace/modularity-metrics/src/metrics/sep'
});


console.log(JSON.stringify(metrics, null, 2));









// metrics.forEach(metric => {
//     console.log('\x1b[36m%s\x1b[0m', "-".repeat(80));
//     console.log('\x1b[32m%s\x1b[0m', metric.metricName);
//     console.log('\x1b[32m%s\x1b[0m', metric.description);
//
//     console.log(JSON.stringify(metric.result, null, 2));
//
//     if (metric.unresolved) {
//         console.log('\x1b[31m%s\x1b[0m', "Unresolved imports:");
//         console.log(JSON.stringify(metric.unresolved, null, 2));
//     }
// });
