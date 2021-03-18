let MovieFav = {
	template: `
		<div v-show="show" class="movieFav-wrapper">
			<div :id="'fav-'+_uid" class="movieFav"> </div>
		</div>
	`,
	props: {
		show: {
			type: Boolean,
			default() {
				return false
			}
		}
	},
	beforeCreate() {
		console.log('Esto es antes de que se cree');
	},
	created() {
		console.log('Ya creado');
	},
	beforeMount() {
		console.log('Antes de montarse');
	},
	mounted() {
		let vm = this;
		let $element = document.getElementById(`fav-${this._uid}`);
		
			$element.addEventListener('animationend', function() {
				// vm.$emit('hideFav', false);
				vm.$emit('update:show', false);
			});
		// console.log('Ya montado');
	},
	beforeUpdate() {

	},
	updated() {

	},
	beforeDestroy() {
		console.log('Esto es antes de destruirse');
	},
	destroyed() {
		console.log('Ya destruido');
	}
}