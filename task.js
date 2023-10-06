document.addEventListener("click", showTip)
document.addEventListener("mouseout", hideTip)

function showTip(event) {
    let tar = event.target;
    let tarRect = tar.getBoundingClientRect() 
    let x, y;                                  
    x = tarRect.x      
    y = tarRect.y 
   
    let tip = document.createElement("div")
    tip.className = "tooltip"               
    y = tarRect.y - tip.offsetHeight + 20
    x = tarRect.x - tip.offsetHeight + 100
    tip.style.left = x + 'px'                  
    tip.style.top = y + 'px'               
   
    document.body.append(tip)             
         
    if (Array.from(tar.classList).includes('has-tooltip')){
        tip.textContent = tar.title                
        tip.classList.add('tooltip_active');
    }
    event.preventDefault()
}

function hideTip() {
    let tip = document.querySelectorAll('.tooltip')
    for ( let i of (Array.from(tip))){
        if (i != null) { 
           i.classList.remove('tooltip_active')
        }   
    }  
}
