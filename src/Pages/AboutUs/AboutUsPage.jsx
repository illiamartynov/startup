import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import AboutUs from "./AboutUsContent/AboutUs";
import dawid from "../../Images/People/dawid.png";
import arsen from "../../Images/People/arsen.png";
import aga from "../../Images/People/aga.png";
import marcin from "../../Images/People/marcin.png";
import sanya from "../../Images/People/sanya.png";
import misha from "../../Images/People/misha.png";
import illia from "../../Images/People/illia.png";
import slava from "../../Images/People/slava.png";

const AboutUsPage = () => {
  const INFO = [
    {
      title: "DAWID TAMBOR",
      subtitle: "Dyrektor Zarządzający",
      text: (
        <>
        <p>“Moi współpracownicy, partnerzy biznesowi i klienci często opisują mnie jako lidera-wizjonera. Realizuję misję pozostawienia świata lepszym, niż go zastałem. Uwielbiam wydobywać to, co najlepsze z ludzi, miejsc i sytuacji, zaczynając od siebie, mojej rodziny, przyjaciół i domu.</p>
        <p>Razem z moim niesamowitym zespołem w VISTAGER tworzymy innowacyjną technologię, która umożliwia maksymalizację potencjału nieruchomości dla właścicieli i sprzedających. Zawodowo największą satysfakcję daje mi zadowolenie klientów, wspólników i pracowników z dobrze zrealizowanego projektu.</p>
        <p>Życiowe baterie ładuję spędzając czas z dziećmi, uprawiając sport lub relaksując się przy książce i muzyce. Więcej o mnie możesz dowiedzieć się na moich osobistych kanałach social media.”</p>
      </>
      ),
      image: dawid,
    },
    {
      title: "ALEKSANDER MILKO",
      subtitle: "Dyrektor ds. Technologii",
      text: (
        <>
          <p>“Jestem Sasza, zaangażowany, ekstrawertyczny optymista.</p> <p>Od
          najmłodszych lat fascynowała mnie technologia. Jako CTO kieruję naszym
          zespołem ds. badań i rozwoju produktu (grupą pasjonatów technologii).
          Zapewniam wykorzystanie najnowszych technologii do tworzenia
          niesamowitych innowacji.</p><p> Moje zaangażowanie motywuje mnie do
          niestrudzonej pracy nad naszymi produktami. Jako optymista postrzegam
          wyzwania jako nowe możliwości. Moja ekstrawertyczna natura pomaga
          budować relacje i zapewniać skuteczną komunikację.</p> <p>Czuję się
          szczęściarzem, że pracuję z tak utalentowanym zespołem i mam okazję
          zmieniać świat wokół nas i ulepszać go dzięki technologii.”</p>
        </>
      ),
      image: sanya,
    },
    {
      title: "AGNIESZKA SOLARZ",
      subtitle: "Dyrektor Operacyjny",
      text: (
        <>
          <p>“Jestem otwartą kobietą, pełną energii do tworzenia inkluzywnego,
          wspierającego i zrównoważonego środowiska pracy. 10 lat podwójnej
          kariery: w zarządzaniu korporacyjnymi łańcuchami dostaw i jako
          wykładowca uniwersytecki, rozwinęło moją pasję do mentoringu.</p><p>Czerpię
          satysfakcję ze wzmacniania współpracy zespołowej i wydajności. Kocham
          wspierać członków zespołu w ich rozwoju osobistym i zawodowym. Moja
          rola w VISTAGER obejmuje nadzorowanie codziennych operacji,
          optymalizację procesów i wspieranie pozytywnej kultury firmy.</p><p>Poza
          pracą cenię proste życiowe przyjemności, takie jak dzielenie się
          domowymi wypiekami z moim zespołem.”</p>
        </>
      ),
      image: aga,
    },
    {
      title: "MARCIN MIKA",
      subtitle: "Dyrektor Finansowy",
      text: (
        <>
          <p>“Jako Dyrektor Finansowy dbam o zdrowie bilansu finansowego, zarządzam
          przepływami pieniężnymi, zarządzam ryzykiem i tworzę prognozy.
          Wykształcenie zdobyte na Uniwersytecie Jagiellońskim i Uniwersytecie
          Ekonomicznym w Krakowie ukierunkowało moje analityczne
          predyspozycje.</p><p>Prowadziłem controlling globalnych operacji finansowych
          o rocznych obrotach przekraczających 1 mld USD. Przez ostatnie 10 lat
          prowadziłem zespoły i zarządzałem planami w Zurychu (Szwajcaria),
          Frankfurcie nad Menem (Niemcy) i Krakowie (Polska). Obecnie dbam o
          sukces finansowy firmy VISTAGER wykorzystując swoje doświadczenie, a
          dodatkowo prowadzę własne biuro księgowe.</p><p>Oprócz mojej pasji do danych
          i strategii, lubię oglądać piłkę nożną i spędzać czas wspólnie z
          przyjaciółmi.”</p>
        </>
      ),
      image: marcin,
    },
    {
      title: "ILLIA MARTYNOV",
      subtitle: "Frontend Developer",
      text: (
        <>
          <p>“Cześć, nazywam się Illia. Jestem podekscytowany ideą projektowania
          świata poprzez innowacyjne technologie. Do projektu VISTAGER wnoszę
          swój niezłomny zapał i nieograniczoną kreatywność.</p><p>Moja motywacja
          bierze się z chęci ulepszania rzeczywistości za pomocą rozwiązań,
          które pozytywnie wpływają na innych ludzi. Lubię tworzyć przyjazne dla
          użytkownika interfejsy i tworzyć ekscytujące doświadczenia. Zawsze
          staram się łączyć funkcjonalność z estetyką.</p><p>Poza kodowaniem lubię
          uprawiać sporty zespołowe i grać w gry planszowe (moje półki są
          wypełnione setkami gier). Lubię też własnoręcznie przygotowywać
          posiłki i cieszyć się nimi razem ze znajomymi.”</p>
        </>
      ),
      image: illia,
    },
    {
      title: "SVIATOSLAV PYLYP",
      subtitle: "Backend Developer",
      text: (
        <>
          <p>“Koledzy nazywają mnie Sława. Jestem oddanym programistą z pasją do
          budowania solidnych i skalowalnych systemów. W VISTAGER wykorzystuję
          swoją specjalistyczną wiedzę, aby tworzyć innowacyjne technologie.
          </p><p>Fascynuje mnie potencjał wykorzystania AI w PropTech. Zapewniam płynne
          działanie serwerów, zarządzanie bazami danych i integrację API.
          Wyróżniam się w tworzeniu wydajnych, bezpiecznych i niezawodnych
          rozwiązań.</p><p>Oprócz zdobywania umiejętności technicznych cenię sobie
          pracę zespołową, jasną komunikację i podejście oparte na współpracy.
          Moja praca jest tak naprawdę moim hobby.”</p>
        </>
      ),
      image: slava,
    },
    {
      title: "MYKHAILO LAPKO",
      subtitle: "Machine Learning Engineer",
      text: (
        <>
          <p>“Jestem Misza, profesjonalista IT, którego pasją jest rozwiązywanie
          problemów technicznych za pomocą prostych rozwiązań. Moja podróż w
          nowe technologie prowadzi do poznania i zastosowania ML i sztucznej
          inteligencji w szerszym ujęciu. Najlepiej czuję się w dynamicznym
          środowisku developerskim ,w duchu szybko zmieniającego się świata
          IT.</p><p>Poza pracą lubię uczestniczyć w warsztatach i prowadzić głębokie
          rozmowy o technologii. W wolnym czasie spędzam czas na aktywnym
          wypoczynku i zwiedzaniu Warszawy, Europy, a wkrótce całego świata.”</p>
        </>
      ),
      image: misha,
    },
    {
      title: "ARSEN RUDNYTSKYI",
      subtitle: "Generative AI Engineer",
      text: (
        <>
          <p>“Nazywam się Arsen Rudnytskyi, jestem inżynierem, który opracowuje
          nowe rozwiązania AI przy użyciu języka programowania Python. Pasjonuję
          się sztuczną inteligencją, poświęcam się rozwijaniu technologii
          poprzez nowoczesne programowanie i znajdywanie skutecznych rozwiązań
          technicznych. Moje analityczne nastawienie napędza mnie do
          utrzymywania się na czele tej szybko rozwijającej się dziedziny.</p><p>Lubię
          współpracować z innymi, aby tworzyć konkretne narzędzia i zawsze
          chętnie stawiam czoła nowym wyzwaniom. Poza nauką uwielbiam czytać o
          najnowszych osiągnięciach AI i aktywnie spędzać czas na zewnątrz, co
          pozwala mi odświeżać umysł i łączyć kropki.”</p>
        </>
      ),
      image: arsen,
    },
  ];

  return (
    <Layout page={true}>
      <AboutUs info={INFO} />
    </Layout>
  );
};

export default AboutUsPage;
