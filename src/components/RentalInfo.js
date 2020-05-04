import React from "react";
import "../styles/styles.scss";
const RentalInfo = () => {
  return (
    <>
      <section  className="centerText">
        <p className="centerText">
          Przy wypożyczeniu jednośladu pobieramy kaucje, którą zwracamy od razu
          po jego oddaniu. W tej cenie oferujemy:{" "}
        </p>
        <ul>
          <li> 1. czysty i w pełni sprawny motocykl,</li>
          <li>2. przygotowany do jazdy kask,</li>
          <li>3. rękawice.</li>
        </ul>
        <p>
          W celu rezerwacji skontaktuj się z nami telefonicznie, mailowo lub
          napisz do nas na facebooku.
        </p>
        <p>
          Nie masz doświadczenia w prowadzeniu motocykla a posiadasz prawo jazdy
          kat B. dłużej niż trzy lata? Skontaktuj się z nami!
        </p>
        <p>
    Przeprowadzimy Ci szkolenie teoretyczne oraz praktyczne abyś mógł
        sprawnie i bezpiecznie poruszać się tym pojazdem. Terminy szkoleń
        ustalane są indywidualnie.
        </p>

      </section>
    </>
  );
};
export default RentalInfo;
