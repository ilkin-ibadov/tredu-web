import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated, newsletterEmailStyle }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  return (
    <>
      {status === "error" && (
        <div
          className="text-red-400 text-sm mb-2 mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="text-green-400 text-sm mb-2 mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`mc__form w-full border border-zinc-200 rounded-xl ${newsletterEmailStyle.margin} flex ${newsletterEmailStyle.gap}`}
      >
        <input
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          value={email}
          className={`w-full ${newsletterEmailStyle.inputStyle.bgColor} ${newsletterEmailStyle.inputStyle.border} ${newsletterEmailStyle.inputStyle.padding} ${newsletterEmailStyle.inputStyle.borderRadius} ${newsletterEmailStyle.inputStyle.bgColor}`}
          placeholder="Enter your email"
        />
        <input
          value="Subscribe"
          className={`hover:cursor-pointer ${newsletterEmailStyle.buttonStyle.bgColor} ${newsletterEmailStyle.buttonStyle.border} ${newsletterEmailStyle.buttonStyle.borderRadius} ${newsletterEmailStyle.buttonStyle.fontColor} ${newsletterEmailStyle.buttonStyle.fontSize} ${newsletterEmailStyle.buttonStyle.fontWeight} ${newsletterEmailStyle.buttonStyle.padding}`}
          type="submit"
          label="subscribe"
          formValues={email}
        />
      </form>
    </>
  );
};

const MailchimpFormFooter = ({ newsletterEmailStyle }) => {
  const url =
    "https://tredu.us21.list-manage.com/subscribe/post?u=e2e4ac4420902acb2b0704119&amp;id=51d577387f&amp;f_id=00bf5fe1f0";

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            newsletterEmailStyle={newsletterEmailStyle}
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormFooter;