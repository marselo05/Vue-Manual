let DirectiveModel = {
	template: `<div>
				<h1 v-text="title"></h1>
				<p v-html="message"></p>
				<input type="text" v-model="inputText">

				<h2>Check Box</h2>
				<input type="checkbox" v-model="checked">

				<h2>Peliculas</h2>
				<label v-for="(movie, key) in movies" :key="key" class="label">
					{{ movie }}
					<input :value="movie" type="checkbox" v-model="favoritesMovies">
				</label>

				<div v-show="favoritesMovies.length > 0">
					<h2>Peliculas favoritas</h2>
					<ul>
						<li v-for="(movie, key) in favoritesMovies" :key="key" v-text="movie"></li>
					</ul>
				</div>
			</div>`,
	data() {
		return {
			title: "Directivas v-model",
			message: "<b>Hola desde directivas v-model</b>",
			inputText: "Data de input",
			checked: true,
			favoritesMovies: [],
			movies: ['Buscando a nemo', 'Titanic', 'Toy story'],
		}
	},
}