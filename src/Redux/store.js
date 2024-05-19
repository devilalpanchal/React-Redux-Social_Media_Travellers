import { legacy_createStore } from "redux";


import { applyMiddleware, legacy_createStore  } from "redux";
import { reducer } from "./reducer";

import createSagaMiddleWare from'redux-saga'
import { rootSaga } from "./saga";

export const sagaMiddleware=createSagaMiddleWare()

// 01
export const store=legacy_createStore(reducer,applyMiddleware(sagaMiddleware)) 
sagaMiddleware.run(rootSaga)