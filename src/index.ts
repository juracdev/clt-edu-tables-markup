import { processTransliteFilesWithMarkup } from './features/processTransliteFilesWithMarkup';

const args = process.argv.slice(2);

const flag = args[0];

switch (flag) {
  case '-f':
    const hrefBase = args[1];
    if (!hrefBase) throw new Error('Invalid base href parameter');
    processTransliteFilesWithMarkup(hrefBase);
    console.log(
      'Html file with markup can be found at data/outputHtml directory'
    );
    break;

  default:
    console.log(`Unknown flag: ${flag}`);
    break;
}
