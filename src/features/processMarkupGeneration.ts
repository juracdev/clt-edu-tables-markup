import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import { DocumentInfo } from '../models/DocumentInfo';
import { getBaseMarkup } from '../views/getBaseMarkup';

export async function processMarkupGeneration(hrefBase: string): Promise<void> {
  const filesPath = path.join(__dirname, '../data/output');

  /*  Getting files */
  const files = await fsPromises.readdir(filesPath);
  const commonFiles = files.filter((file) => !file.endsWith('.sig'));

  const docInfos: DocumentInfo[] = commonFiles.map((filename) => {
    const title = path.basename(filename);
    return { filename, title };
  });

  /*  Generating markup */
  const markup = getBaseMarkup(docInfos, hrefBase);

  const outFileName = path.join(
    __dirname,
    '../data/outputHtml',
    `markup-${Date.now()}.html`
  );

  await fsPromises.appendFile(outFileName, markup);
}
