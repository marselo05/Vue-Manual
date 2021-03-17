let MovieComp = {
	template: `
		<div>
			<img :src="cover">
			<h2 v-text="title"></h2>
			<p v-text="synopsis"></p>
			<button @click="toggleLike" v-text="like ? 'Favorita' : 'Agregar a Favorita' "></button>
			<hr>
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
	methods: {
		toggleLike() {
			// this.like = !this.like;
			let data = {
				id: 	this.id,
				like: 	!this.like
			}
			this.$emit('toggleLike', data);
		}
	}
	
}
// <button @click="$emit('update:like', !like)" v-text="like ? 'Favorita' : 'Agregar a Favorita' "></button>