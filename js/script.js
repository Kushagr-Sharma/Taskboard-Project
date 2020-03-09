

function addNew()
{
  document.getElementById('inputForm').style.display='block';
  document.getElementById('submit').style.display='block';
}
function submit()
{
  var entry=0;
  var x = document.getElementById('inputForm');
  var mainContainer = document.getElementById('newEntry');
  for(var i = 0; i < x.length;i+=1)
  {
      entry++;
      document.getElementById('newEntry').innerHTML+='<li class="entry'+entry+'">'+ x.elements[i].value + '</li>';
  }
  document.getElementById('newEntry').innerHTML+='<br/><br/>'
  document.getElementById('inputForm').style.display="none";
  document.getElementById('submit').style.display="none";
}
