import React, { useState , useEffect, useRef } from "react";
import { z, object, string } from "zod";

const checkoutSchema = object({
  name: string().min(2).max(50),
  email: string().email(),
  street: string().min(2).max(100),
  postal: string().length(6),
  city: string().min(2).max(50),
});

export const Checkout = ({ modalRef, total, closeModal , handleSendOrder}) => {
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            street: e.target.elements.street.value,
            postal: e.target.elements.postal.value,
            city: e.target.elements.city.value,
            price: total
        });
        setIsSubmitting(true);
    };

    useEffect(() => {
        const checkingValidation = async () => {
            try {
                checkoutSchema.parse(formData);
                setFormErrors({});
                await sendOrderToServer();
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
            setIsSubmitting(false);
        };

        if (isSubmitting) {
            checkingValidation();
        }
    }, [isSubmitting, formData]);

    const sendOrderToServer = async () => {
        try{
            const response = await fetch("http://localhost:3000/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ order: formData }),
            });
            const data = await response.json();
            console.log(data);
            handleSendOrder(true)
            formRef.current.reset();
            closeModal();
        }
        catch(error){
            console.log(error);
        }
    }


    const handleClose = () => {
        closeModal();
        setFormErrors({});
    }

    return (
    <dialog className="modal" ref={modalRef}>
      <h2>Checkout</h2>
      <p>{total} zł</p>
      <form className="form" onSubmit={handleSubmit} ref={formRef}>
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
