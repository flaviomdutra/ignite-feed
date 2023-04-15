import { Post } from "./Post";
import { Header } from "./components/Header";

import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Flávio Dutra"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit autem debitis unde beatae a architecto, ea iure, odit quod dolores nesciunt quia laborum quasi recusandae ut blanditiis cupiditate, voluptatem possimus."
          />
          <Post
            author="Daiane Dutra"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit autem debitis unde beatae a architecto, ea iure, odit quod dolores nesciunt quia laborum quasi recusandae ut blanditiis cupiditate, voluptatem possimus."
          />
        </main>
      </div>
    </>
  );
}
