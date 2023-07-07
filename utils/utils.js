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

export const getUrl = (str) => {
  // 使用正则表达式匹配
  const reg = /((?:https?:\/\/)?[\w/\-?=%.]+\.(?:douyin|pipix)\.com\S+)/i;
  const matches = str.match(reg);
  if (matches) {
    return matches[1];
  }
 
  // 或者使用字符串分隔
  const tokens = str.split(/[\s\n]/);
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.includes('douyin.com') || token.includes('pipix.com')) {
      const pos = token.indexOf('https');
      const url = pos >= 0 ? token.substr(pos) : '';
      return url;
    }
  }
 
  // 未能匹配到合法的URL，返回空值
  return null;
}
