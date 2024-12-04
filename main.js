var clickMe = {
    whatName() {
        var name = prompt("Hello!  What's your name?", "");
        return name;
    },
    click1() {
        document.querySelector(".input").style.opacity = "1";
        document.querySelector(".footer .show").style.display = "none";
        document.querySelector(".footer .color-text").style.color = "#f9ee21";
        document.querySelector(".hero-section .time .date-time").style.color = "#004cb4";
        var hi = document.querySelector(".hero-section .time .hi");
        hi.textContent = "HELLO " + clickMe.whatName() + " DEAR!" + 
        " ";
        var announcement = document.createElement("SPAN");
        hi.appendChild(announcement);
        announcement.style.color = "red";
        announcement.textContent = incident;
        document.querySelector("footer .footer").style.height = "30px";
        document.querySelector("footer .footer").style.padding = "10px";
        document.querySelector("footer .footer").style.paddingBottom = "30px";
        document.querySelector("footer .footer .show").style.fontSize =
        "1rem";
        document.querySelector(".hero-section .title").style.fontSize =
        "5rem";
        input.focus();
    },
};
var list = document.querySelector(".input .list .list-task");
var input = document.querySelector(".input .task");

function addTask() {
    var value = input.value.trim();
    if (value.length == 0) {
        alert("Pleas enter the task!");
        input.value = "";
        input.focus();
        return;
    } else if (value.length < 3) {
        alert("pleas write 3 character at least!");
        input.value = "";
        input.focus();
        return;
    }
    var li = document.createElement("LI");
    var divList = document.createElement("DIV");
    var pList = document.createElement("P");
    var btnRemove = document.createElement("BUTTON");
    var btnDone = document.createElement("BUTTON");
    var btnEdit = document.createElement("BUTTON");
    pList.textContent = value;
    btnRemove.textContent = "Delete ";
    btnDone.textContent = "Done! ";
    btnEdit.textContent = "Edit ";
    list.appendChild(li);
    li.appendChild(divList);
    divList.appendChild(pList);
    li.appendChild(btnRemove);
    li.appendChild(btnDone);
    li.appendChild(btnEdit);
    li.classList.add("style-list");
    pList.classList.add("ellipsis");
    btnRemove.classList.add("btn", "delete");
    btnDone.classList.add("btn", "done");
    btnEdit.classList.add("btn", "edit");

    btnRemove.addEventListener("click", function(e) {
        e.target.parentElement.remove();
    });
    btnDone.addEventListener("click", function(e) {
        e.target.parentElement.style.textDecoration = "line-through";
    });
    btnEdit.addEventListener("click", function(e) {
        var Edit = prompt("Edit your TEXT!");
        e.target.parentElement.textContent = Edit;
    });
    input.value = "";
    input.focus();
};
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      addTask();
    }
});
function Clock() {
    var cTime = new Date();
    var Hours = cTime.getHours();
    return Hours;
};
var time = Clock();
var incident = "";
if (time > 19 && time < 24) {
    incident = "Good Night";
} else if (time >= 0 && time <= 4) {
    incident = "Good Night";
} else if (time > 4 && time <= 12) {
    incident = "Good Morning";
} else if (time > 12 && time <= 16) {
    incident = "Good Afternoon";
} else if (time > 16 && time <= 19) {
    incident = "Good Evening";
}

function DataElement() {
    var now = new Date();
    var dateLocal = now.toLocaleDateString();
    console.log(dateLocal);
    return dateLocal;
}
var dateNow = document.querySelector(
".hero-section .time .date-time .date"
);
dateNow.textContent = DataElement();

function timeElement() {
    var now = new Date();
    var timeLocal = now.toLocaleTimeString();
    console.log(timeLocal);
    return timeLocal;
}
var timeNow = document.querySelector(
".hero-section .time .date-time  .time"
);
timeNow.textContent = timeElement();