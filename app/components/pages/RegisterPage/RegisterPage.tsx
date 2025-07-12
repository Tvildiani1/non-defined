'use client';

import AlrHaveAcc from "../../alrHaveAcc/AlrHaveAcc";
import Logo from "../../logo/Logo";
import Register from "../register/Register";

export default () => {
    return (
        <div>
            <div>
                <Logo />
            </div>
            
            <div>
                <Register />
            </div>

            <div>
                <AlrHaveAcc />
            </div>

        </div>
    );
}