/*ОТПРАВКА ДАННЫХ ИЗ ФОРМ*/

URL = 'PHP/clientData.php';

var uploadData = {
	form: document.querySelectorAll('.admin-form'),
	submit: document.querySelectorAll('.submit-button'),
	status: document.querySelectorAll('.submit-status'),
	statusSql: document.querySelectorAll('.sql-status'),
	numberForm: 0
};

xhrHeandler = function(evt, status) {
	if(this.status == 200) {
		uploadData.status[uploadData.numberForm].textContent = 'Данные отправлены';
		uploadData.status[uploadData.numberForm].style.padding = '0 0 10px 0';
		uploadData.status[uploadData.numberForm].style.color = 'green';
		uploadData.form[uploadData.numberForm].reset();
		inputFile.subscribe[uploadData.numberForm].textContent = null;
		inputFile.subscribeInvalid[uploadData.numberForm].textContent = null;
		uploadData.form[uploadData.numberForm].parentElement.parentElement.style.border = '1px solid green';
		uploadData.statusSql[uploadData.numberForm].innerHTML = this.response;
		if(uploadData.statusSql[uploadData.numberForm].innerHTML) {
			uploadData.statusSql[uploadData.numberForm].style.padding = '0 0 10px 0';
			uploadData.status[uploadData.numberForm].textContent = null;
			uploadData.status[uploadData.numberForm].style.padding = null;
		};
	} else {
		uploadData.status[uploadData.numberForm].textContent = 'Ошибка ' + this.status;
		uploadData.status[uploadData.numberForm].style.padding = '0 0 10px 0';
		uploadData.status[uploadData.numberForm].style.color = 'red';
		uploadData.form[uploadData.numberForm].parentElement.parentElement.style.border = '1px solid red';
	};
};

submitHeandler = function(evt) {
	event.preventDefault();
	for(var i = 0; i < uploadData.form.length; i++) {
		if(evt.target === uploadData.submit[i]) {
			var data = new FormData(uploadData.form[i]);
			uploadData.numberForm = [i];
		};
	};
	var xhr = new XMLHttpRequest();
	
	
	xhr.addEventListener('load', xhrHeandler);

	xhr.open('POST', URL);
	xhr.send(data);
};

for(var i = 0; i < uploadData.form.length; i++) {
	uploadData.submit[i].addEventListener('click', submitHeandler);
};

/*СБРОС СТАТУСОВ*/

windowHeandler = function(evt) {
	for(var i = 0; i < uploadData.form.length; i++) {
		uploadData.status[i].textContent = null;
		uploadData.status[i].style.padding = null;
		uploadData.form[i].parentElement.parentElement.style.border = null;
		uploadData.statusSql[uploadData.numberForm].innerHTML = null;
		uploadData.statusSql[uploadData.numberForm].style.padding = null;
	};
};

window.addEventListener('click', windowHeandler);





























/*window.productList = [
	{name:
		'Двусторонний плед',
	photosLow: 
		['images/pp001/low/1',
		'images/pp001/low/2',
		'images/pp001/low/3',
		'images/pp001/low/4',
		],
	photosMiddle:
		['images/pp001/middle/1',
		'images/pp001/middle/2',
		'images/pp001/middle/3',
		'images/pp001/middle/4',
		],
	photoshigh:
		['images/pp001/high/1',
		'images/pp001/high/2',
		'images/pp001/high/3',
		'images/pp001/high/4',
		],
	prices:
		{new: 1990,
		old: null},
	discount: false,
	rating: 5,
	manufacturer: 'Beauty Home Fox',
	code: 'pp001',
	material: 'Хлопок, плюш, синтепон',
	description: 'Желая для своего ребёнка все самое лучшее, можете не сомневаться — приобретая у нас плед категории премиум, Вы получите плед высшего качества, которые будет долго радовать Вас и Вашего малыша.',
	specification: 'Польский хлопок, PREMIUM класса отличается от обычного хлопка гладкостью, мягкостью, насыщенностью цветов, прорисовкой каждой детали. Принты — как живые! Плотность 155 г/м2. Идеально подходит для детского текстиля и одежды. Мягкие тёплые пледы, в которые сразу хочется укутаться. Сшиты из лучших польских тканей: премиум плюша (плотность 380 г/м2) и премиум хлопка (155 г/м2). Плед находит широкое применение: на прогулку в коляску, в кроватку вместо одеяла, в качестве конверта на выписку. Уникальность пледа в том, что он двусторонний. В холодную погоду лучше укрывать плюшевой стороной к телу, в тёплую или дома — хлопковой стороной. Тем самым плед можно использовать круглый год, и зимой и летом. Все пледы ручной работы и сделаны с душой. У нас Вы можете приобрести как готовый плед, так и создать свой индивидуальный, неповторимый плед, сочетая предложенные расцветки хлопка и плюша. Можно добавить помпоны, кружево, подушечку в тон, бант на выписку. Расценки значительно ниже, чем у конкурентов, что приятно удивит.Размер пледа 100Х75, подушечка в подарок:)',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},

	{name:
		'Корова',
	photosLow: 
		['images/pp002/low/1',
		'images/pp002/low/2',
		'images/pp002/low/3',
		'images/pp002/low/4',
		],
	photosMiddle:
		['images/pp002/middle/1',
		'images/pp002/middle/2',
		'images/pp002/middle/3',
		'images/pp002/middle/4',
		],
	photoshigh:
		['images/pp002/high/1',
		'images/pp002/high/2',
		'images/pp002/high/3',
		'images/pp002/high/4',
		],
	prices:
		{new: 9990,
		old: 10000},
	discount: true,
	rating: 5,
	manufacturer: 'Колхоз 20 лет без урожая',
	code: 'pp001',
	material: 'Рога и копыта',
	description: 'Не только 10 литров молока в сутки, но и 100 килограмм парного мяса на черный день.',
	specification: 'Коро́ва — самка домашнего быка (лат. Bos taurus taurus), одомашненного подвида дикого быка (Bos taurus), парнокопытного жвачного животного подсемейства Быки (Bovinae); шире — самка любых видов крупного рогатого скота.Разводится для получения мяса, молока и кожи. Самцы вида называются быками, молодняк — телятами и тёлками, кастрированные самцы — волами. Молодых (до первой стельности) самок называют тёлками. Не́тель — это продуктивно осеменённая (стельная) тёлка. Беременность длится 9 месяцев. Различают мясные, мясо-молочные и молочные породы коров.',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},

	{name:
		'Тираннозавр',
	photosLow: 
		['images/pp003/low/1',
		'images/pp003/low/2',
		'images/pp003/low/3',
		'images/pp003/low/4',
		],
	photosMiddle:
		['images/pp003/middle/1',
		'images/pp003/middle/2',
		'images/pp003/middle/3',
		'images/pp003/middle/4',
		],
	photoshigh:
		['images/pp003/high/1',
		'images/pp003/high/2',
		'images/pp003/high/3',
		'images/pp003/high/4',
		],
	prices:
		{new: 5460,
		old: 9000},
	discount: true,
	rating: 3,
	manufacturer: 'Мир юрского периода',
	code: 'pp003',
	material: 'Зубы и когти',
	description: 'Молока не дает, зато выглядит прикольно',
	specification: 'Тиранноза́вр (лат. Tyrannosaurus — «ящер-тиран», от др.-греч. τύραννος [tyrannos] — «тиран» и σαῦρος [sauros] — «ящер, ящерица»[3], также встречается неправильное написание тираноза́вр[4]) — монотипический род плотоядных динозавров из группы целурозавров подотряда тероподов, включающий единственный валидный вид — Tyrannosaurus rex (лат. rex — «царь»). Обитал в западной части Северной Америки, которая в те времена представляла собой остров Ларамидию, и был наиболее распространённым из тираннозавридов. Окаменелые останки тираннозавров находят в различных геологических формациях, датирующихся маастрихтским веком мелового периода, около 67—65,5 миллионов лет назад[5]. Был одним из последних ящеротазовых динозавров, существовавших перед катаклизмом, положившим конец эре динозавров (мел-палеогеновым вымиранием).',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},

	{name:
		'Двусторонний плед',
	photosLow: 
		['images/pp001/low/1',
		'images/pp001/low/2',
		'images/pp001/low/3',
		'images/pp001/low/4',
		],
	photosMiddle:
		['images/pp001/middle/1',
		'images/pp001/middle/2',
		'images/pp001/middle/3',
		'images/pp001/middle/4',
		],
	photoshigh:
		['images/pp001/high/1',
		'images/pp001/high/2',
		'images/pp001/high/3',
		'images/pp001/high/4',
		],
	prices:
		{new: 1990,
		old: null},
	discount: false,
	rating: 5,
	manufacturer: 'Beauty Home Fox',
	code: 'pp001',
	material: 'Хлопок, плюш, синтепон',
	description: 'Желая для своего ребёнка все самое лучшее, можете не сомневаться — приобретая у нас плед категории премиум, Вы получите плед высшего качества, которые будет долго радовать Вас и Вашего малыша.',
	specification: 'Польский хлопок, PREMIUM класса отличается от обычного хлопка гладкостью, мягкостью, насыщенностью цветов, прорисовкой каждой детали. Принты — как живые! Плотность 155 г/м2. Идеально подходит для детского текстиля и одежды. Мягкие тёплые пледы, в которые сразу хочется укутаться. Сшиты из лучших польских тканей: премиум плюша (плотность 380 г/м2) и премиум хлопка (155 г/м2). Плед находит широкое применение: на прогулку в коляску, в кроватку вместо одеяла, в качестве конверта на выписку. Уникальность пледа в том, что он двусторонний. В холодную погоду лучше укрывать плюшевой стороной к телу, в тёплую или дома — хлопковой стороной. Тем самым плед можно использовать круглый год, и зимой и летом. Все пледы ручной работы и сделаны с душой. У нас Вы можете приобрести как готовый плед, так и создать свой индивидуальный, неповторимый плед, сочетая предложенные расцветки хлопка и плюша. Можно добавить помпоны, кружево, подушечку в тон, бант на выписку. Расценки значительно ниже, чем у конкурентов, что приятно удивит.Размер пледа 100Х75, подушечка в подарок:)',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},

	{name:
		'Корова',
	photosLow: 
		['images/pp002/low/1',
		'images/pp002/low/2',
		'images/pp002/low/3',
		'images/pp002/low/4',
		],
	photosMiddle:
		['images/pp002/middle/1',
		'images/pp002/middle/2',
		'images/pp002/middle/3',
		'images/pp002/middle/4',
		],
	photoshigh:
		['images/pp002/high/1',
		'images/pp002/high/2',
		'images/pp002/high/3',
		'images/pp002/high/4',
		],
	prices:
		{new: 9990,
		old: 10000},
	discount: true,
	rating: 5,
	manufacturer: 'Колхоз 20 лет без урожая',
	code: 'pp001',
	material: 'Рога и копыта',
	description: 'Не только 10 литров молока в сутки, но и 100 килограмм парного мяса на черный день.',
	specification: 'Коро́ва — самка домашнего быка (лат. Bos taurus taurus), одомашненного подвида дикого быка (Bos taurus), парнокопытного жвачного животного подсемейства Быки (Bovinae); шире — самка любых видов крупного рогатого скота.Разводится для получения мяса, молока и кожи. Самцы вида называются быками, молодняк — телятами и тёлками, кастрированные самцы — волами. Молодых (до первой стельности) самок называют тёлками. Не́тель — это продуктивно осеменённая (стельная) тёлка. Беременность длится 9 месяцев. Различают мясные, мясо-молочные и молочные породы коров.',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},

	{name:
		'Тираннозавр',
	photosLow: 
		['images/pp003/low/1',
		'images/pp003/low/2',
		'images/pp003/low/3',
		'images/pp003/low/4',
		],
	photosMiddle:
		['images/pp003/middle/1',
		'images/pp003/middle/2',
		'images/pp003/middle/3',
		'images/pp003/middle/4',
		],
	photoshigh:
		['images/pp003/high/1',
		'images/pp003/high/2',
		'images/pp003/high/3',
		'images/pp003/high/4',
		],
	prices:
		{new: 5460,
		old: 9000},
	discount: true,
	rating: 3,
	manufacturer: 'Мир юрского периода',
	code: 'pp003',
	material: 'Зубы и когти',
	description: 'Молока не дает, зато выглядит прикольно',
	specification: 'Тиранноза́вр (лат. Tyrannosaurus — «ящер-тиран», от др.-греч. τύραννος [tyrannos] — «тиран» и σαῦρος [sauros] — «ящер, ящерица»[3], также встречается неправильное написание тираноза́вр[4]) — монотипический род плотоядных динозавров из группы целурозавров подотряда тероподов, включающий единственный валидный вид — Tyrannosaurus rex (лат. rex — «царь»). Обитал в западной части Северной Америки, которая в те времена представляла собой остров Ларамидию, и был наиболее распространённым из тираннозавридов. Окаменелые останки тираннозавров находят в различных геологических формациях, датирующихся маастрихтским веком мелового периода, около 67—65,5 миллионов лет назад[5]. Был одним из последних ящеротазовых динозавров, существовавших перед катаклизмом, положившим конец эре динозавров (мел-палеогеновым вымиранием).',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},

	{name:
		'Двусторонний плед',
	photosLow: 
		['images/pp001/low/1',
		'images/pp001/low/2',
		'images/pp001/low/3',
		'images/pp001/low/4',
		],
	photosMiddle:
		['images/pp001/middle/1',
		'images/pp001/middle/2',
		'images/pp001/middle/3',
		'images/pp001/middle/4',
		],
	photoshigh:
		['images/pp001/high/1',
		'images/pp001/high/2',
		'images/pp001/high/3',
		'images/pp001/high/4',
		],
	prices:
		{new: 1990,
		old: null},
	discount: false,
	rating: 5,
	manufacturer: 'Beauty Home Fox',
	code: 'pp001',
	material: 'Хлопок, плюш, синтепон',
	description: 'Желая для своего ребёнка все самое лучшее, можете не сомневаться — приобретая у нас плед категории премиум, Вы получите плед высшего качества, которые будет долго радовать Вас и Вашего малыша.',
	specification: 'Польский хлопок, PREMIUM класса отличается от обычного хлопка гладкостью, мягкостью, насыщенностью цветов, прорисовкой каждой детали. Принты — как живые! Плотность 155 г/м2. Идеально подходит для детского текстиля и одежды. Мягкие тёплые пледы, в которые сразу хочется укутаться. Сшиты из лучших польских тканей: премиум плюша (плотность 380 г/м2) и премиум хлопка (155 г/м2). Плед находит широкое применение: на прогулку в коляску, в кроватку вместо одеяла, в качестве конверта на выписку. Уникальность пледа в том, что он двусторонний. В холодную погоду лучше укрывать плюшевой стороной к телу, в тёплую или дома — хлопковой стороной. Тем самым плед можно использовать круглый год, и зимой и летом. Все пледы ручной работы и сделаны с душой. У нас Вы можете приобрести как готовый плед, так и создать свой индивидуальный, неповторимый плед, сочетая предложенные расцветки хлопка и плюша. Можно добавить помпоны, кружево, подушечку в тон, бант на выписку. Расценки значительно ниже, чем у конкурентов, что приятно удивит.Размер пледа 100Х75, подушечка в подарок:)',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},

	{name:
		'Корова',
	photosLow: 
		['images/pp002/low/1',
		'images/pp002/low/2',
		'images/pp002/low/3',
		'images/pp002/low/4',
		],
	photosMiddle:
		['images/pp002/middle/1',
		'images/pp002/middle/2',
		'images/pp002/middle/3',
		'images/pp002/middle/4',
		],
	photoshigh:
		['images/pp002/high/1',
		'images/pp002/high/2',
		'images/pp002/high/3',
		'images/pp002/high/4',
		],
	prices:
		{new: 9990,
		old: 10000},
	discount: true,
	rating: 5,
	manufacturer: 'Колхоз 20 лет без урожая',
	code: 'pp001',
	material: 'Рога и копыта',
	description: 'Не только 10 литров молока в сутки, но и 100 килограмм парного мяса на черный день.',
	specification: 'Коро́ва — самка домашнего быка (лат. Bos taurus taurus), одомашненного подвида дикого быка (Bos taurus), парнокопытного жвачного животного подсемейства Быки (Bovinae); шире — самка любых видов крупного рогатого скота.Разводится для получения мяса, молока и кожи. Самцы вида называются быками, молодняк — телятами и тёлками, кастрированные самцы — волами. Молодых (до первой стельности) самок называют тёлками. Не́тель — это продуктивно осеменённая (стельная) тёлка. Беременность длится 9 месяцев. Различают мясные, мясо-молочные и молочные породы коров.',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},

	{name:
		'Тираннозавр',
	photosLow: 
		['images/pp003/low/1',
		'images/pp003/low/2',
		'images/pp003/low/3',
		'images/pp003/low/4',
		],
	photosMiddle:
		['images/pp003/middle/1',
		'images/pp003/middle/2',
		'images/pp003/middle/3',
		'images/pp003/middle/4',
		],
	photoshigh:
		['images/pp003/high/1',
		'images/pp003/high/2',
		'images/pp003/high/3',
		'images/pp003/high/4',
		],
	prices:
		{new: 5460,
		old: 9000},
	discount: true,
	rating: 3,
	manufacturer: 'Мир юрского периода',
	code: 'pp003',
	material: 'Зубы и когти',
	description: 'Молока не дает, зато выглядит прикольно',
	specification: 'Тиранноза́вр (лат. Tyrannosaurus — «ящер-тиран», от др.-греч. τύραννος [tyrannos] — «тиран» и σαῦρος [sauros] — «ящер, ящерица»[3], также встречается неправильное написание тираноза́вр[4]) — монотипический род плотоядных динозавров из группы целурозавров подотряда тероподов, включающий единственный валидный вид — Tyrannosaurus rex (лат. rex — «царь»). Обитал в западной части Северной Америки, которая в те времена представляла собой остров Ларамидию, и был наиболее распространённым из тираннозавридов. Окаменелые останки тираннозавров находят в различных геологических формациях, датирующихся маастрихтским веком мелового периода, около 67—65,5 миллионов лет назад[5]. Был одним из последних ящеротазовых динозавров, существовавших перед катаклизмом, положившим конец эре динозавров (мел-палеогеновым вымиранием).',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},

	{name:
		'Двусторонний плед',
	photosLow: 
		['images/pp001/low/1',
		'images/pp001/low/2',
		'images/pp001/low/3',
		'images/pp001/low/4',
		],
	photosMiddle:
		['images/pp001/middle/1',
		'images/pp001/middle/2',
		'images/pp001/middle/3',
		'images/pp001/middle/4',
		],
	photoshigh:
		['images/pp001/high/1',
		'images/pp001/high/2',
		'images/pp001/high/3',
		'images/pp001/high/4',
		],
	prices:
		{new: 1990,
		old: null},
	discount: false,
	rating: 5,
	manufacturer: 'Beauty Home Fox',
	code: 'pp001',
	material: 'Хлопок, плюш, синтепон',
	description: 'Желая для своего ребёнка все самое лучшее, можете не сомневаться — приобретая у нас плед категории премиум, Вы получите плед высшего качества, которые будет долго радовать Вас и Вашего малыша.',
	specification: 'Польский хлопок, PREMIUM класса отличается от обычного хлопка гладкостью, мягкостью, насыщенностью цветов, прорисовкой каждой детали. Принты — как живые! Плотность 155 г/м2. Идеально подходит для детского текстиля и одежды. Мягкие тёплые пледы, в которые сразу хочется укутаться. Сшиты из лучших польских тканей: премиум плюша (плотность 380 г/м2) и премиум хлопка (155 г/м2). Плед находит широкое применение: на прогулку в коляску, в кроватку вместо одеяла, в качестве конверта на выписку. Уникальность пледа в том, что он двусторонний. В холодную погоду лучше укрывать плюшевой стороной к телу, в тёплую или дома — хлопковой стороной. Тем самым плед можно использовать круглый год, и зимой и летом. Все пледы ручной работы и сделаны с душой. У нас Вы можете приобрести как готовый плед, так и создать свой индивидуальный, неповторимый плед, сочетая предложенные расцветки хлопка и плюша. Можно добавить помпоны, кружево, подушечку в тон, бант на выписку. Расценки значительно ниже, чем у конкурентов, что приятно удивит.Размер пледа 100Х75, подушечка в подарок:)',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},

	{name:
		'Корова',
	photosLow: 
		['images/pp002/low/1',
		'images/pp002/low/2',
		'images/pp002/low/3',
		'images/pp002/low/4',
		],
	photosMiddle:
		['images/pp002/middle/1',
		'images/pp002/middle/2',
		'images/pp002/middle/3',
		'images/pp002/middle/4',
		],
	photoshigh:
		['images/pp002/high/1',
		'images/pp002/high/2',
		'images/pp002/high/3',
		'images/pp002/high/4',
		],
	prices:
		{new: 9990,
		old: 10000},
	discount: true,
	rating: 5,
	manufacturer: 'Колхоз 20 лет без урожая',
	code: 'pp001',
	material: 'Рога и копыта',
	description: 'Не только 10 литров молока в сутки, но и 100 килограмм парного мяса на черный день.',
	specification: 'Коро́ва — самка домашнего быка (лат. Bos taurus taurus), одомашненного подвида дикого быка (Bos taurus), парнокопытного жвачного животного подсемейства Быки (Bovinae); шире — самка любых видов крупного рогатого скота.Разводится для получения мяса, молока и кожи. Самцы вида называются быками, молодняк — телятами и тёлками, кастрированные самцы — волами. Молодых (до первой стельности) самок называют тёлками. Не́тель — это продуктивно осеменённая (стельная) тёлка. Беременность длится 9 месяцев. Различают мясные, мясо-молочные и молочные породы коров.',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},

	{name:
		'Тираннозавр',
	photosLow: 
		['images/pp003/low/1',
		'images/pp003/low/2',
		'images/pp003/low/3',
		'images/pp003/low/4',
		'images/pp003/low/5'
		],
	photosMiddle:
		['images/pp003/middle/1',
		'images/pp003/middle/2',
		'images/pp003/middle/3',
		'images/pp003/middle/4',
		'images/pp003/low/5'
		],
	photoshigh:
		['images/pp003/high/1',
		'images/pp003/high/2',
		'images/pp003/high/3',
		'images/pp003/high/4',
		'images/pp003/low/5'
		],
	prices:
		{new: 5460,
		old: 9000},
	discount: true,
	rating: 3,
	manufacturer: 'Мир юрского периода',
	code: 'pp003',
	material: 'Зубы и когти',
	description: 'Молока не дает, зато выглядит прикольно',
	specification: 'Тиранноза́вр (лат. Tyrannosaurus — «ящер-тиран», от др.-греч. τύραννος [tyrannos] — «тиран» и σαῦρος [sauros] — «ящер, ящерица»[3], также встречается неправильное написание тираноза́вр[4]) — монотипический род плотоядных динозавров из группы целурозавров подотряда тероподов, включающий единственный валидный вид — Tyrannosaurus rex (лат. rex — «царь»). Обитал в западной части Северной Америки, которая в те времена представляла собой остров Ларамидию, и был наиболее распространённым из тираннозавридов. Окаменелые останки тираннозавров находят в различных геологических формациях, датирующихся маастрихтским веком мелового периода, около 67—65,5 миллионов лет назад[5]. Был одним из последних ящеротазовых динозавров, существовавших перед катаклизмом, положившим конец эре динозавров (мел-палеогеновым вымиранием).',
	feedbacks:
		[{
			data: '07.08.2047',
			name: 'Петя',
			feedback: 'Раз-раз',
			rating: 5
		},
		{
			data: '01.03.2049',
			name: 'Вася',
			feedback: 'Два-два',
			rating: 4
		},
		{
			data: '09.11.2159',
			name: 'Савелий Иннокентьевич',
			feedback: 'Три-три',
			rating: 3
		}]
	},
];*/