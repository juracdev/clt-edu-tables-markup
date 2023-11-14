import { transliterate as tr } from 'transliteration';
import * as path from 'node:path';
import { FileInfo } from '../models/FileInfo';

export function transliterFilenames(filenames: string[]): FileInfo[] {
  return filenames.map((inputName) => {
    const isSigFile = inputName.endsWith('.sig');

    if (isSigFile) inputName = inputName.replace('.sig', '');

    const ext = path.extname(inputName);
    const basename = path.basename(inputName, ext);
    const trBaseName = tr(clearName(basename));
    let transName = `${trBaseName}${ext}`;

    if (isSigFile) {
      transName = `${transName}.sig`;
      inputName = `${inputName}.sig`;
    }

    return { inputName, transName, title: basename };
  });
}

function clearName(name: string): string {
  return name
    .replace(/[._()]/g, '')
    .replace(/[\s]/g, '-')
    .toLowerCase();
}
