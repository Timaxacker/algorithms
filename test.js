describe("pow", function() {

    it("возводит в степень n", function() {
        assert.equal(pow(2, 7), 128);
        assert.equal(pow(69, 0), 1);
        assert.equal(pow(2, 10), 1024);
        assert.equal(pow(5, 5), 3125);
    });

});


describe("fib", function() {

    it("n-е число Фибаначи", function() {
        assert.equal(fib(4), 3);
        assert.equal(fib(7), 13);
        assert.equal(fib(77), 5527939700884757);
    });

});