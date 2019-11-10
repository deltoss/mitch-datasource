import paths from './paths';
import process from 'process';
import { execSync } from 'child_process';

// Runs a specified command or set of commands
// for every project in the repository
const commandsToRun = process.argv.slice(2);
const cwd = process.cwd();

commandsToRun.forEach((command) => {
  Object.values(paths).forEach((path) => {
    process.chdir(path);
    try {
      execSync(command, { stdio: 'inherit' });
      console.log(`Successfully running the command '${command}' for ${path}`);
    } catch (ex) {
      console.error(`Failed running the command '${command}' for ${path}... continuing`);
    }
    process.chdir(cwd);
  })
});