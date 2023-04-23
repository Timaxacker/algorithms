describe("pow", function() {

    it("возводит в степень n", function() {
        assert.equal(pow(1, 0), 1);
        assert.equal(pow(3, 2), 9);
        assert.equal(pow(12, 2), 144);
        assert.equal(pow(4, 3), 64);
    });

});


describe("fib", function() {

    it("числа Фибоначчи", function() {
        assert.equal(fib(4), 3);
        assert.equal(fib(7), 13);
        assert.equal(fib(77), 5527939700884757);
    });

});


describe("find", function() {

    it("имена из списка", function() {
        let array = ['Вадик', 'Владислав', 'Ялик']
        assert.equal(find('Вадик', array), 0);
        assert.equal(find('Владислав', array), 1);
        assert.equal(find('Ялик', array), 2);
    });

});


describe("prime_factors", function() {

    it("раскладывает число на простые множители", function() {
        assert.equal(prime_factors(10), '2 5');
        assert.equal(prime_factors(777), '3 7 37');
        assert.equal(prime_factors(69), '3 23');
    });

});


describe("quadratic_equation", function() {

    it("решает квадратные уравнения", function() {
        assert.equal(quadratic_equation(1, 2, -3), -3, 1);
        assert.equal(quadratic_equation(7, 7, 7), null, null);
        assert.equal(quadratic_equation(1, -6, 9), null, 3);
    });

});


describe("abs", function() {

    it("возвращает модуль числа", function() {
        assert.equal(abs(6), 6);
        assert.equal(abs(0), 0);
        assert.equal(abs(-6), 6);
    });

});