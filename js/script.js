let fact = '';
let time = 10;
let score = 0;
function getFact(){
    let num = Math.floor(Math.random() * (210 - 1 + 1)) + 1;
    fetch('./js/facts.json')
    .then((res)=>res.json())
    .then((data)=>{
         fact = data.all[num].text.substring(0,20);
        document.getElementById('fact').innerHTML = fact;
        })
    .catch((e)=>console.log(e));    
}
function start(){
    getFact()
    setInterval(() => {
        time = time - 1;
        document.getElementById('time').innerHTML = `time: ${time}`;
    }, 1000);
}

function check(){
    let text = document.querySelector('#text').value
    if(fact == text){
        if(time>0){
            score=score + 1
        }
        else{
            score = score - 1
        }
    document.getElementById('score').innerHTML =`score: ${score} ` 
    getFact()
    document.querySelector('#text').value = ''  
    setTimeout(() => {
        time = Math.floor(fact.length/2) 
    }, 100);
    }   
}