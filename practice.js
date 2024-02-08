let log = console.log;

const add_button = document.getElementById("add");

add_button.addEventListener("click", () => {
  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let country = document.getElementById("country").value;
  let score = document.getElementById("score").value;

  if (first_name == "" || last_name == "" || country == "" || score == "") {
    alert("all fields need to be filled");
    return;
  }
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let arr = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let datetime = `${arr[month]} ${day},${year} ${hr}:${min}:${sec}`;

  let x = document.createElement("div");
  x.className = "wrapper3";

  let first = document.createElement("div");
  first.id = "first";
  let first_1 = document.createElement("div");
  first_1.id = "first_1";
  first_1.textContent = first_name + " " + last_name;
  let first_2 = document.createElement("div");
  first_2.id = "first_2";

  first_2.textContent = datetime;
  first.appendChild(first_1);
  first.appendChild(first_2);

  let second = document.createElement("div");
  second.id = "second";
  second.textContent = country;

  let third = document.createElement("div");
  third.id = "third";
  third.textContent = score;

  let fourth = document.createElement("div");
  fourth.id = "fourth";
  let fourth_1 = document.createElement("button");
  fourth_1.id = "delete";
  fourth_1.textContent = "delete";
  fourth_1.addEventListener("click", () => {
    var divToDelete = fourth_1.parentElement.parentElement;
    divToDelete.parentNode.removeChild(divToDelete);
  });
  let fourth_2 = document.createElement("button");
  fourth_2.id = "add_5";
  fourth_2.textContent = "+5";
  fourth_2.addEventListener("click", () => {
    var divtoadd = fourth_2.parentElement.parentElement;
    divtoadd.childNodes[2].textContent =
      Number(divtoadd.childNodes[2].textContent) + Number(5);
  });
  let fourth_3 = document.createElement("button");
  fourth_3.id = "sub_5";
  fourth_3.textContent = "-5";
  fourth_3.addEventListener("click", () => {
    var divtosub = fourth_3.parentElement.parentElement;
    divtosub.childNodes[2].textContent =
      Number(divtosub.childNodes[2].textContent) - Number(5);
  });
  fourth.appendChild(fourth_1);
  fourth.appendChild(fourth_2);
  fourth.appendChild(fourth_3);

  x.appendChild(first);
  x.appendChild(second);
  x.appendChild(third);
  x.appendChild(fourth);

  document.getElementById("wrapper2").appendChild(x);
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("country").value = "";
  document.getElementById("score").value = "";
});
