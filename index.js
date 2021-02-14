const core = require('@actions/core');
const ncu = require('npm-check-updates');

try {
    let ncuOptions = core.getInput('ncu-options');
    const defaultOptions = {
        upgrade: true,
        jsonUpgraded: true,
        silent: false,
        packageManager: 'npm'
    };
    ncuOptions = ncuOptions ? { ...defaultOptions, ...ncuOptions } : defaultOptions;
    console.log(`ncu-options`, ncuOptions);

    ncu.run(ncuOptions)
        .then((upgrades) => {
            try {
                const result = upgrades ? (Object.keys(upgrades).length > 0) :  false;
                if (result) {
                    console.log('Upgraded1.');
                    core.setOutput('upgraded', result);
                    console.log('Upgraded2.');
                    core.setOutput('upgrades', upgrades);
                    console.log('Upgraded3.');
                }
                else {
                    console.log('No upgrades.');
                    core.setOutput('upgraded', false);
                    core.setOutput('upgrades', '');
                }
                console.log('test1.');
                console.log(`upgraded: ${upgraded}`);
                console.log(`upgrades: ${upgrades}`);
                console.log('test2.');

                core.setOutput('success', result);
            }
            catch (err) {
                console.log(err);
            }
        });
}
catch (error) {
    core.setFailed(error.message);
}
