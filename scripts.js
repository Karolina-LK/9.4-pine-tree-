var i,
    j,
    n;

function drawTree(n) {
  var star = "*";
  
  for (i=0;i<n;i++)  {
    //console.log(i);
    for (j=1; j<(i+1); j++) 
    { star +="*";
    }
    console.log(star);
  }
}
   
drawTree(6);