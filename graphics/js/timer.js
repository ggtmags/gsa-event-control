var clockvalue = 60;
var delayInMilliseconds = 1000;
var clockRunning = 1;
var updateStatus = "1";

const com_timer_min_rep = nodecg.Replicant('com_timer_min', 'gsa-event-control');
const com_timer_sec_rep = nodecg.Replicant('com_timer_sec', 'gsa-event-control');
const com_timer_status_rep = nodecg.Replicant('com_timer_status', 'gsa-event-control');



//do shit when it updates
/*lpsp1_s1Rep.on('change', (newValue, oldValue) => {
    leftsponsor1.innerText = `${newValue}\xa0` ;
    updateStatus = "1";
});*/

com_timer_sec_rep.on('change', (newValue, oldValue) => {
    if(com_timer_sec_rep.value < 10){
        timerseconds.innerText = `0${newValue}` ;
    }else{
        timerseconds.innerText = `${newValue}` ;
    }
    if(com_timer_sec_rep.value > 0){
        /*document.getElementById("rightblockanimation").classList.remove("right-block-cover-in");*/
        /*document.getElementById("rightblocksoon").classList.remove("fade-1-d2");*/
    }
    
    //console.log(com_timer_sec_rep.value);
});
com_timer_min_rep.on('change', (newValue, oldValue) => {
    timerminutes.innerText = `${newValue}:` ;
    //console.log(com_timer_sec_rep.value);
    if(com_timer_min_rep.value > 0){
        /*document.getElementById("rightblockanimation").classList.remove("right-block-cover-in");
        document.getElementById("_1combox").classList.add("_1com-shrink");
        document.getElementById("_1combox").classList.remove("_1com-grow");
        document.getElementById("_1comtimer").classList.remove("_1com-timer-slide-out");
        document.getElementById("_1comtimer").classList.add("_1com-timer-slide");*/
    }
});

com_timer_status_rep.on('change', (newValue, oldValue) => {
    if (com_timer_status_rep.value == "run"){
        updateStatus = "1";
        console.log(com_timer_status_rep.value);
        count();
    } else {
        updateStatus = "2";
        console.log(com_timer_status_rep.value);
    }
});

//counter shit
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function count() {
    while(updateStatus == "1"){
        if(com_timer_sec_rep.value > 0){
            com_timer_sec_rep.value = com_timer_sec_rep.value - 1;
            console.log("math phase");
            /*document.getElementById("_1combox").classList.remove("_1com-grow");
            document.getElementById("_1combox").classList.add("_1com-shrink");
            document.getElementById("_1comtimer").classList.remove("_1com-timer-slide-out");
            document.getElementById("_1comtimer").classList.add("_1com-timer-slide");*/
            console.log(com_timer_sec_rep.value);
            await sleep(1000);
            console.log("sleep 1000");
           
            if(com_timer_sec_rep.value < 10){
                console.log("under 10 seconds if");
                console.log(com_timer_sec_rep.value);
            }
            else{
                console.log("over 10 seconds else");
                console.log(com_timer_sec_rep.value);
            }
        }else{
            if(com_timer_min_rep.value > 0){
                console.log("minutes loop");
                com_timer_min_rep.value = com_timer_min_rep.value - 1;
                com_timer_sec_rep.value = 59;
                console.log("sleep 1000");
                await sleep(1000);
                console.log(com_timer_sec_rep.value);

            }else{
                /*document.getElementById("rightblockanimation").classList.remove("right-block-cover-in");*/
                console.log("time's up");
                updateStatus = "2";
                com_timer_status_rep.value = "stop";
                await sleep(1000);
                console.log(com_timer_sec_rep.value);
                /*document.getElementById("rightblockanimation").classList.add("right-block-cover-in");
                document.getElementById("_1combox").classList.remove("_1com-shrink");
                document.getElementById("_1combox").classList.add("_1com-grow");
                document.getElementById("_1comtimer").classList.remove("_1com-timer-slide");
                document.getElementById("_1comtimer").classList.add("_1com-timer-slide-out");*/
                
                
            }
        }
        
    }
}