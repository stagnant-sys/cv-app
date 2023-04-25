import React from "react";

export default class DisplaySection extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
        personalInfo: {
          name: "Georges Moustillon",
          tel: "+41 33 636 28 89",
          email: "moustillon_georges@gmail.com",
          location: "Genève, GE",
        }
      };
  }

  render () {
    const { personalInfo } = this.state;

    return (
      <div className="display-section">
        
        <div className="display-group display_personal-info">
          <div className="pi-name">{personalInfo.name}</div>
          <div className="pi-current-pos">Current Pos</div>
          <div className="contact pi-phone">{personalInfo.tel}</div>
          <div className="contact pi-email">{personalInfo.email}</div>
          <div className="contact pi-location">{personalInfo.location}</div>
        </div>

        <hr />

        <div className="display-group description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <div className="display-group display_studies-info">
          <h3 className="display_section-title">Etudes</h3>

          <div className="display_si-group">
            <div className="si-studies">Communication et management</div>
            <div className="si-school"><span className="school">Ecole du rire</span> | <span className="si-dates">2023</span></div>
          </div>

          <div className="display_si-group">
            <div className="si-studies">Communication et management</div>
            <div className="si-school"><span className="school">Ecole du rire</span> | <span className="si-dates">2023</span></div>
          </div>
        </div>

        <div className="display-group display_work-info">
          <h3 className="display_section-title">Expérience professionnelle</h3>

          <div className="display_wi-group">
            <div className="wi-job">Assistant machine à café</div>
            <div className="wi-place"><span className="place">Rolex</span> | <span className="wi-dates">2022 - 2023</span></div>
            <div className="wi-tasks">
              <ul>
                <li>Faire les cafés</li>
                <li>Nettoyer la machine à café</li>
                <li>Remplir la machine à café</li>
              </ul>
            </div>
          </div>
          
          <div className="display_wi-group">
            <div className="wi-job">Assistant machine à café</div>
            <div className="wi-place"><span className="place">Rolex</span> | <span className="wi-dates">2022 - 2023</span></div>
            <div className="wi-tasks">
              <ul>
                <li>Faire les cafés</li>
                <li>Nettoyer la machine à café</li>
                <li>Remplir la machine à café</li>
              </ul>
            </div>
          </div>

        </div>
        
      </div>
    )
  }
}