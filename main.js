// check input empty
function checkEmpty(input) {
  [...input].forEach((i) => {
    if (i.value === "") {
      alert("Bạn chưa nhập đủ dữ liệu !");
      return false;
    }
  });
}

// bài 1
var number1 = document.querySelector("#b1 #number1");
var number2 = document.querySelector("#b1 #number2");
var number3 = document.querySelector("#b1 #number3");
var resultB1 = document.querySelector("#b1 .result-bt1 span");

function sortAscendingNumber() {
  checkEmpty([number1, number2, number3]);
  var num1 = +number1.value;
  var num2 = +number2.value;
  var num3 = +number3.value;
  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
      resultB1.innerHTML = `${num3}, ${num2}, ${num1}`;
    } else {
      resultB1.innerHTML = `${num2}, ${num3}, ${num1}`;
    }
  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      resultB1.innerHTML = `${num3}, ${num1}, ${num2}`;
    } else {
      resultB1.innerHTML = `${num1}, ${num3}, ${num2}`;
    }
  } else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
      resultB1.innerHTML = `${num2}, ${num1}, ${num3}`;
    } else {
      resultB1.innerHTML = `${num1}, ${num2}, ${num3}`;
    }
  }
}

// bài 2

var chooseMember = document.getElementById("chooseMember");
var resultB2 = document.querySelector("#b2 .result-bt2 span");

function sayHelloToMember() {
  if (chooseMember.value === "default") {
    resultB2.innerHTML = `Bạn là ai, mình không biết, bạn đi ra điii!`;
  } else {
    resultB2.innerHTML = `Xin chào ${chooseMember.value}!`;
  }
}

// bài 3

var num1 = document.querySelector("#b3 #num1");
var num2 = document.querySelector("#b3 #num2");
var num3 = document.querySelector("#b3 #num3");
var resultB3 = document.querySelector("#b3 .result-bt3 span");

function countNumber() {
  checkEmpty([num1, num2, num3]);
  var oddNumber = 3;
  var evenNumber = 0;
  if (num1.value % 2 === 0) {
    evenNumber++;
    oddNumber--;
    if (num2.value % 2 === 0) {
      evenNumber++;
      oddNumber--;
      if (num3.value % 2 === 0) {
        evenNumber++;
        oddNumber--;
      }
    }
    resultB3.innerHTML = `Có ${oddNumber} số lẻ, ${evenNumber} số chẵn`;
  } else {
    resultB3.innerHTML = `Có ${oddNumber} số lẻ, ${evenNumber} số chẵn`;
  }
}

// bài 4

var length1 = document.querySelector("#b4 #length1");
var length2 = document.querySelector("#b4 #length2");
var length3 = document.querySelector("#b4 #length3");

var resultB4 = document.querySelector("#b4 .result-bt4 span");
function identifyTriangle() {
  checkEmpty([length1, length2, length3]);
  var l1 = +length1.value;
  var l2 = +length2.value;
  var l3 = +length3.value;
  if ((l1 === l2) === l3) {
    resultB4.textContent = "Đây là tam giác đều";
  } else if (
    (l1 === l2 && l1 !== l3) ||
    (l1 === l3 && l2 !== l3) ||
    (l2 === l3 && l1 !== l2)
  ) {
    resultB4.textContent = "Đây là tam giác cân";
  } else if (
    Math.sqrt(l1) + Math.sqrt(l2) === l3 ||
    Math.sqrt(l1) + Math.sqrt(l3) === l2 ||
    Math.sqrt(l2) + Math.sqrt(l3) === l1
  ) {
    resultB4.textContent = "Đây là tam giác vuông";
  } else {
    resultB4.textContent = "Đây là tam giác khác";
  }
}

// bài 5

var date = document.querySelector("#b5 #day");

function splitValue() {
  var value = date.value;
  var arraySplitted = value.split("-");
  return arraySplitted;
}

function previousDays(getData) {
  checkEmpty([date]);
  var datePicked = getData();
  var days = +datePicked[2];
  var months = +datePicked[1];
  var years = +datePicked[0];
  console.log(typeof days, months, years);
}
