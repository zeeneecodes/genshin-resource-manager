const characterDetails = [
	{
		name: 'Xianyun',
		vision: 'Anemo',
		regionSpecialty: 'Clearwater Jade',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Solitary Suanni',
		rarity: 5
	}, {
		name: 'Navia',
		vision: 'Geo',
		regionSpecialty: 'Spring of the First Dewdrop',
		mobDrop: 'Sea Creatures',
		dailyBoss: 'Icewind Suite - Coppelius',
		rarity: 5
	}, {
		name: 'Furina',
		vision: 'Hydro',
		regionSpecialty: 'Lakelight Lily',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Hydro Tulpa',
		rarity: 5
	},{
		name:'Neuvillette',
		vision: 'Hydro',
		regionSpecialty: 'Lumitoile',
		mobDrop: 'Sea Creatures',
		dailyBoss: 'Millenial Pearl Seahorse',
		rarity: 5
	}, {
		name: 'Wriothesley',
		vision: 'Cryo',
		regionSpecialty: 'Sudetection Unit',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Experimental Field Generator',
		rarity: 5
	}, {
		name: 'Lyney',
		vision: 'Pyro',
		regionSpecialty: 'Rainbow Rose',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Emperor of Fire and Iron',
		rarity: 5
	}, {
		name: 'Baizhu',
		vision: 'Dendro',
		regionSpecialty: 'Violetgrass',
		mobDrop: 'Fungi',
		dailyBoss: 'Iniquitous Baptist',
		rarity: 5
	}, {
		name: 'Dehya',
		vision: 'Pyro',
		regionSpecialty: 'Sand Grease Pupa',
		mobDrop: 'Eremites',
		dailyBoss: 'Algorithm of Semi-Intransient Matrix of Overseer Network',
		rarity: 5
	}, {
		name: 'Alhaitham',
		vision: 'Dendro',
		regionSpecialty: 'Sand Grease Pupa',
		mobDrop: 'Eremites',
		dailyBoss: 'Setekh Wenut',
		rarity: 5
	}, {
		name: 'Wanderer',
		vision: 'Anemo',
		regionSpecialty: 'Rukkhashava Mushrooms',
		mobDrop: 'Handguard',
		dailyBoss: 'Aeonblight Drake',
		rarity: 5
	}, {
		name: 'Nahida',
		vision: 'Dendro',
		regionSpecialty: 'Kalpalata Lotus',
		mobDrop: 'Fungi',
		dailyBoss: 'Dendro Hypostasis',
		rarity: 5
	}, {
		name: 'Cyno',
		vision: 'Electro',
		regionSpecialty: 'Scarab',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Electro Regisvine',
		rarity: 5
	}, {
		name: 'Nilou',
		vision: 'Hydro',
		regionSpecialty: 'Padisarah',
		mobDrop: 'Fungi',
		dailyBoss: 'Aeonblight Drake',
		rarity: 5
	}, {
		name: 'Tighnari',
		vision: 'Dendro',
		regionSpecialty: 'Nilotpala Lotus',
		mobDrop: 'Fungi',
		dailyBoss: 'Jadeplume Terrorshroom',
		rarity: 5
	}, {
		name: 'Kamisato Ayato',
		vision: 'Hydro',
		regionSpecialty: 'Sakura Bloom',
		mobDrop: 'Handguard',
		dailyBoss: 'Hydro Hypostasis',
		rarity: 5
	}, {
		name: 'Shenhe',
		vision: 'Cryo',
		regionSpecialty: 'Qingxin',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Bathysmal Vishap Herd',
		rarity: 5
	}, {
		name: 'Yelan',
		vision: 'Hydro',
		regionSpecialty: 'Starconch',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Ruin Serpent',
		rarity: 5
	}, {
		name: 'Yae Miko',
		vision: 'Electro',
		regionSpecialty: 'Sea Ganoderma',
		mobDrop: 'Handguard',
		dailyBoss: 'Bathysmal Vishap Herd',
		rarity: 5
	}, {
		name: 'Arataki Itto',
		vision: 'Geo',
		regionSpecialty: 'Okinabuto',
		mobDrop: 'Slime',
		dailyBoss: 'Golden Wolflord',
		rarity: 5
	}, {
		name: 'Sangonomiya Kokomi',
		vision: 'Hydro',
		regionSpecialty: 'Sango Pearl',
		mobDrop: 'Specters',
		dailyBoss: 'Hydro Hypostasis',
		rarity: 5
	}, {
		name: 'Raiden Shogun',
		vision: 'Electro',
		regionSpecialty: 'Amakumo Fruit',
		mobDrop: 'Handguard',
		dailyBoss: 'Thunder Manifestation',
		rarity: 5
	}, {
		name: 'Eula',
		vision: 'Cryo',
		regionSpecialty: 'Dandelion Seed',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Cryo Hypostasis',
		rarity: 5
	}, {
		name: 'Yoimiya',
		vision: 'Pyro',
		regionSpecialty: 'Naku Weed',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Pyro Hypostasis',
		rarity: 5
	}, {
		name: 'Kaedehara Kazuha',
		vision: 'Anemo',
		regionSpecialty: 'Sea Ganoderma',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Maguu Kenki',
		rarity: 5
	}, {
		name: 'Hu Tao',
		vision: 'Pyro',
		regionSpecialty: 'Silk Flower',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Primo Geovishap',
		rarity: 5
	}, {
		name: 'Keqing',
		vision: 'Electro',
		regionSpecialty: 'Cor Lapis',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Electro Hypostasis',
		rarity: 5
	}, {
		name: 'Mona',
		vision: 'Hydro',
		regionSpecialty: 'Philanemo Mushroom',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Oceanid',
		rarity: 5
	}, {
		name: 'Albedo',
		vision: 'Geo',
		regionSpecialty: 'Cecilia',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Geo Hypostasis',
		rarity: 5
	}, {
		name: 'Ganyu',
		vision: 'Cryo',
		regionSpecialty: 'Qingxin',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Cryo Regisvine',
		rarity: 5
	}, {
		name: 'Qiqi',
		vision: 'Cryo',
		regionSpecialty: 'Violetgrass',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Cryo Regisvine',
		rarity: 5
	}, {
		name: 'Tartaglia',
		vision: 'Hydro',
		regionSpecialty: 'Starconch',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Oceanid',
		rarity: 5
	}, {
		name: 'Zhongli',
		vision: 'Geo',
		regionSpecialty: 'Cor Lapis',
		mobDrop: 'Slime',
		dailyBoss: 'Geo Hypostasis',
		rarity: 5
	}, {
		name: 'Klee',
		vision: 'Pyro',
		regionSpecialty: 'Philanemo Mushroom',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Pyro Regisvine',
		rarity: 5
	}, {
		name: 'Xiao',
		vision: 'Anemo',
		regionSpecialty: 'Qingxin',
		mobDrop: 'Slime',
		dailyBoss: 'Primo Geovishap',
		rarity: 5
	}, {
		name: 'Venti',
		vision: 'Anemo',
		regionSpecialty: 'Cecilia',
		mobDrop: 'Slime',
		dailyBoss: 'Anemo Hypostasis',
		rarity: 5
	}, {
		name: 'Diluc',
		vision: 'Pyro',
		regionSpecialty: 'Small Lamp Grass',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Pyro Regisvine',
		rarity: 5
	}, {
		name: 'Jean',
		vision: 'Anemo',
		regionSpecialty: 'Dandelion Seed',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Anemo Hypostasis',
		rarity: 5
	}, {
		name: 'Kamisato Ayaka',
		vision: 'Cryo',
		regionSpecialty: 'Sakura Bloom',
		mobDrop: 'Handguard',
		dailyBoss:'Perpetual Mechanical Array',
		rarity: 5
	}, {
		name: 'Aloy',
		vision: 'Cryo',
		regionSpecialty: 'Crystal Marrow',
		mobDrop: 'Specters',
		dailyBoss: 'Cryo Hypostasis',
		rarity: 5
	}, {
		name: 'Gaming',
		vision: 'Pyro',
		regionSpecialty: 'Starconch',
		mobDrop: 'Slime',
		dailyBoss: 'Emperor of Fire and Iron',
		rarity: 4
	}, {
		name: 'Chevreuse',
		vision: 'Pyro',
		regionSpecialty: 'Lumidouce Bell',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Millenial Pearl Seahorse',
		rarity: 4
	}, {
		name: 'Charlotte',
		vision: 'Cryo',
		regionSpecialty: 'Beryl Conch',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Experimental Field Generator',
		rarity: 4
	}, {
		name: 'Freminet',
		vision: 'Cryo',
		regionSpecialty: 'Romaritime Flower',
		mobDrop: 'Sea Creatures',
		dailyBoss: 'Icewind Suite - Coppelius',
		rarity: 4
	}, {
		name: 'Lynette',
		vision: 'Anemo',
		regionSpecialty: 'Lumidouce Bell',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Icewind Suite - Coppelia',
		rarity: 4
	}, {
		name: 'Kaveh',
		vision: 'Dendro',
		regionSpecialty: 'Mourning Flower',
		mobDrop: 'Fungi',
		dailyBoss: 'Dendro Hypostasis',
		rarity: 4
	}, {
		name: 'Mika',
		vision: 'Cryo',
		regionSpecialty: 'Wolfhook',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Setekh Wenut',
		rarity: 4
	}, {
		name: 'Yaoyao',
		vision: 'Dendro',
		regionSpecialty: 'Jueyun Chili',
		mobDrop: 'Slime',
		dailyBoss: 'Dendro Hypostasis',
		rarity: 4
	}, {
		name: 'Faruzan',
		vision: 'Anemo',
		regionSpecialty: 'Henna Berry',
		mobDrop: 'Eremites',
		dailyBoss: 'Algorithm of Semi-Intransient Matrix of Overseer Network',
		rarity: 4
	}, {
		name: 'Layla',
		vision: 'Cryo',
		regionSpecialty: 'Nilotpala Lotus',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Aeonblight Drake',
		rarity: 4
	}, {
		name: 'Candace',
		vision: 'Hydro',
		regionSpecialty: 'Henna Berry',
		mobDrop: 'Eremites',
		dailyBoss: 'Algorithm of Semi-Intransient Matrix of Overseer Network',
		rarity: 4
	}, {
		name: 'Dori',
		vision: 'Electro',
		regionSpecialty: 'Kalpalata Lotus',
		mobDrop: 'Eremites',
		dailyBoss: 'Electro Regisvine',
		rarity: 4
	}, {
		name: 'Collei',
		vision: 'Dendro',
		regionSpecialty: 'Rukkhashava Mushrooms',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Jadeplume Terrorshroom',
		rarity: 4
	}, {
		name: 'Kuki Shinobu',
		vision: 'Electro',
		regionSpecialty: 'Naku Weed',
		mobDrop: 'Specters',
		dailyBoss: 'Ruin Serpent',
		rarity: 4
	}, {
		name: 'Yun Jin',
		vision: 'Geo',
		regionSpecialty: 'Glaze Lily',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Golden Wolflord',
		rarity: 4
	}, {
		name: 'Kirara',
		vision: 'Dendro',
		regionSpecialty: 'Amakumo Fruit',
		mobDrop: 'Specters',
		dailyBoss: 'Iniquitous Baptist',
		rarity: 4
	}, {
		name: 'Shikanoin Heizou',
		vision: 'Anemo',
		regionSpecialty: 'Okinabuto',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Ruin Serpent',
		rarity: 4
	}, {
		name: 'Kujou Sara',
		vision: 'Electro',
		regionSpecialty: 'Dendrobium',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Thunder Manifestation',
		rarity: 4
	}, {
		name: 'Gorou',
		vision: 'Geo',
		regionSpecialty: 'Sango Pearl',
		mobDrop: 'Specters',
		dailyBoss: 'Perpetual Mechanical Array',
		rarity: 4
	}, {
		name: 'Sayu',
		vision: 'Anemo',
		regionSpecialty: 'Crystal Marrow',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Maguu Kenki',
		rarity: 4
	}, {
		name: 'Thoma',
		vision: 'Pyro',
		regionSpecialty: 'Fluorescent Fungus',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Pyro Hypostasis',
		rarity: 4
	}, {
		name: 'Yanfei',
		vision: 'Pyro',
		regionSpecialty: 'Noctilucous Jade',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Primo Geovishap',
		rarity: 4
	}, {
		name: 'Rosaria',
		vision: 'Cryo',
		regionSpecialty: 'Valberry',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Cryo Regisvine',
		rarity: 4
	}, {
		name: 'Xinyan',
		vision: 'Pyro',
		regionSpecialty: 'Violetgrass',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Pyro Regisvine',
		rarity: 4
	}, {
		name: 'Sucrose',
		vision: 'Anemo',
		regionSpecialty: 'Windwheel Aster',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Anemo Hypostasis',
		rarity: 4
	}, {
		name: 'Diona',
		vision: 'Cryo',
		regionSpecialty: 'Calla Lily',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Cryo Regisvine',
		rarity: 4
	}, {
		name: 'Chongyun',
		vision: 'Cryo',
		regionSpecialty: 'Cor Lapis',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Cryo Regisvine',
		rarity: 4
	}, {
		name: 'Noelle',
		vision: 'Geo',
		regionSpecialty: 'Valberry',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Geo Hypostasis',
		rarity: 4
	}, {
		name: 'Bennett',
		vision: 'Pyro',
		regionSpecialty: 'Windwheel Aster',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Pyro Regisvine',
		rarity: 4
	}, {
		name: 'Fischl',
		vision: 'Electro',
		regionSpecialty: 'Small Lamp Grass',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Electro Hypostasis',
		rarity: 4
	}, {
		name: 'Ningguang',
		vision: 'Geo',
		regionSpecialty: 'Glaze Lily',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Geo Hypostasis',
		rarity: 4
	}, {
		name: 'Xingqiu',
		vision: 'Hydro',
		regionSpecialty: 'Silk Flower',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Oceanid',
		rarity: 4
	}, {
		name: 'Beidou',
		vision: 'Electro',
		regionSpecialty: 'Noctilucous Jade',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Electro Hypostasis',
		rarity: 4
	}, {
		name: 'Xiangling',
		vision: 'Pyro',
		regionSpecialty: 'Jueyun Chili',
		mobDrop: 'Slime',
		dailyBoss: 'Pyro Regisvine',
		rarity: 4
	}, {
		name: 'Amber',
		vision: 'Pyro',
		regionSpecialty: 'Small Lamp Grass',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Pyro Regisvine',
		rarity: 4
	}, {
		name: 'Razor',
		vision: 'Electro',
		regionSpecialty: 'Wolfhook',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Electro Hypostasis',
		rarity: 4
	}, {
		name: 'Kaeya',
		vision: 'Cryo',
		regionSpecialty: 'Calla Lily',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Cryo Regisvine',
		rarity: 4
	}, {
		name: 'Barbara',
		vision: 'Hydro',
		regionSpecialty: 'Philanemo Mushroom',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Oceanid',
		rarity: 4
	}, {
		name: 'Lisa',
		vision: 'Electro',
		regionSpecialty: 'Valberry',
		mobDrop: 'Slime',
		dailyBoss: 'Electro Hypostasis',
		rarity: 4
	}
];