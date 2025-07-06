import {createStore} from "vuex";

export default createStore({
  state(){
    return {
      account: {
        email: '',
        password: ''
      },
      accounts: [],
      token: null
    }
  },
  getters: {
    email: state => state.account.email,
    password: state => state.account.password,
  },
  mutations: {
    // increment(state, n) {
    //   state.counter += n
    // },

    /*Передаю в массив ответ от сервера*/
    setAccount(state, payload) {
      state.accounts.push(payload)
      state.token = payload.token
      console.log(payload.token)
      console.log(payload)
    },
    setData(state, payload) {
      state.account = payload
      console.log(payload)
    }
  },
  actions: {
    /*Отправляю запрос с аккаунтом на сервер для проверки
    авторизирован ли данный пользователь*/
    checkAccount: async (context, payload) => {
      // const checkAccount = {
      //   email: 'ma@ma.ru',
      //   password: '12345',
      // }


      const response = await fetch("https://7e91a37cae1a70b7.mokky.dev/auth", {
      method: "POST",
      headers: {
      Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
      });
        const account = await response.json();
        context.commit('setAccount', account)
        context.commit('setData', payload)
    }
  },
  modules: {
  }
})
