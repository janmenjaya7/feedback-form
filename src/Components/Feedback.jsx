// import imgs from "./feedback.gif";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// function Feedback() {
//   const notify = () => toast("Wow so easy!", { position: "top-center" });
//   return (
//     <div>
//       <div className="container mt-5">
//         <div className="cards">
//           <div className="row">
//             <div className="col col-sm-6 col-md-6 col-lg-6 ">
//               <div className="d-flex justify-content-center">
//                 <img
//                   alt="somtging"
//                   src={imgs}
//                   height="95%"
//                   width="100%"
//                   className=" d-sm-block mt-1 mb-1"
//                 />
//               </div>
//             </div>
//             <div className="col-12 col-sm-12 col-md-6 col-lg-6">
//               <div className="input-section col-sm-12 col-12">
//                 <div className="form-floating mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Name"
//                   />
//                   <label for="name">Username</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="floatingInput"
//                     placeholder="name@example.com"
//                   />
//                   <label for="floatingInput">Email address</label>
//                 </div>
//                 <div className="input-group mb-3">
//                   <span className="input-group-text">+91</span>
//                   <div className="form-floating">
//                     <input
//                       type="number"
//                       className="form-control"
//                       placeholder="Phone-number"
//                     />
//                     <label for="floatingInputGroup1">Phone-number</label>
//                   </div>
//                 </div>
//                 <div className="form-floating mb-3">
//                   <textarea
//                     className="form-control mb-3"
//                     placeholder="Leave a comment here"
//                     id="floatingTextarea2"
//                     style={{ height: "100px" }}
//                   ></textarea>
//                   <label for="floatingTextarea2">Comments</label>
//                 </div>
//                 <div className="d-grid gap-2">
//                   <button
//                     className="btn btn btn-outline-primary "
//                     onClick={notify}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default Feedback;
import React, { useState } from "react";
import imgs from "./feedback-unscreen.gif";
// import { ToastContainer, toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import logo from "./logo.json";
import "../Components/Feedback.css";

function Feedback() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  // const { v4: uuidv4 } = require("uuid");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      errors.username = "Name is required";
      isValid = false;
    } else if (formData.username.length < 3) {
      errors.username = "Name length is to short";
      isValid = false;
    } else if (formData.username.length > 20) {
      errors.username = "Name is too long";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (formData.phoneNumber.length > 10) {
      errors.phoneNumber = "Phone number are too big";
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    // const log = JSON.stringify(logo.json);

    if (isValid) {
      const feedbackId = uuidv4();
      // toast.success(`Feedback submitted with id#${feedbackId}`);
      toast.success(`Successfully submitted`, {
        duration: 5000,
        style: {
          height: "80px",
          padding: "20px",
          backgroundImage:
            "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)",
          // "linear-gradient(to top, #9be15d 0%, #00e3ae 100%)",
          color: "#fff",
          fontWeight: "bolder",
          fontSize: "20px",
          borderRadius: "30px",
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        },
        icon: "",
        iconTheme: {
          primary: "#fff",
          secondary: "#fff",
        },
      });
      console.log("inputfield data=", formData);
      setFormData({
        username: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    }
  };
  return (
    <>
      <div>
        <h1 className="text-center py-5 header-text">
          <p></p>
        </h1>
        <div id="mean-section" className="container my-5">
          <div className="cards">
            <div className="row">
              <div className="col col-sm-6 col-md-6 col-lg-6 ">
                <div className="d-flex justify-content-center">
                  <img
                    alt="something"
                    src={imgs}
                    height="100%"
                    width="100%"
                    data-testid="img-1"
                    className=" d-sm-block mt-1 mb-1"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="input-section col-sm-12 col-12">
                  <form onSubmit={handleSubmit} className="text-muted">
                    <div className="form-floating mb-2">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.username ? "is-invalid" : ""
                        }`}
                        placeholder="Name"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        data-testid="name-inpt"
                      />
                      <label htmlFor="username">Name</label>
                      {errors.username && (
                        <div className="invalid-feedback">
                          {errors.username}
                        </div>
                      )}
                    </div>
                    <div className="form-floating mb-2">
                      <input
                        type="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        placeholder="name@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label htmlFor="email">Email address</label>
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="input-group mb-2">
                      <span className="input-group-text">+91</span>
                      <div className="form-floating">
                        <input
                          type="number"
                          className={`form-control ${
                            errors.phoneNumber ? "is-invalid" : ""
                          }`}
                          placeholder="Contact"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                        <label htmlFor="phoneNumber">Contact</label>
                        {errors.phoneNumber && (
                          <div className="invalid-feedback">
                            {errors.phoneNumber}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-floating mb-2">
                      <textarea
                        className={`form-control mb-2 ${
                          errors.message ? "is-invalid" : ""
                        }`}
                        placeholder="Leave a comment here"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="message">Comments</label>
                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>
                    <div className="d-grid gap-2 my-4">
                      <button className="btn btn btn-outline-primary ">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Feedback;

// import React, { useState } from "react"; import imgs from "./feedback.gif"; import { ToastContainer, toast } from "react-toastify"; import "react-toastify/dist/ReactToastify.css";

// function Feedback() { const [formData, setFormData] = useState({ username: "", email: "", phoneNumber: "", message: "", }); const [errors, setErrors] = useState({});

// const handleChange = (e) => { const { name, value } = e.target;

// if (name === &#39;phoneNumber&#39; &amp;&amp; value.length &lt; formData.phoneNumber.length) {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     return;
//   }

// if (name === &#39;phoneNumber&#39; &amp;&amp; formData.phoneNumber.length === 10) {
//     return;
//   }
// setFormData({
//   ...formData,
//   [name]: value,
// });

// setErrors({
//   ...errors,
//   [name]: &#34;&#34;,
// });
// };

// const handleBlur = (e) => { const { name, value } = e.target; const newErrors = { ...errors };

// if (value.trim() === &#34;&#34;) {
//   newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
// } else {
//   newErrors[name] = &#34;&#34;;
// }

// setErrors(newErrors);
// };

// const handleSubmit = (e) => { e.preventDefault(); const newErrors = {}; let isValid = true;

// if (!formData.username.trim()) {
//   newErrors.username = &#34;Username is required&#34;;
//   isValid = false;
// }

// if (!formData.email.trim()) {
//   newErrors.email = &#34;Email is required&#34;;
//   isValid = false;
// } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//   newErrors.email = &#34;Email address is invalid&#34;;
//   isValid = false;
// }

// if (!formData.phoneNumber.trim() || formData.phoneNumber.length !== 10) {
//     newErrors.phoneNumber = &#34;Phone number is required and must be 10 digits&#34;;
//     isValid = false;
//   }

// if (!formData.message.trim()) {
//   newErrors.message = &#34;Message is required&#34;;
//   isValid = false;
// }

// setErrors(newErrors);

// if (isValid) {
//   const feedbackId = generateRandomId();
//   toast.success(`Feedback submitted with id#${feedbackId}`);
//   setFormData({
//     username: &#34;&#34;,
//     email: &#34;&#34;,
//     phoneNumber: &#34;&#34;,
//     message: &#34;&#34;,
//   });
// }
// };

// const generateRandomId = () => { return Math.floor(Math.random() * 1000); };

// return ( <> <div> <div className="container mt-5"> <div className="cards"> <div className="row"> <div className="col col-sm-6 col-md-6 col-lg-6 "> <div className="d-flex justify-content-center"> <img alt="something" src={imgs} height="95%" width="100%" className=" d-sm-block mt-1 mb-1" /> </div> </div> <div className="col-12 col-sm-12 col-md-6 col-lg-6"> <div className="input-section col-sm-12 col-12"> <form onSubmit={handleSubmit}> <div className="form-floating mb-3"> <input type="text" className={form-control ${errors.username ? &#34;is-invalid&#34; : &#34;&#34;}} placeholder="Name" name="username" value={formData.username} onChange={handleChange} onBlur={handleBlur} /> <label htmlFor="username">Username</label> {errors.username && ( <div className="invalid-feedback">{errors.username}</div> )} </div> <div className="form-floating mb-3"> <input type="email" className={form-control ${errors.email ? &#34;is-invalid&#34; : &#34;&#34;}} placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} /> <label htmlFor="email">Email address</label> {errors.email && ( <div className="invalid-feedback">{errors.email}</div> )} </div> <div className="input-group mb-3"> <span className="input-group-text">+91</span> <div className="form-floating"> <input type="number" className={form-control ${errors.phoneNumber ? &#34;is-invalid&#34; : &#34;&#34;}} placeholder="Phone-number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} onBlur={handleBlur} /> <label htmlFor="phoneNumber">Phone-number</label> {errors.phoneNumber && ( <div className="invalid-feedback">{errors.phoneNumber}</div> )} </div> </div> <div className="form-floating mb-3"> <textarea className={form-control mb-3 ${errors.message ? &#34;is-invalid&#34; : &#34;&#34;}} placeholder="Leave a comment here" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} style={{ height: "100px" }} ></textarea> <label htmlFor="message">Comments</label> {errors.message && ( <div className="invalid-feedback">{errors.message}</div> )} </div> <div className="d-grid gap-2"> <button className="btn btn btn-outline-primary "> Submit </button> </div> </form> </div> </div> </div> </div> </div> </div> <ToastContainer /> </> ); }

// export default Feedback;
