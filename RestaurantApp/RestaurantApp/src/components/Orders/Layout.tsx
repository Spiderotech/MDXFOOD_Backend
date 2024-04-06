import React from 'react'
import Orderheader from './Orderheader'

const Layout = ({children}) => {
    return (
        <div>
            <Orderheader />

            <main className="">{children}</main>
        </div>
    )
}

export default Layout