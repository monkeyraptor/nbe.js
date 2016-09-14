# nbe.js
Napier Bernoulli Euler | A JavaScript snippet to generate the value of (1 + 1/x)ˣ math exponential function

## Invocation
```
nbe(d, a, f, t)
```

There are 4 arguments for that. This will calculate from `d` to `a` range.

By default, `d` starting point is 1.

The iteration limit is 1000. Larger than that, you'll get only the last result.

Arguments:
- `d` is the lower range limit.
- `a` is the upper limit.
- `f` is iteration or no iteration flag:

> 1: this function will only output the last result.

> Other than 1: output will be the range result.

- `t` is flag for outputting text or not.

> 1: this function will output an object.

> Other than 1: text result.
 
## Examples

### With iteration, `f` flag is 0.

#### `nbe(1, 20, 0, 0)`
Result:
```
The function to generate the value is: f(x) = 1 + (1/x))ˣ
---
x =      1, result = 2
x =      2, result = 2.25
x =      3, result = 2.3703703703703702
x =      4, result = 2.44140625
x =      5, result = 2.48832
x =      6, result = 2.5216263717421143
x =      7, result = 2.546499697040712
x =      8, result = 2.565784513950348
x =      9, result = 2.5811747917131984
x =     10, result = 2.593742460100002
x =     11, result = 2.604199011897528
x =     12, result = 2.6130352902246763
x =     13, result = 2.620600887885731
x =     14, result = 2.6271515563008676
x =     15, result = 2.6328787177279187
x =     16, result = 2.6379284973666
x =     17, result = 2.642414375183112
x =     18, result = 2.6464258210976865
x =     19, result = 2.650034326640442
x =     20, result = 2.653297705144421
```
#### `nbe(10, 20, 0, 0)`
Result:
```
The function to generate the value is: f(x) = 1 + (1/x))ˣ
---
x =     10, result = 2.593742460100002
x =     11, result = 2.604199011897528
x =     12, result = 2.6130352902246763
x =     13, result = 2.620600887885731
x =     14, result = 2.6271515563008676
x =     15, result = 2.6328787177279187
x =     16, result = 2.6379284973666
x =     17, result = 2.642414375183112
x =     18, result = 2.6464258210976865
x =     19, result = 2.650034326640442
x =     20, result = 2.653297705144421
```
#### `nbe(1, 20000, 0, 0)`
Result is object, (20000 - 1) is beyond limit (1000), so only the last result:
```
The function to generate the value is: f(x) = 1 + (1/x))ˣ
---
Too many iterations. This is the last result.
x =  20000, result = 2.718213874533063"
```

#### `nbe(1, 20, 0, 1)`
Result is object:
```
{
  1: 2
  2: 2.25
  3: 2.3703703703703702
  4: 2.44140625
  5: 2.48832
  6: 2.5216263717421143
  7: 2.546499697040712
  8: 2.565784513950348
  9: 2.5811747917131984
  10: 2.593742460100002
  11: 2.604199011897528
  12: 2.6130352902246763
  13: 2.620600887885731
  14: 2.6271515563008676
  15: 2.6328787177279187
  16: 2.6379284973666
  17: 2.642414375183112
  18: 2.6464258210976865
  19: 2.650034326640442
  20: 2.653297705144421
}
```
#### `nbe(10, 20, 0, 1)`
Result is object:
```
{
  10: 2.593742460100002
  11: 2.604199011897528
  12: 2.6130352902246763
  13: 2.620600887885731
  14: 2.6271515563008676
  15: 2.6328787177279187
  16: 2.6379284973666
  17: 2.642414375183112
  18: 2.6464258210976865
  19: 2.650034326640442
  20: 2.653297705144421
}
```
#### `nbe(1, 20000, 0, 1)`
Result is object, (20000 - 1) is beyond limit (1000), so only the last result:
```
{
  20000: 2.718213874533063
}
```

### No iteration, `f` flag is 1.

#### nbe(1, 20, 1, 0)
```
The function to generate the value is: f(x) = 1 + (1/x))ˣ
---
x =     20, result = 2.653297705144421"
```

#### nbe(1, 20, 1, 1)
```
{
  20: 2.653297705144421
}
```

#### nbe(1, 2000000, 1, 1) or nbe(0, 2000000, 1, 1) or nbe(undefined, 2000000, 1, 1) or nbe(1000, 2000000, 1, 1)
```
{
  2000000: 2.7182811494026673
}
```
With `t` flag is set to 1, the function will only look at the upper limit. In this case 2000000 (2 million).

### Invalid input
Result will be empty string `""`

And so on...
