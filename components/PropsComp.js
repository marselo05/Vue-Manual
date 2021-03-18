Vue.component('props-comp', {
	template: `
		<div>
			<h1>Peliculas Props</h1>
			<MovieComp v-for="(movie, key) in movies" :key="key"
				:id="movie.id" 
				:title="movie.title" 
				:synopsis="movie.synopsis"
				:cover="movie.cover" 
				:like="movie.like" 
				@toggleLike="onToggleLike" 
			/>
			<!--<MovieFav v-if="showFav" @hideFav="onHideFave" />-->
			<MovieFav :show.sync="showFav" />
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
				this.showFav    = data.like;
			// if(!data.like) {
			// 	return
			// }
			// alert(`${movieLike.title} agregada a favoritos`)
			// setTimeout(() => {
			// 	this.showFav = false;
			// }, 1000)			
		},
		// onHideFave(show) {
		// 	this.showFav = show;
		// }
	}
})
// :like.sync="movie.like" 
// @toggleLike="onToggleLike" 