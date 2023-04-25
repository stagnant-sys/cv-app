import React from "react";
import PersonalInfo from "./Personal-info";
import StudiesInfo from "./Studies-info";
import WorkInfo from "./Work-info";

export default class InputSection extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="input-section">
        <PersonalInfo />
        <hr/>
        <StudiesInfo />
        <hr/>
        <WorkInfo />
        <input type="submit" value="Créer le CV"></input>
      </div>
    )
  }
}