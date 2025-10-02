"use client";

import React from "react";
import styles from "./page.module.scss";
import Nav from "../../components/navigation/nav";
import Header from "@/app/components/header/header";

const AuthBox: React.FC = () => {
    return (
    <div>
        
        <Header />

        <div className={styles.main}>
            <Nav />
        </div>
        <div className={styles.rightSide}>
            
        </div>
    </div>
    );
};

export default AuthBox;