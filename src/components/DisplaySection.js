import React from "react";

export default class DisplaySection extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="display-section">
        
        <div className="display-group display_personal-info">
          <div className="pi-name">{this.props.username}</div>
          <div className="pi-current-pos">{this.props.wanted}</div>
          <div className="contact pi-phone">{this.props.phone}</div>
          <div className="contact pi-email">{this.props.email}</div>
          <div className="contact pi-location">{this.props.location}</div>
        </div>

        <hr />

        <div className="display-group description">{this.props.description}</div>

        <div className="display-group display_studies-info">
          <h3 className="display_section-title">ÉTUDES</h3>

          <div className="display_si-group">
            <div className="si-studies">{this.props.studies}</div>
            <div className="si-school"><span className="school">{this.props.school}</span> | <span className="si-dates">{this.props.studiesDate}</span></div>
          </div>
        </div>

        <div className="display-group display_work-info">
          <h3 className="display_section-title">EXPÉRIENCE PROFESSIONNELLE</h3>

          <div className="display_wi-group">
            <div className="wi-job">{this.props.position}</div>
            <div className="wi-place"><span className="place">{this.props.company}</span> | <span className="wi-dates">{this.props.workDates}</span></div>
            <div className="wi-tasks">
              <ul>
                <li>{this.props.task1}</li>
                <li>{this.props.task2}</li>
                <li>{this.props.task3}</li>
              </ul>
            </div>
          </div>

        </div>
        
      </div>
    )
  }
}