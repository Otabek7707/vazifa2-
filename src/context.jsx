import React from "react";

const userContext = React.createContext("Foydalanuvchi");

export const userProvider = userContext.Provider
export const userConsumer = userContext.Consumer