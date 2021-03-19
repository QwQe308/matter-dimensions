functions["evo_b01_cost"] = () => {
    return big(1);
}
functions["evo_b02_cost"] = () => {
    return big(1);
}
functions["evo_b03_cost"] = () => {
    return big(1);
}

functions["evo_b01_power"] = (x) => {
    return x.div(3).add(1).log(10).div(3).add(1).log(10).add(1);
}
functions["evo_b02_power"] = (x) => {
    return x.pow(3).max(1);
}
functions["evo_b03_power"] = (x) => {
    return x.mult(2).max(1).log(2).pow(0.5).rounddown();
}

functions["evo_b01_secondary"] = () => {
    let base_reward = unlocked_layers();
    if (player.unlocked_photonic) base_reward -= 1;
    if (player.unlocked_gravitonic) base_reward -= 1;
    if (player.unlocked_neutronic) base_reward -= 1;
    if (player.unlocked_vacuumic) base_reward -= 1;
    if (player.unlocked_dimensional) base_reward -= 1;
    if (player.unlocked_atomic) base_reward -= 1;
    return big(2).pow(base_reward - 1);
}
functions["evo_b02_secondary"] = () => {
    return big(10);
}
functions["evo_b03_secondary"] = () => {
    return big(player.photonic_resets).add(1);
}

functions["evo_b01_buy"] = (amt) => {
    player.atoms = player.atoms.add(player.evolutions['b01'].get_secondary_effect()).round();
    player.collision_knowledge = player.collision_knowledge.add(player.evolutions['b01'].get_secondary_effect()).round();
    // Challenge 4: all resources are capped
    // a05_2: Atoms and Collision Knowledge are not affected by resource limit
    if (!player.milestones['a05_2'].is_active()) {
        player.atoms = player.atoms.min(player.challenge_strength_4);
        player.collision_knowledge = player.collision_knowledge.min(player.challenge_strength_4);
    }
}