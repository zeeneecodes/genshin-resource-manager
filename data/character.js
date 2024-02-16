const characterDetails = [
	{
		name: 'Xianyun',
		vision: 'Anemo',
		regionSpecialty: 'Clearwater Jade',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Solitary Suanni'
	}, {
		name: 'Navia',
		vision: 'Geo',
		regionSpecialty: 'Spring of the First Dewdrop',
		mobDrop: 'Sea Creatures',
		dailyBoss: 'Icewind Suite - Coppelius'
	}, {
		name: 'Furina',
		vision: 'Hydro',
		regionSpecialty: 'Lakelight Lily',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Hydro Tulpa'
	},{
		name:'Neuvillette',
		vision: 'Hydro',
		regionSpecialty: 'Lumitoile',
		mobDrop: 'Sea Creatures',
		dailyBoss: 'Millenial Pearl Seahorse'
	}, {
		name: 'Wriothesley',
		vision: 'Cryo',
		regionSpecialty: 'Sudetection Unit',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Experimental Field Generator'
	}, {
		name: 'Lyney',
		vision: 'Pyro',
		regionSpecialty: 'Rainbow Rose',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Emperor of Fire and Iron'
	}, {
		name: 'Baizhu',
		vision: 'Dendro',
		regionSpecialty: 'Violetgrass',
		mobDrop: 'Fungi',
		dailyBoss: 'Iniquitous Baptist'
	}, {
		name: 'Dehya',
		vision: 'Pyro',
		regionSpecialty: 'Sand Grease Pupa',
		mobDrop: 'Eremites',
		dailyBoss: 'Algorithm of Semi-Intransient Matrix of Overseer Network'
	}, {
		name: 'Alhaitham',
		vision: 'Dendro',
		regionSpecialty: 'Sand Grease Pupa',
		mobDrop: 'Eremites',
		dailyBoss: 'Setekh Wenut'
	}, {
		name: 'Wanderer',
		vision: 'Anemo',
		regionSpecialty: 'Rukkhashava Mushrooms',
		mobDrop: 'Handguard',
		dailyBoss: 'Aeonblight Drake'
	}, {
		name: 'Nahida',
		vision: 'Dendro',
		regionSpecialty: 'Kalpalata Lotus',
		mobDrop: 'Fungi',
		dailyBoss: 'Dendro Hypostasis'
	}, {
		name: 'Cyno',
		vision: 'Electro',
		regionSpecialty: 'Scarab',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Electro Regisvine'
	}, {
		name: 'Nilou',
		vision: 'Hydro',
		regionSpecialty: 'Padisarah',
		mobDrop: 'Fungi',
		dailyBoss: 'Aeonblight Drake'
	}, {
		name: 'Tighnari',
		vision: 'Dendro',
		regionSpecialty: 'Nilotpala Lotus',
		mobDrop: 'Fungi',
		dailyBoss: 'Jadeplume Terrorshroom'
	}, {
		name: 'Kamisato Ayato',
		vision: 'Hydro',
		regionSpecialty: 'Sakura Bloom',
		mobDrop: 'Handguard',
		dailyBoss: 'Hydro Hypostasis'
	}, {
		name: 'Shenhe',
		vision: 'Cryo',
		regionSpecialty: 'Qingxin',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Bathysmal Vishap Herd'
	}, {
		name: 'Yelan',
		vision: 'Hydro',
		regionSpecialty: 'Starconch',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Ruin Serpent'
	}, {
		name: 'Yae Miko',
		vision: 'Electro',
		regionSpecialty: 'Sea Ganoderma',
		mobDrop: 'Handguard',
		dailyBoss: 'Bathysmal Vishap Herd'
	}, {
		name: 'Arataki Itto',
		vision: 'Geo',
		regionSpecialty: 'Okinabuto',
		mobDrop: 'Slime',
		dailyBoss: 'Golden Wolflord'
	}, {
		name: 'Sangonomiya Kokomi',
		vision: 'Hydro',
		regionSpecialty: 'Sango Pearl',
		mobDrop: 'Specters',
		dailyBoss: 'Hydro Hypostasis'
	}, {
		name: 'Raiden Shogun',
		vision: 'Electro',
		regionSpecialty: 'Amakumo Fruit',
		mobDrop: 'Handguard',
		dailyBoss: 'Thunder Manifestation'
	}, {
		name: 'Eula',
		vision: 'Cryo',
		regionSpecialty: 'Dandelion Seed',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Cryo Hypostasis'
	}, {
		name: 'Yoimiya',
		vision: 'Pyro',
		regionSpecialty: 'Naku Weed',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Pyro Hypostasis'
	}, {
		name: 'Kaedehara Kazuha',
		vision: 'Anemo',
		regionSpecialty: 'Sea Ganoderma',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Maguu Kenki'
	}, {
		name: 'Hu Tao',
		vision: 'Pyro',
		regionSpecialty: 'Silk Flower',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Primo Geovishap'
	}, {
		name: 'Keqing',
		vision: 'Electro',
		regionSpecialty: 'Cor Lapis',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Electro Hypostasis'
	}, {
		name: 'Mona',
		vision: 'Hydro',
		regionSpecialty: 'Philanemo Mushroom',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Oceanid'
	}, {
		name: 'Albedo',
		vision: 'Geo',
		regionSpecialty: 'Cecilia',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Geo Hypostasis'
	}, {
		name: 'Ganyu',
		vision: 'Cryo',
		regionSpecialty: 'Qingxin',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Cryo Regisvine'
	}, {
		name: 'Qiqi',
		vision: 'Cryo',
		regionSpecialty: 'Violetgrass',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Cryo Regisvine'
	}, {
		name: 'Tartaglia',
		vision: 'Hydro',
		regionSpecialty: 'Starconch',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Oceanid'
	}, {
		name: 'Zhongli',
		vision: 'Geo',
		regionSpecialty: 'Cor Lapis',
		mobDrop: 'Slime',
		dailyBoss: 'Geo Hypostasis'
	}, {
		name: 'Klee',
		vision: 'Pyro',
		regionSpecialty: 'Philanemo Mushroom',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Pyro Regisvine'
	}, {
		name: 'Xiao',
		vision: 'Anemo',
		regionSpecialty: 'Qingxin',
		mobDrop: 'Slime',
		dailyBoss: 'Primo Geovishap'
	}, {
		name: 'Venti',
		vision: 'Anemo',
		regionSpecialty: 'Cecilia',
		mobDrop: 'Slime',
		dailyBoss: 'Anemo Hypostasis'
	}, {
		name: 'Diluc',
		vision: 'Pyro',
		regionSpecialty: 'Small Lamp Grass',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Pyro Regisvine'
	}, {
		name: 'Jean',
		vision: 'Anemo',
		regionSpecialty: 'Dandelion Seed',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Anemo Hypostasis'
	}, {
		name: 'Kamisato Ayaka',
		vision: 'Cryo',
		regionSpecialty: 'Sakura Bloom',
		mobDrop: 'Handguard',
		dailyBoss:'Perpetual Mechanical Array'
	}, {
		name: 'Aloy',
		vision: 'Cryo',
		regionSpecialty: 'Crystal Marrow',
		mobDrop: 'Specters',
		dailyBoss: 'Cryo Hypostasis'
	}, {
		name: 'Gaming',
		vision: 'Pyro',
		regionSpecialty: 'Starconch',
		mobDrop: 'Slime',
		dailyBoss: 'Emperor of Fire and Iron'
	}, {
		name: 'Chevreuse',
		vision: 'Pyro',
		regionSpecialty: 'Lumidouce Bell',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Millenial Pearl Seahorse'
	}, {
		name: 'Charlotte',
		vision: 'Cryo',
		regionSpecialty: 'Beryl Conch',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Experimental Field Generator'
	}, {
		name: 'Freminet',
		vision: 'Cryo',
		regionSpecialty: 'Romaritime Flower',
		mobDrop: 'Sea Creatures',
		dailyBoss: 'Icewind Suite - Coppelius'
	}, {
		name: 'Lynette',
		vision: 'Anemo',
		regionSpecialty: 'Lumidouce Bell',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Icewind Suite - Coppelia'
	}, {
		name: 'Kaveh',
		vision: 'Dendro',
		regionSpecialty: 'Mourning Flower',
		mobDrop: 'Fungi',
		dailyBoss: 'Dendro Hypostasis'
	}, {
		name: 'Mika',
		vision: 'Cryo',
		regionSpecialty: 'Wolfhook',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Setekh Wenut'
	}, {
		name: 'Yaoyao',
		vision: 'Dendro',
		regionSpecialty: 'Jueyun Chili',
		mobDrop: 'Slime',
		dailyBoss: 'Dendro Hypostasis'
	}, {
		name: 'Faruzan',
		vision: 'Anemo',
		regionSpecialty: 'Henna Berry',
		mobDrop: 'Eremites',
		dailyBoss: 'Algorithm of Semi-Intransient Matrix of Overseer Network'
	}, {
		name: 'Layla',
		vision: 'Cryo',
		regionSpecialty: 'Nilotpala Lotus',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Aeonblight Drake'
	}, {
		name: 'Candace',
		vision: 'Hydro',
		regionSpecialty: 'Henna Berry',
		mobDrop: 'Eremites',
		dailyBoss: 'Algorithm of Semi-Intransient Matrix of Overseer Network'
	}, {
		name: 'Dori',
		vision: 'Electro',
		regionSpecialty: 'Kalpalata Lotus',
		mobDrop: 'Eremites',
		dailyBoss: 'Electro Regisvine'
	}, {
		name: 'Collei',
		vision: 'Dendro',
		regionSpecialty: 'Rukkhashava Mushrooms',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Jadeplume Terrorshroom'
	}, {
		name: 'Kuki Shinobu',
		vision: 'Electro',
		regionSpecialty: 'Naku Weed',
		mobDrop: 'Specters',
		dailyBoss: 'Ruin Serpent'
	}, {
		name: 'Yun Jin',
		vision: 'Geo',
		regionSpecialty: 'Glaze Lily',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Golden Wolflord'
	}, {
		name: 'Kirara',
		vision: 'Dendro',
		regionSpecialty: 'Amakumo Fruit',
		mobDrop: 'Specters',
		dailyBoss: 'Iniquitous Baptist'
	}, {
		name: 'Shikanoin Heizou',
		vision: 'Anemo',
		regionSpecialty: 'Okinabuto',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Ruin Serpent'
	}, {
		name: 'Kujou Sara',
		vision: 'Electro',
		regionSpecialty: 'Dendrobium',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Thunder Manifestation'
	}, {
		name: 'Gorou',
		vision: 'Geo',
		regionSpecialty: 'Sango Pearl',
		mobDrop: 'Specters',
		dailyBoss: 'Perpetual Mechanical Array'
	}, {
		name: 'Sayu',
		vision: 'Anemo',
		regionSpecialty: 'Crystal Marrow',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Maguu Kenki'
	}, {
		name: 'Thoma',
		vision: 'Pyro',
		regionSpecialty: 'Fluorescent Fungus',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Pyro Hypostasis'
	}, {
		name: 'Yanfei',
		vision: 'Pyro',
		regionSpecialty: 'Noctilucous Jade',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Primo Geovishap'
	}, {
		name: 'Rosaria',
		vision: 'Cryo',
		regionSpecialty: 'Valberry',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Cryo Regisvine'
	}, {
		name: 'Xinyan',
		vision: 'Pyro',
		regionSpecialty: 'Violetgrass',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Pyro Regisvine'
	}, {
		name: 'Sucrose',
		vision: 'Anemo',
		regionSpecialty: 'Windwheel Aster',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Anemo Hypostasis'
	}, {
		name: 'Diona',
		vision: 'Cryo',
		regionSpecialty: 'Calla Lily',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Cryo Regisvine'
	}, {
		name: 'Chongyun',
		vision: 'Cryo',
		regionSpecialty: 'Cor Lapis',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Cryo Regisvine'
	}, {
		name: 'Noelle',
		vision: 'Geo',
		regionSpecialty: 'Valberry',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Geo Hypostasis'
	}, {
		name: 'Bennett',
		vision: 'Pyro',
		regionSpecialty: 'Windwheel Aster',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Pyro Regisvine'
	}, {
		name: 'Fischl',
		vision: 'Electro',
		regionSpecialty: 'Small Lamp Grass',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Electro Hypostasis'
	}, {
		name: 'Ningguang',
		vision: 'Geo',
		regionSpecialty: 'Glaze Lily',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Geo Hypostasis'
	}, {
		name: 'Xingqiu',
		vision: 'Hydro',
		regionSpecialty: 'Silk Flower',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Oceanid'
	}, {
		name: 'Beidou',
		vision: 'Electro',
		regionSpecialty: 'Noctilucous Jade',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Electro Hypostasis'
	}, {
		name: 'Xiangling',
		vision: 'Pyro',
		regionSpecialty: 'Jueyun Chili',
		mobDrop: 'Slime',
		dailyBoss: 'Pyro Regisvine'
	}, {
		name: 'Amber',
		vision: 'Pyro',
		regionSpecialty: 'Small Lamp Grass',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Pyro Regisvine'
	}, {
		name: 'Razor',
		vision: 'Electro',
		regionSpecialty: 'Wolfhook',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Electro Hypostasis'
	}, {
		name: 'Kaeya',
		vision: 'Cryo',
		regionSpecialty: 'Calla Lily',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Cryo Regisvine'
	}, {
		name: 'Barbara',
		vision: 'Hydro',
		regionSpecialty: 'Philanemo Mushroom',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Oceanid'
	}, {
		name: 'Lisa',
		vision: 'Electro',
		regionSpecialty: 'Valberry',
		mobDrop: 'Slime',
		dailyBoss: 'Electro Hypostasis'
	}
];