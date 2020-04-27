import React from "react";
import "./../styles/styles.scss";
import Title from "./Title";
import Icons from "./Icons";

export const About = () => {
  return (
    <>
      <section id="aboutSection">
        <Title title="  Kim jesteśmy? " />
        <p className="description">
          MotoB jest firmą zajmującą się wypożyczaniem motocykli oraz sprzętu
          motocyklowego. Rozpoczęliśmy naszą działalność z myślą o tych
          wszystkich, którzy są już zarażeni pasją do motocykli lub dopiero
          zostaną złapani w jej sidła.
        </p>
        <Title title=" Dlaczego warto nam ufać? " />
        <p className="description">
          Nie zamartwiaj się trudnościami, które niesie posiadanie pojazdu.
          Zapomnij o obowiązkowych serwisach i przeglądach. Nie myśl o problemie
          związanym z garażowaniem motocykla. Nie trać czasu na szukanie
          najkorzystniejszej oferty ubezpieczeniowej. Nie wydawaj góry pieniędzy
          na zakup motocykla, jeśli wykorzystasz go tylko kilka razy w roku.
        </p>
        <Icons />
        <p className="centerText">
            Gwarantujemy, że formalności nie zajmą dłużej niż 15 minut, a
            motocykl wraz z niezbędnym wyposażeniem otrzymasz w stu procentach
            przygotowany do drogi.
        </p>
      </section>
    </>
  );
};
export default About;
