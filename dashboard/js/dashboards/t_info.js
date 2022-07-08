// declare replicants
const t_name_rep = nodecg.Replicant('t_name');
const t_date_rep = nodecg.Replicant('t_date');
const t_game_name_rep = nodecg.Replicant('t_game_name');
const t_bracket_url_rep = nodecg.Replicant('t_bracket_url');
// Assign replicants
const t_name = document.querySelector('#t_name');
const t_date = document.querySelector('#t_date');
const t_game_name = document.querySelector('#t_game_name');
const t_bracket_url = document.querySelector('#t_bracket_url');
// Update Replicants
t_name_rep.on('change', (newValue, oldValue) => {	
	t_name.value = newValue;
});	
t_date_rep.on('change', (newValue, oldValue) => {	
	t_date.value = newValue;
});	
t_game_name_rep.on('change', (newValue, oldValue) => {	
	t_game_name.value = newValue;
});
t_bracket_url_rep.on('change', (newValue, oldValue) => {	
	t_bracket_url.value = newValue;
});	
//Buttons!
updatebutton.onclick = () => {
    t_name_rep.value = t_name.value;
	t_date_rep.value = t_date.value;
	t_game_name_rep.value = t_game_name.value;
	t_bracket_url_rep.value = t_bracket_url.value;
}