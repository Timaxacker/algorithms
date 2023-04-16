describe("pow", function() {

    it("возводит в степень n", function() {
        assert.equal(pow(2, 7), 128);
        assert.equal(pow(69, 0), 1);
        assert.equal(pow(2, 10), 1024);
        assert.equal(pow(5, 5), 3125);
    });

});