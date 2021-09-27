/**
 * Author:    Leo Yamasaki
 * Created:   09.27.2021
 *
 * License: Public Domain
 **/
function sortUserName() {
  var userName = window.prompt("Please enter your name");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted
}

document.write.ln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");
