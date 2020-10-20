const initState = {
  transactions: [],
};

const transactionReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TRANSACTION_RECIPE":
      console.log("created a transaction", action.transaction);
      return state;
    case "CREATE_TRANSACTION_ERROR":
      console.log("Could not create a transaction entry", action.err);
      return state;
    default:
      return state;
  }
};

export default transactionReducer;
