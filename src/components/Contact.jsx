import React, { useEffect } from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const initialValues = { fn: "", ln: "", em: "", mess: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const msgerrors = { fn: "", ln: "", em: "", mess: "" };
  const form = useRef();
  let fnm = 0,
    lnm = 0,
    emm = 0,
    messm = 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const CustomToast = ({ text }) => (
    <div>
      <p className="text">{text}</p>
      <button className="button1" onClick={() => toast.dismiss()}>
        Dismiss
      </button>
    </div>
  );
  const customToast = () => {
    console.log(formErrors);
    console.log(fnm);

    if (fnm == 1) {
      toast(<CustomToast text={formErrors.fn} />);
      console.log("hey this works for first name");
    }
    if (lnm == 1) {
      toast(<CustomToast text={formErrors.ln} />);
      console.log("hey this works last name");
    }
    if (emm == 1) {
      toast(<CustomToast text={formErrors.em} />);
      console.log("hey this works email");
    }
    if (messm == 1) {
      toast(<CustomToast text={formErrors.mess} />);
      console.log("hey this works message");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    customToast();
    setIsSubmit(true);

    //  {
    //     (
    //      <div className="ui message success">Signed in successfully</div>
    //    ) : (
    //      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    //    );
    //  }

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm(
          "service_z5kc4eo",
          "template_97hf267",
          form.current,
          "g8FzWHc8TiHd9T6Eo"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
            console.log("message did not sent");
          }
        );
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.em) {
      errors.em = "Email is required";
      emm = 1;
    } else if (!regex.test(values.em)) {
      errors.em = "Email is not valid";
      em = 1;
    }
    if (!values.fn) {
      errors.fn = "First name is required";
      fnm = 1;
      console.log("after change");
      console.log(fnm);
    }
    if (!values.ln) {
      errors.ln = "Last name is required";
      lnm = 1;
    }
    if (!values.mess) {
      errors.mess = "Message is required";

      messm = 1;
    }
    return errors;
  };

  //const notify = () => toast(validate(formValues));
  return (
    <section id="Contact">
      <div className="container mx-auto my-20 w-2/3 border border-purple-200 bg-neutral-50">
        <div className="p-5 space-y-5 shadow-xl">
          <h4 className="text-center text-3xl">Contact Me</h4>

          {/* */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                name="fn"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 text-xs"
                value={formValues.fn}
                onChange={handleChange}
                placeholder="First Name"
              />
              <input
                type="text"
                name="ln"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 text-xs"
                value={formValues.ln}
                onChange={handleChange}
                placeholder="Last Name"
              />

              <input
                type="email"
                name="em"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 text-xs"
                value={formValues.em}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                type="number"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 text-xs"
                placeholder="Phone no."
              />

              <textarea
                name="mess"
                cols="10"
                rows="5"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 text-sm"
                value={formValues.mess}
                onChange={handleChange}
                placeholder="Enter message.."
              ></textarea>
            </div>

            <input
              type="submit"
              value="Send message"
              className="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold col-span-2"
              // onClick={customToast}
            />
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
