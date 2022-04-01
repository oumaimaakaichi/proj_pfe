import React from 'react'

const AuthLayout = (Component) => (props) => {
    return (
        <div>
            <Component {...props} />
        </div>
    )
}

export default AuthLayout;
