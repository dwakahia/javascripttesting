const mathOperations = require('../public/assets/javascript/index');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        // arrange and act
        var result = mathOperations.sum(1,2)

        // assert
        expect(result).toBe(3);
    });

    test("subtracting 2 from 10 should return 8", () => {
        // arrange and act
        var result = mathOperations.diff(10,2)

        // assert
        expect(result).toBe(8);
    });

    test("multiplying 2 and 8 should return 16", () => {
        // arrange and act
        var result = mathOperations.product(2,8)

        // assert
        expect(result).toBe(16);
    });

    test("testing age if age is past 18", () => {
       return mathOperations.testPromise(19).then(data => expect(data).toBe('You are an adult'));
    });

    test("testing age if age is below 18", () => {
        return mathOperations.testPromise(15).catch(error => expect(error).toBe('not yet'));
    });
})

