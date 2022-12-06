
function addDo(){
    var x =document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.onclick = function(){strike3(this)};

    var del = document.createElement('a');
    del.href="#";
    del.setAttribute("class", "btn");
    var ico = document.createElement("i");
    ico.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#de380a" class="bi bi-bookmark-dash-fill delb " viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"></path> </svg>'
    del.appendChild(ico);
    del.onclick = function() {
         document.getElementById('tbJob').removeChild(Job);
        }
    
    var text1 = prompt("مورد جديد را وارد كنيد:");
    
    
    
    var Job = document.createElement('tr');

    var cell1 = document.createElement('td');
    cell1.appendChild(x);
    cell1.setAttribute("calss","col col-lg-12");
   
    var cell2 = document.createElement('td');
    var text1Node = document.createTextNode(text1);
    cell2.appendChild(text1Node);
    cell2.setAttribute("calss","col-10");
    
    var cell3 =  document.createElement('td');
    cell3.appendChild(del);
    cell3.setAttribute("calss","col-1");
    cell3.style.direction = "ltr";

    Job.appendChild(cell1)
    Job.appendChild(cell2)
    Job.appendChild(cell3)

    document.getElementById('tbJob').appendChild(Job)
   
    
}

function strike3(chk){
    var text1 =  chk.parentElement.parentElement.childNodes[1].innerHTML;
    var check = chk.parentElement.parentElement.childNodes[0].childNodes[0]
    
    if(!check.checked){
        var a =chk.parentElement.parentElement.childNodes[1].value;
        var text1 =  a.innerHTML;
    }
       else if (check.checked){
        chk.parentElement.parentElement.childNodes[1].innerHTML =text1.strike();
       }
  
   
}