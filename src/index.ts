import { processTransliterationFiles } from './features/processTransliterationFiles';
import { processMarkupGeneration } from './features/processMarkupGeneration';

const args = process.argv.slice(2);

const flag = args[0];

switch (flag) {
  case '-f':
    processTransliterationFiles();
    console.log('Renamed files can be found at data/output directory');
    break;

  case '-m':
    const hrefBase = args[1];
    if (!hrefBase) throw new Error('Invalid base href parameter');
    processMarkupGeneration(hrefBase);
    console.log(
      'Html file with markup can be found at data/outputHtml directory'
    );
    break;

  default:
    console.log(`Unknown flag: ${flag}`);
    break;
}
