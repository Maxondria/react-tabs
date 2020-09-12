import { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (event, newActiveTab) => {
    event.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <ul className={styles.tabs}>
        {children.map((tab, index) => (
          <li
            key={index.toString()}
            className={activeTab === tab.props.label ? styles.current : ""}
          >
            <a href="#" onClick={(e) => handleClick(e, tab.props.label)}>
              {tab.props.label}
            </a>
          </li>
        ))}
        {/*<li className={styles.current}>Tab 1</li>*/}
      </ul>
      {children.map((child, index) => {
        if (child.props.label === activeTab) {
          return (
            <div key={index.toString()} className={styles.content}>
              {child.props.children}
            </div>
          );
        }
      })}
    </div>
  );
};

export { Tabs };
