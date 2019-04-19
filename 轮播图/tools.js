var tools = {
	getStyle : function (obj, attr) {
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	},
	
	linearMove : function (obj, attr, end, time) {
		clearInterval(obj.timer);
		
		// 起点
		var start = parseInt(this.getStyle(obj, attr));
		// 总距离
		var distance= end - start;
		
		// 计算速度
		var steps = parseInt(time / 30);
		
		// 计算 px/步
		var speed = distance / steps ;
		obj.timer = setInterval(function () {
			start += speed;
			obj.style[attr] = start + "px";
			if(Math.abs(start - end) < Math.abs(speed)) {
				console.log(start , end);
				clearInterval(obj.timer);
				// 超出拉回
				obj.style[attr] = end + "px";
			}
		},30);
		
	}
}

