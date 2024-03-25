import { createContext, useCallback, useEffect, useState } from "react";

export const Authcontext = createContext();
export const Authprovider = ({children}) => {
    const user='warsa'

    return (
        <Authcontext.Authprovider values={user}> 
            {children}
        </Authcontext.Authprovider>

    )
}