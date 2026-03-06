let labels=[]
let values=[]
let mode="bar"
let chart=null

const canvas=document.getElementById("chart")
const toggleBtn=document.getElementById("toggleBtn")
const addBtn=document.getElementById("addBtn")
const sortSelect=document.getElementById("sortSelect")
const searchInput=document.getElementById("searchInput")

const colors=[
"#e74c3c","#3498db","#2ecc71","#f1c40f",
"#9b59b6","#1abc9c","#e67e22","#34495e"
]

function toast(msg){
const t=document.getElementById("toast")
t.innerText=msg
t.style.opacity=1
setTimeout(()=>t.style.opacity=0,2000)
}

function buildConfig(){

const isDark=document.body.classList.contains("dark")

return{
type:mode,
data:{
labels,
datasets:[{
label:"Votes",
data:values,
backgroundColor:labels.map((_,i)=>{
if(i===0)return"#FFD700"
if(i===1)return"#C0C0C0"
if(i===2)return"#CD7F32"
return colors[i%colors.length]
}),
borderColor:isDark?"#fff":"#333",
borderWidth:1
}]
},
options:{
responsive:true,
animation:{
duration:1000,
easing:"easeOutQuart"
},
plugins:{
legend:{
labels:{color:isDark?"#fff":"#000"}
},
title:{
display:true,
text:"President Votes Dashboard",
color:isDark?"#fff":"#000"
}
},
scales:{
x:{ticks:{color:isDark?"#fff":"#000"}},
y:{ticks:{color:isDark?"#fff":"#000"}}
}
}
}
}

function render(){
if(chart)chart.destroy()
chart=new Chart(canvas,buildConfig())
}

async function loadData(){

const res=await fetch("http://localhost:3000/api/presidents")
let data=await res.json()

if(sortSelect.value==="asc"){
data.sort((a,b)=>a.votes-b.votes)
}else{
data.sort((a,b)=>b.votes-a.votes)
}

const search=searchInput.value.toLowerCase()
if(search){
data=data.filter(p=>p.name.toLowerCase().includes(search))
}

const total=data.reduce((s,p)=>s+p.votes,0)
const avg=data.length?Math.round(total/data.length):0
const max=data.length?Math.max(...data.map(p=>p.votes)):0
const min=data.length?Math.min(...data.map(p=>p.votes)):0

document.getElementById("totalVotes").innerText="Total Votes: "+total
document.getElementById("avgVotes").innerText="Average: "+avg
document.getElementById("maxVotes").innerText="Highest: "+max
document.getElementById("minVotes").innerText="Lowest: "+min

labels=data.map(p=>p.name)
values=data.map(p=>p.votes)

render()

const list=document.getElementById("list")
list.innerHTML=""

const tableBody=document.querySelector("#rankingTable tbody")
tableBody.innerHTML=""

data.forEach((p,i)=>{

let medal=""
if(i===0)medal="🥇"
if(i===1)medal="🥈"
if(i===2)medal="🥉"

const li=document.createElement("li")

li.innerHTML=`
${medal} ${p.name} (${p.votes})
<button onclick="deletePresident(${p.id})">❌</button>
<button onclick="updatePresident(${p.id})">✏️</button>
`

list.appendChild(li)

const row=document.createElement("tr")

row.innerHTML=`
<td>${i+1}</td>
<td>${p.name}</td>
<td>${p.votes}</td>
`

tableBody.appendChild(row)

})

}

addBtn.addEventListener("click",async()=>{

const name=document.getElementById("nameInput").value.trim()
const votes=Number(document.getElementById("votesInput").value)

if(!name||isNaN(votes)||votes<0){
toast("Ungültige Eingabe")
return
}

await fetch("http://localhost:3000/api/presidents",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,votes})
})

document.getElementById("nameInput").value=""
document.getElementById("votesInput").value=""

toast("President hinzugefügt")

loadData()

})

async function deletePresident(id){

if(!confirm("Wirklich löschen?"))return

await fetch(`http://localhost:3000/api/presidents/${id}`,{
method:"DELETE"
})

toast("President gelöscht")

loadData()

}

async function updatePresident(id){

const v=prompt("Neue Votes eingeben")
if(!v)return

const votes=Number(v)

await fetch(`http://localhost:3000/api/presidents/${id}`,{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({votes})
})

toast("Votes aktualisiert")

loadData()

}

toggleBtn.addEventListener("click",()=>{
mode=mode==="bar"?"line":"bar"
render()
})

document.getElementById("darkBtn").addEventListener("click",()=>{
document.body.classList.toggle("dark")
render()
})

document.getElementById("exportBtn").addEventListener("click",async()=>{

const res=await fetch("http://localhost:3000/api/presidents")
const data=await res.json()

let csv="Name,Votes\n"

data.forEach(p=>csv+=`${p.name},${p.votes}\n`)

const blob=new Blob([csv],{type:"text/csv"})
const url=window.URL.createObjectURL(blob)

const a=document.createElement("a")
a.href=url
a.download="presidents.csv"
a.click()

})

sortSelect.addEventListener("change",loadData)
searchInput.addEventListener("input",loadData)

loadData()
