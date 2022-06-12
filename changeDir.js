import process from 'process';
import os from 'os';
import path from 'path';
 
export const changeDirectory = async (whereToGo) => {
  try {
  // Change the directory
  const userHomeDir = path.parse(process.cwd()).root;
  const currDir = process.cwd();
  if (whereToGo == 'up') {
    if (currDir == userHomeDir) {
      console.log('You cannot go higher than the root directory');
    } else {
      process.chdir('../');
    }
  }
  else {
    process.chdir(whereToGo);
  }
} catch (err) {
  console.error('Operation failed');
}}