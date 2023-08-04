import React from "react"

import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function PrivateRoute({children, redirectTo}){

    const login = useSelector(state => state)

    return login ? children : <Navigate to={redirectTo}/>

}