let DirectiveFor = {
	template: `<div>
					<br>
					<h1 v-text="title"></h1>
					<p v-html="message"></p>
					<h3><b>Lista de un array</b></h3>
					<ul>
						<li v-for="(color, index) in list" :key="index" v-text="color"></li>
					</ul>
					<h3><b>Lista de un Objeto</b></h3>
					<ul>
						<li v-for="(item, key, index) in object_list" :key="index">
							{{key}}: {{item}}
						</li>
					</ul>
					<h3><b>Lista de un Objeto</b></h3>
					<ul>
						<li v-for="(item, index) in other_list" :key="index">
							Nombre: {{ item.name }}<br>
							Apellido: {{ item.last_name }}<br>
							Nick: {{ item.nick }}<br>
						</li>
					</ul>
				</div>`,
	data() {
		return {
			title: "Directivas v-For",
			message: "<b>Hola desde directivas v-for</b>",
			list: ['Rojo', 'Amarillo', 'Azul', 'Purpura', 'Rosa'],
			object_list: {
				name: "Marcelo",
				last_name: "Salar",
				nick: "MDS"
			},
			other_list: [
				{
					name: "Marcelo",
					last_name: "Salar",
					nick: "MDS"
				},
				{
					name: "Matias",
					last_name: "Oscar",
					nick: "MOS"
				}
			]
		}
	},
}