import {createStore} from "vuex";

export default createStore({
  state(){
    return {
      counter: 0,
      accounts: []
    }
  },
  mutations: {
    increment(state, n) {
      state.counter += n
    },
    setAccount(state, account) {
      state.accounts.push(account)
    }
  },
  actions: {
    checkAccount: async (context) => {
      const checkAccount = {
        email: 'ma@ma.ru',
        password: '12345',
      }

      const response = await fetch("https://7e91a37cae1a70b7.mokky.dev/auth", {
      method: "POST",
      headers: {
      Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(checkAccount)
      });
      const account = await response.json();
      context.commit('setAccount', account);
    }
  },
  modules: {
  }
})
