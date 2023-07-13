import React from 'react'
import { useSelector } from "react-redux";

export default function Main() {
    const token = useSelector(state => state.Token.Token);
    return (
        <div>
            {token};
        </div>
    )
}
