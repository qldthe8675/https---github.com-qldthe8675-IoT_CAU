// 1-11_SH, js

var user = {
  name: 'Seonghyeon',
  gender: 'male',
};

var changeName = function(user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

var user2 = changeName(user, 'Cho');

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다.'); 
console.log(user.name, user2.name); // Seonghyeon Cho
console.log(user === user2)};