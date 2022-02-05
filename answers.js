// Promise 

// Promise - это один из способов организации асинхронного кода (во избежании callback hell :})
// Promise может входить в три состояния: 1. pending или же ожидание, в котором промис ожидает ответ с внещнего источника. 2. resolve - состояние, в которое входит промис после получение ответа без ошибок. 3.reject - состояние промис при наличии ошибки. 
// В первое состояние промис входит в любом случае, а затем в зависимости от наличия или отсутствия ошибок входит в resolve или reject. 
// Также у промис есть свои методы, которые выпоняются в зависимости от состояния:
// catch() - при колбеке reject 
// then() - при колбеке resolve
// finally() - выпоняется в любом случае

const req = new Promise((resolve, reject) => {
	console.log('Запрос....')
	setTimeout(() => { //set time out иммитирует обработку
		console.log('Подготовка данных....')
		const element = {
			name: 'phone',
			price: 20000
		}
		console.log('done')

		resolve(element)
	}, 2000)
})
	.then(() => {
		console.log('4')
	})
	.catch(() => {
		throw new Error('Cant get request') //Выбрасываем ошибку в консоль при колбеке reject 
	})
	.finally(() => {
		console.log('finally')
	})



// Fetch 

// Fetch - это замена  http request, которая использует ранее описанные промисы. 
// Метод fetch() принимает как первый параметр url ссылку, куда он и будет отправлять запрос, вторым (необязательным) параметром является обьект, в который мы записываем тип запроса(post, get) и параметры.
// Так как fetch использует promise методы catch() then() finally() применимы.

fetch('https://jsonplaceholder.typicode.com/todos/1') //простое получение данных с jsonplaceholder с небольшой обработкой 
	.then(response => response.json())
	.then(json => console.log(json)) 




// Arrow function 

// Стрелочная функция отличается от обычных функций во-первых, своим синтаксисом (говоря грубо, простой написания), также сами по себе они являюся анонимными, то есть не имеют имени, которое обязательно для функциональных выражений. 
// Также считаю важным отметить то, что стрелочная функция не влияет на контекст this, даже если использовать методы call() и apply() для обозначения контекста


const a = (a, b) => {
    return a+b
}

console.log(a(13, 21039));


// this

// this - это ключевое слово, значение которого зависит от контекста, в котором оно было вызвано. 
// В основном this используется в классах.
// Каждая новая функуия имеет свое значение this, однако это не касается стрелочных функций (они не имеют собственный контекст this)
//создаем новый класс
class Proger { 
    constructor(name, progLang) {
        this.name = name
        this.progLang = progLang
    } 
    render() {
        const wrapper = document.querySelector('.ProgWrapper')
        const progerCard = document.createElement('div')

        progerCard.innerHTML = `
        <div>
            <h3>${this.name}<h3>
            <div>${this.progLang}</div>  
        </div>
        `
        // в методе класса рендер используем свойства класс с this для добавления контекста

        wrapper.append(progerCard)
        
    }
}

const progger1 = new Proger('Joe', 'Java'),
    progger2 = new Proger('Lisa', 'Python'),
    progger3 = new Proger('Jean', 'JavaScript');

console.log(progger1);
console.log(progger2);
console.log(progger3);

progger1.render()




// Async Await

// Код работает без остановок, однако асинхронный код требует времени для получения данных с внешного источника, для таких случаев используется async и await, благодаря этому мы как бы делаем акцент на асинхронном коде и ожидаем ответа, прежде чем его как-то обработать.
// Async Await используется во всех случаях, где есть какая-либо работа с внешними дынными.

async function getCard(url) { 
	const res = await fetch(url)

	if(!res.ok) {
		throw new Error (`'Cannot fetch ${url}, status ${res.status}'`) 
	} 

	return await res.json() //json() тоже требует времени
}