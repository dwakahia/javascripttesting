describe('String Calculator', function() {
    // 1
    beforeEach(function() {
      var fixture = `<div id="fixture">
      <input id="input-numbers" type="text">
        <input id="add-btn" type="button" value="Add">
        <div><span id="result" /></div>
    </div>`;
      document.body.insertAdjacentHTML(
        'afterbegin',
        fixture);
    });


    afterEach(function() {
      document.body.removeChild(document.getElementById('fixture'));
    });
    // 2
    beforeEach(function() {
      init();
    });
    // 3
    it('should return 0 for empty string', function() {
        document.getElementById('input-numbers').value = '';
        document.getElementById('add-btn').click();
        expect(document.getElementById('result').innerHTML).toBe('0');
      });

    it('should return 6 for 1,2,3', function() {
      document.getElementById('input-numbers').value = '1,2,3';
      document.getElementById('add-btn').click();
      expect(document.getElementById('result').innerHTML).toBe('6');
    });
  });

// describe('This custom matcher example ', function() {
//
//     //Skipping the entire describe  block
//     beforeEach(function() {
//
//         // We should add custom matched in beforeEach() function.
//         jasmine.addMatchers({
//             validateAge: function() {
//                 return {
//                     compare: function(actual,expected) {
//                         var result = {};
//                         result.pass = (actual >=13 && actual<=19);
//                         result.message ='sorry u are not a teen ';
//                         return result;
//                     }
//                 };
//             }
//         });
//     });
//
//     it('Lets see whether u are teen or not', function() {
//         var myAge = 14;
//         expect(myAge).validateAge();
//     });
//
//     it('Lets see whether u are teen or not ', function() {
//         var yourAge = 18;
//         expect(yourAge).validateAge();
//     });
// });


describe('Calculator', function(){
    var calculator;

    beforeEach(function(){
        calculator = new Calculator();
    })

    it('Should add two numbers', function(){
        var result = calculator.add(4,5);

        expect(result).toBe(9);
    })

    it('Should Subtract two numbers', function(){
        var result = calculator.subtract(10,5);

        expect(result).toBe(5);
    })

    it('Should Multiply two numbers', function(){
        var result = calculator.multiply(10,5);

        expect(result).toBe(50);
    })
})