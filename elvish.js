Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "elvish", name: "Q WORKSHOP Elvish Dice"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/elvish/elvish_d2.glb",
		system: "elvish"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/elvish/elvish_SELV05_d4.glb",
		system: "elvish"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/elvish/elvish_SELV05_d6.glb",
		system: "elvish"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/elvish/elvish_SELV05_d8.glb",
		system: "elvish"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/elvish/elvish_SELV05_d10.glb",
		system: "elvish"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/elvish/elvish_SELV05_d100.glb",
		system: "elvish"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/elvish/elvish_SELV05_d12.glb",
		system: "elvish"
	});
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/elvish/elvish_SELV05_d20.glb",
		system: "elvish"
	});
});
