import React from "react";

const FormError = (prpos) => {
  return (
    <div>
      <h1>From status</h1>

      {prpos.message && (
        <div
          className={
            prpos.message.type === "success"
              ? "success-message"
              : "error-message"
          }
        >
          {prpos.message.text}
        </div>
      )}
    </div>
  );
};

export default FormError;
