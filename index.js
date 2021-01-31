const core = require('@actions/core');
const ncu = require('npm-check-updates');

try {
    let ncuOptions = core.getInput('ncu-options');
    ncuOptions = ncuOptions | {
        upgrade: true,
        jsonUpgraded: true,
        silent: false,
        packageManager: 'npm'
    };
    console.log(`Options ${ncuOptions}`);

    ncu.run(ncuOptions)
        .then((upgraded) => {
            const result = upgraded ? (Object.keys(upgraded).length > 0) :  false;
            if (result) {
                console.log('Upgraded.');
                core.setOutput('upgraded', upgraded);
            }
            else {
                console.log('No upgrades.');
                core.setOutput('upgraded', false);
            }

            core.setOutput('success', result);
        });
}
catch (error) {
    core.setFailed(error.message);
}
