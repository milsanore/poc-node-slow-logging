# NODE LOGGING IS SLOW

`console.log()` calls are roughly the same speed as a file write.
a synchronous file write.
it's friggin brutal.

this repo is a just a basic express app, with `k6` executing load tests.
and here is the impact on logging:

