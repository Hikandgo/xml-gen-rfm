import { PromptChoices } from '../prompt/prompt.choices'

export class FunctionGenerator {

	public static getFullDate() {
		const day = (date: Date) => {

			const dateString: string[] = []

			const numberDate = date.getDate().toString()
			const numberMonth = (date.getMonth() + 1).toString()
			const numberYear = date.getFullYear().toString()

			if (numberDate.length !== 2) {
				dateString.push('0' + numberDate) 
			}
			dateString.push(numberDate)

			if (numberMonth.length !== 2) {
				dateString.push('0' + numberMonth)
			}
			dateString.push(numberMonth.toString())

			const newString = `${dateString[0]}/${dateString[1]}/${numberYear}`
			return newString;
		}

		return day(new Date());
	}

	public static genUniqueNumber(num: number): string {
		if ((num >= 0) && (num < 10)) {
			return ('00000' + num.toString())
		} else if ((num >= 10) && (num < 100)) {
			return ('0000' + num.toString())
		} else if ((num >= 100) && (num < 1000)) {
			return ('000' + num.toString())
		} else if ((num >= 1000) && (num < 10000)) {
			return (('00' + num.toString()))
		} else if ((num >= 10000) && (num < 100000)) {
			return (('0' + num.toString))
		} else {
			throw new Error('Недопустимое значние, введите значение не больше 99999')
		}
	}

	
	public static getDocList(arm: string): string[] {
		switch (arm) {
			case PromptChoices.arm[0]:
				return PromptChoices.docFm
			case PromptChoices.arm[1]:
				return PromptChoices.docNfo
			default:
				throw new Error('')
		}
	}
	
	
}