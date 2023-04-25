import React from "react";

export default class StudiesInfo extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="input-category">

        <h3>Etudes</h3>

        <div className="input-group">
          <label htmlFor="school">Lieu de formation :</label>
          <input type="text" id="school" placeholder="Université de Genève"></input>
        </div>

        <div className="input-group">
          <label htmlFor="studies">Diplôme :</label>
          <input type="text" id="studies" placeholder="Bachelor en Informatique"></input>
        </div>

        <div className="input-group">
          <label htmlFor="studiesDate">Date d'obtention :</label>
          <input type="text" id="studiesDate" placeholder="2023"></input>
        </div>
        
      </div>
    )
  }
}