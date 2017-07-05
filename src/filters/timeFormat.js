
export const normalTime=(time)=>{
	if(time){
		var oDate=new Date();
		oDate.setTime(time);

		var y=oDate.getFullYear();
		var month=oDate.getMonth()+1;
		var d=oDate.getDate();

		var h=oDate.getHours();
		var m=oDate.getMinutes();
		var s=oDate.getSeconds();

		return y + '-' + month + '-' + d + ' ' + h + ':' + m + ':' + s;
	}
};