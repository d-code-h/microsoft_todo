let animate = (e) => {
  if(e.target.parentElement.parentElement.id === "lists-content"){
    if(e.target.hasAttribute("name")){
      e.target.checked = true;
    let d = e.target.parentElement;
    let done = document.querySelector("#completed-content p");
      if(done === null){
        document.getElementById("completed-content").appendChild(d);
      }else {
        document.getElementById("completed-content").insertBefore(d, done);
      }
  document.getElementById("co-counter").innerHTML = Number(document.getElementById("co-counter").innerHTML) + 1;
  document.getElementById("li-counter").innerHTML = Number(document.getElementById("li-counter").innerHTML) - 1;
    }else if(e.target.classList[0] === "fa-regular"){
      e.target.setAttribute("class", "fa-solid fa-star");
      let d = e.target.parentElement;
      let initial = document.querySelector("#lists-content p");
      if(initial !== null){
        document.getElementById("lists-content").insertBefore(d, initial);
      }
    }else if(e.target.classList[0] === "fa-solid"){
      e.target.setAttribute("class", "fa-regular fa-star");
      let d = e.target.parentElement;
      let initial = document.querySelectorAll("#lists-content i.fa-regular")[1].parentElement;
      if(initial !== null){
        document.getElementById("lists-content").insertBefore(d, initial);
      }
    }
  }else{
    if(e.target.hasAttribute("name")){
    e.target.checked = false;
    let d = e.target.parentElement;
    document.getElementById("lists-content").appendChild(d);

  document.getElementById("co-counter").innerHTML = Number(document.getElementById("co-counter").innerHTML) - 1;
  document.getElementById("li-counter").innerHTML = Number(document.getElementById("li-counter").innerHTML) + 1;
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
};

document.getElementById("completed-header").addEventListener("click", () => {
  let content = document.getElementById("completed-content").style.display;
  if (content === "" || content === "none"){
    document.querySelector('#co.fa-angle-right').setAttribute("class", "fa fa-angle-down");
    document.getElementById("completed-content").style.display = "block";
  } else{
    document.querySelector('#co.fa-angle-down').setAttribute("class", "fa fa-angle-right");
    document.getElementById("completed-content").style.display = "none";
  }
});

document.getElementById("lists-header").addEventListener("click", () => {
  let content = document.getElementById("lists-content").style.display;
  if (content === "" || content === "none"){
    document.querySelector('#li.fa-angle-right').setAttribute("class", "fa fa-angle-down");
    document.getElementById("lists-content").style.display = "block";
  } else{
    document.querySelector('#li.fa-angle-down').setAttribute("class", "fa fa-angle-right")
    document.getElementById("lists-content").style.display = "none";
  }
});

document.querySelector("span .fa-plus").addEventListener("click", () => {
document.getElementById("form").style.display = "block";
document.querySelector('input[name="add"]').focus();
this.style.display = "none";
});

document.querySelector('input[name="add"]').addEventListener("blur", () => {
document.querySelector("span  .fa-plus").style.display = "flex";
document.getElementById("form").style.display = "none";
});
    
document.querySelector("form").addEventListener("submit", (event) => {
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
    
    let firstTodo = document.querySelector("#lists-content p");
    if(firstTodo === null){
      document.getElementById("lists-content").appendChild(para);
    }else {
      document.getElementById("lists-content").insertBefore(para, firstTodo);
    }
    document.getElementById("li-counter").innerHTML = Number(document.getElementById("li-counter").innerHTML) + 1;
    document.querySelector("input[name='add'] ").value = "";
  }
});
  
document.querySelector("#lists-content").addEventListener("click", (e) => {
  animate(e);
});

document.querySelector("#completed-content").addEventListener("click", (e) => {
    animate(e);
});

document.querySelector('input[name="add"]').addEventListener("keyup", () => {
  let empty = this.value.trim();
  if(empty === ""){
    document.getElementById("btn").style.backgroundColor = "#ccc";
  }else{
    document.getElementById("btn").style.backgroundColor = "#0060df";
  }
});