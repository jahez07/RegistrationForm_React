// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers/

import Example from "https://framer.com/m/framer/Example.js@^1.0.0"
import PhoneInput from "react-phone-number-input"
/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */
export default function Form(props) {
    // This is a React component containing an Example component
    // - Replace <Example /> with your own code
    // - Find inspiration: https://www.framer.com/developers/

    const formUrl =
        "https://script.google.com/macros/s/AKfycbxCIoSzEsWq3BU_qRe-nK10QwJ9J9vULPYucUS0SsHix_7C2kJ7kqEG8dyxVJBxH0-t/exec"
    return (
        <form action={formUrl} method="post" style={containerStyle}>
            <h3 style={titleStyle}>
                Email Address <span style={{ color: "red" }}>*</span>
            </h3>
            <input
                type="email"
                name="email"
                required
                style={inputStyle}
                placeholder="Email"
            />
            <h3 style={titleStyle}>Registration Number</h3>
            <text style={textStyle}>
                (Please skip this, to be updated by BIOSIS Office)
            </text>
            <input
                type="text"
                name="reg_number"
                style={inputStyle}
                placeholder="Registration Number"
            />
            <br />
            <h2 style={titleStyle}>Personal & Contact Info</h2> <br />
            <h3 style={titleStyle}>
                First Name <span style={{ color: "red" }}>*</span>
            </h3>
            <input
                type="text"
                name="first_name"
                required
                style={inputStyle}
                placeholder="First Name"
            />
            <h3 style={titleStyle}>Middle Name</h3>
            <input
                type="text"
                name="mid_name"
                style={inputStyle}
                placeholder="Middle Name"
            />
            <h3 style={titleStyle}>
                Last Name <span style={{ color: "red" }}>*</span>
            </h3>
            <input
                type="text"
                name="last_name"
                required
                style={inputStyle}
                placeholder="Last Name"
            />
            <h3 style={titleStyle}>Also Known As Name (AKA)</h3>
            <text style={textStyle}>
                If you are popularly known in a different name that your
                official name. (For example, Robin Baby is popularly known as
                Jiby Pallipad, as is Rebecca also popularly known as Becky, etc.
            </text>
            <input
                type="text"
                name="aka"
                style={inputStyle}
                placeholder="AKA Name"
            />
            <h3 style={titleStyle}>
                Gender <span style={{ color: "red" }}>*</span>
            </h3>
            <div style={divStyle} required>
                <label style={labelStyle}>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        style={inputStyle}
                    />
                    Male
                </label>
                <label style={labelStyle}>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        style={inputStyle}
                    />
                    Female
                </label>
            </div>
            <h3 style={titleStyle}>
                Nationality <span style={{ color: "red" }}>*</span>
            </h3>
            <input
                type="text"
                required
                name="nation"
                style={inputStyle}
                placeholder="Nationality"
            />
            <h3 style={titleStyle}>
                Date of Birth <span style={{ color: "red" }}>*</span>
            </h3>
            <input
                type="date"
                name="dob"
                required
                style={inputStyle}
                placeholder="dd|mm|yyyy"
            />
            <h3 style={titleStyle}>Blood Group</h3>
            <input
                type="text"
                name="blood"
                style={inputStyle}
                placeholder="Blood Group"
            />
            <h3 style={titleStyle}>
                Country Code <span style={{ color: "red" }}>*</span>
            </h3>
            <input
                type="tel"
                name="pcphone"
                required
                style={inputStyle}
                placeholder="Country Code (India : +91)"
            />
            <h3 style={titleStyle}>
                Phone <span style={{ color: "red" }}>*</span>
            </h3>
            <input
                type="tel"
                name="pphone"
                required
                style={inputStyle}
                placeholder="Phone Number"
            />
            <h3 style={titleStyle}>Country Code of Secondary Mobile</h3>
            <input
                type="text"
                name="scphone"
                style={inputStyle}
                placeholder="Country Code (UAE : +971)"
            />
            <h3 style={titleStyle}>Secondary Mobile</h3>
            <input
                type="tel"
                name="sphone"
                style={inputStyle}
                placeholder="Secondary Number"
            />
            <h3 style={titleStyle}>Country Code of WhatsApp Mobile</h3>
            <input
                type="text"
                name="wcphone"
                style={inputStyle}
                placeholder="Country Code (UAE : +971)"
            />
            <h3 style={titleStyle}>WhatsApp Number</h3>
            <input
                type="tel"
                name="wphone"
                style={inputStyle}
                placeholder="WhatsApp Number"
            />
            <h3 style={titleStyle}>
                Primary Email <span style={{ color: "red" }}>*</span>
            </h3>
            <text style={textStyle}>
                (The email ID which you are mostly associated with)
            </text>
            <input
                type="email"
                name="pemail"
                required
                style={inputStyle}
                placeholder="Email Address"
            />
            <h3 style={titleStyle}>Secondary Email</h3>
            <text style={textStyle}>
                Your alternate email ID, Official email ID, etc.
            </text>
            <input
                type="email"
                name="semail"
                style={inputStyle}
                placeholder="Email Address"
            />
            <h3 style={titleStyle}>
                Name of Organisation you work with in Coimbatore
            </h3>
            <text style={textStyle}>
                (Applicable for Working Professionals only)
            </text>
            <input
                type="text"
                name="porg"
                style={inputStyle}
                placeholder="Organisation Name"
            />
            <h3 style={titleStyle}>Office Address in Coimbatore</h3>
            <text style={textStyle}>
                (Applicable for Working Professionals only)
            </text>
            <input
                type="text"
                name="addorg"
                style={inputStyle}
                placeholder="Address"
            />
            <h3 style={titleStyle}>Name of Educational Institution</h3>
            <text style={textStyle}>
                Name of college you have applied in Coimbatore, as written in
                official documents <br /> (Prospectus, Application Form,
                Admission Letter, etc.)
            </text>
            <input
                type="text"
                name="edName"
                style={inputStyle}
                placeholder="Institution Name"
            />
            <h3 style={titleStyle}>Location of Educational Institution</h3>
            <text style={textStyle}>
                Specific location of the college in Coimbatore
            </text>
            <input
                type="text"
                name="edLoc"
                style={inputStyle}
                placeholder="Address"
            />
            <h3 style={titleStyle}>Duration of Course</h3>
            <text style={textStyle}>
                Please follow this format: July 2014 to March 2018
            </text>
            <input
                type="text"
                name="duration"
                style={inputStyle}
                placeholder="eg : June 2024 to May 2027"
            />
            <h3 style={titleStyle}>
                Expected Date of Joining Talmid{" "}
                <span style={{ color: "red" }}>*</span>
            </h3>
            <input
                type="date"
                name="expDateJ"
                required
                style={inputStyle}
                placeholder="dd|mm|yyyy"
            />
            <h3 style={titleStyle}>
                Residential Status in Talmid House
                <span style={{ color: "red" }}>*</span>
            </h3>
            <div style={divStyle} required>
                <label style={labelStyle}>
                    <input
                        type="radio"
                        name="resident_status"
                        value="Regular Student"
                        style={inputStyle}
                    />
                    Regular Student (Staying in Talmid House to regularly go to
                    my college in Coimbatore)
                </label>
                <label style={labelStyle}>
                    <input
                        type="radio"
                        name="resident_status"
                        value="Distance Education"
                        style={inputStyle}
                    />
                    Distance Education (Will stay in Talmid House whenever I
                    have to visit my college in Coimbatore)
                </label>
                <label style={labelStyle}>
                    <input
                        type="radio"
                        name="resident_status"
                        value="Working Professional"
                        style={inputStyle}
                    />
                    Working Professional (Note: Only professionals with Day Job
                    is allowed and No Late/Night Shifts)
                </label>
                <label style={labelStyle}>
                    <input
                        type="radio"
                        name="resident_status"
                        value="Short Term Accommodation"
                        style={inputStyle}
                    />
                    Short Term Accommodation (Staying in Talmid House for a
                    Crash Course or short period)
                </label>
                <label style={labelStyle}>
                    <input
                        type="radio"
                        name="resident_status"
                        value="Other"
                        style={inputStyle}
                    />
                    Other <br />
                    <br />
                    <input
                        type="text"
                        name="resident_status"
                        style={inputStyle}
                        placeholder="Type here, if Other"
                    />
                </label>
            </div>
            <input type="submit" value="Submit" style={buttonStyle} />
        </form>
    )
}

// Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
const containerStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    gap: 8,
    border: "2px",
    borderColor: "#064744",
    color: "#064744",
    background: "transparent",
}

const inputStyle = {
    padding: "12px 16px",
    borderRadius: 10,
    fontSize: "16px",
}

const buttonStyle = {
    background: "#222",
    color: "white",
    fontWeight: 600,
    padding: "12px 16px",
    borderRadius: 10,
    border: "none",
}

const titleStyle = {
    color: "#082A57",
    padding: "0px 0px",
    gap: 0,
}

const textStyle = {
    fontWeight: 700,
    color: "#082A57",
}

const listStyle = {
    fontWeight: 500,
}

const labelStyle = {
    fontWeight: 700,
    color: "#082A57",
}

const divStyle = {
    border: "2px",
    color: "#fff",
    padding: "5px 10px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
}
