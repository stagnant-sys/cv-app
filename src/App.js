import React, { Component } from 'react';
import './App.css';
import InputSection from './components/InputSection';
import DisplaySection from './components/DisplaySection';

export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      personalInfo: {
        name: "",
        phone: "",
        email: "",
        location: "",
      },
      studiesInfo: {
        studies: "",
        school: "",
        studiesDate: "",
      },
      workInfo: {
        company: "",
        job: "",
        workDates: "",
        tasks: {
          task1: "",
          task2: "",
          task3: "",
        }
      }
    };
  }

  getFormData (formData) {
    this.setState(
      {
        personalInfo: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          wanted: formData.wantedJob,
          description: formData.description,
        },
        studiesInfo: {
          studies: formData.studies,
          school: formData.school,
          date: formData.studiesDate,
        },
        workInfo: {
          company: formData.company,
          position: formData.position,
          dates: formData.workDates,
          tasks: {
            task1: formData.mainTasks,
            task2: formData.mainTasks2,
            task3: formData.mainTasks3,
          }
        }

      }
    );
  }

  render () {
    const { personalInfo, studiesInfo, workInfo } = this.state;

    return (
      <div className="app">
        <InputSection callbackFromParent={this.getFormData.bind(this)} />
        <DisplaySection 
          username={personalInfo.name}
          phone={personalInfo.phone}
          email={personalInfo.email}
          location={personalInfo.location}
          wanted={personalInfo.wanted}
          description={personalInfo.description}
          studies={studiesInfo.studies}
          school={studiesInfo.school}
          studiesDate={studiesInfo.date}
          company={workInfo.company}
          position={workInfo.position}
          workDates={workInfo.dates}
          task1={workInfo.tasks.task1}
          task2={workInfo.tasks.task2}
          task3={workInfo.tasks.task3}
        />
      </div>
    );
  }
}