import React from "react";

export default class PersonalInfo extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="input-category">

        <h3>Informations personnelles</h3>

        <div className="input-group">
          <input type="text" id="name" placeholder="Prénom Nom" />
        </div>

        <div className="input-group">
          <input type="email" id="email" placeholder="adresse@email.com" />
        </div>
      
        <div className="input-group">
          <input type="tel" id="phone" placeholder="+41 33 636 28 89" />
        </div>

        <div className="input-group">
          <input type="text" id="location" placeholder="Genève, GE" />
        </div>

        <div className="input-group">
          <textarea id="personalDescription" placeholder="Short description..." />
        </div>

      </div>
    )
  }
}