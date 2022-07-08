// declare replicants
    const t1_a_spon_rep = nodecg.Replicant('t1_a_spon');
    const t1_a_name_rep = nodecg.Replicant('t1_a_name');
    const t1_a_twitter_rep = nodecg.Replicant('t1_a_twitter');
    const t1_a_pronouns_rep = nodecg.Replicant('t1_a_pronouns');
    const t1_a_port_rep = nodecg.Replicant('t1_a_port');
    const t1_b_spon_rep = nodecg.Replicant('t1_b_spon');
    const t1_b_name_rep = nodecg.Replicant('t1_b_name');
    const t1_b_twitter_rep = nodecg.Replicant('t1_b_twitter');
    const t1_b_pronouns_rep = nodecg.Replicant('t1_b_pronouns');
    const t1_b_port_rep = nodecg.Replicant('t1_b_port');
    const t1_score_rep = nodecg.Replicant('t1_score');
    const t2_a_spon_rep = nodecg.Replicant('t2_a_spon');
    const t2_a_name_rep = nodecg.Replicant('t2_a_name');
    const t2_a_twitter_rep = nodecg.Replicant('t2_a_twitter');
    const t2_a_pronouns_rep = nodecg.Replicant('t2_a_pronouns');
    const t2_a_port_rep = nodecg.Replicant('t2_a_port');
    const t2_b_spon_rep = nodecg.Replicant('t2_b_spon');
    const t2_b_name_rep = nodecg.Replicant('t2_b_name');
    const t2_b_twitter_rep = nodecg.Replicant('t2_b_twitter');
    const t2_b_pronouns_rep = nodecg.Replicant('t2_b_pronouns');
    const t2_b_port_rep = nodecg.Replicant('t2_b_port');
    const t2_score_rep = nodecg.Replicant('t2_score');
    const t_round_rep = nodecg.Replicant('t_round');
    const t_best_of_rep = nodecg.Replicant('t_best_of');
    const t1_losers_rep = nodecg.Replicant('t1_losers');
    const t2_losers_rep = nodecg.Replicant('t2_losers');
// Assign replicants
    const t1_a_spon = document.querySelector('#t1_a_spon');
    const t1_a_name = document.querySelector('#t1_a_name');
    const t1_a_twitter = document.querySelector('#t1_a_twitter');
    const t1_a_pronouns = document.querySelector('#t1_a_pronouns');
    const t1_a_port = document.querySelector('#t1_a_port');
    const t1_b_spon = document.querySelector('#t1_b_spon');
    const t1_b_name = document.querySelector('#t1_b_name');
    const t1_b_twitter = document.querySelector('#t1_b_twitter');
    const t1_b_pronouns = document.querySelector('#t1_b_pronouns');
    const t1_b_port = document.querySelector('#t1_b_port');
    const t1_score = document.querySelector('#t1_score');
    const t2_a_spon = document.querySelector('#t2_a_spon');
    const t2_a_name = document.querySelector('#t2_a_name');
    const t2_a_twitter = document.querySelector('#t2_a_twitter');
    const t2_a_pronouns = document.querySelector('#t2_a_pronouns');
    const t2_a_port = document.querySelector('#t2_a_port');
    const t2_b_spon = document.querySelector('#t2_b_spon');
    const t2_b_name = document.querySelector('#t2_b_name');
    const t2_b_twitter = document.querySelector('#t2_b_twitter');
    const t2_b_pronouns = document.querySelector('#t2_b_pronouns');
    const t2_b_port = document.querySelector('#t2_b_port');
    const t2_score = document.querySelector('#t2_score');
    const t_round = document.querySelector('#t_round');
    const t_best_of = document.querySelector('#t_best_of');
    const t1_losers = document.querySelector('#t1_losers');
    const t2_losers = document.querySelector('#t2_losers');
// Generic Holding cells for data
    const swapSpace = "";

// Update Replicants
    t1_a_spon_rep.on('change', (newValue, oldValue) => {	
        t1_a_spon.value = newValue;
    });	
    t1_a_name_rep.on('change', (newValue, oldValue) => {	
        t1_a_name.value = newValue;
    });	
    t1_a_twitter_rep.on('change', (newValue, oldValue) => {	
        t1_a_twitter.value = newValue;
    });	
    t1_a_pronouns_rep.on('change', (newValue, oldValue) => {	
        t1_a_pronouns.value = newValue;
    });	
    t1_a_port_rep.on('change', (newValue, oldValue) => {	
        if (t1_a_port_rep.value == "1"){
            document.getElementById("t1_a_port_1").classList.remove("uk-button-secondary");
            document.getElementById("t1_a_port_1").classList.add("uk-button-primary");
			document.getElementById("t1_a_port_2").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_2").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_3").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_3").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_4").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_4").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_c").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_c").classList.add("uk-button-secondary");
        }else if (t1_a_port_rep.value == "2"){
            document.getElementById("t1_a_port_1").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_1").classList.add("uk-button-secondary");
			document.getElementById("t1_a_port_2").classList.remove("uk-button-secondary");
            document.getElementById("t1_a_port_2").classList.add("uk-button-primary");
            document.getElementById("t1_a_port_3").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_3").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_4").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_4").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_c").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_c").classList.add("uk-button-secondary");
        }else if (t1_a_port_rep.value == "3"){
            document.getElementById("t1_a_port_1").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_1").classList.add("uk-button-secondary");
			document.getElementById("t1_a_port_2").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_2").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_3").classList.remove("uk-button-secondary");
            document.getElementById("t1_a_port_3").classList.add("uk-button-primary");
            document.getElementById("t1_a_port_4").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_4").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_c").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_c").classList.add("uk-button-secondary");
        }else if (t1_a_port_rep.value == "4"){
            document.getElementById("t1_a_port_1").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_1").classList.add("uk-button-secondary");
			document.getElementById("t1_a_port_2").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_2").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_3").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_3").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_4").classList.remove("uk-button-secondary");
            document.getElementById("t1_a_port_4").classList.add("uk-button-primary");
            document.getElementById("t1_a_port_c").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_c").classList.add("uk-button-secondary");
        }else{
            document.getElementById("t1_a_port_1").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_1").classList.add("uk-button-secondary");
			document.getElementById("t1_a_port_2").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_2").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_3").classList.remove("uk-button-secondary");
            document.getElementById("t1_a_port_3").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_4").classList.remove("uk-button-primary");
            document.getElementById("t1_a_port_4").classList.add("uk-button-secondary");
            document.getElementById("t1_a_port_c").classList.remove("uk-button-secondary");
            document.getElementById("t1_a_port_c").classList.add("uk-button-primary");
        }
    });	
    t1_b_spon_rep.on('change', (newValue, oldValue) => {	
        t1_b_spon.value = newValue;
    });	
    t1_b_name_rep.on('change', (newValue, oldValue) => {	
        t1_b_name.value = newValue;
    });	
    t1_b_twitter_rep.on('change', (newValue, oldValue) => {	
        t1_b_twitter.value = newValue;
    });	
    t1_b_twitter_rep.on('change', (newValue, oldValue) => {	
        t1_b_twitter.value = newValue;
    });	
    t1_b_pronouns_rep.on('change', (newValue, oldValue) => {	
        t1_b_pronouns.value = newValue;
    });	
    t1_b_port_rep.on('change', (newValue, oldValue) => {	
        if (t1_b_port_rep.value == "1"){
            document.getElementById("t1_b_port_1").classList.remove("uk-button-secondary");
            document.getElementById("t1_b_port_1").classList.add("uk-button-primary");
			document.getElementById("t1_b_port_2").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_2").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_3").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_3").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_4").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_4").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_c").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_c").classList.add("uk-button-secondary");
        }else if (t1_b_port_rep.value == "2"){
            document.getElementById("t1_b_port_1").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_1").classList.add("uk-button-secondary");
			document.getElementById("t1_b_port_2").classList.remove("uk-button-secondary");
            document.getElementById("t1_b_port_2").classList.add("uk-button-primary");
            document.getElementById("t1_b_port_3").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_3").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_4").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_4").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_c").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_c").classList.add("uk-button-secondary");
        }else if (t1_b_port_rep.value == "3"){
            document.getElementById("t1_b_port_1").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_1").classList.add("uk-button-secondary");
			document.getElementById("t1_b_port_2").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_2").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_3").classList.remove("uk-button-secondary");
            document.getElementById("t1_b_port_3").classList.add("uk-button-primary");
            document.getElementById("t1_b_port_4").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_4").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_c").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_c").classList.add("uk-button-secondary");
        }else if (t1_b_port_rep.value == "4"){
            document.getElementById("t1_b_port_1").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_1").classList.add("uk-button-secondary");
			document.getElementById("t1_b_port_2").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_2").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_3").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_3").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_4").classList.remove("uk-button-secondary");
            document.getElementById("t1_b_port_4").classList.add("uk-button-primary");
            document.getElementById("t1_b_port_c").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_c").classList.add("uk-button-secondary");
        }else{
            document.getElementById("t1_b_port_1").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_1").classList.add("uk-button-secondary");
			document.getElementById("t1_b_port_2").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_2").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_3").classList.remove("uk-button-secondary");
            document.getElementById("t1_b_port_3").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_4").classList.remove("uk-button-primary");
            document.getElementById("t1_b_port_4").classList.add("uk-button-secondary");
            document.getElementById("t1_b_port_c").classList.remove("uk-button-secondary");
            document.getElementById("t1_b_port_c").classList.add("uk-button-primary");
        }
    });	
    t1_score_rep.on('change', (newValue, oldValue) => {	
        t1_score.value = newValue;
    });	
    t2_a_spon_rep.on('change', (newValue, oldValue) => {	
        t2_a_spon.value = newValue;
    });	
    t2_a_name_rep.on('change', (newValue, oldValue) => {	
        t2_a_name.value = newValue;
    });	
    t2_a_twitter_rep.on('change', (newValue, oldValue) => {	
        t2_a_twitter.value = newValue;
    });	
    t2_a_pronouns_rep.on('change', (newValue, oldValue) => {	
        t2_a_pronouns.value = newValue;
    });	
    t2_a_port_rep.on('change', (newValue, oldValue) => {	
        if (t2_a_port_rep.value == "1"){
            document.getElementById("t2_a_port_1").classList.remove("uk-button-secondary");
            document.getElementById("t2_a_port_1").classList.add("uk-button-primary");
			document.getElementById("t2_a_port_2").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_2").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_3").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_3").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_4").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_4").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_c").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_c").classList.add("uk-button-secondary");
        }else if (t2_a_port_rep.value == "2"){
            document.getElementById("t2_a_port_1").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_1").classList.add("uk-button-secondary");
			document.getElementById("t2_a_port_2").classList.remove("uk-button-secondary");
            document.getElementById("t2_a_port_2").classList.add("uk-button-primary");
            document.getElementById("t2_a_port_3").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_3").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_4").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_4").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_c").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_c").classList.add("uk-button-secondary");
        }else if (t2_a_port_rep.value == "3"){
            document.getElementById("t2_a_port_1").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_1").classList.add("uk-button-secondary");
			document.getElementById("t2_a_port_2").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_2").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_3").classList.remove("uk-button-secondary");
            document.getElementById("t2_a_port_3").classList.add("uk-button-primary");
            document.getElementById("t2_a_port_4").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_4").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_c").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_c").classList.add("uk-button-secondary");
        }else if (t2_a_port_rep.value == "4"){
            document.getElementById("t2_a_port_1").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_1").classList.add("uk-button-secondary");
			document.getElementById("t2_a_port_2").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_2").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_3").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_3").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_4").classList.remove("uk-button-secondary");
            document.getElementById("t2_a_port_4").classList.add("uk-button-primary");
            document.getElementById("t2_a_port_c").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_c").classList.add("uk-button-secondary");
        }else{
            document.getElementById("t2_a_port_1").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_1").classList.add("uk-button-secondary");
			document.getElementById("t2_a_port_2").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_2").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_3").classList.remove("uk-button-secondary");
            document.getElementById("t2_a_port_3").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_4").classList.remove("uk-button-primary");
            document.getElementById("t2_a_port_4").classList.add("uk-button-secondary");
            document.getElementById("t2_a_port_c").classList.remove("uk-button-secondary");
            document.getElementById("t2_a_port_c").classList.add("uk-button-primary");
        }
    });	
    t2_b_spon_rep.on('change', (newValue, oldValue) => {	
        t2_b_spon.value = newValue;
    });	
    t2_b_name_rep.on('change', (newValue, oldValue) => {	
        t2_b_name.value = newValue;
    });	
    t2_b_twitter_rep.on('change', (newValue, oldValue) => {	
        t2_b_twitter.value = newValue;
    });	
    t2_b_pronouns_rep.on('change', (newValue, oldValue) => {	
        t2_b_pronouns.value = newValue;
    });	
    t2_b_port_rep.on('change', (newValue, oldValue) => {	
        if (t2_b_port_rep.value == "1"){
            document.getElementById("t2_b_port_1").classList.remove("uk-button-secondary");
            document.getElementById("t2_b_port_1").classList.add("uk-button-primary");
			document.getElementById("t2_b_port_2").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_2").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_3").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_3").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_4").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_4").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_c").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_c").classList.add("uk-button-secondary");
        }else if (t2_b_port_rep.value == "2"){
            document.getElementById("t2_b_port_1").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_1").classList.add("uk-button-secondary");
			document.getElementById("t2_b_port_2").classList.remove("uk-button-secondary");
            document.getElementById("t2_b_port_2").classList.add("uk-button-primary");
            document.getElementById("t2_b_port_3").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_3").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_4").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_4").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_c").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_c").classList.add("uk-button-secondary");
        }else if (t2_b_port_rep.value == "3"){
            document.getElementById("t2_b_port_1").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_1").classList.add("uk-button-secondary");
			document.getElementById("t2_b_port_2").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_2").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_3").classList.remove("uk-button-secondary");
            document.getElementById("t2_b_port_3").classList.add("uk-button-primary");
            document.getElementById("t2_b_port_4").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_4").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_c").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_c").classList.add("uk-button-secondary");
        }else if (t2_b_port_rep.value == "4"){
            document.getElementById("t2_b_port_1").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_1").classList.add("uk-button-secondary");
			document.getElementById("t2_b_port_2").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_2").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_3").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_3").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_4").classList.remove("uk-button-secondary");
            document.getElementById("t2_b_port_4").classList.add("uk-button-primary");
            document.getElementById("t2_b_port_c").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_c").classList.add("uk-button-secondary");
        }else{
            document.getElementById("t2_b_port_1").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_1").classList.add("uk-button-secondary");
			document.getElementById("t2_b_port_2").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_2").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_3").classList.remove("uk-button-secondary");
            document.getElementById("t2_b_port_3").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_4").classList.remove("uk-button-primary");
            document.getElementById("t2_b_port_4").classList.add("uk-button-secondary");
            document.getElementById("t2_b_port_c").classList.remove("uk-button-secondary");
            document.getElementById("t2_b_port_c").classList.add("uk-button-primary");
        }
    });	
    t2_score_rep.on('change', (newValue, oldValue) => {	
        t2_score.value = newValue;
    });	
    t_round_rep.on('change', (newValue, oldValue) => {	
        t_round.value = newValue;
    });	
    t_best_of_rep.on('change', (newValue, oldValue) => {	
        t_best_of.value = newValue;
    });
    t1_losers_rep.on('change', (newValue, oldValue) => {	
        t1_losers.checked = newValue;
    });	
    t2_losers_rep.on('change', (newValue, oldValue) => {	
        t2_losers.checked = newValue;
    });	
//Buttons!
updatebutton.onclick = () => {
    t1_a_spon_rep.value = t1_a_spon.value;
    t1_a_name_rep.value = t1_a_name.value;
    t1_a_twitter_rep.value = t1_a_twitter.value;
    t1_a_pronouns_rep.value = t1_a_pronouns.value;
    t1_b_spon_rep.value = t1_b_spon.value;
    t1_b_name_rep.value = t1_b_name.value;
    t1_b_twitter_rep.value = t1_b_twitter.value;
    t1_b_pronouns_rep.value = t1_b_pronouns.value;
    t1_score_rep.value = t1_score.value;
    t2_a_spon_rep.value = t2_a_spon.value;
    t2_a_name_rep.value = t2_a_name.value;
    t2_a_twitter_rep.value = t2_a_twitter.value;
    t2_a_pronouns_rep.value = t2_a_pronouns.value;
    t2_b_spon_rep.value = t2_b_spon.value;
    t2_b_name_rep.value = t2_b_name.value;
    t2_b_twitter_rep.value = t2_b_twitter.value;
    t2_b_pronouns_rep.value = t2_b_pronouns.value;
    t2_score_rep.value = t2_score.value;
    t_round_rep.value = t_round.value;
    t_best_of_rep.value = t_best_of.value;
    t1_losers_rep.value = t1_losers.checked;
    t2_losers_rep.value = t2_losers.checked;
}

swap_teams_button.onclick = () => {
    t1_a_spon_rep.value = t2_a_spon_rep.value;
    t1_a_name_rep.value = t2_a_name_rep.value;
    t1_a_twitter_rep.value = t2_a_twitter_rep.value;
    t1_a_pronouns_rep.value = t2_a_pronouns_rep.value;
    t1_a_port_rep.value = t2_a_port_rep.value;
    t1_b_spon_rep.value = t2_b_spon_rep.value;
    t1_b_name_rep.value = t2_b_name_rep.value;
    t1_b_twitter_rep.value = t2_b_twitter_rep.value;
    t1_b_pronouns_rep.value = t2_b_pronouns_rep.value;
    t1_b_port_rep.value = t2_b_port_rep.value;
    t1_score_rep.value = t2_score_rep.value;
    t2_a_spon_rep.value = t1_a_spon_rep.value;
    t2_a_name_rep.value = t1_a_name_rep.value;
    t2_a_twitter_rep.value = t1_a_twitter_rep.value;
    t2_a_pronouns_rep.value = t1_a_pronouns_rep.value;
    t2_a_port_rep.value = t1_a_port_rep.value;
    t2_b_spon_rep.value = t1_b_spon_rep.value;
    t2_b_name_rep.value = t1_b_name_rep.value;
    t2_b_twitter_rep.value = t1_b_twitter_rep.value;
    t2_b_pronouns_rep.value = t1_b_pronouns_rep.value;
    t2_b_port_rep.value = t1_b_port_rep.value;
    t2_score_rep.value = t1_score_rep.value;
    t1_losers_rep.value = t2_losers_rep.value;
    t2_losers_rep.value = t1_losers_rep.value;
}

swap_a_button.onclick = () => {
    t1_a_spon_rep.value = t1_b_spon_rep.value;
    t1_a_name_rep.value = t1_b_name_rep.value;
    t1_a_twitter_rep.value = t1_b_twitter_rep.value;
    t1_a_pronouns_rep.value = t1_b_pronouns_rep.value;
    t1_a_port_rep.value = t1_b_port_rep.value;
    t1_b_spon_rep.value = t1_a_spon_rep.value;
    t1_b_name_rep.value = t1_a_name_rep.value;
    t1_b_twitter_rep.value = t1_a_twitter_rep.value;
    t1_b_pronouns_rep.value = t1_a_pronouns_rep.value;
    t1_b_port_rep.value = t1_a_port_rep.value;
}
swap_b_button.onclick = () => {
    t2_a_spon_rep.value = t2_b_spon_rep.value;
    t2_a_name_rep.value = t2_b_name_rep.value;
    t2_a_twitter_rep.value = t2_b_twitter_rep.value;
    t2_a_pronouns_rep.value = t2_b_pronouns_rep.value;
    t2_a_port_rep.value = t2_b_port_rep.value;
    t2_b_spon_rep.value = t2_a_spon_rep.value;
    t2_b_name_rep.value = t2_a_name_rep.value;
    t2_b_twitter_rep.value = t2_a_twitter_rep.value;
    t2_b_pronouns_rep.value = t2_a_pronouns_rep.value;
    t2_b_port_rep.value = t2_a_port_rep.value;
}

t1_a_port_1.onclick = () => {
    t1_a_port_rep.value = "1";
}
t1_a_port_2.onclick = () => {
    t1_a_port_rep.value = "2";
}
t1_a_port_3.onclick = () => {
    t1_a_port_rep.value = "3";
}
t1_a_port_4.onclick = () => {
    t1_a_port_rep.value = "4";
}
t1_a_port_c.onclick = () => {
    t1_a_port_rep.value = "C";
}
t1_b_port_1.onclick = () => {
    t1_b_port_rep.value = "1";
}
t1_b_port_2.onclick = () => {
    t1_b_port_rep.value = "2";
}
t1_b_port_3.onclick = () => {
    t1_b_port_rep.value = "3";
}
t1_b_port_4.onclick = () => {
    t1_b_port_rep.value = "4";
}
t1_b_port_c.onclick = () => {
    t1_b_port_rep.value = "c";
}

t2_a_port_1.onclick = () => {
    t2_a_port_rep.value = "1";
}
t2_a_port_2.onclick = () => {
    t2_a_port_rep.value = "2";
}
t2_a_port_3.onclick = () => {
    t2_a_port_rep.value = "3";
}
t2_a_port_4.onclick = () => {
    t2_a_port_rep.value = "4";
}
t2_a_port_c.onclick = () => {
    t2_a_port_rep.value = "c";
}
t2_b_port_1.onclick = () => {
    t2_b_port_rep.value = "1";
}
t2_b_port_2.onclick = () => {
    t2_b_port_rep.value = "2";
}
t2_b_port_3.onclick = () => {
    t2_b_port_rep.value = "3";
}
t2_b_port_4.onclick = () => {
    t2_b_port_rep.value = "4";
}
t2_b_port_c.onclick = () => {
    t2_b_port_rep.value = "c";
}

t1_score_plus.onclick = () => {
    t1_score_rep.value = parseInt(t1_score.value) + 1;
}
t1_score_minus.onclick = () => {
    t1_score_rep.value = parseInt(t1_score.value) - 1;
}
t2_score_plus.onclick = () => {
    t2_score_rep.value = parseInt(t2_score.value) + 1;
}
t2_score_minus.onclick = () => {
    t2_score_rep.value = parseInt(t2_score.value) - 1;
}
t1_score_1.onclick = () => {
    t1_score_rep.value = 1;
}
t1_score_2.onclick = () => {
    t1_score_rep.value = 2;
}
t1_score_3.onclick = () => {
    t1_score_rep.value = 3;
}
t2_score_1.onclick = () => {
    t2_score_rep.value = 1;
}
t2_score_2.onclick = () => {
    t2_score_rep.value = 2;
}
t2_score_3.onclick = () => {
    t2_score_rep.value = 3;
}