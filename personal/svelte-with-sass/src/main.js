import App from './App.svelte';
// import Banner from '.banner.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;