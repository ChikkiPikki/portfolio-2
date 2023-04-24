import { configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import thunk from 'redux-thunk'
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from 'js-cookie'

import formReducer, { changeThanksAnimation, changeFormDisplay, changeModalSeen } from "./slices/formSlice";


import { adminApi } from "./services/admin";
import { clientApi } from "./services/client";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const persistConfig = {
  key: 'root',
  storage: new CookieStorage(Cookies)
}

const persistedFormReducer = persistReducer(persistConfig, formReducer);

const store = configureStore({
  reducer: {
    form: persistedFormReducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(adminApi.middleware)
      .concat(clientApi.middleware)
  }
});

setupListeners(store.dispatch)

export { changeThanksAnimation, changeFormDisplay, changeModalSeen };
export default store;
export const persistor = persistStore(store);
export {
  useGetLeadsQuery,
  useNewLeadMutation,
  useSeenLeadMutation,
  useGetClientsQuery,
  useNewClientMutation,
  useUpdateClientMutation
} from "./services/admin"

export {
  useGetLeadsClientQuery,
  useCreateLeadClientMutation,
  useSeenLeadClientMutation
} from "./services/client"