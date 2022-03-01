import  { createStore } from "vuex";

// Корзина товаров

// getters
const getters = {
	cartProducts: (state) => state.items
}
// actions
const actions = {
	addProductToCart({ state, commit }, good){
		commit("pushProductToCart",good)
	}
}
// mutations
const mutations = {
	pushProductToCart(state, good){
		state.items.push({
			...state,
			...good
		})
	}
}

const initialState = [
	{
		name: "Гусь Валера",
		descr: "Потрясающий Гусь Валера - душа компания. Отличный слушатель и собеседник, при понижении градуса ему даже не становится плохо! АлкоГусь - вот его второе имя!",
		imgLink: "https://cdn.pixabay.com/photo/2015/10/12/21/07/goose-985178_1280.jpg",
		price: "5000"
	},
	{
	name: "Собака Тузик",
	descr: "Потрясающая собака по кличе Тузик, которая защитит ваш дом от грабителей и мелких воришек. Надежность - вот ее второе имя!",
	imgLink: "https://s1.1zoom.ru/big7/52/Dogs_Retriever_Grass_391667.jpg",
	price: "1000"
	},
	{
		name: "Собака Жучка",
		descr: "Потрясающая собака по кличе Жучка, нежная и веселая, она непременно понравится вашим детям. Доброта - вот ее второе имя!",
		imgLink: "https://w-dog.ru/wallpapers/1/34/344104695685989/bigl-sobaka-drug-shhenok.jpg",
		price: "2000"
	},
	{
		name: "Кот Барсик",
		descr: "Потрясающий кот по кличе Барсик, ленивый и толстый, он непременно съест всю провизию в вашем доме. Обжора - вот ее второе имя!",
		imgLink: "https://funart.pro/uploads/posts/2021-07/thumbs/1626717141_21-funart-pro-p-kaliforniiskaya-siyayushchaya-koshka-zhivo-25.jpg",
		price: "3000"
	},
	{
		name: "Кошечка Полина",
		descr: "Потрясающая кошечка по кличе Полина, чуткая и ласковая, она встретит вас после работы, запрыгнет на живот, и будет тихо мурчать. Красавица - вот ее второе имя!",
		imgLink: "https://mobimg.b-cdn.net/v3/fetch/99/99e03e4337067ca6fb585121a55c66ea.jpeg",
		price: "4000"
	},
	{
		name: "Фотоаппарат Snapshot-787VGH",
		descr: "Потрясающий аппарат точно понравится вашим питомцам: Тузику, Жучке, Барсику и кошечке Полине!",
		imgLink: "https://www.yarkiy.ru/uploads/ckeditor/pictures/8525/content_1.jpg",
		price: "30000"
	},
	
]

export default createStore({
		state: {
			items: [...initialState]
		},
		actions,
		mutations,
		getters
	
})
