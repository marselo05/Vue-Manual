let DirectiveHtml = {
	template: `<div>
					<h1 v-text="title"></h1>
					<p v-html="texto"></p>
				</div>`,
	data() {
		return {
			title: "Directivas v-html",
			texto: "<b>Hola desde directivas html</b>",
		}
	},
}