export const loggerMiddware = (store) => (next) => (action) => {
  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("state", store.getState());

  next(action);
  console.log("Next-State", store.getState());
};
