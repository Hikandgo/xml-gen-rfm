import { createWriteStream } from 'fs';
import xmlbuilder from 'xmlbuilder'
import { FunctionGenerator } from '../../side-functions.service'
import { DockPath } from '../docks.path';


export class Builder03 {

	private async writeFile(xml: string, ident: number) {
		let uniqNum = (FunctionGenerator.genUniqueNumber(ident)).toString()
		let nameDoc = DockPath.FM03
		const fs = require('fs')
		let path = nameDoc + uniqNum + '.' + 'xml'
		
		fs.writeFileSync(path, xml, (err:any) => {
				if (err) {
					throw new Error(err)
				}
				fs.close()
			})		
	}

	public async createXml(num: number): Promise<void> {

		for (let i = 1; i <= num; i ++) {
			const xml = xmlbuilder.create('СообщПринМерыКО', {encoding: 'UTF-8'})
			.ele('СлужЧасть')
				.ele('ВерсияФормата', '2.0').up()
				.ele('ВерсПрог', 'ARMFM 3.1.8').up()
				.ele('ИДКорр', 2000017575).up()
				.ele('ТипИнф', `3`).up()
				.ele('ДатаСообщения', FunctionGenerator.getFullDate()).up()
				.ele('УполнСотрудн', 'TecтСотр').up()
				.ele('ФИОУполнСотрудн')
					.ele('Фам', 'ТестоваяФамилия').up()
					.ele('Имя', 'ТестовоеИмя').up()
					.ele('Отч', 'ТестовоеОтчество').up().up()
				.ele('ТелУполнСотрудн', '(000)00000000').up()
				.ele('ЭлектроннаяПочта', '0sdaas@mail.ccc').up().up()
			.ele('ИнформЧасть')
				.ele('ИнфБанк')
					.ele('РегНомКО', '3349').up()
					.ele('БИККО', '044525111').up()
					.ele('ОКАТОКО', '45').up().up()
				.ele('СведКО')
					.ele('ПризнакПредставСвед', '0').up()
					.ele('Меры')
						.ele('НомерЗаписи', `2022_3349_0000_03_000000${FunctionGenerator.genUniqueNumber(i)}`).up()
						.ele('ТипЗаписи', '1').up()
						.ele('МераОснование')
							.ele('КодОснования', '1').up()
							.ele('КодЮЛФЛ', '53552').up().up()
						.ele('ДатаБлок', FunctionGenerator.getFullDate()).up()
						.ele('ВремяБлок', '12:12:12 (МСК+00:00)').up()
						.ele('ВидСредств', '6').up()
						.ele('НомерСчетСейф', '0').up()
						.ele('СумРуб', '750000.00').up()
			.end({pretty: true})

			this.writeFile(xml, i)
		}

	}
}