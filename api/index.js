import config from '../utils/config.js'
export const jobList = () => {
	return new Promise(resolve => {
		uni.request({
		    url: config.baseUrl + 'jianzhi/list.json?t='+ Date.now(),
		    success: (res) => {
				if (res.statusCode === 200) {
					resolve(res?.data || [])
				}
				else {
					uni.showToast({
						title: '网络错误',
						duration: 2000
					})
				}
		    }
		})
	})
}