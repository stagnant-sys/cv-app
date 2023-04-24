import React from "react";

export default class WorkInfo extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>

        <h3>Expérience professionnelle</h3>

        <div className="input-group">
          <label htmlFor="company">Lieu :</label>
          <input type="text" id="company" placeholder="Rolex"></input>
        </div>

        <div className="input-group">
          <label htmlFor="position">Poste occupé :</label>
          <input type="text" id="position" placeholder="Développeur front-end"></input>
        </div>

        <div className="input-group">
          <label htmlFor="mainTasks">Responsabilités principales :</label>
          <input type="text" id="mainTasks" placeholder="Responsabilité 1"></input>
          <input type="text" id="mainTasks2" placeholder="Responsabilité 2"></input>
          <input type="text" id="mainTasks3" placeholder="Responsabilité 3"></input>
        </div>

        <div className="input-group">
          <label htmlFor="workDates">Dates :</label>
          <input type="text" id="workDates" placeholder="Juillet 2021 - Aujourd'hui"></input>
        </div>
      </div>
    )
  }
}