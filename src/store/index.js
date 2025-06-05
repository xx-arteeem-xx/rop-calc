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
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Credentials', 'true');
            headers.append('GET', 'POST', 'OPTIONS');
            let url = `${import.meta.env.VITE_API_URL}/api/calc/`

            // || __________________  ОТПРАВЛЯЕМ ЗАПРОС  _______________________ || 
            let response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            });

            // || __________________  ПОЛУЧАЕМ ОТВЕТ  _______________________ || 
            let result = await response.json();

            // || __________________  СОХРАНЯЕМ ОТВЕТ  _______________________ ||
            context.commit('setResult', result);
        }, 
        clearResult: (context, payload) => {
            let result = null;
            context.commit('setResult', result)
        }
    },
});

export default store;