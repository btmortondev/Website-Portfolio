import './Contact.css'
const Contact = () => {
    return ( 
        <div className="page-content">
            <h1>Contact Me</h1>
            <form className="contact-form">
                <label className="form-label">First Name: </label>
                <input  className="form-input" placeholder="first name" />
                <label>Last Name: </label>
                <input placeholder="last name" />
                <label>Email: </label>
                <input placeholder="example@gmail.com" />
                <label>Message</label>
                <textarea className="form-message" placeholder="Message"></textarea>
                <button className="form-submit" >Submut</button>
            </form>
        </div>
     );
}
 
export default Contact;