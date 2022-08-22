import { writeFile } from 'fs'
import { DocksTypes } from './docs/docks.types';
import { FunctionGenerator } from './side-functions.service';

export class XmlWriteService {
	
	public async getDocPath(docName: string): Promise<string> {
		switch(docName) {
			case DocksTypes.FM01:
				return ''
			case DocksTypes.FM02:
				return ''
			case DocksTypes.FM03:
				return 'SKO115FZ_03_044525111_20220407_'
			default:
				throw new Error('')
		}
	}

}

