let DirectiveIf = {
	template: `<div>
					<br>
					<h1 v-text="title"></h1>
					<p v-if="mostrar" v-html="texto"></p>
					<h1>Uso de v-if / v-else-if / v-else </h1>
					<p v-if="user.permission">El usuario tiene permiso.</p>
					<p v-else>El usuario NO tiene permiso.</p>
					<p v-if="user.permission && user.vip">El usuario tiene permiso y es VIP.</p>
					<p v-else-if="user.permission">El usuario tiene permiso.</p>
					<p v-else-if="user.vip">El usuario es VIP.</p>
					<p v-else>El usuario NO tiene permiso y no es VIP.</p>
				</div>`,
	data() {
		return {
			title: "Directivas v-if",
			texto: "<b>Hola desde directivas v-if</b>",
			mostrar: true,
			user: {
				permission: false,
				vip: true
			}
		}
	},
}