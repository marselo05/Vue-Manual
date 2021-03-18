let MovieComp = {
	template: `
		<div class="card" :class="{
			'movie-like': like
		}">
			<img :src="cover" class="card-img-top">
			<div class="card-body">
		    	<h2 class="card-title" v-text="title"></h2>
			    <p class="card-text" v-text="synopsis"></p>
				<button class="btn" :class="btnStatus" @click="toggleLike">
					<span  v-text="like ? 'Favorita' : 'Agregar a Favorita'"></span>
					<i class="fa-heart" :class="{
						'far': !like,
						'fas': like,
					}"></i>
				</button>
		  	</div>
		</div>
	`,
	props: 
	{
		id: {
			type: Number,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		synopsis: {
			type: String,
			default: "No posee synopsis"
		},
		cover: {
			type: String,
			required: true
		},
		like: {
			type: Boolean,
			requerid: true,
			default() {
				return false;
			}	    	
	    }
	},
	data() {
		return {
			className: {
				'btn-like': true,
				'btn-light': false,
				myclass: true
			},
		}
	},
	computed: {
		btnStatus() {
			return this.like ? 'btn-like' : 'btn-light';
		}
	},
	methods: {
		toggleLike() {
			// this.like = !this.like;
			// let data = {
			// 	id: 	this.id,
			// 	like: 	!this.like
			// }

			// if (!this.like) 
			// {
				let movie 				= this.$parent.movies.find( m => m.id == this.id);
					movie.like 			= !this.like;
				this.$parent.showFav 	= !this.like;
			// }
			// this.$emit('toggleLike', data);
			this.$parent.seyHello();
		}
	}
	
}
// <button @click="$emit('update:like', !like)" v-text="like ? 'Favorita' : 'Agregar a Favorita' "></button>