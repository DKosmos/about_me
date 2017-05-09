'use strict';

var pets = prompt('Does David have any pets?');
pets = pets.toUpperCase();
var correctAnswers = 0

if (pets !== 'YES' && pets !== 'NO' && pets !== 'Y' && pets !== 'N'){
  pets = prompt('That\'s not a yes or no answer! Try again.');
  pets = pets.toUpperCase();
} else if (pets === 'NO' || pets === 'N'){
  alert('Actually, he does have a pet.');
} else {
  alert('You\'re right! He does have a pet.');
  ++correctAnswers;
}
console.log('Pets Guess: ', pets);
console.log('Correct Answers: ', correctAnswers);

var petType = prompt('Does David have a cat?');
petType = petType.toUpperCase();
if(petType !== 'YES' && petType !== 'Y' && petType !== 'NO' && petType !== 'N'){
  petType = prompt('Just answer yes or no, you\'re better than this.');
} else if (petType === 'YES' || petType === 'Y'){
  alert('Wrong, David has a dog.');
} else {
  alert('You\'re right! David has a dog, not a cat.');
  ++correctAnswers;
}
console.log('David has cat: ', petType);

switch (correctAnswers) {
  case 1:
    alert('You\'ve gotten 1 out of 2 correct so far, keep going!');
    break;
  case 2:
    alert('You\'re two for two. Keep it up!');
    break;
  default:
    alert('You haven\'t gotten any correct yet, but you aren\'t even half way done.');
}

var home = prompt('Does David walk to class each day?');
home = home.toUpperCase();

if (home === 'YES' || home === 'Y'){
  alert('Right you are, but he only lives two blocks away so it\'s not that impressive.');
  ++correctAnswers;
} else {
  alert('Actually he does walk to class, but he only lives two blocks away.');
}
console.log('Walks to class: ', home);

var lunch = prompt('Does David walk his dog during his lunch hour?');
lunch = lunch.toUpperCase();

if (lunch === 'YES' || lunch === 'Y'){
  alert('Well he usually does. Sometime his dog goes to daycare, but not everyday.');
  ++correctAnswers;
} else {
  alert('He actually walks his dog most days during the lunch hour. Occasionally his dog goes to daycare for the whole day.');
}
console.log('Walks dog at lunch: ', lunch);

var work = prompt('Is David still working while he takes Code 201?');
work = work.toUpperCase();

if (work === 'YES' || work === 'Y'){
  alert('There\'s no way David could work while taking classes from 9am to 6pm.');
} else {
  alert('You\'re right, he took the month off from work to learn code!');
  ++correctAnswers;
}
console.log('David working now: ', work);

alert('In the end, you got ' + correctAnswers + ' out of 5 correct. But how were you supposed to know any of this?');
