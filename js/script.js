var taskNumber=1;

function addNew()
{
  document.getElementById('inputForm').style.display='block';
  document.getElementById('submit').style.display='block';
}
function submit()
{
  var entry=0;
  var x = document.getElementById('inputForm');
  var mainContainer='<div id = "card'+taskNumber+'"><button class="delete" onclick="del(this)"></button>';
  for(var i = 0; i < x.length;i+=1)
  {
      entry++;
      mainContainer+='<li class="entry'+entry+'">'+ x.elements[i].value + '</li>';
  }

  mainContainer+='</div>';
  document.getElementById('newEntry').innerHTML+=mainContainer;
  document.getElementById('inputForm').style.display="none";
  document.getElementById('submit').style.display="none";
  document.getElementById('inputForm').reset();
  taskNumber++;
}
function del(a)
{
  document.getElementById(a.parentNode.id).style.display="none";
}
