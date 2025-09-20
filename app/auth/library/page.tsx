"use client";

import React from "react";
import styles from "./page.module.scss";
import Nav from "../../components/navigation/nav";

const AuthBox: React.FC = () => {
    return (
    <div>
        <div className={styles.main}>
            <Nav />
        </div>
        <div className={styles.rightSide}
            style={{
                maxWidth: 400,
                margin: "40px auto",
                padding: "32px",
                borderRadius: "12px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
                background: "#fff",
                textAlign: "center",
            }}
        >
            <h2>ავტორიზაცია</h2>
            <form>
                <div style={{ marginBottom: 16 }}>
                    <input
                        type="text"
                        placeholder="მომხმარებლის სახელი"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <div style={{ marginBottom: 24 }}>
                    <input
                        type="password"
                        placeholder="პაროლი"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#1976d2",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    შესვლა
                </button>
            </form>
        </div>
    </div>
    );
};

export default AuthBox;