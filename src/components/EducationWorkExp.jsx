import React, { useEffect, useState } from "react";

const EducationWorkExp = ({
  education: propEducation,
  workExperience: propWorkExperience,
}) => {
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  // Update state when props change
  useEffect(() => {
    setEducation(propEducation || []);
    setWorkExperience(propWorkExperience || []);
  }, [propEducation, propWorkExperience]);

  const addEducation = () => {
    const newEducation = {
      _id: Date.now().toString(), // Temporary ID (MongoDB will generate on save)
      institution: "",
      degree: "",
      from: "",
      to: "",
    };
    setEducation([...education, newEducation]);
  };

  const addWorkExperience = () => {
    const newWorkExperience = {
      _id: Date.now().toString(), // Temporary ID
      jobTitle: "",
      company: "",
      from: "",
      to: "",
    };
    setWorkExperience([...workExperience, newWorkExperience]);
  };

  const EducationEntry = ({ entry }) => (
    <div className="flex items-start py-4 px-2 max-w-3xl">
      <div className="w-20 h-16 rounded bg-gray-200"></div>
      <div className="ml-4 flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">
            {entry.institution}
          </h3>
          <button className="text-gray-500 hover:text-gray-700">
            Edit <span className="inline-block ml-1">✏️</span>
          </button>
        </div>
        <p className="text-sm text-gray-600">{entry.degree}</p>
        <p className="text-sm text-gray-500">
          {entry.from} - {entry.to}
        </p>
      </div>
    </div>
  );

  const WorkExperienceEntry = ({ entry }) => (
    <div className="flex items-start py-4 px-2">
      <div className="bg-gray-100 w-20 h-16 rounded"></div>
      <div className="ml-4 flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">
            {entry.jobTitle}
          </h3>
          <button className="text-gray-500 hover:text-gray-700">
            Edit <span className="inline-block ml-1">✏️</span>
          </button>
        </div>
        <p className="text-sm text-gray-600">{entry.company}</p>
        <p className="text-sm text-gray-500">
          {entry.from} - {entry.to}
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
    <div className="max-w-3xl mx-auto p-4 min-h-screen">
      <Section title="Education" onAdd={addEducation}>
        {education.length > 0 ? (
          education.map((edu) => <EducationEntry key={edu._id} entry={edu} />)
        ) : (
          <p className="text-gray-500 text-sm">
            No education details available.
          </p>
        )}
      </Section>

      <Section title="Work Experience" onAdd={addWorkExperience}>
        {workExperience.length > 0 ? (
          workExperience.map((work) => (
            <WorkExperienceEntry key={work._id} entry={work} />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No work experience available.</p>
        )}
      </Section>
    </div>
  );
};

export default EducationWorkExp;
