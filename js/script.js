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
      
  document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let todo = document.querySelector("input[name='add'] ").value;
    // ELements
    // input
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "status");
    input.setAttribute("id", "status");
    // span
    let span = document.createElement("span");
    let content = document.createTextNode(todo);
    span.appendChild(content);
    // image
    let img = document.createElement("img");
    img.setAttribute("src", "/images/star.png");
    img.setAttribute("alt", "A star icon");
    // paragraph
    let para = document.createElement("p");
    para.appendChild(input);
    para.appendChild(span);
    para.appendChild(img);
    
    let firstTodo = document.querySelector("#lists p");
    if(firstTodo === null){
      document.getElementById("lists").appendChild(para);
    }else {
      document.getElementById("lists").insertBefore(para, firstTodo);
    }
    document.querySelector("input[name='add'] ").value = "";
  } )
})  