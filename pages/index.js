import Head from "next/head";
import { Tabs } from "../components/Tabs";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Tabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Tabs>
          <div label="Tab 1">
            <h2>Tab 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis cumque fugiat fugit mollitia non, perferendis quae
              unde? Animi blanditiis consequuntur distinctio eaque, eius esse
              eveniet iusto optio porro ratione unde!
            </p>
          </div>

          <div label="Tab 2">
            <h2>Tab 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis cumque fugiat fugit mollitia non, perferendis quae
              unde? Animi blanditiis consequuntur distinctio eaque, eius esse
              eveniet iusto optio porro ratione unde!
            </p>
          </div>

          <div label="Tab 3">
            <h2>Tab 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis cumque fugiat fugit mollitia non, perferendis quae
              unde? Animi blanditiis consequuntur distinctio eaque, eius esse
              eveniet iusto optio porro ratione unde!
            </p>
          </div>
        </Tabs>
      </main>
    </div>
  );
}
