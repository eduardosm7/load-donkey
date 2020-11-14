const ApacheABResultConfigs = [
    {
        title: 'Total Time (in seconds)',
        key: 'totalTime',
        regex: /Time taken for tests:\s*(\d+\.\d+) seconds/,
    },
    {
        title: 'Success Count',
        key: 'successCount',
        regex: /Complete requests:\s*(\d+)/,
    },
    {
        title: 'Fail Count',
        key: 'failCount',
        regex: /Failed requests:\s*(\d+)/,
    },
    {
        title: 'Requests Per Second',
        key: 'requestsPerSecond',
        regex: /Requests per second:\s*(\d+\.\d+) \[#\/sec] \(mean\)/,
    },
    {
        title: 'Mean Time Per Request (in milliseconds)',
        key: 'meanTimePerRequest',
        regex: /Time per request:\s*(\d+\.\d+) \[ms] \(mean\)/,
    },
    {
        title: 'P95 (in milliseconds)',
        key: 'p95',
        regex: /95%\s*(\d+)/,
    },
    {
        title: 'P99 (in milliseconds)',
        key: 'p99',
        regex: /99%\s*(\d+)/,
    },
    {
        title: 'Longest Request (in milliseconds)',
        key: 'longestRequest',
        regex: /100%\s*(\d+) \(longest request\)/,
    },
];

module.exports = ApacheABResultConfigs;