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
            const result = upgrades ? (Object.keys(upgrades).length > 0) :  false;
            if (result) {
                console.log('Upgraded.');
                core.setOutput('upgraded', result);
                core.setOutput('upgrades', upgrades);
            }
            else {
                console.log('No upgrades.');
                core.setOutput('upgraded', false);
                core.setOutput('upgrades', '');
            }
            console.log('upgraded', upgraded);
            console.log('upgrades', upgrades);

            core.setOutput('success', result);
        });
}
catch (error) {
    core.setFailed(error.message);
}
