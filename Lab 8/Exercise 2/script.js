  let pictures = ["https://logos-world.net/wp-content/uploads/2020/12/Batman-Logo.png", "https://m.media-amazon.com/images/I/61l+HTCjCvL._AC_SL1500_.jpg", "https://s3-us-west-2.amazonaws.com/files.geekgirlauthority.com/wp-content/uploads/2017/03/Bat-Symbol.jpg", "https://image.shutterstock.com/image-vector/batman-logo-icon-vector-template-260nw-1998917738.jpg", "https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-2016.png"]

let x=0;

function previous()
{

  document.querySelector("previous")
  {
    if(x==0)
    x=4;
    if (x==1)
    x=0;
    if(x==2)
    x=1;
    if(x==3)
    x=2;
    if(x==4)
    x=3;
    document.getElementById("1").src=pictures[x];
  }
}
  function next()
  {
    
    document.querySelector("next")
    {

    if(x==0)
    x=1;
   else if (x==1)
    x=2;
    else if(x==2)
    x=3;
    else if(x==3)
    x=4;
    else if(x==4)
    x=0;
    }
  document.getElementById("1").src=pictures[x];
  }
