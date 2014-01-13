describe('TES module add function', function () {
    it('should return a function', function () {
        expect(TES.add(2) instanceof Function).toBeTruthy();
    });

    it('should return a total sum', function() {
        var sum = TES.add(2);

        expect(sum(2)).toEqual(4);
    });
});

describe('TES.userAgent module', function() {
    it('should return the a user agent string', function() {
        TES.userAgent.ua();
        expect(typeof TES.userAgent.ua()).toEqual('string');
    });

    it('should find browser name', function() {
        expect(TES.userAgent.deviceType('Safari')).toBeTruthy();
    });
});
