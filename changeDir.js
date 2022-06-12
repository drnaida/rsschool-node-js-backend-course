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
      console.log('You cannot go higher than the home directory');
    } else {
      process.chdir('../');
    }
  }
  else {
    process.chdir(whereToGo);
  }
} catch (err) {
     
  // Printing error if occurs
  console.error(err);
}}