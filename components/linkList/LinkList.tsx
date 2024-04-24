import { ILinkListProps } from "./ILinkListProps";
import styles from "./LinkList.module.css";

export const LinkList: React.FC<ILinkListProps> = (props) => {
  return (
    <div className={styles.linkList}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};
