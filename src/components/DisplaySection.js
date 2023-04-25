import React from "react";

export default class DisplaySection extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="display-section">
        
        <div className="display-group display_personal-info">
          <div className="pi-name">George Moustillon</div>
          <div className="pi-current-pos">Agent de communication</div>
          <div className="contact pi-phone">+41 33 636 28 89</div>
          <div className="contact pi-email">moustillon_georges@gmail.com</div>
          <div className="contact pi-location">Genève, GE</div>
        </div>

        <hr />

        <div className="display-group description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <div className="display-group display_studies-info">
          <h3 className="display_section-title">Etudes</h3>
          <div>Communication et management</div>
          <div>Ecole du rire</div>
          <div>2023</div>
        </div>

        <div className="display-group display_work-info">
          <h3 className="display_section-title">Expérience professionnelle</h3>
          <div>Assistant machine à café</div>
          <div>Rolex</div>
          <div>2022 - 2023</div>
          <div>
            <ul>
              <li>Faire les cafés</li>
              <li>Nettoyer la machine à café</li>
              <li>Remplir la machine à café</li>
            </ul>
          </div>
        </div>
        
      </div>
    )
  }
}