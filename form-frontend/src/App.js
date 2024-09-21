// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import FormError from "./FormError";
import "./App.css";
import { React, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const [message, setMessage] = useState(null); // Message state

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(
  //     firstName,
  //     lastName,
  //     email,
  //     contact,
  //     gender,
  //     selectedOption,
  //     subjects,
  //     resume,
  //     url,
  //     about
  //   );
  //   // Add your form submission logic here

  //   const formData = new FormData();
  //   formData.append("firstName", firstName);
  //   formData.append("lastName", lastName);
  //   formData.append("email", email);
  //   formData.append("contact", contact);
  //   formData.append("gender", gender);
  //   formData.append("subjects", JSON.stringify(subjects));
  //   formData.append("resume", resume); // append file
  //   formData.append("url", url);
  //   formData.append("selectedOption", selectedOption);
  //   formData.append("about", about);

  //   try {
  //     const response = await fetch("http://localhost:5000/api/form/submit", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     const result = await response.text();
  //     alert(result);
  //   } catch (error) {
  //     console.error("Form submission failed", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("gender", gender);
    formData.append("subjects", JSON.stringify(subjects));
    formData.append("resume", resume); // append file
    formData.append("url", url);
    formData.append("selectedOption", selectedOption);
    formData.append("about", about);

    try {
      const response = await fetch("http://localhost:5000/api/form/submit", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setMessage({
          type: "success",
          text: "Thank you! Your application has been submitted successfully. We will review your details and get back to you shortly.",
        });
        handleReset(); // Reset form after successful submission
      } else {
        setMessage({
          type: "error",
          text: "Oops! Something went wrong. Please try submitting the form again.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
      console.error("Form submission failed", error);
    }
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="post">
          <label for="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label for="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <label for="email">Enter Email* </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <label for="tel">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />
          <label for="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <label for="lang">Your best Subject</label>
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subjects.english === true}
            onChange={(e) => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subjects.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subjects.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          />
          Physics
          <label for="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Enter Upload File"
            required
          />
          <label for="url">Enter URL*</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter url"
            required
          />
          <label>Select your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled selected={selectedOption === ""}>
              Select your Ans
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MongoDB</option>
            </optgroup>
          </select>
          <label for="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About your self"
            required
          ></textarea>
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>

        {message && <FormError message={message} />}
      </fieldset>
    </div>
  );
}

export default App;

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contact: "",
//     gender: "male",
//     subjects: {
//       english: true,
//       maths: false,
//       physics: false,
//     },
//     resume: null,
//     url: "",
//     selectedOption: "",
//     about: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         subjects: { ...prev.subjects, [name]: checked },
//       }));
//     } else if (type === "file") {
//       setFormData((prev) => ({ ...prev, [name]: e.target.files[0] }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Add your form submission logic here
//   };

//   const handleReset = () => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       contact: "",
//       gender: "male",
//       subjects: {
//         english: true,
//         maths: false,
//         physics: false,
//       },
//       resume: null,
//       url: "",
//       selectedOption: "",
//       about: "",
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Form in React</h1>
//       <fieldset>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="firstname">First Name*</label>
//           <input
//             type="text"
//             name="firstName"
//             id="firstname"
//             value={formData.firstName}
//             onChange={handleChange}
//             placeholder="Enter First Name"
//             required
//           />
//           <label htmlFor="lastname">Last Name*</label>
//           <input
//             type="text"
//             name="lastName"
//             id="lastname"
//             value={formData.lastName}
//             onChange={handleChange}
//             placeholder="Enter Last Name"
//             required
//           />
//           <label htmlFor="email">Email*</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//             required
//           />
//           <label htmlFor="contact">Contact*</label>
//           <input
//             type="tel"
//             name="contact"
//             id="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             placeholder="Enter Mobile number"
//             required
//           />
//           <label htmlFor="gender">Gender*</label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={formData.gender === "male"}
//             onChange={handleChange}
//           />{" "}
//           Male
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={formData.gender === "female"}
//             onChange={handleChange}
//           />{" "}
//           Female
//           <input
//             type="radio"
//             name="gender"
//             value="other"
//             checked={formData.gender === "other"}
//             onChange={handleChange}
//           />{" "}
//           Other
//           <label>Your best Subject</label>
//           <input
//             type="checkbox"
//             name="english"
//             checked={formData.subjects.english}
//             onChange={handleChange}
//           />{" "}
//           English
//           <input
//             type="checkbox"
//             name="maths"
//             checked={formData.subjects.maths}
//             onChange={handleChange}
//           />{" "}
//           Maths
//           <input
//             type="checkbox"
//             name="physics"
//             checked={formData.subjects.physics}
//             onChange={handleChange}
//           />{" "}
//           Physics
//           <label htmlFor="resume">Upload Resume*</label>
//           <input
//             type="file"
//             name="resume"
//             id="resume"
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="url">Enter URL*</label>
//           <input
//             type="url"
//             name="url"
//             id="url"
//             value={formData.url}
//             onChange={handleChange}
//             placeholder="Enter URL"
//             required
//           />
//           <label>Select your choice</label>
//           <select
//             name="selectedOption"
//             id="select"
//             value={formData.selectedOption}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>
//               Select your Ans
//             </option>
//             <optgroup label="Beginners">
//               <option value="1">HTML</option>
//               <option value="2">CSS</option>
//               <option value="3">JavaScript</option>
//             </optgroup>
//             <optgroup label="Advanced">
//               <option value="4">React</option>
//               <option value="5">Node</option>
//               <option value="6">Express</option>
//               <option value="7">MongoDB</option>
//             </optgroup>
//           </select>
//           <label htmlFor="about">About</label>
//           <textarea
//             name="about"
//             id="about"
//             value={formData.about}
//             onChange={handleChange}
//             placeholder="Tell us about yourself"
//             required
//           ></textarea>
//           <button type="reset" onClick={handleReset}>
//             Reset
//           </button>
//           <button type="submit">Submit</button>
//         </form>
//       </fieldset>
//     </div>
//   );
// }

// export default App;
