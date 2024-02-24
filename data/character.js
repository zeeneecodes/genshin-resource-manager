const characterDetails = [
	{
		name: 'Xianyun',
		vision: 'Anemo',
		regionSpecialty: 'Clearwater Jade',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Solitary Suanni',
		rarity: 5,
		talentBook: 'Gold',
		weeklyBoss: 'Lighless Eye of the Maelstrom'
	}, {
		name: 'Navia',
		vision: 'Geo',
		regionSpecialty: 'Spring of the First Dewdrop',
		mobDrop: 'Sea Creatures',
		dailyBoss: 'Icewind Suite - Coppelius',
		rarity: 5,
		talentBook: 'Equity',
		weeklyBoss: 'Lighless Silk String'
	}, {
		name: 'Furina',
		vision: 'Hydro',
		regionSpecialty: 'Lakelight Lily',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Hydro Tulpa',
		rarity: 5,
		talentBook: 'Justice',
		weeklyBoss: 'Lightless Mass'
	},{
		name:'Neuvillette',
		vision: 'Hydro',
		regionSpecialty: 'Lumitoile',
		mobDrop: 'Sea Creatures',
		dailyBoss: 'Millenial Pearl Seahorse',
		rarity: 5,
		talentBook: 'Equity',
		weeklyBoss: 'Evarember'
	}, {
		name: 'Wriothesley',
		vision: 'Cryo',
		regionSpecialty: 'Sudetection Unit',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Experimental Field Generator',
		rarity: 5,
		talentBook: 'Order',
		weeklyBoss: 'Primordial Greenbloom'
	}, {
		name: 'Lyney',
		vision: 'Pyro',
		regionSpecialty: 'Rainbow Rose',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Emperor of Fire and Iron',
		rarity: 5,
		talentBook: 'Equity',
		weeklyBoss: 'Primordial Greenbloom'
	}, {
		name: 'Baizhu',
		vision: 'Dendro',
		regionSpecialty: 'Violetgrass',
		mobDrop: 'Fungi',
		dailyBoss: 'Iniquitous Baptist',
		rarity: 5,
		talentBook: 'Gold',
		weeklyBoss: 'Worldspan Fern'
	}, {
		name: 'Dehya',
		vision: 'Pyro',
		regionSpecialty: 'Sand Grease Pupa',
		mobDrop: 'Eremites',
		dailyBoss: 'Algorithm of Semi-Intransient Matrix of Overseer Network',
		rarity: 5,
		talentBook: 'Praxis',
		weeklyBoss: 'Puppet Strings'
	}, {
		name: 'Alhaitham',
		vision: 'Dendro',
		regionSpecialty: 'Sand Grease Pupa',
		mobDrop: 'Eremites',
		dailyBoss: 'Setekh Wenut',
		rarity: 5,
		talentBook: 'Ingenuity',
		weeklyBoss: 'Mirror of Mushin'
	}, {
		name: 'Wanderer',
		vision: 'Anemo',
		regionSpecialty: 'Rukkhashava Mushrooms',
		mobDrop: 'Handguard',
		dailyBoss: 'Aeonblight Drake',
		rarity: 5,
		talentBook: 'Praxis',
		weeklyBoss: "Daka's Bell"
	}, {
		name: 'Nahida',
		vision: 'Dendro',
		regionSpecialty: 'Kalpalata Lotus',
		mobDrop: 'Fungi',
		dailyBoss: 'Dendro Hypostasis',
		rarity: 5,
		talentBook: 'Ingenuity',
		weeklyBoss: 'Puppet Strings'
	}, {
		name: 'Cyno',
		vision: 'Electro',
		regionSpecialty: 'Scarab',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Electro Regisvine',
		rarity: 5,
		talentBook: 'Admonition',
		weeklyBoss: 'Mudra of the Malefic General'
	}, {
		name: 'Nilou',
		vision: 'Hydro',
		regionSpecialty: 'Padisarah',
		mobDrop: 'Fungi',
		dailyBoss: 'Aeonblight Drake',
		rarity: 5,
		talentBook: 'Praxis',
		weeklyBoss: 'Tears of the Calamitous God'
	}, {
		name: 'Tighnari',
		vision: 'Dendro',
		regionSpecialty: 'Nilotpala Lotus',
		mobDrop: 'Fungi',
		dailyBoss: 'Jadeplume Terrorshroom',
		rarity: 5,
		talentBook: 'Admonition',
		weeklyBoss: 'The Meaning of Aeons'
	}, {
		name: 'Kamisato Ayato',
		vision: 'Hydro',
		regionSpecialty: 'Sakura Bloom',
		mobDrop: 'Handguard',
		dailyBoss: 'Hydro Hypostasis',
		rarity: 5,
		talentBook: 'Elegance',
		weeklyBoss: 'Mudra of the Malefic General'
	}, {
		name: 'Shenhe',
		vision: 'Cryo',
		regionSpecialty: 'Qingxin',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Bathysmal Vishap Herd',
		rarity: 5,
		talentBook: 'Prosperity',
		weeklyBoss: 'Hellfire Butterfly'
	}, {
		name: 'Yelan',
		vision: 'Hydro',
		regionSpecialty: 'Starconch',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Ruin Serpent',
		rarity: 5,
		talentBook: 'Prosperity',
		weeklyBoss: 'Gilded Scale'
	}, {
		name: 'Yae Miko',
		vision: 'Electro',
		regionSpecialty: 'Sea Ganoderma',
		mobDrop: 'Handguard',
		dailyBoss: 'Bathysmal Vishap Herd',
		rarity: 5,
		talentBook: 'Light',
		weeklyBoss: 'The Meaning of Aeons'
	}, {
		name: 'Arataki Itto',
		vision: 'Geo',
		regionSpecialty: 'Okinabuto',
		mobDrop: 'Slime',
		dailyBoss: 'Golden Wolflord',
		rarity: 5,
		talentBook: 'Elegance',
		weeklyBoss: 'Ashen Heart'
	}, {
		name: 'Sangonomiya Kokomi',
		vision: 'Hydro',
		regionSpecialty: 'Sango Pearl',
		mobDrop: 'Specters',
		dailyBoss: 'Hydro Hypostasis',
		rarity: 5,
		talentBook: 'Transcience',
		weeklyBoss: 'Hellfire Butterfly'
	}, {
		name: 'Raiden Shogun',
		vision: 'Electro',
		regionSpecialty: 'Amakumo Fruit',
		mobDrop: 'Handguard',
		dailyBoss: 'Thunder Manifestation',
		rarity: 5,
		talentBook: 'Light',
		weeklyBoss: 'Molten Moment'
	}, {
		name: 'Eula',
		vision: 'Cryo',
		regionSpecialty: 'Dandelion Seed',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Cryo Hypostasis',
		rarity: 5,
		talentBook: 'Resistance',
		weeklyBoss: "Dragon Lord's Crown"
	}, {
		name: 'Yoimiya',
		vision: 'Pyro',
		regionSpecialty: 'Naku Weed',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Pyro Hypostasis',
		rarity: 5,
		talentBook: 'Transcience',
		weeklyBoss: "Dragon Lord's Crown"
	}, {
		name: 'Kaedehara Kazuha',
		vision: 'Anemo',
		regionSpecialty: 'Sea Ganoderma',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Maguu Kenki',
		rarity: 5,
		talentBook: 'Diligence',
		weeklyBoss: 'Gilded Scale'
	}, {
		name: 'Hu Tao',
		vision: 'Pyro',
		regionSpecialty: 'Silk Flower',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Primo Geovishap',
		rarity: 5,
		talentBook: 'Diligence',
		weeklyBoss: 'Shard of a Foul Legacy'
	}, {
		name: 'Keqing',
		vision: 'Electro',
		regionSpecialty: 'Cor Lapis',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Electro Hypostasis',
		rarity: 5,
		talentBook: 'Prosperity',
		weeklyBoss: 'Ring of Boreas'
	}, {
		name: 'Mona',
		vision: 'Hydro',
		regionSpecialty: 'Philanemo Mushroom',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Oceanid',
		rarity: 5,
		talentBook: 'Resistance',
		weeklyBoss: 'Ring of Boreas'
	}, {
		name: 'Albedo',
		vision: 'Geo',
		regionSpecialty: 'Cecilia',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Geo Hypostasis',
		rarity: 5,
		talentBook: 'Ballad',
		weeklyBoss: 'Tusk of Monoceros Caeli'
	}, {
		name: 'Ganyu',
		vision: 'Cryo',
		regionSpecialty: 'Qingxin',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Cryo Regisvine',
		rarity: 5,
		talentBook: 'Diligence',
		weeklyBoss: 'Shadow of the Warrior'
	}, {
		name: 'Qiqi',
		vision: 'Cryo',
		regionSpecialty: 'Violetgrass',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Cryo Regisvine',
		rarity: 5,
		talentBook: 'Prosperity',
		weeklyBoss: 'Tail of Boreas'
	}, {
		name: 'Tartaglia',
		vision: 'Hydro',
		regionSpecialty: 'Starconch',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Oceanid',
		rarity: 5,
		talentBook: 'Freedom',
		weeklyBoss: 'Shard of a Foul Legacy'
	}, {
		name: 'Zhongli',
		vision: 'Geo',
		regionSpecialty: 'Cor Lapis',
		mobDrop: 'Slime',
		dailyBoss: 'Geo Hypostasis',
		rarity: 5,
		talentBook: 'Gold',
		weeklyBoss: 'Tusk of Monoceros Caeli'
	}, {
		name: 'Klee',
		vision: 'Pyro',
		regionSpecialty: 'Philanemo Mushroom',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Pyro Regisvine',
		rarity: 5,
		talentBook: 'Freedom',
		weeklyBoss: 'Ring of Boreas'
	}, {
		name: 'Xiao',
		vision: 'Anemo',
		regionSpecialty: 'Qingxin',
		mobDrop: 'Slime',
		dailyBoss: 'Primo Geovishap',
		rarity: 5,
		talentBook: 'Prosperity',
		weeklyBoss: 'Shadow of the Warrior'
	}, {
		name: 'Venti',
		vision: 'Anemo',
		regionSpecialty: 'Cecilia',
		mobDrop: 'Slime',
		dailyBoss: 'Anemo Hypostasis',
		rarity: 5,
		talentBook: 'Ballad',
		weeklyBoss: 'Tail of Boreas'
	}, {
		name: 'Diluc',
		vision: 'Pyro',
		regionSpecialty: 'Small Lamp Grass',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Pyro Regisvine',
		rarity: 5,
		talentBook: 'Resistance',
		weeklyBoss: "Dvalin's Plume"
	}, {
		name: 'Jean',
		vision: 'Anemo',
		regionSpecialty: 'Dandelion Seed',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Anemo Hypostasis',
		rarity: 5,
		talentBook: 'Resistance',
		weeklyBoss: "Dvalin's Plume"
	}, {
		name: 'Kamisato Ayaka',
		vision: 'Cryo',
		regionSpecialty: 'Sakura Bloom',
		mobDrop: 'Handguard',
		dailyBoss:'Perpetual Mechanical Array',
		rarity: 5,
		talentBook: 'Elegance',
		weeklyBoss: 'Bloodjade Branch'
	}, {
		name: 'Aloy',
		vision: 'Cryo',
		regionSpecialty: 'Crystal Marrow',
		mobDrop: 'Specters',
		dailyBoss: 'Cryo Hypostasis',
		rarity: 5,
		talentBook: 'Freedom',
		weeklyBoss: 'Molten Moment'
	}, {
		name: 'Gaming',
		vision: 'Pyro',
		regionSpecialty: 'Starconch',
		mobDrop: 'Slime',
		dailyBoss: 'Emperor of Fire and Iron',
		rarity: 4,
		talentBook: 'Prosperity',
		weeklyBoss: 'Lightless Mass'
	}, {
		name: 'Chevreuse',
		vision: 'Pyro',
		regionSpecialty: 'Lumidouce Bell',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Millenial Pearl Seahorse',
		rarity: 4,
		talentBook: 'Order',
		weeklyBoss: 'Lightless Eye of the Maelstrom'
	}, {
		name: 'Charlotte',
		vision: 'Cryo',
		regionSpecialty: 'Beryl Conch',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Experimental Field Generator',
		rarity: 4,
		talentBook: 'Justice',
		weeklyBoss: 'Lighless Silk String'
	}, {
		name: 'Freminet',
		vision: 'Cryo',
		regionSpecialty: 'Romaritime Flower',
		mobDrop: 'Sea Creatures',
		dailyBoss: 'Icewind Suite - Coppelius',
		rarity: 4,
		talentBook: 'Justice',
		weeklyBoss: 'Worldspan Fern'
	}, {
		name: 'Lynette',
		vision: 'Anemo',
		regionSpecialty: 'Lumidouce Bell',
		mobDrop: 'Clockwork Meka',
		dailyBoss: 'Icewind Suite - Coppelia',
		rarity: 4,
		talentBook: 'Order',
		weeklyBoss: 'Evarember'
	}, {
		name: 'Kaveh',
		vision: 'Dendro',
		regionSpecialty: 'Mourning Flower',
		mobDrop: 'Fungi',
		dailyBoss: 'Dendro Hypostasis',
		rarity: 4,
		talentBook: 'Ingenuity',
		weeklyBoss: 'Primordial Greenbloom'
	}, {
		name: 'Mika',
		vision: 'Cryo',
		regionSpecialty: 'Wolfhook',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Setekh Wenut',
		rarity: 4,
		talentBook: 'Ballad',
		weeklyBoss: 'Mirror of Mushin'
	}, {
		name: 'Yaoyao',
		vision: 'Dendro',
		regionSpecialty: 'Jueyun Chili',
		mobDrop: 'Slime',
		dailyBoss: 'Dendro Hypostasis',
		rarity: 4,
		talentBook: 'Diligence',
		weeklyBoss: "Daka's Bell"
	}, {
		name: 'Faruzan',
		vision: 'Anemo',
		regionSpecialty: 'Henna Berry',
		mobDrop: 'Eremites',
		dailyBoss: 'Algorithm of Semi-Intransient Matrix of Overseer Network',
		rarity: 4,
		talentBook: 'Admonition',
		weeklyBoss: 'Puppet String'
	}, {
		name: 'Layla',
		vision: 'Cryo',
		regionSpecialty: 'Nilotpala Lotus',
		mobDrop: 'Samachurl Scroll',
		dailyBoss: 'Aeonblight Drake',
		rarity: 4,
		talentBook: 'Ingenuity',
		weeklyBoss: 'Mirror of Mushin'
	}, {
		name: 'Candace',
		vision: 'Hydro',
		regionSpecialty: 'Henna Berry',
		mobDrop: 'Eremites',
		dailyBoss: 'Algorithm of Semi-Intransient Matrix of Overseer Network',
		rarity: 4,
		talentBook: 'Admonition',
		weeklyBoss: 'Tears of the Calamitous God'
	}, {
		name: 'Dori',
		vision: 'Electro',
		regionSpecialty: 'Kalpalata Lotus',
		mobDrop: 'Eremites',
		dailyBoss: 'Electro Regisvine',
		rarity: 4,
		talentBook: 'Ingenuity',
		weeklyBoss: 'Bloodjade Branch'
	}, {
		name: 'Collei',
		vision: 'Dendro',
		regionSpecialty: 'Rukkhashava Mushrooms',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Jadeplume Terrorshroom',
		rarity: 4,
		talentBook: 'Praxis',
		weeklyBoss: 'Tears of the Calamitous God'
	}, {
		name: 'Kuki Shinobu',
		vision: 'Electro',
		regionSpecialty: 'Naku Weed',
		mobDrop: 'Specters',
		dailyBoss: 'Ruin Serpent',
		rarity: 4,
		talentBook: 'Elegance',
		weeklyBoss: 'Tears of the Calamitous God'
	}, {
		name: 'Yun Jin',
		vision: 'Geo',
		regionSpecialty: 'Glaze Lily',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Golden Wolflord',
		rarity: 4,
		talentBook: 'Diligence',
		weeklyBoss: 'Ashen Heart'
	}, {
		name: 'Kirara',
		vision: 'Dendro',
		regionSpecialty: 'Amakumo Fruit',
		mobDrop: 'Specters',
		dailyBoss: 'Iniquitous Baptist',
		rarity: 4,
		talentBook: 'Transcience',
		weeklyBoss: 'Evarember'
	}, {
		name: 'Shikanoin Heizou',
		vision: 'Anemo',
		regionSpecialty: 'Okinabuto',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Ruin Serpent',
		rarity: 4,
		talentBook: 'Transcience',
		weeklyBoss: 'The Meaning of Aeons'
	}, {
		name: 'Kujou Sara',
		vision: 'Electro',
		regionSpecialty: 'Dendrobium',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Thunder Manifestation',
		rarity: 4,
		talentBook: 'Elegance',
		weeklyBoss: 'Ashen Heart'
	}, {
		name: 'Gorou',
		vision: 'Geo',
		regionSpecialty: 'Sango Pearl',
		mobDrop: 'Specters',
		dailyBoss: 'Perpetual Mechanical Array',
		rarity: 4,
		talentBook: 'Light',
		weeklyBoss: 'Molten Moment'
	}, {
		name: 'Sayu',
		vision: 'Anemo',
		regionSpecialty: 'Crystal Marrow',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Maguu Kenki',
		rarity: 4,
		talentBook: 'Light',
		weeklyBoss: 'Gilded Scale'
	}, {
		name: 'Thoma',
		vision: 'Pyro',
		regionSpecialty: 'Fluorescent Fungus',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Pyro Hypostasis',
		rarity: 4,
		talentBook: 'Transcience',
		weeklyBoss: 'Hellfire Butterfly'
	}, {
		name: 'Yanfei',
		vision: 'Pyro',
		regionSpecialty: 'Noctilucous Jade',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Primo Geovishap',
		rarity: 4,
		talentBook: 'Gold',
		weeklyBoss: 'Bloodjade Branch'
	}, {
		name: 'Rosaria',
		vision: 'Cryo',
		regionSpecialty: 'Valberry',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Cryo Regisvine',
		rarity: 4,
		talentBook: 'Ballad',
		weeklyBoss: 'Shadow of the Warrior'
	}, {
		name: 'Xinyan',
		vision: 'Pyro',
		regionSpecialty: 'Violetgrass',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Pyro Regisvine',
		rarity: 4,
		talentBook: 'Gold',
		weeklyBoss: 'Tusk of the Monoceros Caeli'
	}, {
		name: 'Sucrose',
		vision: 'Anemo',
		regionSpecialty: 'Windwheel Aster',
		mobDrop: 'Whopperflower',
		dailyBoss: 'Anemo Hypostasis',
		rarity: 4,
		talentBook: 'Freedom',
		weeklyBoss: 'Spirit Locket of Boreas'
	}, {
		name: 'Diona',
		vision: 'Cryo',
		regionSpecialty: 'Calla Lily',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Cryo Regisvine',
		rarity: 4,
		talentBook: 'Freedom',
		weeklyBoss: 'Shard of a Foul Legacy'
	}, {
		name: 'Chongyun',
		vision: 'Cryo',
		regionSpecialty: 'Cor Lapis',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Cryo Regisvine',
		rarity: 4,
		talentBook: 'Diligence',
		weeklyBoss: "Dvalin's Sigh"
	}, {
		name: 'Noelle',
		vision: 'Geo',
		regionSpecialty: 'Valberry',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Geo Hypostasis',
		rarity: 4,
		talentBook: 'Resistance',
		weeklyBoss: "Dvalin's Claw"
	}, {
		name: 'Bennett',
		vision: 'Pyro',
		regionSpecialty: 'Windwheel Aster',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Pyro Regisvine',
		rarity: 4,
		talentBook: 'Resistance',
		weeklyBoss: "Dvalin's Plume"
	}, {
		name: 'Fischl',
		vision: 'Electro',
		regionSpecialty: 'Small Lamp Grass',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Electro Hypostasis',
		rarity: 4,
		talentBook: 'Ballad',
		weeklyBoss: 'Spirit Locket of Boreas'
	}, {
		name: 'Ningguang',
		vision: 'Geo',
		regionSpecialty: 'Glaze Lily',
		mobDrop: 'Fatui Insignia',
		dailyBoss: 'Geo Hypostasis',
		rarity: 4,
		talentBook: 'Prosperity',
		weeklyBoss: 'Spirit Locket of Boreas'
	}, {
		name: 'Xingqiu',
		vision: 'Hydro',
		regionSpecialty: 'Silk Flower',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Oceanid',
		rarity: 4,
		talentBook: 'Gold',
		weeklyBoss: 'Tail of Boreas'
	}, {
		name: 'Beidou',
		vision: 'Electro',
		regionSpecialty: 'Noctilucous Jade',
		mobDrop: 'Treasure Hoarder',
		dailyBoss: 'Electro Hypostasis',
		rarity: 4,
		talentBook: 'Gold',
		weeklyBoss: "Dvalin's Sigh"
	}, {
		name: 'Xiangling',
		vision: 'Pyro',
		regionSpecialty: 'Jueyun Chili',
		mobDrop: 'Slime',
		dailyBoss: 'Pyro Regisvine',
		rarity: 4,
		talentBook: 'Diligence',
		weeklyBoss: "Dvalin's Claw"
	}, {
		name: 'Amber',
		vision: 'Pyro',
		regionSpecialty: 'Small Lamp Grass',
		mobDrop: 'Hilichurl Arrow',
		dailyBoss: 'Pyro Regisvine',
		rarity: 4,
		talentBook: 'Freedom',
		weeklyBoss: "Dvalin's Claw"
	}, {
		name: 'Razor',
		vision: 'Electro',
		regionSpecialty: 'Wolfhook',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Electro Hypostasis',
		rarity: 4,
		talentBook: 'Resistance',
		weeklyBoss: "Dvalin's Claw"
	}, {
		name: 'Kaeya',
		vision: 'Cryo',
		regionSpecialty: 'Calla Lily',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Cryo Regisvine',
		rarity: 4,
		talentBook: 'Ballad',
		weeklyBoss: 'Spirit Locket of Boreas'
	}, {
		name: 'Barbara',
		vision: 'Hydro',
		regionSpecialty: 'Philanemo Mushroom',
		mobDrop: 'Hilichurl Mask',
		dailyBoss: 'Oceanid',
		rarity: 4,
		talentBook: 'Freedom',
		weeklyBoss: 'Ring of Boreas'
	}, {
		name: 'Lisa',
		vision: 'Electro',
		regionSpecialty: 'Valberry',
		mobDrop: 'Slime',
		dailyBoss: 'Electro Hypostasis',
		rarity: 4,
		talentBook: 'Ballad',
		weeklyBoss: "Dvalin's Claw"
	}
];