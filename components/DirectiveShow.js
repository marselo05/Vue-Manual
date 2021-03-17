let DirectiveShow = {
	template: `<div>
					<h1 v-text="title"></h1>
					<p v-show="mostrar" v-html="texto"></p>
					<p v-show="user.permission">El usuario tiene permiso.</p>
					<p v-show="!user.permission">El usuario NO tiene permiso.</p>
				</div>`,
	data() {
		return {
			title: "Directivas v-show",
			texto: "<b>Hola desde directivas v-show</b>",
			mostrar: true,
			user: {
				permission: false,
			}
		}
	},
}