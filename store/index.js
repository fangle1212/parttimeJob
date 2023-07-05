import Vue from 'vue'
import Vuex from 'vuex'
import defaultConfig from '@/utils/config.js'
import {
	getConfig,
	getJobList
} from '@/api/index.js'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		config: {},
		jobList: [],
		timesConfig: {}
	},
	mutations: {
		setConfig(state, config = {}) {
			state.config = {
				...defaultConfig,
				...config
			}
		},
		setJobList(state, list = []) {
			state.jobList = list
		}
	},
	actions: {
		getConfig({
			commit
		}) {
			return new Promise(async (resolve) => {
				const config = await getConfig()
				commit('setConfig', config)
				resolve()
			})
		},
		async getJobList({
			commit
		}) {
			return new Promise(async (resolve) => {
				const data = await getJobList()
				commit('setJobList', data)
				resolve()
			})
		}
	}
})

export default store