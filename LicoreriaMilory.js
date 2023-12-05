class oCopo{
  constructor(tam, id){
     this.x = 0;
     this.y = 0;
     this.size = tam;
     this.nombre = id
     this.obj = document.createElement("div");
     this.obj.setAttribute('id',id);
     this.obj.innerText="*";
     this.obj.style.position = "absolute";
     this.obj.style.fontSize = tam+"px";
     this.obj.style.color = "white";
     document.body.appendChild(this.obj)
}
dibujar(x,y){
     this.x = x;
     this.y = y;
     this.obj.style.top = this.y+"px";
     this.obj.style.left = this.x+"px";
     }
}
function iniCopos(num, anc, alto){
   var copos = new Array(num);
   var tam, x, y;
   for (let i = 0; i<num; i++)
     {
     tam = Math.round(Math.random()*10)+ 8;
     copos[i] = new oCopo(tam, "c"+i);
     x = parseInt(Math.random()*anc);
     y = parseInt(Math.random()*alto);
     copos[i].dibujar(x,y);
     }
return copos;
}
function iniNevada(num, vel)
{
var ancho = document.body.offsetWidth-10;
var alto = window.innerHeight-10;
var losCopos = iniCopos(num, ancho, alto)
nevar(losCopos, ancho,alto, vel);
} 
function nevar(copos, coposAncho, coposAlto, vel)
{
var x, y;
for (let i = 0; i < copos.length; i++)
    {
    y = copos[i].y;
x = copos[i].x;
    if (Math.random() > 0.5)
        y += parseInt(Math.random()+1);
    y += parseInt(Math.random()+2);
    if (y >= (coposAlto - copos[i].size))
        {
        y = Math.round(Math.random()*10);
        x  =parseInt(Math.random()*coposAncho-1); 
        }
copos[i].dibujar(x,y); 
    }
setTimeout(nevar, vel, copos,  coposAncho, coposAlto, vel);
}
// document.getElementsByTagName('')

function evento(){
    alert("Haz entrado a whatsapp!!!")
}