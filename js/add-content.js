'use strict';

var age = prompt('please enter your age');
var name = prompt('Please enter your name');

var message;



if (age >= 18 ) {
  message = 'Welcome to pharmacy website';

} else {
  message = 'Please consult your parents';
}

document.write('<h2>' + message +' Mr ' + name +'</h2>');

