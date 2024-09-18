import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';

export async function clearDirectory(folderPath: string) {
  const files = await fsPromises.readdir(folderPath);
  for (const file of files) {
    await fsPromises.unlink(path.resolve(folderPath, file));
  }
}

export async function ensureDirectoryExists(folderPath: string) {
  await fsPromises.mkdir(folderPath, { recursive: true });
}
