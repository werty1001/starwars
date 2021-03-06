
import Vue from 'vue'
import Vuex from 'vuex'

import persons from './modules/persons'
import films from './modules/films'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		persons, films,
	}
})