import process from 'process';
import path from 'path';
export const getPath = (pathToCheck) => (path.isAbsolute(pathToCheck) ? pathToCheck : path.join(process.cwd(), pathToCheck));