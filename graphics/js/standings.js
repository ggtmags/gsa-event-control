
const runner_1_name_rep = nodecg.Replicant('runner_1_name', 'gsa-event-control');
const runner_1_time_rep = nodecg.Replicant('runner_1_time', 'gsa-event-control');
const runner_2_name_rep = nodecg.Replicant('runner_2_name', 'gsa-event-control');
const runner_2_time_rep = nodecg.Replicant('runner_2_time', 'gsa-event-control');
const runner_3_name_rep = nodecg.Replicant('runner_3_name', 'gsa-event-control');
const runner_3_time_rep = nodecg.Replicant('runner_3_time', 'gsa-event-control');
const runner_4_name_rep = nodecg.Replicant('runner_4_name', 'gsa-event-control');
const runner_4_time_rep = nodecg.Replicant('runner_4_time', 'gsa-event-control');
const runner_5_name_rep = nodecg.Replicant('runner_5_name', 'gsa-event-control');
const runner_5_time_rep = nodecg.Replicant('runner_5_time', 'gsa-event-control');
const runner_6_name_rep = nodecg.Replicant('runner_6_name', 'gsa-event-control');
const runner_6_time_rep = nodecg.Replicant('runner_6_time', 'gsa-event-control');
const runner_7_name_rep = nodecg.Replicant('runner_7_name', 'gsa-event-control');
const runner_7_time_rep = nodecg.Replicant('runner_7_time', 'gsa-event-control');

runner_1_name_rep.on('change', (newValue, oldValue) => {	
	runner_1_name.innerText = `${newValue}` ;
});	
runner_1_time_rep.on('change', (newValue, oldValue) => {	
	runner_1_time.innerText = `${newValue}` ;
});	
runner_2_name_rep.on('change', (newValue, oldValue) => {	
	runner_2_name.innerText = `${newValue}` ;
});	
runner_2_time_rep.on('change', (newValue, oldValue) => {	
	runner_2_time.innerText = `${newValue}` ;
});	
runner_3_name_rep.on('change', (newValue, oldValue) => {	
	runner_3_name.innerText = `${newValue}` ;
});	
runner_3_time_rep.on('change', (newValue, oldValue) => {	
	runner_3_time.innerText = `${newValue}` ;
});	
runner_4_name_rep.on('change', (newValue, oldValue) => {	
	runner_4_name.innerText = `${newValue}` ;
});	
runner_4_time_rep.on('change', (newValue, oldValue) => {	
	runner_4_time.innerText = `${newValue}` ;
});	
runner_5_name_rep.on('change', (newValue, oldValue) => {	
	runner_5_name.innerText = `${newValue}` ;
});	
runner_5_time_rep.on('change', (newValue, oldValue) => {	
	runner_5_time.innerText = `${newValue}` ;
});	
runner_6_name_rep.on('change', (newValue, oldValue) => {	
	runner_6_name.innerText = `${newValue}` ;
});	
runner_6_time_rep.on('change', (newValue, oldValue) => {	
	runner_6_time.innerText = `${newValue}` ;
});	
runner_7_name_rep.on('change', (newValue, oldValue) => {	
	runner_7_name.innerText = `${newValue}` ;
});	
runner_7_time_rep.on('change', (newValue, oldValue) => {	
	runner_7_time.innerText = `${newValue}` ;
});	