import config from '@/utils/config.js'
const envUrl = config.baseUrl + 'env.json'

export const getEnv = () => {
	return new Promise(resolve => {
		uni.request({
			url: `${config.baseUrl}env.json?t=${Date.now()}`,
			success(res) {
				resolve(res?.data.env)
			}
		})
	})
}

export const getConfig = async () => {
	const env = await getEnv()
	return new Promise(resolve => {
		uni.request({
			url: `${config.baseUrl}${env}/config.json?t=${Date.now()}`,
			success(res) {
				resolve(res)
			}
		})
	})
}

export const getJobList = async () => {
	const env = await getEnv()
	return new Promise(resolve => {
		uni.request({
			url: `${config.baseUrl}${env}/list.json?t=${Date.now()}`,
			success(res) {
				const data = res?.data || []
				const list = data.map((item, index) => ({ ...item, id: (Number(index) + 1).toString() }))
				res.data = list
				resolve(res)
			}
		})
	})
}