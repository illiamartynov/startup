import styles from "./FooterQuestions.module.css";
import stars from "../../Images/Icons/starsGold.png";
const FooterQuestions = () => {
  const questions = [
    { text: "Zajrzyj do sekcji  Q&A", link: "/q&a" },
    { text: "Poznaj nasz o nas", link: "/aboutUs" },
    { text: "Zobacz cennik", link: "/cennik" },
  ];

  const renderListItem = ({ text, link }) => {
    const words = text.split(" ");
    const lastWord = words.pop();

    return (
      <li key={text}>
        <img src={ stars} alt="icon" className={styles.icon} />
        {words.join(" ")}
        <a href={link}>
          {" "}
          <span>{`\u00A0${lastWord}`}</span>
        </a>
      </li>
    );
  };

  return (
    <div className={styles.wrapper}>
      <h1>MASZ PYTANIA?</h1>
      <ul>{questions.map(renderListItem)}</ul>
    </div>
  );
};

export default FooterQuestions;
