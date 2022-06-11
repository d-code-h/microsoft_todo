document.getElementById("completed-header").addEventListener("click", function(){
  let content = document.getElementById("completed-content").style.display;
  if (content === "" || content === "none"){
    document.querySelector('i.fa-angle-right').setAttribute("class", "fa fa-angle-down");
    document.getElementById("completed-content").style.display = "block";
  } else{
    document.querySelector('i.fa-angle-down').setAttribute("class", "fa fa-angle-right")
    document.getElementById("completed-content").style.display = "none";
  }
});