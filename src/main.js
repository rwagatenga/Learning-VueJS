import Vue from 'vue'
import App from './App.vue'

Vue.directive('custom', {
	bind(el, binding, vnode) {
		el.style.backgroundColor = "green"
		el.style.backgroundColor = binding.value
		if (binding.arg == 'background') {
			el.style.backgroundColor = "blue"
		}
		var delay = 0
		if (binding.modifiers['delayed']) {
			delay = 3000;
		}
		setTimeout(() => {
			el.style.backgroundColor = binding.value
		}, delay);
	}
})
new Vue({
	el: '#app',
	render: h => h(App)
})
