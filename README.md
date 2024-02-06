# NODE LOGGING IS SLOW

## Table of Contents
1. [INTRO](#intro)
1. [PREREQUISITES](#prerequisites)
2. [GETTING STARTED](#getting-started)
6. [RESULTS](#results)
6. [CONCLUSION](#conclusion)


## INTRO <a name="intro"></a>
`console.log()` calls are roughly the same speed as a file write.
a synchronous file write.
it's friggin brutal.


## PREREQUISITES <a name="prerequisites"></a>
this repo is a just a basic express app, with [k6](https://k6.io/docs/get-started/installation) executing load tests.
you will need the following:
- `make`
- `node`
- `k6`

## GETTING STARTED <a name="getting-started"></a>
- terminal one: `make start`
- terminal two: `make test`

## RESULTS <a name="results"></a>
running on my small machine, i see the following:

| number of log calls per HTTP response | requests per second |
|---------------------------------------|---------------------|
| 0                                     | 8900                |
| 1                                     | 4500                |
| 5                                     | 2700                |
| 20                                    | 1300                |

## CONCLUSION <a name="conclusion"></a>
- ☝ this is an empty HTTP handler - i.e. the best-case scenario
- log less
- or try a different logging solution
- or perhaps use traces instead of logs (e.g. otel traces)
- pino async logging is a red herring - it uses console.log under the hood but it does some batching
