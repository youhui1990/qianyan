//获取当前时间并格式化
function getTime(){
	let time = new Date
	let year = time.getFullYear()
	let month = time.getMonth()+1
	let day = time.getDate()
	let hours = time.getHours()
	let mm = time.getMinutes()
	let ss = time.getSeconds()
	var weekday = time.getDay();
	var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	var week = weeks[weekday];
	let ym = year+'-'+month	
	if(mm<10){
		mm="0"+mm
	}
	if(ss<10){
		ss="0"+ss
	}
	let hm = hours+c+mm+c+ss
	 return {year,month,day,hours,mm,ss,ym,hm,week}
}
export default getTime
