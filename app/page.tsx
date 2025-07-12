import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>sss
      <div>
        <h1 className={styles.choose}>Choose your path</h1>
        <div>
          <div>
            <a rel="stylesheet" href="./components/pages/LoginPage/Page.tsx">Login</a>
          </div>
          <div>
            <a rel="stylesheet" href="./components/pages/RegisterPage/RegisterPage.tsx">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
