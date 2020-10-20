export const createTransactionEntry = (ifpshash, transactionhash) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("transactions")
      .add({
        ifpsHash: ifpshash,
        transactionhash: transactionhash,
        userFirstName: profile.firstName,
        userLastName: profile.lastName,
        userId: userId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_NEW_TRANSACTION" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_TRANSACTION_ERROR", err });
      });
  };
};
