import { MainExecuter } from './executer/main.executer'

export class App {
	
	async run() {
		const executer = new MainExecuter()
		const prompts = await executer.prompt()
		executer.pickBuild(prompts)
	}
}

const app = new App()
app.run()