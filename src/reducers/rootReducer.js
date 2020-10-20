import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  transaction: transactionReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
