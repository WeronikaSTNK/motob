import React from "react";

export const ToggleMotoDescription = ({ motorcycle }) => {
  const {
    motorType,
    maxPower,
    maxTorque,
    acceleration0to100,
    gearbox,
    secondaryTransmission,
    fuelConsumptionPer100km,
    fuelTanCapacity,
    description,
    displacement,
  } = motorcycle;
  return (
    <>
      <ul>
        <li>
          Pojemność skokowa: <b>{displacement}</b>
        </li>

        <li>
          Typ silnika: <b>{motorType} </b>
        </li>
        <li>
          Moc maksymalna: <b>{maxPower}</b>
        </li>
        <li>
          Maksymalny moment obrotowy: <b>{maxTorque}</b>
        </li>
        <li>
          Skrzynia biegów: <b>{gearbox} </b>
        </li>
        <li>
          Wtórne przeniesienie napędu: <b> {secondaryTransmission} </b>
        </li>
        <li>
          Zużycie paliwa na 100 km: <b>{fuelConsumptionPer100km}</b>
        </li>
        <li>
          Pojemność zbiornika paliwa: <b> {fuelTanCapacity} </b>
        </li>
        <li>{acceleration0to100 ? acceleration0to100 : ""}</li>
        <b> {description}</b>
      </ul>
    </>
  );
};
export default ToggleMotoDescription;
