import React from "react";

export default function InputSection (props) {
  function sendFormData (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    props.callbackFromParent(formJson);
  }

  return (
    <div className="input-section">

      <form method="post" onSubmit={sendFormData}>
        <fieldset>
          <legend>Informations Personnelles</legend>
          <div className="input-group">
            <input type="text" name="name" placeholder="Prénom Nom" />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Adresse email" />
          </div>
          <div className="input-group">
            <input type="tel" name="phone" placeholder="Numéro de téléphone" />
          </div>
          <div className="input-group">
            <input type="text" name="location" placeholder="Ville de domicile" />
          </div>
          <div className="input-group">
            <textarea name="description" placeholder="Courte description personnelle..." />
          </div>
          <div className="input-group">
            <input type="text" name="wantedJob" placeholder="Poste recherché"></input>
          </div>
        </fieldset>


        <fieldset>
          <legend>Etudes</legend>
          <div className="input-group">
            <input type="text" name="school" placeholder="Lieu de formation"></input>
          </div>
          <div className="input-group">
            <input type="text" name="studies" placeholder="Diplôme obtenu"></input>
          </div>
          <div className="input-group">
            <input type="text" name="studiesDate" placeholder="Date d'obtention du diplôme"></input>
          </div>
        </fieldset>      

       
        <fieldset>
          <legend>Expérience professionnelle</legend>
          <div className="input-group">
            <input type="text" name="company" placeholder="Employeur"></input>
          </div>
          <div className="input-group">
            <input type="text" name="position" placeholder="Poste occupé"></input>
          </div>
          <div className="input-group">
            <input type="text" name="mainTasks" placeholder="Responsabilité 1"></input>
            <input type="text" name="mainTasks2" placeholder="Responsabilité 2"></input>
            <input type="text" name="mainTasks3" placeholder="Responsabilité 3"></input>
          </div>
          <div className="input-group">
            <input type="text" name="workDates" placeholder="Période d'engagement"></input>
          </div>
        </fieldset>
          
        <div className="input-buttons">        
          <input type="submit" value="Créer le CV"></input>
          <input type="reset" value="Recommencer"></input>
        </div>

      </form>

      </div>
  );
}

/*export default class InputSection extends React.Component {
  constructor (props) {
    super (props);
  }

  sendFormData (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    this.props.callbackFromParent(formJson);
  }


  render () {
    return (
      <div className="input-section">

      <form method="post" onSubmit={this.sendFormData.bind(this)}>
        <fieldset>
          <legend>Informations Personnelles</legend>
          <div className="input-group">
            <input type="text" name="name" placeholder="Prénom Nom" />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Adresse email" />
          </div>
          <div className="input-group">
            <input type="tel" name="phone" placeholder="Numéro de téléphone" />
          </div>
          <div className="input-group">
            <input type="text" name="location" placeholder="Ville de domicile" />
          </div>
          <div className="input-group">
            <textarea name="description" placeholder="Courte description personnelle..." />
          </div>
          <div className="input-group">
            <input type="text" name="wantedJob" placeholder="Poste recherché"></input>
          </div>
        </fieldset>


        <fieldset>
          <legend>Etudes</legend>
          <div className="input-group">
            <input type="text" name="school" placeholder="Lieu de formation"></input>
          </div>
          <div className="input-group">
            <input type="text" name="studies" placeholder="Diplôme obtenu"></input>
          </div>
          <div className="input-group">
            <input type="text" name="studiesDate" placeholder="Date d'obtention du diplôme"></input>
          </div>
        </fieldset>      

       
        <fieldset>
          <legend>Expérience professionnelle</legend>
          <div className="input-group">
            <input type="text" name="company" placeholder="Employeur"></input>
          </div>
          <div className="input-group">
            <input type="text" name="position" placeholder="Poste occupé"></input>
          </div>
          <div className="input-group">
            <input type="text" name="mainTasks" placeholder="Responsabilité 1"></input>
            <input type="text" name="mainTasks2" placeholder="Responsabilité 2"></input>
            <input type="text" name="mainTasks3" placeholder="Responsabilité 3"></input>
          </div>
          <div className="input-group">
            <input type="text" name="workDates" placeholder="Période d'engagement"></input>
          </div>
        </fieldset>
          
        <div className="input-buttons">        
          <input type="submit" value="Créer le CV"></input>
          <input type="reset" value="Recommencer"></input>
        </div>

      </form>

      </div>
    )
  }
}*/