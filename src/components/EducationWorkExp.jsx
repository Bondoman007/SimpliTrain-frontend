import React, { useState } from "react";

const EducationWorkExp = () => {
  const [education, setEducation] = useState([
    {
      id: 1,
      institution: "Imperial College London",
      degree: "Masters in Marketing",
      graduationDate: "march 2020",
      startDate: "March 2016",
      endDate: "June 2018",
    },
    {
      id: 2,
      institution: "MIT University",
      degree: "Bachelor's degree in Engineering and Technology",
      graduationDate: "march 2020",
      startDate: "March 2012",
      endDate: "June 2016",
    },
  ]);

  const [workExperience, setWorkExperience] = useState([
    {
      id: 1,
      title: "Software Engineer",
      company: "Amazon",
      startDate: "July 2018",
      endDate: "Present",
    },
  ]);

  const addEducation = () => {
    const newEducation = {
      id:
        education.length > 0 ? Math.max(...education.map((e) => e.id)) + 1 : 1,
      institution: "",
      degree: "",
      graduationDate: "",
      startDate: "",
      endDate: "",
    };
    setEducation([...education, newEducation]);
  };

  const addWorkExperience = () => {
    const newWorkExperience = {
      id:
        workExperience.length > 0
          ? Math.max(...workExperience.map((w) => w.id)) + 1
          : 1,
      title: "",
      company: "",
      startDate: "",
      endDate: "",
    };
    setWorkExperience([...workExperience, newWorkExperience]);
  };

  const EducationEntry = ({ entry }) => (
    <div className="flex items-start py-4 px-2">
      <div className="bg-gray-100 w-20 h-16 rounded"></div>
      <div className="ml-4 flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">
            {entry.institution}
          </h3>
          <button className="text-gray-500 hover:text-gray-700">
            Edit <span className="inline-block ml-1">✏️</span>
          </button>
        </div>
        <p className="text-sm text-gray-600">
          {entry.degree}, graduated on {entry.graduationDate}
        </p>
        <p className="text-sm text-gray-500">
          {entry.startDate} - {entry.endDate}
        </p>
      </div>
    </div>
  );

  const WorkExperienceEntry = ({ entry }) => (
    <div className="flex items-start py-4 px-2">
      <div className="bg-gray-100 w-20 h-16 rounded"></div>
      <div className="ml-4 flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">{entry.title}</h3>
          <button className="text-gray-500 hover:text-gray-700">
            Edit <span className="inline-block ml-1">✏️</span>
          </button>
        </div>
        <p className="text-sm text-gray-600">{entry.company}</p>
        <p className="text-sm text-gray-500">
          {entry.startDate} - {entry.endDate}
        </p>
      </div>
    </div>
  );

  const Section = ({ title, children, onAdd }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <button
          onClick={onAdd}
          className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-1 rounded font-medium"
        >
          ADD
        </button>
      </div>
      <div className="bg-white rounded-lg shadow p-4">{children}</div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50 min-h-screen">
      <Section title="Education" onAdd={addEducation}>
        {education.map((edu) => (
          <EducationEntry key={edu.id} entry={edu} />
        ))}
      </Section>

      <Section title="Work Experience" onAdd={addWorkExperience}>
        {workExperience.map((work) => (
          <WorkExperienceEntry key={work.id} entry={work} />
        ))}
      </Section>
    </div>
  );
};

export default EducationWorkExp;
