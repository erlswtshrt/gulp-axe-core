'use strict';

var chalk = require('chalk');

function color(code, str) {
	return '\u001b[' + code + 'm' + str + '\u001b[0m';
}

module.exports = function(results, threshold) {
	var pass = true;
  results.forEach(function(result) {
  console.log(chalk.cyan('File to test: ' + result.url));
  var violations = result.violations;
  if (violations.length) {
    if (threshold < 0) {
      console.log(chalk.green('Found ' + violations.length + ' accessibility violations: (no threshold)'));
    } else if (violations.length > threshold) {
      pass = false;
      console.log(chalk.red('Found ' + violations.length + ' accessibility violations:'));
    } else {
      console.log(chalk.green('Found ' + violations.length + ' accessibility violations: (under threshold of ' + threshold + ')'));
    }
    violations.forEach(function(ruleResult) {
      console.log(' ' + color(31, '\u00D7') + ' ' + ruleResult.help);

      ruleResult.nodes.forEach(function(violation, index) {
        console.log('   ' + (index + 1) + '. ' + JSON.stringify(violation.target));

        if (violation.any.length) {
          console.log('       Fix any of the following:');
          violation.any.forEach(function(check) {
            console.log('        \u2022 ' + check.message);
          });
        }

        var alls = violation.all.concat(violation.none);
        if (alls.length) {
          console.log('       Fix all of the following:');
          alls.forEach(function(check) {
            console.log('        \u2022 ' + check.message);
          });
        }
        console.log('\n');
      });
    });
  } else {
    console.log(chalk.green('Found no accessibility violations.'));
  }
  });
	return pass;
};