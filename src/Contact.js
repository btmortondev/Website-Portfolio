import './Contact.css'
const Contact = () => {
    return ( 
        <div className="page-content">
            <h1>Contact Me</h1>
            <form className="contact-form">
                <label className="form-label">First Name: </label>
                <input className="form-input" placeholder="first name" />
                <label className="form-label" >Last Name: </label>
                <input className="form-input"  placeholder="last name" />
                <label className="form-label" >Email: </label>
                <input className="form-input" placeholder="example@gmail.com" />
                <label className="form-label" >Message</label>
                <textarea className="form-message" placeholder="Message"></textarea>
                <button className="form-submit" >Submit</button>
            </form>
        </div>
     );
}
 
export default Contact;