# ncu-upgrade

![GitHub package.json version](https://img.shields.io/github/package-json/v/thzero/ncu-upgrade)
![David](https://img.shields.io/david/thzero/ncu-upgrade)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Usage

This Github action will run the command `ncu`([tjunnone/npm-check-updates](https://github.com/tjunnone/npm-check-updates)) and will return a value if any dependency needs is updated.

### Outputs

* ugpraded (1/0 as string :()) - Whether dependencies were upgraded
* upgrades (string) - Packages that were upgraded, if any

### Example

``` yml
name: Test released version

on: [push]

jobs:
  test_released_job:
    runs-on: ubuntu-latest
    name: A job to test the latest released ncu-upgrade
    steps:
    - name: Test the released step
      id: test_released
      uses: thzero/ncu-upgrade@v1

```

### NCC Issue

There is an issue with NCC and the @npmcli/run-script package due to node-gyp.  As such, currently, the @npmcli/run-script must be pulled into the dist folder directly.