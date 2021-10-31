import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const { name, email, subject, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    };

    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`)
            }
            else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }
        console.log('errorMessage', errorMessage);
    };

    return (
        <section className="container">
            <div className="contact">
                <h2 className="mTopBottom center">Contact me</h2>
                <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <input type="text" name="name" className="field-style field-split align-left" placeholder="Name" defaultValue={name} onBlur={handleChange} />
                            <input type="email" name="email" className="field-style field-split align-right" placeholder="Email" defaultValue={email} onBlur={handleChange} />

                        </li>
                        {/* <li>
                        <input type="text" name="field3" className="field-style field-split align-left" placeholder="Phone" />
                        <input type="url" name="field4" className="field-style field-split align-right" placeholder="Website" />
                    </li> */}
                        <li>
                            <input type="text" name="subject" className="field-style field-full align-none" placeholder="Subject" defaultValue={subject} onBlur={handleChange} />
                        </li>
                        <li>
                            <textarea name="message" className="field-style" placeholder="Message" defaultValue={message} onBlur={handleChange}></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Send Message" />
                        </li>
                        {errorMessage && (
                            <li>
                                <p className="error-text">{errorMessage}</p>
                            </li>
                        )}
                    </ul>
                </form>
            </div>
        </section>
    )
};


export default ContactForm;