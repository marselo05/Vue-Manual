Vue.component('vue-directives', {
	template: `<div>
					<DirectiveModel/>
					<DirectiveOnce/>
					<DirectiveSlot/>
					<DirectiveOn/>
					<h1 v-text="title"></h1>
					<p v-text="texto"></p>
					<a v-bind:href="link.href" :title="link.title" v-text="link.text"></a>
					<directive-html></directive-html>
					<DirectiveShow/>
					<DirectiveIf/>
					<DirectiveFor/>
				</div>`,
	data() {
		return {
			title: "Directivas de Vuejs",
			texto: "Prueba de texto v-text",
			link: {
				text:  "VueJs Home",
				href:  "https://vuejs.org/",
				title: "Documentacion Vue"
			}
		}
	},
	components: {
		'directive-html': DirectiveHtml,
		DirectiveShow,
		DirectiveIf,
		DirectiveFor,
		DirectiveOn,
		DirectiveModel,
		DirectiveSlot,
		DirectiveOnce
	}
});