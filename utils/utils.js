export const timesAdd = () => {
	let times = uni.getStorageSync('times')
	times = times === undefined || times.length === 0 ? Number(timesConfig) : Number(times)
	const addTimes = times + 1
	if (addTimes <= 10) {
		uni.setStorageSync('times', addTimes)
	}
}

export const tomorrowTimestamp = () => {
	const now = Date.now();
	const today = new Date(now);
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const day = today.getDate();
	const tomorrow = new Date(year, month - 1, day + 1);
	const tomorrowYear = tomorrow.getFullYear();
	const tomorrowMonth = tomorrow.getMonth() + 1;
	const tomorrowDay = tomorrow.getDate();
	return +new Date(`${tomorrowYear}-${tomorrowMonth}-${tomorrowDay} 00:00:00`)
}