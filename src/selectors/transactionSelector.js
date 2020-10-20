import { createSelector } from "reselect";

const selectFirestore = (state) => state.firestore;

export const selectTransactionData = createSelector([selectFirestore], (firestore) => firestore.ordered.transactions);
