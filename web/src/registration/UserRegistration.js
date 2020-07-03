import React from 'react';

const Registration = () => {
    return (
        <div className="registration">
            <h3>User Registration</h3>
            <form>
                <table className="registration-form">
                    <tr>
                        <input type="text" name="fName" placeholder="First Name" />
                    </tr>
                    <tr>
                        <input type="text" name="lName" placeholder="Last Name" />
                    </tr>
                    <tr>
                        <input type="text" name="email" placeholder="Email" />
                    </tr>
                    <tr>
                        <input type="password" name="passwod" placeholder="Passwod" />
                    </tr>
                    <tr>
                        <input type="password" name="cnfPasswod" placeholder="Confirm Password" />
                    </tr>
                    <input type="submit" value="Register" />
                </table>

            </form>
        </div>
    );
}

export default Registration;


