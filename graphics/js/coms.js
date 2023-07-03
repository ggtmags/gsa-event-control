const c1_name_rep = nodecg.Replicant('c1_name', 'gg-overlay-base');
const c2_name_rep = nodecg.Replicant('c2_name', 'gg-overlay-base');
const c3_name_rep = nodecg.Replicant('c3_name', 'gg-overlay-base');
const c1_twitter_rep = nodecg.Replicant('c1_twitter', 'gg-overlay-base');
const c2_twitter_rep = nodecg.Replicant('c2_twitter', 'gg-overlay-base');
const c3_twitter_rep = nodecg.Replicant('c3_twitter', 'gg-overlay-base');
const c1_pronouns_rep = nodecg.Replicant('c1_pronouns', 'gg-overlay-base');
const c2_pronouns_rep = nodecg.Replicant('c2_pronouns', 'gg-overlay-base');
const c3_pronouns_rep = nodecg.Replicant('c3_pronouns', 'gg-overlay-base');

c1_name_rep.on('change', (newValue, oldValue) => {
    c1_name.innerText = `${newValue}` ;
});
c1_twitter_rep.on('change', (newValue, oldValue) => {
    c1_twitter.innerText = `${newValue}` ;
});
c1_pronouns_rep.on('change', (newValue, oldValue) => {
    c1_pronouns.innerText = `${newValue}` ;
    if (c1_pronouns_rep.value == ""){
        document.getElementById("c1_pronouns").classList.add("hide");
    } else {
        document.getElementById("c1_pronouns").classList.remove("hide");
    }
});
c2_name_rep.on('change', (newValue, oldValue) => {
    c2_name.innerText = `${newValue}` ;
});
c2_twitter_rep.on('change', (newValue, oldValue) => {
    c2_twitter.innerText = `${newValue}` ;
});
c2_pronouns_rep.on('change', (newValue, oldValue) => {
    c2_pronouns.innerText = `${newValue}` ;
    if (c2_pronouns_rep.value == ""){
        document.getElementById("c2_pronouns").classList.add("hide");
    } else {
        document.getElementById("c2_pronouns").classList.remove("hide");
    }
});

c3_name_rep.on('change', (newValue, oldValue) => {
    c3_name.innerText = `${newValue}` ;
});
c3_twitter_rep.on('change', (newValue, oldValue) => {
    c3_twitter.innerText = `${newValue}` ;
});
c3_pronouns_rep.on('change', (newValue, oldValue) => {
    c3_pronouns.innerText = `${newValue}` ;
    if (c3_pronouns_rep.value == ""){
        document.getElementById("c3_pronouns").classList.add("hide");
    } else {
        document.getElementById("c3_pronouns").classList.remove("hide");
    }
});
