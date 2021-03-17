Vue.component('computed-properties-get-set', 
{
	template:`
		<div>
			<h1>Computed Properties Get Set</h1>
			<p>{{ fullName }}</p>
			<p>{{ nombreCompleto() }}</p>
			<p>{{ userAge }}</p>
		</div>
	`,
	data() {
		return {
			user: {
				name: 'Marcelo',
				lastname: 'Salar',
				year: '1983'
			}
		}
	},
	computed: {
		fullName: {
			get() {
				return `${ this.user.name } ${ this.user.lastname}`
			},
			set(newValue) {
				console.log(newValue)
				let name = newValue.split(' ');

				this.user.name 		= name[0];
				this.user.lastname 	= name[1];
			}
		},
		userAge() {
			let date = new Date();
			let currentYear = date.getFullYear();

			return currentYear - Number(this.user.year);
		}
	},
	methods: {
		nombreCompleto() {
			return `${ this.user.name } ${ this.user.lastname}`	
		}
	}	
});