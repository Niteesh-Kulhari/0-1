
let a = 0;

// setInterval(()=>{
//     a += 1;
//     console.log(a);
// }, 1000)




function counter(duration, step){
    let count = 0;

    function updateCounter(){
        console.log(count);
        count += step;
    

    if(count <= duration){
        console.log("inside");
        setTimeout(updateCounter, 1000);
    }

    }
    console.log("calling");
    updateCounter();
}

counter(10, 1);