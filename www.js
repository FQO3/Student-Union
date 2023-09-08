const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.use(function (req, res, next) {
	if (!checkPC(req)) {
		if (req.cookies.vis != '1') {
			res.cookie('vis','1');
			res.redirect(302, '/notpc.html');
		}
	}
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	var Msecond = date.getMilliseconds();
	console.log(year + 'y ' + month + 'm ' + day + 'd ' + hour + 'h ' + minute + 'm ' + second + 's ' + Msecond + '’', '  ', req.headers['x-forwarded-for'], '  ', req.ip, req.url, '  ', req.headers['sec-ch-ua-platform'], '  ');
	next();
});
app.get('/notpc.html', function (req, res) {
	res.sendFile(__dirname + "/client/" + "notpc.html");
})
// 监听 / 路径的 get 请求
app.get('/', function (req, res) {
	res.sendFile(__dirname + "/client/" + "index.html");
})

app.use(express.static('client/'));

const server = app.listen(2398, function () {
	console.log("服务器已启动, 监听2398端口,http://www.cyxsh.top:2398");
})
function checkPC(req){
    // var agentstr = navigator.userAgent.toLowerCase();
    var agentstr = req.headers['user-agent'].toLowerCase();  // nodejs
	var agentreg = /(iphone|ipod|ipad|android|symbianos|windows phone|playbook|mobile)/;
	var agentph = agentstr.match(agentreg);
	if(agentph){
		return false;
	}else{
		return true;
	}
}