import process from 'process';
 
export const changeDirectory = async () => {
  try {
  // Change the directory
  process.chdir('../');
} catch (err) {
     
  // Printing error if occurs
  console.error(err);
}}