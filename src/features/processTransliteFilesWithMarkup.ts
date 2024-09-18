import * as path from 'node:path';
import * as fsPromises from 'node:fs/promises';
import { transliterFilenames } from '../utils/transliterFilenames';
import { clearDirectory, ensureDirectoryExists } from '../utils/fileUtils';
import { getBaseMarkup } from '../views/getBaseMarkup';

export async function processTransliteFilesWithMarkup(hrefBase: string) {
  const inputPath = path.join(__dirname, '../data/input');
  const outputPath = path.join(__dirname, '../data/output');

  await ensureDirectoryExists(outputPath);

  /*  Create transliteral names for files */
  const inputFiles = await fsPromises.readdir(inputPath);
  const infos = transliterFilenames(inputFiles);

  /*  Clear output directory */
  await clearDirectory(outputPath);

  /*  Rename files */
  const promises = infos.map(({ inputName, transName }) => {
    return fsPromises.copyFile(
      path.join(inputPath, inputName),
      path.join(outputPath, transName)
    );
  });

  await Promise.all(promises);

  /*  Generate markup */
  const commonInfos = infos.filter(
    ({ inputName }) => !inputName.endsWith('.sig')
  );

  const markup = getBaseMarkup(commonInfos, hrefBase);

  const outputHtmlPath = path.join(__dirname, '../data/outputHtml');

  await ensureDirectoryExists(outputHtmlPath);

  const outFileName = path.join(outputHtmlPath, `markup-${Date.now()}.html`);

  await fsPromises.appendFile(outFileName, markup);
}
