import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        result: null,
    },

    getters: {
        result: state => {
            return state.result;
        },
    },

    mutations: {
        setResult: (state, payload) => {
            state.result = payload;
        }
    },

    actions: {
        getResult: async (context, payload) => {
            // || __________________  ПОЛУЧАЕМ ИСХОДНЫЕ ДАННЫЕ  _______________________ ||
            let data = payload;

            // || __________________  ЗАДАЕМ ЗАГОЛОВКИ ЗАПРОСА  _______________________ || 
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
            headers.append('Access-Control-Allow-Credentials', 'true');
            headers.append('GET', 'POST', 'OPTIONS');

            // || __________________  ОТПРАВЛЯЕМ ЗАПРОС  _______________________ || 
            let response = await fetch('http://localhost:3000/api/calc/', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            });

            // || __________________  ПОЛУЧАЕМ ОТВЕТ  _______________________ || 
            let result = await response.json();

            // || __________________  СОХРАНЯЕМ ОТВЕТ  _______________________ ||
            context.commit('setResult', result);
        }
    },
});

export default store;