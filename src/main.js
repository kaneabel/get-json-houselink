import Vue from 'vue'
import App from './App.vue'
import TreeView from "vue-json-tree-view"
import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);
Vue.use(TreeView);

new Vue({
  el: '#app',
  render: h => h(App)
})
