Vue.component('computed-properties', 
{
	template:`
		<div>
			<h1>Computed Properties</h1>
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
		fullName() {
			return `${ this.user.name } ${ this.user.lastname}`
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