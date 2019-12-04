import { execSync } from 'child_process';
import path from 'path';
import glob from 'glob';

const mermaidFolderPaths = process.argv.slice(2);
mermaidFolderPaths.forEach((mermaidFolderPath) => {
  const mermaidFilePaths = glob.sync(`${mermaidFolderPath}/**/*.mmd`);
  mermaidFilePaths.forEach((mermaidFilePath) => {
    const dirName = path.dirname(mermaidFilePath).replace('/asset', '/generated-files');
    console.log(dirName);
    const fileName = path.basename(mermaidFilePath, '.mmd');
    const mermaidOutputFilePath = `${dirName}/${fileName}.png`;
    const command = `mmdc -i \"${mermaidFilePath}\" -o \"${mermaidOutputFilePath}\" -b transparent -t neutral`;
    execSync(command, { stdio: 'inherit' });
  });
});