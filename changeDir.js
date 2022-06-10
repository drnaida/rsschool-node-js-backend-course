import process from 'process';
import os from 'os';
 
export const changeDirectory = async () => {
  try {
  // Change the directory
  const userHomeDir = os.homedir();
  const currDir = process.cwd();
  if (currDir == userHomeDir) {
    console.log('You cannot go higher than the home directory');
  } else {
    process.chdir('../');
  }
} catch (err) {
     
  // Printing error if occurs
  console.error(err);
}}