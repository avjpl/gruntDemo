TES.userAgent = (function(u, w) {

	u.ua = function() {
		return w.navigator.userAgent;
	};

	u.deviceType = function(str) {
		return (this.ua().indexOf(str) !== -1);
	};

	return u;
})(TES.userAgent || {}, window);
