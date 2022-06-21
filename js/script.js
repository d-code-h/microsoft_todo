window.addEventListener("load", function(){
  function animate(e){
    if(e.target.parentElement.parentElement.id === "lists"){
      if(e.target.hasAttribute("name")){
        e.target.checked = true;
      let d = e.target.parentElement;
      let done = document.querySelector("#completed-content p");
        if(done === null){
          document.getElementById("completed-content").appendChild(d);
        }else {
          document.getElementById("completed-content").insertBefore(d, done);
        }
    let counter = document.getElementById("counter").innerHTML;
    document.getElementById("counter").innerHTML = Number(counter) + 1;
      }else if(e.target.classList[0] === "fa-regular"){
        e.target.setAttribute("class", "fa-solid fa-star");
        let d = e.target.parentElement;
        let initial = document.querySelector("#lists p");
        if(initial !== null){
          document.getElementById("lists").insertBefore(d, initial);
        }
      }else if(e.target.classList[0] === "fa-solid"){
        e.target.setAttribute("class", "fa-regular fa-star");
        let d = e.target.parentElement;
        let initial = document.querySelectorAll("#lists i.fa-regular")[1].parentElement;
        if(initial !== null){
          document.getElementById("lists").insertBefore(d, initial);
        }
        }
    }else{
      if(e.target.hasAttribute("name")){
      e.target.checked = false;
      let d = e.target.parentElement;
      document.getElementById("lists").appendChild(d);
    let counter = document.getElementById("counter").innerHTML;
    document.getElementById("counter").innerHTML = Number(counter) - 1;
      }else if(e.target.classList[0] === "fa-regular"){
        e.target.setAttribute("class", "fa-solid fa-star");
        let d = e.target.parentElement;
        let initial = document.querySelector("#completed-content p");
        if(initial !== null){
          document.getElementById("completed-content").insertBefore(d, initial);
        }
      }else if(e.target.classList[0] === "fa-solid"){
        e.target.setAttribute("class", "fa-regular fa-star");
        let d = e.target.parentElement;
        let initial = document.querySelectorAll("#completed-content i.fa-regular")[1].parentElement;
        if(initial !== null){
          document.getElementById("completed-content").insertBefore(d, initial);
        }
        }
    }
  }
  
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
    let todo = document.querySelector("input[name='add']").value.trim();
    if (todo !== "") {
    // ELements
    // input
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", todo);
    input.setAttribute("id", "status");
    // span
    let span = document.createElement("span");
    let content = document.createTextNode(todo);
    span.appendChild(content);
    
    // image
    let ico = document.createElement("i");
    ico.setAttribute("class", "fa-regular fa-star");

    // paragraph
    let para = document.createElement("p");
    para.appendChild(input);
    para.appendChild(span);
    para.appendChild(ico);
    
    let firstTodo = document.querySelector("#lists p");
    if(firstTodo === null){
      document.getElementById("lists").appendChild(para);
    }else {
      document.getElementById("lists").insertBefore(para, firstTodo);
    }
    document.querySelector("input[name='add'] ").value = "";
  }
    })
    
  document.querySelector("#lists").addEventListener("click", function(e){
    animate(e);
  });
  
  document.querySelector("#completed-content").addEventListener("click", function(e){
      animate(e);
  })
  
  document.querySelector('input[name="add"]').addEventListener("keyup", function(){
    let empty = this.value.trim();
    if(empty === ""){
      document.getElementById("btn").style.backgroundColor = "#ccc";
    }else{
      document.getElementById("btn").style.backgroundColor = "#0060df";
    }
  });
});