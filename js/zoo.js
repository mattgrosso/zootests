(function(ns) {
    'use strict';


//Thsi fn, after a delay of 250ms seems to create an array of animal objects.
//Each animal has two properties: a species and a name. It doesn't need a
//return because it is just running whatever function you give it and giving
//the array as the argument.
    function getAnimals(callback) {
        // Pretend this is an Ajax call!!
        setTimeout(function fakeAjax() {
            callback([
                { species: 'zebra', name: 'Jim' },
                { species: 'orangutan', name: 'Bill' },
                { species: 'otter', name: 'Hector' },
                { species: 'otter', name: 'Amy' },
                { species: 'bear', name: 'Sofia' },
                { species: 'tiger', name: 'Lucille' },
                { species: 'tiger', name: 'Octavius' }
            ]);
        }, 250);
    }



//This fn takes in a specific type of animal (tiger, etc.)
//First it runs getAnimals and it gives it a callback function.
//The callback fn takes the array from getAnimals and runs a forEach on it.
//For each element in that function it checks to see if their type matches
//the type given. If it does match it it adds a new li to the ul with the name
//of the animal. Otherwise, it does the same thing. I'm not sure of the intent.
//After all of that it runs any callbacks that were included in the arguments.
    ns.listAnimals = function listAnimals(type, callback) {
        getAnimals(function getAnimalsCallback(animals) {

            animals.forEach(function iterateOnAnimals(animal) {

                if (type && animal.species === type) {
                    $('.animals').append('<li>' + animal.name + '</li>');
                } else if (type === ''){
                    $('.animals').append('<li>' + animal.name + '</li>');
                }

            });

            callback(animals);
        });
    };

//This fn runs getAnimals and, on callback, creates a varible called 'count'
//which starts as an empty object. Then it runs a forEach loop over the array
//of animals and checks to see if that type of animal has been added to the
//arry yet. If it hasn't it starts the count at zero. And if it has already
//been added it increments the count of taht animal.


    ns.countAnimalsByType = function countAnimalsByType(callback) {
        getAnimals(function doAnimalCount(animals) {
            var count = {};

            animals.forEach(function countEachAnimal(animal) {
                if (!count[animal.species]) {
                    count[animal.species] = 1;
                } else {
                    count[animal.species]++;
                }
            });

            callback(count);
        });
    };


    window.zoo = ns;
})(window.zoo || {});
