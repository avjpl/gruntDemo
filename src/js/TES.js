var TES = (function(t) {
    
    t.add = function(a) {
        return function(b) {
            return a + b;
        };
    };

    return t;
})(TES || {});