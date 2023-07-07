import config from '@/utils/config.js'
import store from '@/store/index.js'
const baseUrl = config.baseUrl
const envUrl = baseUrl + 'env.json'

export const getEnv = () => {
	// return new Promise(resolve => {
	// 	uni.request({
	// 		url: `${baseUrl}env.json?t=${Date.now()}`,
	// 		success(res) {
	// 			let version = res?.data.version
	// 			let appVersion = getApp()?.globalData.version
	// 			appVersion = Number(appVersion.toString().replace('v', ''))
	// 			version = Number(version.toString().replace('v', ''))
	// 			const env =  appVersion <= version ? 'online' : 'audit'
	// 			resolve(env)
	// 		}
	// 	})
	// })
	return 'online'
}

export const getConfig = async () => {
	const env = await getEnv()
	return new Promise(resolve => {
		uni.request({
			url: `${baseUrl}${env}/config.json?t=${Date.now()}`,
			success(res) {
				resolve({
					...res.data,
					env
				})
			}
		})
	})
}

export const getJobList = async (fileName = 'list') => {
	let env = env = await getEnv()
	return new Promise(resolve => {
		uni.request({
			url: `${baseUrl}${env}/${fileName}.json?t=${Date.now()}`,
			success(res) {
				// const data = res?.data || []
				// const list = data
				// res.data = list
				resolve(res?.data || [])
			}
		})
	})

}

export const getApi = async (url, type = 'video') => {
	return new Promise(resolve => {
		uni.request({
			method: 'POST',
			url: `https://baobeizhiku.com/api.php`,
			data: {
				url,
				type
			},
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			success(res) {
				console.log(res)
				if (res.statusCode === 200 && res.data?.code === 200) {
					resolve(res.data.data)
				}
			}
		})
	})
}