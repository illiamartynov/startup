import React from "react";
import styles from "./Questions.module.css";
import Header from "../../Components/Header/Header";
import QuestionsContent from "../../Components/QuestionsContent/QuestionsContetn";
import Layout from "../../Layout/Layout";
const Questions = () => {
  const QUESTIONS = [
    {
      title: "Dlaczego AI to przyszłość projektowania wnętrz?",
      text: (
        <div className={styles.qaaa}>
          <span style={{ fontWeight: "bold" }}>Wydajność i kreatywność: </span>
          Algorytmy sztucznej inteligencji upraszczają i usprawniają proces
          projektowania, umożliwiając projektantom skupienie się w większym
          stopniu na kreatywnych pomysłach i poszukiwaniach najestetyczniejszych
          rozwiązań. Automatyzując powtarzalne zadania, projektanci mogą
          przeznaczyć więcej czasu na innowacyjne rozwiązania i
          spersonalizowany, unikalny projekt.
          <span style={{ fontWeight: "bold" }}>
            Wnioskowanie oparte na danych:{" "}
          </span>
          Sztuczna inteligencja analizuje ogromne zbiory danych, dostarczając
          cennych informacji na temat zachowań, preferencji i trendów rynkowych
          klientów. Projektanci mogą podejmować świadome decyzje w oparciu o
          dane, co prowadzi do trafniejszych propozycji w projektach.
          <span style={{ fontWeight: "bold" }}>Personalizacja: </span>
          Sztuczna inteligencja może personalizować projekty w oparciu o
          indywidualne preferencje i potrzeby - jest w stanie polecić układy
          mebli, kolorystykę i elementy wystroju dostosowane do konkretnego
          klienta, w oparciu o jego preferencje.
          <span style={{ fontWeight: "bold" }}>Home staging: </span>
          Narzędzia oparte na sztucznej inteligencji mogą wykonać proces
          home-staging, który ułatwia sprzedaż nieruchomości na portalach
          internetowych. Nieruchomości, w ramach których dla procesu sprzedaży
          wykonano home-staging sprzedają się szybciej i po wyższych cenach niż
          nieruchomości bez „wirtualnego umeblowania”.
          <span style={{ fontWeight: "bold" }}>
            Fotorealistyczne modele wnętrz:{" "}
          </span>
          Sztuczna inteligencja może przekształcić wstępne szkice lub podstawowe
          modele 3D w fotorealistyczne rendery o wysokiej rozdzielczości.
          Projektanci mogą szybko zwizualizować swoje pomysły i skutecznie
          przekazać je klientom.
          <span style={{ fontWeight: "bold" }}>
            Planowanie przestrzeni i optymalizacja układu:{" "}
          </span>
          Algorytmy AI pomagają w optymalizacji układu pomieszczeń, biorąc pod
          uwagę takie czynniki, funkcjonalność i estetyka - pomaga to w
          tworzeniu atrakcyjnych wizualnie i praktycznych przestrzeni.
          <span style={{ fontWeight: "bold" }}>
            Wybór materiału i dopasowanie kolorów:{" "}
          </span>
          Sztuczna inteligencja jest w stanie analizować trendy w zakresie
          wykorzystania materiałów i ich łączenia, sugerując odpowiednie
          kombinacje w oparciu o trendy i preferencje klienta. Sztuczna
          inteligencja może również polecić palety kolorów, które dobrze
          współgrają z konkretną przestrzenią.
          <span style={{ fontWeight: "bold" }}>
            Współpraca z projektantami:{" "}
          </span>
          Sztuczna inteligencja nie zastępuje projektantów, ale uzupełnia ich
          wiedzę specjalistyczną. Projektanci współpracują z narzędziami AI,
          dzięki czemu przyśpieszają swoją pracę oraz skupiając się na detalach
          i innowacyjnych rozwiązaniach.
          <span style={{ fontWeight: "bold" }}>Przyszłe trendy: </span>W miarę
          ciągłego rozwoju sztucznej inteligencji możemy spodziewać się bardziej
          wyrafinowanych narzędzi do projektowania wnętrz, w tym analiz
          predykcyjnych, symulacji w czasie rzeczywistym i bezproblemowej
          integracji z innymi technologiami.
        </div>
      ),
    },
    {
      title: "Korzyści z inwestycji w naszą firmę: ",
      text: (
        <div className={styles.qaaa}>
          <span style={{ fontWeight: "bold" }}>
            Potencjał wzrostu wartości kapitału:
          </span>{" "}
          W miarę rozwoju naszej firmy, wraz z czasem wartość Twojej inwestycji
          wzrośnie.
          <span style={{ fontWeight: "bold" }}>Dywidendy:</span> W przyszłości
          planujemy wypłacać część zysków w formie dywidend, zapewniając
          inwestorom stały strumień dochodów.
          <span style={{ fontWeight: "bold" }}>Udziały w firmie:</span>{" "}
          Inwestując, stajesz się częściowym właścicielem, uczestniczącym w
          naszym sukcesie i podejmowaniu decyzji poprzez prawo głosu.
          <span style={{ fontWeight: "bold" }}>Płynność:</span> W przyszłości
          Nasze akcje będzie można łatwo kupować i sprzedawać na giełdach, co
          zapewnia elastyczność biznesową.
          <span style={{ fontWeight: "bold" }}>Dywersyfikacja:</span> Inwestycja
          w naszą spółkę zapewnia dywersyfikację portfela, rozkładając Twoje
          ryzyko inwestycyjne na różne sektory.
          <span style={{ fontWeight: "bold" }}>
            Długoterminowa inwestycja:
          </span>{" "}
          Reinwestowane dywidendy i wzrost wartości kapitału mogą prowadzić do
          znacznej akumulacji wartości Twoich udziałów.
          <span style={{ fontWeight: "bold" }}>Przejrzystość:</span> Działamy
          transparentnie, nie ukrywając żadnych danych, które mogłyby spowodować
          wzrost ryzyka inwestycji.
        </div>
      ),
    },
    {
      title: "Oferta inwestycyjna i zasady współpracy: ",
      text: (
        <div className={styles.qaaa}>
          Podobnie jak w przypadku współpracy z partnerami - także w przypadku
          inwestorów, do każdego zainteresowanego współpracą zawsze podchodzimy
          indywidualnie. Wierzymy, że za każdym razem należy przeanalizować
          możliwości i wspólne korzyści jakie płyną z potencjalnej współpracy.
          <span style={{ fontWeight: "bold" }}>
            Możliwości inwestycyjne:
          </span>{" "}
          Oferujemy różne opcje inwestycyjne , które dostosujemy do Twojej
          tolerancji ryzyka i celów.
          <span style={{ fontWeight: "bold" }}>Współpraca:</span> Wierzymy w
          otwartą komunikację i współpracę z naszymi inwestorami.
          <span style={{ fontWeight: "bold" }}>Wspólna wizja:</span> Nasze
          zasady są zgodne z celami zrównoważonego rozwoju, równości, pokoju,
          bezpieczeństwa i celów humanitarnych.
        </div>
      ),
    },
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
