import React from "react";
import PersonalInfo from "./personal-info";
import StudiesInfo from "./studies-info";
import WorkInfo from "./work-info";

export default class InputSection extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <PersonalInfo />
        <StudiesInfo />
        <WorkInfo />
        <input type="submit" value="Créer le CV"></input>
      </div>
    )
  }
}