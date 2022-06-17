function submit(){
  alert("Sent")
}

window.addEventListener("load", function(){
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

  document.querySelector("span .fa-plus").addEventListener("click", function(){
  document.getElementById("form").style.display = "block";
  this.style.display = "none";
})

  document.querySelector('input[name="add"]').addEventListener("blur", function(){
  document.querySelector("span  .fa-plus").style.display = "flex";
  document.getElementById("form").style.display = "none";
})

  window.addEventListener("resize", (e) => {
        console.log(e.target);
      });
})  