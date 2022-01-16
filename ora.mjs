import ora from 'ora';
import chalk from 'chalk';

// const spinner = ora(`Loading ${chalk.red('unicorns')}`).start();
// const spinner = ora(`Loading ${chalk.red('unicorns')}`).succeed('testing');

// const spinner = ora('Loading unicorns').start();
const spinner = ora('Loading unicorns').succeed('testing');

// setTimeout(() => {
//     spinner.color = 'yellow';
//     spinner.text = 'Loading rainbows';
// }, 1000);