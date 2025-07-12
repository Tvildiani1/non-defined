'use client';

import DontHaveAcc from "../../dontHaveAcc/DontHaveAcc";
import Logo from "../../logo/Logo";
import Login from "../login/Login";



export default () => {
    return (
        <div>
            <div>
                <Logo />
            </div>
            
            <div>
                <Login />
            </div>

            <div>
                <DontHaveAcc />
            </div>

        </div>
    );
}