var fortuneCookies= ["valor a", "valor b", "valor c", "valor d"];
exports.getFortune = function (){
	var idx = Math.floor (Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];
};
