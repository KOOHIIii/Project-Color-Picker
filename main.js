// command for click btn and action
document.getElementById("selectBtn").addEventListener("click", function () {
  // decare varible
  const valueColor = document.getElementById("colorPicker").value;

  document.getElementById("outputBox").innerHTML =
    "<h5>" + valueColor + "</h5>";
  document.getElementById("body").style.backgroundColor = valueColor;
  let blackColor = "#000000";
  if (valueColor === blackColor) {
    document.getElementById("titleName").style.color = "white";
  }
  document.getElementById("titleName").style.color = "pink";
  console.log(typeof valueColor);
});
