import React, { useState, useEffect } from 'react';
import './App.css';
import InputSection from './components/InputSection';
import DisplaySection from './components/DisplaySection';

export default function App () {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Alex Emple",
    phone: "+41 33 636 2889",
    email: "alexemple@fakemail.ch",
    location: "Genève, GE",
    wanted: "Développeur web",
    description: "Après avoir pu développer mes compétences en développement dans une grande entreprise multinationale, je cherche à présent à mettre mes compétences au service du bien public."
  });
  const [studiesInfo, setStudiesInfo] = useState({
    studies: "Sciences Informatiques",
    school: "Université de Genève",
    date: "2018",
  });
  const [workInfo, setWorkInfo] = useState({
    company: "Fakebook",
    position: "Développeur fullstack",
    dates: "2019 - 2022",
    tasks: {
      task1: "Création de l'interface utilisateur",
      task2: "Optimisation du référencement",
      task3: "Migration de la base de données",
    }
  });

  function getFormData (formData) {
    setPersonalInfo({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      wanted: formData.wantedJob,
      description: formData.description,
    });
    setStudiesInfo({
      studies: formData.studies,
      school: formData.school,
      date: formData.studiesDate,
      studies2: formData.studies2,
      school2: formData.school2,
      date2: formData.studiesDate2,
    });
    setWorkInfo({
      company: formData.company,
      position: formData.position,
      dates: formData.workDates,
      tasks: {
        task1: formData.mainTasks,
        task2: formData.mainTasks2,
        task3: formData.mainTasks3,
      }
    });
  }

  return (
    <div className="app">
        <InputSection callbackFromParent={getFormData} />
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
  )
}

/*export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      personalInfo: {
        name: "Alex Emple",
        phone: "+41 33 636 2889",
        email: "alexemple@fakemail.ch",
        location: "Genève, GE",
        wanted: "Développeur web",
        description: "Après avoir pu développer mes compétences en développement dans une grande entreprise multinationale, je cherche à présent à mettre mes compétences au service du bien public."
      },
      studiesInfo: {
        studies: "Sciences Informatiques",
        school: "Université de Genève",
        date: "2018",
      },
      workInfo: {
        company: "Fakebook",
        position: "Développeur fullstack",
        dates: "2019 - 2022",
        tasks: {
          task1: "Création de l'interface utilisateur",
          task2: "Optimisation du référencement",
          task3: "Migration de la base de données",
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
          studies2: formData.studies2,
          school2: formData.school2,
          date2: formData.studiesDate2,
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
}*/