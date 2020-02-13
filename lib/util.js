class Util {
  parseUri(str) {
  	let	o = {
  			strictMode: false,
  			key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
  			q:   {
  				name:   "queryKey",
  				parser: /(?:^|&)([^&=]*)=?([^&]*)/g
  			},
  			parser: {
  				strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
  				loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  			}
  		},
  		m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
  		uri = {},
  		i   = 14;

  	while (i--) uri[o.key[i]] = m[i] || "";

  	uri[o.q.name] = {};
  	uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
  		if ($1) uri[o.q.name][$1] = $2;
  	});

  	return uri;
  };

  getUrlParameter(url, param) {
  	param = param.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  	let regex = new RegExp("[\\?&]" + param + "=([^&#]*)"),
  	results = regex.exec(url);
  	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

export default new Util();
