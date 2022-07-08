//declare
const cust_1_top_rep = nodecg.Replicant('cust_1_top');
const cust_1_bot_rep = nodecg.Replicant('cust_1_bot');
const cust_2_top_rep = nodecg.Replicant('cust_2_top');
const cust_2_bot_rep = nodecg.Replicant('cust_2_bot');
const cust_3_top_rep = nodecg.Replicant('cust_3_top');
const cust_3_bot_rep = nodecg.Replicant('cust_3_bot');

const dyn_l3_option_rep = nodecg.Replicant('dyn_l3_option');
const dyn_l3_update_rep = nodecg.Replicant('dyn_l3_update');
//assign
const cust_1_top = document.querySelector('#cust_1_top');
const cust_1_bot = document.querySelector('#cust_1_bot');
const cust_2_top = document.querySelector('#cust_2_top');
const cust_2_bot = document.querySelector('#cust_2_bot');
const cust_3_top = document.querySelector('#cust_3_top');
const cust_3_bot = document.querySelector('#cust_3_bot');

//update
cust_1_top_rep.on('change', (newValue, oldValue) => {	
	cust_1_top.value = newValue;
});	
cust_1_bot_rep.on('change', (newValue, oldValue) => {	
	cust_1_bot.value = newValue;
});	
cust_2_top_rep.on('change', (newValue, oldValue) => {	
	cust_2_top.value = newValue;
});	
cust_2_bot_rep.on('change', (newValue, oldValue) => {	
	cust_2_bot.value = newValue;
});	
cust_3_top_rep.on('change', (newValue, oldValue) => {	
	cust_3_top.value = newValue;
});	
cust_3_bot_rep.on('change', (newValue, oldValue) => {	
	cust_3_bot.value = newValue;
});	

dyn_l3_option_rep.on('change', (newValue, oldValue) => {	
    if (dyn_l3_option_rep.value == "current_game"){
        document.getElementById("dyn_option_game").classList.remove("uk-button-secondary");
        document.getElementById("dyn_option_game").classList.add("uk-button-primary");
        document.getElementById("dyn_option_event").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_event").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust3").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust3").classList.remove("uk-button-primary");
    }else if (dyn_l3_option_rep.value == "event"){
        document.getElementById("dyn_option_game").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_game").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_event").classList.remove("uk-button-secondary");
        document.getElementById("dyn_option_event").classList.add("uk-button-primary");
        document.getElementById("dyn_option_team1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust3").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust3").classList.remove("uk-button-primary");
    }else if (dyn_l3_option_rep.value == "team1"){
        document.getElementById("dyn_option_game").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_game").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_event").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_event").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team1").classList.remove("uk-button-secondary");
        document.getElementById("dyn_option_team1").classList.add("uk-button-primary");
        document.getElementById("dyn_option_team2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust3").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust3").classList.remove("uk-button-primary");
    }else if (dyn_l3_option_rep.value == "team2"){
        document.getElementById("dyn_option_game").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_game").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_event").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_event").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team2").classList.remove("uk-button-secondary");
        document.getElementById("dyn_option_team2").classList.add("uk-button-primary");
        document.getElementById("dyn_option_cust1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust3").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust3").classList.remove("uk-button-primary");
    }else if (dyn_l3_option_rep.value == "cust1"){
        document.getElementById("dyn_option_game").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_game").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_event").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_event").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust1").classList.remove("uk-button-secondary");
        document.getElementById("dyn_option_cust1").classList.add("uk-button-primary");
        document.getElementById("dyn_option_cust2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust3").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust3").classList.remove("uk-button-primary");
    }else if (dyn_l3_option_rep.value == "cust2"){
        document.getElementById("dyn_option_game").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_game").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_event").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_event").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust2").classList.remove("uk-button-secondary");
        document.getElementById("dyn_option_cust2").classList.add("uk-button-primary");
        document.getElementById("dyn_option_cust3").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust3").classList.remove("uk-button-primary");
    }else if (dyn_l3_option_rep.value == "cust3"){
        document.getElementById("dyn_option_game").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_game").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_event").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_event").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_team2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_team2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust1").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust1").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust2").classList.add("uk-button-secondary");
        document.getElementById("dyn_option_cust2").classList.remove("uk-button-primary");
        document.getElementById("dyn_option_cust3").classList.remove("uk-button-secondary");
        document.getElementById("dyn_option_cust3").classList.add("uk-button-primary");
    }
});	

updatebutton.onclick = () => {
    cust_1_top_rep.value = cust_1_top.value;
    cust_1_bot_rep.value = cust_1_bot.value;
    cust_2_top_rep.value = cust_2_top.value;
    cust_2_bot_rep.value = cust_2_bot.value;
    cust_3_top_rep.value = cust_3_top.value;
    cust_3_bot_rep.value = cust_3_bot.value;
}
dyn_option_game.onclick = () => {
    dyn_l3_option_rep.value = "current_game"
}
dyn_option_event.onclick = () => {
    dyn_l3_option_rep.value = "event"
}
dyn_option_team1.onclick = () => {
    dyn_l3_option_rep.value = "team1"
}
dyn_option_team2.onclick = () => {
    dyn_l3_option_rep.value = "team2"
}
dyn_option_cust1.onclick = () => {
    dyn_l3_option_rep.value = "cust1"
}
dyn_option_cust2.onclick = () => {
    dyn_l3_option_rep.value = "cust2"
}
dyn_option_cust3.onclick = () => {
    dyn_l3_option_rep.value = "cust3"
}