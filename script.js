var Status = document.querySelector('h5');
var addFriend = document.querySelector('#add');
var removeFriend = document.querySelector('#remove');

addFriend.addEventListener("click", function () {
  Status.innerHTML = 'Friends!';
  Status.style.color = 'green';
})

removeFriend.addEventListener("click", function () {
  Status.innerHTML = 'Stranger!';
  Status.style.color = 'red';
})