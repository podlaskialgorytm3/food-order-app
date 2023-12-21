import React, { useState } from "react";
import { z, object, string } from "zod";

const checkoutSchema = object({
  name: string().min(2).max(50),
  email: string().email(),
  street: string().min(2).max(100),
  postal: string().length(6),
  city: string().min(2).max(50),
});

export const Checkout = ({ modalRef, total, closeModal }) => {
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        street: e.target.elements.street.value,
        postal: e.target.elements.postal.value,
        city: e.target.elements.city.value,
    };

    try {
        checkoutSchema.parse(formData);
        setFormErrors({});
        console.log("Form data is valid");
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errors = {};
            error.errors.forEach((err) => {
                const field = err.path[0];
                const message = err.message;
                errors[field] = message;
            });
            setFormErrors(errors);
        } else {
            console.error(error);
        }
    }
    console.log(formErrors);
    };

    const handleClose = () => {
        closeModal();
        setFormErrors({});
    }

    return (
    <dialog className="modal" ref={modalRef}>
      <h2>Checkout</h2>
      <p>{total} zł</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          {formErrors.name && <p className="error-message">{formErrors.name}</p>}
        </div>
        <div className="control">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
          {formErrors.email && <p className="error-message">{formErrors.email}</p>}
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input type="text" id="street" />
          {formErrors.street && <p className="error-message">{formErrors.street}</p>}
        </div>
        <div className="control">
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" />
          {formErrors.postal && <p className="error-message">{formErrors.postal}</p>}
        </div>
        <div className="control">
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
          {formErrors.city && <p className="error-message">{formErrors.city}</p>}
        </div>
        <div className="cart-actions">
          <div className="cart-button" onClick={handleClose}>
            Cancel
          </div>
          <button type="submit" className="cart-button">
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
};
