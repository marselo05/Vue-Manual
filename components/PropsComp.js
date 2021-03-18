Vue.component('props-comp', {
	template: `
		<div class="container">
			<h1>Peliculas Props</h1>
			<div class="row">
				<div class="col-12 col-md-6 col-lg-4" v-for="(movie, key) in movies" 
					:key="key">

					<MovieComp :ref="'movie-'+movie.id" 
						:id="movie.id" 
						:title="movie.title" 
						:synopsis="movie.synopsis"
						:cover="movie.cover" 
						:like="movie.like" 
						@toggleLike="onToggleLike" 
					/>

				</div>
			</div>
			<!--<MovieFav v-if="showFav" @hideFav="onHideFave" />-->

			<MovieFav ref="movieFav" :show.sync="showFav" />
		</div>
	`,
	data() {
		return {
			movies: [
			    {
			        id: 1,
			        title: 'Titanic',
			        synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
			        cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
			        like: false
			    },
			    {
			        id: 2,
			        title: 'El Rey León',
			        synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
			        cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
			        like: false
			    },
			    {
			        id: 3,
			        title: 'Toy Story',
			        cover: 'https://source.unsplash.com/category/nature/300x400',
			        like: false
			    }
			],
			showFav: false
		}
	},
	components: {
		MovieComp,
		MovieFav
	},
	methods: {
		onToggleLike(data) 
		{
			let movieLike 		= this.movies.find(movie => movie.id == data.id);
				movieLike.like 	= data.like;
				// this.showFav    = data.like;
			// if(!data.like) {
			// 	return
			// }
			// alert(`${movieLike.title} agregada a favoritos`)
			// setTimeout(() => {
			// 	this.showFav = false;
			// }, 1000)			
		},
		seyHello() {
			alert("Hello!")
		}
		// onHideFave(show) {
		// 	this.showFav = show;
		// }
	},
	mounted() {
		console.log(this.$refs.movieFav.message)

		this.$refs.movieFav.message = "Hola desde le padre";
		this.$refs.movieFav.showMessage();
	}
})
// :like.sync="movie.like" 
// @toggleLike="onToggleLike" 