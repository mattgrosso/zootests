(function() {
  'use strict';

  var assert = chai.assert;

  suite('zoo animals', function () {

    setup(function () {
      $('.animals').empty();
    });

    test('ensure that zoo.listAnimals is adding items to the ul', function (doneCallback) {
      assert.strictEqual( $('.animals li').length, 0 , "there are no items in the list to start");
      window.zoo.listAnimals('tiger', function testCallback() {

        var assertError;

        try {
          assert.isAbove( $('.animals li').length, 0, 'items were added to the ul' );
          assert.strictEqual( $('.animals li').length , 2, 'there are two tigers');
        } catch(err){
            assertError = err;
          }

        doneCallback(assertError);
      });
    });

    test('checking case where no value is given to zoo.listAnimals', function (doneCallback) {
      assert.strictEqual( $('.animals li').length, 0 , "there are no items in the list to start");
      window.zoo.listAnimals('',function testCallback() {

        var assertError;

        try{
          assert.strictEqual( $('.animals li').length, 7, 'There are no items in the list');
        } catch (err) {
          assertError = err;
        }

        doneCallback(assertError);

      });
    });

    test('zoo.countAnimalsByType adds animals to object', function (doneCallback) {
      assert.strictEqual( $('.animals li').length, 0 , "There are no items in the list to start");
      window.zoo.countAnimalsByType(function testCallback(data) {

        var assertError;

        try {
          assert.strictEqual( data.otter, 2, 'There are 2 otters');
          assert.strictEqual( data.elephant, undefined, 'There are no elephants');
          assert.strictEqual( Object.keys(data).length, 5, 'There are 5 species');
        } catch (err) {
          assertError = err;
        }

        doneCallback(assertError);

      });
    }

    );
});


})();
