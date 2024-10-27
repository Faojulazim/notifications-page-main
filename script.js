const markasRead = document.querySelector("#markasRead");
const spanRed = document.querySelectorAll("#span-red");
const bgChange = document.querySelectorAll("#bgChange");
const notificationCount = document.querySelector("#notificationCount");
markasRead.addEventListener("click", (e) => {
  e.preventDefault();
  spanRed.forEach((value) => {
    value.classList.add("hidden");
    notificationCount.textContent = 0;
    bgChange.forEach((bgVal) => {
      bgVal.classList.remove("bg-Verylightgrayishblue");
    });
  });
});
