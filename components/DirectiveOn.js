let DirectiveOn = {
	template: `<header class="section" style="background: #cdcdcd">
					<h1 v-text="title"></h1>
					<p v-text="message"></p>
					<button @click.stop="comprarEntradas">Hace click</button>
					<input type="text" @keydown="decirHola"/>
					Disoponibles <span v-text="entradas"></span>
					<div>
						<h1>Modificando vista y modelo</h1>
						<input type="text" :value="textInput" @keyup="updateDataTextInput" >
					</div>
				</header>`,
	data() {
		return {
			title: "Directivas v-on",
			message: "Hola desde directivas v-on",
			welcome_text: "Bienvenido desde la data",
			pelicula: "Dora la exploradora",
			entradas: 5,
			textInput: "Valor pode defecto del input text"
		}
	},
	methods: {
		updateDataTextInput(event) {
			this.textInput =  event.target.value
		},
		decirHola: function() {
			alert(this.welcome_text)
		},
		comprarEntradas() {
			if (this.entradas>0) {
				this.entradas--;
				return alert(`Entradas para ${this.pelicula}`);
			}
			return alert("Ya no hay mas entradas");
		}
	} 
}