import { configureStore } from "@reduxjs/toolkit";

import accessToken from "./reducers/accessToken";

const store = configureStore({
    reducer: {
        accessToken
    }
})

export default store