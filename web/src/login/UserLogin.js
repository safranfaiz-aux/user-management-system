import React from 'react'

function UserLogin() {
    return (
        <div className="user">
            <h3>Login</h3>
            <form>
                <table className="user-login">
                    <tr>
                        <input type="text" placeholder="User Name" />
                    </tr>
                    <tr>
                        <input type="password" placeholder="Password" />
                    </tr>
                    <input type="submit" value="Login" />
                </table>
            </form>
        </div>
    );
}

export default UserLogin;