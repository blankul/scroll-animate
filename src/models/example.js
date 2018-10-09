
export default {

  namespace: 'example',

  state: {
    a: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch(a, b, c) {  // eslint-disable-line
      console.log(a, b, c);
      debugger;
      // yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
