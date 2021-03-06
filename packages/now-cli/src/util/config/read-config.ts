import { join } from 'path';
import { CantParseJSONFile } from '../errors-ts';
import readJSONFile from '../read-json-file';
import { Config } from '../../types';
import getLocalConfigPath from './local-path';

export default async function readConfig(dir: string) {
  const pkgFilePath = getLocalConfigPath(join(process.cwd(), dir));
  const result = await readJSONFile(pkgFilePath);

  if (result instanceof CantParseJSONFile) {
    return result;
  }

  if (result) {
    return result as Config;
  }

  return null;
}
