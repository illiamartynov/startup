import React from "react";
import styles from "./Wizja.module.css";
import WizjaContent from "./WizjaContent/WizjaContent";
import Layout from "../../Layout/Layout";
import imgExample from "../../Images/Icons/qaTestImage.png";

const Wizja = () => {
  const QUESTIONS = [
    {
      title: "Wizja",
      text: (
        <span>
          VISTAGER jest narzędziem AI opracowanym specjalnie dla agentów
          nieruchomości. Pozwala osiągnąć efekt zbliżony do tradycyjnego home
          stagingu poprzez automatyczną wizualizację. Sprzedający prezentuje,
          jak przestrzeń może wyglądać w pełni wykończona i urządzona według
          upodobań swojego klienta.
        </span>
      ),
      image: imgExample,
    },
    {
      title: "Cennik",
      text: (
        <span>
          Wirtualny home staging zastępuje kosztowną i czasochłonną aranżację
          wnętrz. Nasz enarzędzie dodatkowo automatyzuje ten proces. Dzięki
          zaawansowanej technologii, miesięczny koszt jest zbliżony do ceny
          pojedynczej usługi home staging. Cena subskrypcji zaczyna się od 199
          zł, a pakiet dla biura nieruchomości to tylko 2999 zł.
        </span>
      ),
      image: imgExample,
    },
    {
      title: "Wczesny dostęp",
      text: (
        <span>
          Projekt zakłada udostępnienie usługi na naszej stronie internetowej z
          dowolnego urządzenia z dostępem do sieci. Aktualnie aplikacja jest w
          fazie zamkniętych testów z naszymi użytkownikami. Chcesz uzyskać
          wczesny dostęp? Zapraszamy do kontaktu lub skorzystania z naszego
          formularza.
        </span>
      ),
      image: imgExample,
    },
    {
      title: "Newsletter",
      text: (
        <span>
          Interesujesz się rozwojem AI w branży nieruchomości? Jesteśmy
          pasjonatami technologii, a nieruchomości to nasz konik. Bądź na
          bieżąco z rynkowymi nowościami. Zapisz się do naszego newslettera.
        </span>
      ),
      image: imgExample,
    },
    {
      title: "Społeczność",
      text: (
        <span>
          Do grona topowych profesjonalistów branży nieruchomości zapraszamy
          również Ciebie. Pionierzy wykorzystania sztucznej inteligencji już
          zyskują przewagę nad swoją konkurencją. Nie przegap tej szansy. Dołącz
          do naszych kanałów social media.
        </span>
      ),
      image: imgExample,
    },
    {
      title: "Partnerstwa",
      text: (
        <span>
          Naszą misją jest ułatwianie sprzedaży i zakupu nieruchomości, przez
          maksymalne wykorzystanie ich potencjału. Jesteśmy otwarci na
          współpracę i nowe możliwości biznesowe. Zapraszamy do rozmowy o
          potencjalnym partnerstwie. Podaj swoje dane kontaktowe tutaj, a my
          poinformujemy Cię o kolejnych krokach.
        </span>
      ),
      image: imgExample,
    },
    {
      title: "Oferta inwestycyjna",
      text: (
        <span>
          Planujemy rundę inwestycyjną na kwotę 5 mln zł, którą zamkniemy do
          końca roku 2024. Dodatkowych informacji udzielimy na indywidualnym
          spotkaniu. Otwarte zapisy na listę oczekujących prowadzimy pod
          adresem: invest@vistager.com
        </span>
      ),
      image: imgExample,
    },
  ];

  return (
    <div className={styles.qaWrapper}>
      <Layout page={true}>
        <WizjaContent questions={QUESTIONS} />
      </Layout>
    </div>
  );
};

export default Wizja;
