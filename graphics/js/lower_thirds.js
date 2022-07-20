
const cust_1_top_rep = nodecg.Replicant('cust_1_top');
const cust_1_bot_rep = nodecg.Replicant('cust_1_bot');
const cust_2_top_rep = nodecg.Replicant('cust_2_top');
const cust_2_bot_rep = nodecg.Replicant('cust_2_bot');
const cust_3_top_rep = nodecg.Replicant('cust_3_top');
const cust_3_bot_rep = nodecg.Replicant('cust_3_bot');


cust_1_top_rep.on('change', (newValue, oldValue) => {	
	cust_1_top.innerText = `${newValue}` ;
});	
cust_1_bot_rep.on('change', (newValue, oldValue) => {	
	cust_1_bot.innerText = `${newValue}` ;
});	
cust_2_top_rep.on('change', (newValue, oldValue) => {	
	cust_2_top.innerText = `${newValue}` ;
});	
cust_2_bot_rep.on('change', (newValue, oldValue) => {	
	cust_2_bot.innerText = `${newValue}` ;
});	
cust_3_top_rep.on('change', (newValue, oldValue) => {	
	cust_3_top.innerText = `${newValue}` ;
});	
cust_3_bot_rep.on('change', (newValue, oldValue) => {	
	cust_3_bot.innerText = `${newValue}` ;
});	
