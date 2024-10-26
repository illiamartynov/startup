import React from "react";
import styles from "./Questions.module.css";
import QuestionsContent from "../../Components/QuestionsContent/QuestionsContetn";
import Layout from "../../Layout/Layout";
import imgExample from "../../Images/Icons/qaTestImage.png";

const Questions = () => {
  const QUESTIONS = [
    {
      title: "Czym jest VISTAGER?",
      text: (
        <div className={styles.qaaa}>
          <div className={styles.qaContentWrapper}>
            <div>
              <span>
                VISTAGER to narzędzie online, które pomaga agentom nieruchomości
                przedstawiać prawdziwy potencjał prezentowanych wnętrz swoim
                kupującym. Atrakcyjne wizualizacje pozwalają przyspieszać proces
                sprzedaży i ułatwiać kupującym podjęcie decyzji.<p></p> Deweloperzy,
                brokerzy, sprzedający, a nawet profesjonaliści w home staging
                korzystają  z naszej technologii dla lepszego efektu. Zamiast
                kupowania lub wypożyczania prawdziwych mebli i dekoracji do
                pustych lub zaniedbanych pomieszczeń, mogą prezentować
                atrakcyjne zdjęcia swoich wnętrz, wygenerowane przez sztuczną
                inteligencję. Pomaga to wyróżnić ofertę na portalach
                internetowych oraz zaangażować emocjonalnie kupujących podczas
                oględzin na miejscu.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          {/* <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>
                Wnioskowanie oparte na danych:{" "}
              </span>
              <span>
                Sztuczna inteligencja analizuje ogromne zbiory danych, dostarczając
                cennych informacji na temat zachowań, preferencji i trendów rynkowych
                klientów. Projektanci mogą podejmować świadome decyzje w oparciu o
                dane, co prowadzi do trafniejszych propozycji w projektach.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>Personalizacja: </span>
              <span>
                Sztuczna inteligencja może personalizować projekty w oparciu o
                indywidualne preferencje i potrzeby - jest w stanie polecić układy
                mebli, kolorystykę i elementy wystroju dostosowane do konkretnego
                klienta, w oparciu o jego preferencje.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>Home staging: </span>
              <span>
                Narzędzia oparte na sztucznej inteligencji mogą wykonać proces
                home-staging, który ułatwia sprzedaż nieruchomości na portalach
                internetowych. Nieruchomości, w ramach których dla procesu sprzedaży
                wykonano home-staging sprzedają się szybciej i po wyższych cenach niż
                nieruchomości bez „wirtualnego umeblowania”.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>
                Fotorealistyczne modele wnętrz:{" "}
              </span>
              <span>
                Sztuczna inteligencja może przekształcić wstępne szkice lub podstawowe
                modele 3D w fotorealistyczne rendery o wysokiej rozdzielczości.
                Projektanci mogą szybko zwizualizować swoje pomysły i skutecznie
                przekazać je klientom.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>
                Planowanie przestrzeni i optymalizacja układu:{" "}
              </span>
              <span>
                Algorytmy AI pomagają w optymalizacji układu pomieszczeń, biorąc pod
                uwagę takie czynniki, funkcjonalność i estetyka - pomaga to w
                tworzeniu atrakcyjnych wizualnie i praktycznych przestrzeni.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>
                Wybór materiału i dopasowanie kolorów:{" "}
              </span>
              <span>
                Sztuczna inteligencja jest w stanie analizować trendy w zakresie
                wykorzystania materiałów i ich łączenia, sugerując odpowiednie
                kombinacje w oparciu o trendy i preferencje klienta. Sztuczna
                inteligencja może również polecić palety kolorów, które dobrze
                współgrają z konkretną przestrzenią.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>
                Współpraca z projektantami:{" "}
              </span>
              <span>
                Sztuczna inteligencja nie zastępuje projektantów, ale uzupełnia ich
                wiedzę specjalistyczną. Projektanci współpracują z narzędziami AI,
                dzięki czemu przyśpieszają swoją pracę oraz skupiając się na detalach
                i innowacyjnych rozwiązaniach.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>Przyszłe trendy: </span>
              <span>
                W miarę ciągłego rozwoju sztucznej inteligencji możemy spodziewać się bardziej
                wyrafinowanych narzędzi do projektowania wnętrz, w tym analiz
                predykcyjnych, symulacji w czasie rzeczywistym i bezproblemowej
                integracji z innymi technologiami.
              </span>
            </div>
            <img src={imgExample} />
          </div> */}
        </div>
      ),
      image: imgExample,
    },
    {
      title: "Dlaczego powinienem wybrać VISTAGER zamiast usług home staging?",
      text: (
        <div className={styles.qaaa}>
          <div className={styles.qaContentWrapper}>
            <div>
              <span>
                Przede wszystkim to oszczędność czasu i kosztów. Profesjonalne
                usługi home staging wraz z sesją fotograficzną to koszt od 1500
                do 5000 zł i oczekiwanie przez kilka dni na realizację. Ten sam
                efekt - szybszą i łatwiejszą sprzedaż nieruchomości - możemy
                osiągnąć przy wykorzystaniu najtańszego pakietu VISTAGER. Nasza
                wirtualna usługa jest wielokrotnie tańsza i trwa zaledwie kilka
                minut. Zobacz pełne zestawienie wraz z cennikiem Tutaj.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          {/* <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>Dywidendy:</span>
              <span>
                W przyszłości planujemy wypłacać część zysków w formie dywidend, zapewniając
                inwestorom stały strumień dochodów.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>Udziały w firmie:</span>
              <span>
                Inwestując, stajesz się częściowym właścicielem, uczestniczącym w
                naszym sukcesie i podejmowaniu decyzji poprzez prawo głosu.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>Płynność:</span>
              <span>
                W przyszłości nasze akcje będzie można łatwo kupować i sprzedawać na giełdach, co
                zapewnia elastyczność biznesową.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>Dywersyfikacja:</span>
              <span>
                Inwestycja w naszą spółkę zapewnia dywersyfikację portfela, rozkładając Twoje
                ryzyko inwestycyjne na różne sektory.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>
                Długoterminowa inwestycja:
              </span>
              <span>
                Reinwestowane dywidendy i wzrost wartości kapitału mogą prowadzić do
                znacznej akumulacji wartości Twoich udziałów.
              </span>
            </div>
            <img src={imgExample} />
          </div>
          <div className={styles.qaContentWrapper}>
            <div>
              <span style={{ fontWeight: "bold" }}>Przejrzystość:</span>
              <span>
                Działamy transparentnie, nie ukrywając żadnych danych, które mogłyby spowodować
                wzrost ryzyka inwestycji.
              </span>
            </div>
            <img src={imgExample} />
          </div> */}
        </div>
      ),
      image: imgExample,
    },
    // {
    //   title: "Oferta inwestycyjna i zasady współpracy: ",
    //   text: (
    //     <div className={styles.qaaa}>
    //       <div className={styles.qaContentWrapper}>
    //         <div>
    //           <span>
    //             Podobnie jak w przypadku współpracy z partnerami - także w przypadku
    //             inwestorów, do każdego zainteresowanego współpracą zawsze podchodzimy
    //             indywidualnie. Wierzymy, że za każdym razem należy przeanalizować
    //             możliwości i wspólne korzyści jakie płyną z potencjalnej współpracy.
    //           </span>
    //         </div>
    //         <img src={imgExample} />
    //       </div>
    //       <div className={styles.qaContentWrapper}>
    //         <div>
    //           <span style={{ fontWeight: "bold" }}>
    //             Możliwości inwestycyjne:
    //           </span>
    //           <span>
    //             Oferujemy różne opcje inwestycyjne , które dostosujemy do Twojej
    //             tolerancji ryzyka i celów.
    //           </span>
    //         </div>
    //         <img src={imgExample} />
    //       </div>
    //       <div className={styles.qaContentWrapper}>
    //         <div>
    //           <span style={{ fontWeight: "bold" }}>Współpraca:</span>
    //           <span>
    //             Wierzymy w otwartą komunikację i współpracę z naszymi inwestorami.
    //           </span>
    //         </div>
    //         <img src={imgExample} />
    //       </div>
    //       <div className={styles.qaContentWrapper}>
    //         <div>
    //           <span style={{ fontWeight: "bold" }}>Wspólna wizja:</span>
    //           <span>
    //             Nasze zasady są zgodne z celami zrównoważonego rozwoju, równości, pokoju,
    //             bezpieczeństwa i celów humanitarnych.
    //           </span>
    //         </div>
    //         <img src={imgExample} />
    //       </div>
    //     </div>
    //   ),
    //   image: imgExample,
    // },
  ];

  return (
    <div className={styles.qaWrapper}>
      <Layout page={true}>
        <QuestionsContent questions={QUESTIONS} />
      </Layout>
    </div>
  );
};

export default Questions;
