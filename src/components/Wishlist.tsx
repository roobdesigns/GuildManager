export default function Wishlist(){

const wishlist = [

{
player:"Arthas",
items:["Sword of Valor","Dragon Shield","Titan Armor"]
},

{
player:"Jaina",
items:["Arcane Staff","Mana Ring","Ice Crown"]
}

]

return(

<div>

<h1>Wishlist</h1>

{wishlist.map((w,i)=>(

<div key={i} style={{marginBottom:"20px"}}>

<h3>{w.player}</h3>

<ul>

{w.items.map((item,j)=>(
<li key={j}>{item}</li>
))}

</ul>

</div>

))}

</div>

)

}