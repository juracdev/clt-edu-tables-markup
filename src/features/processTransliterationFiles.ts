import * as path from 'node:path';
import * as fsPromises from 'node:fs/promises';
import { transliterFilenames } from '../utils/transliterFilenames';
import { clearDirectory } from '../utils/fileUtils';

export async function processTransliterationFiles() {
  const inputPath = path.join(__dirname, '../data/input');
  const outputPath = path.join(__dirname, '../data/output');

  /*  Create transliteral names for files */
  const inputFiles = await fsPromises.readdir(inputPath);
  const infos = transliterFilenames(inputFiles);

  /*  Clear output directory */
  await clearDirectory(outputPath);

  /*  Rename files*/
  const promises = infos.map(({ inputName, transName }) => {
    return fsPromises.copyFile(
      path.join(inputPath, inputName),
      path.join(outputPath, transName)
    );
  });

  await Promise.all(promises);
}
