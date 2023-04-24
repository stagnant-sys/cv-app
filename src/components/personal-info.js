import React from "react";

export default class PersonalInfo extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>

        <h3>Informations personnelles</h3>

        <div className="input-group">
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" placeholder="name"></input>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" placeholder="youremail@adress.com"></input>
        </div>
      
        <div className="input-group">
          <label htmlFor="phone">Téléphone :</label>
          <input type="tel" id="phone" placeholder="+41 33 636 28 89"></input>
        </div>

      </div>
    )
  }
}