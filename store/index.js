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
		jobList: []
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
				const res = await getConfig()
				commit('setConfig', res.data)
				resolve()
			})
		},
		async getJobList({
			commit
		}) {
			return new Promise(async (resolve) => {
				const res = await getJobList()
				commit('setJobList', res.data)
				resolve()
			})
		}
	}
})

export default store