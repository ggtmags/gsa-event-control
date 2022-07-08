const runner_1_name_rep = nodecg.Replicant('runner_1_name');
const runner_1_time_rep = nodecg.Replicant('runner_1_time');
const runner_2_name_rep = nodecg.Replicant('runner_2_name');
const runner_2_time_rep = nodecg.Replicant('runner_2_time');
const runner_3_name_rep = nodecg.Replicant('runner_3_name');
const runner_3_time_rep = nodecg.Replicant('runner_3_time');
const runner_4_name_rep = nodecg.Replicant('runner_4_name');
const runner_4_time_rep = nodecg.Replicant('runner_4_time');
const runner_5_name_rep = nodecg.Replicant('runner_5_name');
const runner_5_time_rep = nodecg.Replicant('runner_5_time');
const runner_6_name_rep = nodecg.Replicant('runner_6_name');
const runner_6_time_rep = nodecg.Replicant('runner_6_time');
const runner_7_name_rep = nodecg.Replicant('runner_7_name');
const runner_7_time_rep = nodecg.Replicant('runner_7_time');

const runner_1_name = document.querySelector('#runner_1_name');
const runner_1_time = document.querySelector('#runner_1_time');
const runner_2_name = document.querySelector('#runner_2_name');
const runner_2_time = document.querySelector('#runner_2_time');
const runner_3_name = document.querySelector('#runner_3_name');
const runner_3_time = document.querySelector('#runner_3_time');
const runner_4_name = document.querySelector('#runner_4_name');
const runner_4_time = document.querySelector('#runner_4_time');
const runner_5_name = document.querySelector('#runner_5_name');
const runner_5_time = document.querySelector('#runner_5_time');
const runner_6_name = document.querySelector('#runner_6_name');
const runner_6_time = document.querySelector('#runner_6_time');
const runner_7_name = document.querySelector('#runner_7_name');
const runner_7_time = document.querySelector('#runner_7_time');

runner_1_name_rep.on('change', (newValue, oldValue) => {	
	runner_1_name.value = newValue;
});	
runner_1_time_rep.on('change', (newValue, oldValue) => {	
	runner_1_time.value = newValue;
});	
runner_2_name_rep.on('change', (newValue, oldValue) => {	
	runner_2_name.value = newValue;
});	
runner_2_time_rep.on('change', (newValue, oldValue) => {	
	runner_2_time.value = newValue;
});	
runner_3_name_rep.on('change', (newValue, oldValue) => {	
	runner_3_name.value = newValue;
});	
runner_3_time_rep.on('change', (newValue, oldValue) => {	
	runner_3_time.value = newValue;
});	
runner_4_name_rep.on('change', (newValue, oldValue) => {	
	runner_4_name.value = newValue;
});	
runner_4_time_rep.on('change', (newValue, oldValue) => {	
	runner_4_time.value = newValue;
});	
runner_4_time_rep.on('change', (newValue, oldValue) => {	
	runner_4_time.value = newValue;
});	
runner_5_name_rep.on('change', (newValue, oldValue) => {	
	runner_5_name.value = newValue;
});	
runner_5_time_rep.on('change', (newValue, oldValue) => {	
	runner_5_time.value = newValue;
});	
runner_6_name_rep.on('change', (newValue, oldValue) => {	
	runner_6_name.value = newValue;
});	
runner_6_time_rep.on('change', (newValue, oldValue) => {	
	runner_6_time.value = newValue;
});	
runner_7_name_rep.on('change', (newValue, oldValue) => {	
	runner_7_name.value = newValue;
});	
runner_7_time_rep.on('change', (newValue, oldValue) => {	
	runner_7_time.value = newValue;
});	

updatebutton.onclick = () => {
    runner_1_name_rep.value = runner_1_name.value;
    runner_1_time_rep.value = runner_1_time.value;
    runner_2_name_rep.value = runner_2_name.value;
    runner_2_time_rep.value = runner_2_time.value;
    runner_3_name_rep.value = runner_3_name.value;
    runner_3_time_rep.value = runner_3_time.value;
    runner_4_name_rep.value = runner_4_name.value;
    runner_4_time_rep.value = runner_4_time.value;
    runner_5_name_rep.value = runner_5_name.value;
    runner_5_time_rep.value = runner_5_time.value;
    runner_6_name_rep.value = runner_6_name.value;
    runner_6_time_rep.value = runner_6_time.value;
    runner_7_name_rep.value = runner_7_name.value;
    runner_7_time_rep.value = runner_7_time.value;
}

swap_1_down.onclick = () => {
    runner_1_name_rep.value = runner_2_name_rep.value;
    runner_1_time_rep.value = runner_2_time_rep.value;
    runner_2_name_rep.value = runner_1_name_rep.value;
    runner_2_time_rep.value = runner_1_time_rep.value;
}
swap_2_up.onclick = () => {
    runner_1_name_rep.value = runner_2_name_rep.value;
    runner_1_time_rep.value = runner_2_time_rep.value;
    runner_2_name_rep.value = runner_1_name_rep.value;
    runner_2_time_rep.value = runner_1_time_rep.value;
}
swap_2_down.onclick = () => {
    runner_2_name_rep.value = runner_3_name_rep.value;
    runner_2_time_rep.value = runner_3_time_rep.value;
    runner_3_name_rep.value = runner_2_name_rep.value;
    runner_3_time_rep.value = runner_2_time_rep.value;
}
swap_3_up.onclick = () => {
    runner_2_name_rep.value = runner_3_name_rep.value;
    runner_2_time_rep.value = runner_3_time_rep.value;
    runner_3_name_rep.value = runner_2_name_rep.value;
    runner_3_time_rep.value = runner_2_time_rep.value;
}
swap_3_down.onclick = () => {
    runner_3_name_rep.value = runner_4_name_rep.value;
    runner_3_time_rep.value = runner_4_time_rep.value;
    runner_4_name_rep.value = runner_3_name_rep.value;
    runner_4_time_rep.value = runner_3_time_rep.value;
}
swap_4_up.onclick = () => {
    runner_3_name_rep.value = runner_4_name_rep.value;
    runner_3_time_rep.value = runner_4_time_rep.value;
    runner_4_name_rep.value = runner_3_name_rep.value;
    runner_4_time_rep.value = runner_3_time_rep.value;
}
swap_4_down.onclick = () => {
    runner_4_name_rep.value = runner_5_name_rep.value;
    runner_4_time_rep.value = runner_5_time_rep.value;
    runner_5_name_rep.value = runner_4_name_rep.value;
    runner_5_time_rep.value = runner_4_time_rep.value;
}
swap_5_up.onclick = () => {
    runner_4_name_rep.value = runner_5_name_rep.value;
    runner_4_time_rep.value = runner_5_time_rep.value;
    runner_5_name_rep.value = runner_4_name_rep.value;
    runner_5_time_rep.value = runner_4_time_rep.value;
}
swap_5_down.onclick = () => {
    runner_5_name_rep.value = runner_6_name_rep.value;
    runner_5_time_rep.value = runner_6_time_rep.value;
    runner_6_name_rep.value = runner_5_name_rep.value;
    runner_6_time_rep.value = runner_5_time_rep.value;
}
swap_6_up.onclick = () => {
    runner_5_name_rep.value = runner_6_name_rep.value;
    runner_5_time_rep.value = runner_6_time_rep.value;
    runner_6_name_rep.value = runner_5_name_rep.value;
    runner_6_time_rep.value = runner_5_time_rep.value;
}
swap_6_down.onclick = () => {
    runner_6_name_rep.value = runner_7_name_rep.value;
    runner_6_time_rep.value = runner_7_time_rep.value;
    runner_7_name_rep.value = runner_6_name_rep.value;
    runner_7_time_rep.value = runner_6_time_rep.value;
}
swap_7_up.onclick = () => {
    runner_6_name_rep.value = runner_7_name_rep.value;
    runner_6_time_rep.value = runner_7_time_rep.value;
    runner_7_name_rep.value = runner_6_name_rep.value;
    runner_7_time_rep.value = runner_6_time_rep.value;
}