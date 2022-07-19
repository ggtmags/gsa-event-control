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

updatebutton.onclick = () => {
    cust_1_top_rep.value = cust_1_top.value;
    cust_1_bot_rep.value = cust_1_bot.value;
    cust_2_top_rep.value = cust_2_top.value;
    cust_2_bot_rep.value = cust_2_bot.value;
    cust_3_top_rep.value = cust_3_top.value;
    cust_3_bot_rep.value = cust_3_bot.value;
}
