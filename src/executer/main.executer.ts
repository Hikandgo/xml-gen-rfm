import { ChildProcessWithoutNullStreams } from 'child_process'
import { DocksTypes } from '../builder/docs/docks.types'
import { Builder03 } from '../builder/docs/fm/03.builder'
import { FunctionGenerator } from '../builder/side-functions.service'
import { PromptChoices } from '../prompt/prompt.choices'
import { PromptService } from '../prompt/prompt.service'
import { Input } from './xml.types'

export class MainExecuter {

	private promptService: PromptService = new PromptService()

	
	public async prompt(): Promise<Input> {
		const armName = await this.promptService.input<string>('list','Выберите АРМ', PromptChoices.arm)
		const docName = await this.promptService.input<string>('list', 'Выберите документ', FunctionGenerator.getDocList(armName))
		const copyNumber = await this.promptService.input<number>('number', 'Введите количество копий')
		return {docName, copyNumber}
	}

	public pickBuild(input: Input) {
		switch (input.docName) {
			case DocksTypes.FM01:
				//
			case DocksTypes.FM02:
				//
			case DocksTypes.FM03:
				const build = new Builder03()
				return build.createXml(input.copyNumber)
		}
	}



}
