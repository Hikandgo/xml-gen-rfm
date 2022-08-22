import inquirer from 'inquirer';
import { PromptChoices } from './prompt.choices';
import { PromptTypes } from './prompt.types';

export class PromptService {
	public async input<T>(type: PromptTypes, message: string, choices?: PromptChoices) {
		const { result } = await inquirer.prompt<{result: T}>([
			{
				type,
				name: 'result',
				message,
				choices,
				pageSize: 15,
				loop: false
			}
		])
		return result;
	}
}