const core = require('@actions/core');
const ncu = require('npm-check-updates');

try {
    // let ncuOptions = core.getInput('ncu-options');
    // const defaultOptions = {
    //     upgrade: true,
    //     jsonUpgraded: true,
    //     silent: false,
    //     packageManager: 'npm'
    // };
    // ncuOptions = ncuOptions ? { ...defaultOptions, ...ncuOptions } : defaultOptions;
    // console.log(`ncu-options`, ncuOptions);

    // ncu.run(ncuOptions)
    //     .then((upgrades) => {
    //         try {
    //             const result = upgrades ? (Object.keys(upgrades).length > 0) :  false;
    //             if (result) {
    //                 core.info('Upgraded1.');
    //                 core.setOutput('upgraded', result);
    //                 core.info('Upgraded2.');
    //                 core.setOutput('upgrades', upgrades);
    //                 core.info('Upgraded3.');
    //             }
    //             else {
    //                 core.info('No upgrades.');
    //                 core.setOutput('upgraded', false);
    //                 core.setOutput('upgrades', '');
    //             }
    //             core.info('test1.');
    //             core.info(`upgraded: ${upgraded}`);
    //             core.info(`upgrades: ${upgrades}`);
    //             core.info('test2.');

    //             core.setOutput('success', result);
    //         }
    //         catch (err) {
    //             core.error(err);
    //             core.setFailed(`Action failed with error ${err}`);
    //         }
    //     });
    core.info('did nothing.');
}
catch (err) {
    core.setFailed(`Action failed with error ${err}`);
}
