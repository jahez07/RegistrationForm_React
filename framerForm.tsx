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
            />{" "}
            <br />
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
            <br />
            <h3 style={titleStyle}>Middle Name</h3>
            <input
                type="text"
                name="mid_name"
                style={inputStyle}
                placeholder="Middle Name"
            />
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
            <h3 style={titleStyle}>Blood Group</h3>
            <input
                type="text"
                name="blood"
                style={inputStyle}
                placeholder="Blood Group"
            />
            <br />
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
            <br />
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
            <br />
            <h3 style={titleStyle}>Country Code of Secondary Mobile</h3>
            <input
                type="text"
                name="scphone"
                style={inputStyle}
                placeholder="Country Code (UAE : +971)"
            />
            <br />
            <h3 style={titleStyle}>Secondary Mobile</h3>
            <input
                type="tel"
                name="sphone"
                style={inputStyle}
                placeholder="Secondary Number"
            />
            <br />
            <h3 style={titleStyle}>Country Code of WhatsApp Mobile</h3>
            <input
                type="text"
                name="wcphone"
                style={inputStyle}
                placeholder="Country Code (UAE : +971)"
            />
            <br />
            <h3 style={titleStyle}>WhatsApp Number</h3>
            <input
                type="tel"
                name="wphone"
                style={inputStyle}
                placeholder="WhatsApp Number"
            />
            <br />
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
            <br />
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
            <br />
            <h2 style={titleStyle}>College / Office</h2> <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
            <h2 style={titleStyle}>Parents / Gaurdian</h2> <br />
            <h3 style={titleStyle}>
                In "Parent/Guardian Contact info", please provide as much as
                information available and whichever relevant. Kindly keep your
                Parents/Guardian informed that Biosis Talmid House may use these
                numbers to contact them when required.
                <span style={{ color: "red" }}>*</span>
            </h3>
            <div style={divStyle} required>
                <label style={labelStyle}>
                    <input
                        type="radio"
                        name="acknowledement"
                        value="I Understand"
                        style={inputStyle}
                    />
                    I Understand
                </label>
            </div>
            <br />
            <h3 style={titleStyle}>
                Father's Full Name <span style={{ color: "red" }}>*</span>
            </h3>
            <text style={textStyle}>
                (First Name | Middle Name | Last Name)
            </text>
            <input
                type="text"
                name="fatherName"
                required
                style={inputStyle}
                placeholder="Father's Name"
            />
            <br />
            <h3 style={titleStyle}>
                Father's Phone Number with Country Code{" "}
                <span style={{ color: "red" }}>*</span>
            </h3>
            <input
                type="text"
                name="fatherPhone"
                required
                style={inputStyle}
                placeholder="Father's Phone"
            />
            <br />
            <h3 style={titleStyle}>
                Father's Email
                <span style={{ color: "red" }}>*</span>
            </h3>
            <input
                type="email"
                name="fatherEmail"
                required
                style={inputStyle}
                placeholder="Father's Email Address"
            />
            <br />
            <h3 style={titleStyle}>
                Mother's Full Name <span style={{ color: "red" }}>*</span>
            </h3>
            <text style={textStyle}>
                (First Name | Middle Name | Last Name)
            </text>
            <input
                type="text"
                name="motherName"
                required
                style={inputStyle}
                placeholder="Mother's Name"
            />
            <br />
            <h3 style={titleStyle}>
                Mother's Phone Number with Country Code{" "}
                <span style={{ color: "red" }}>*</span>
            </h3>
            <input
                type="text"
                name="motherPhone"
                required
                style={inputStyle}
                placeholder="Mother's Phone"
            />
            <br />
            <h3 style={titleStyle}>Mother's Email</h3>
            <input
                type="email"
                name="motherEmail"
                style={inputStyle}
                placeholder="Mother's Email Address"
            />
            <br />
            <h3 style={titleStyle}>Full Name of Guardian-1</h3>
            <text style={textStyle}>
                Not mandatory for all. Please update if only your parents are
                away, OR those who are unable to provide their Biological
                Parents' details. Please do not mention any Staff/Board Members
                name of Talmid House
            </text>
            <input
                type="text"
                name="g1Name"
                style={inputStyle}
                placeholder="Gaurdian's Name"
            />
            <br />
            <h3 style={titleStyle}>Relationship with Guardian-1</h3>
            <text style={textStyle}>
                Describe whether Brother/ Sister/ Stepfather/ Stepmother/ Church
                Elder/ Family Member etc.
            </text>
            <input
                type="text"
                name="g1Relation"
                style={inputStyle}
                placeholder="Gaurdian's Relation"
            />
            <br />
            <h3 style={titleStyle}>
                Guardian 1 Phone Number with Country Code
            </h3>
            <input
                type="text"
                name="g1Phone"
                style={inputStyle}
                placeholder="Gaurdian's Relation"
            />
            <br />
            <h3 style={titleStyle}>Guardian 1 Email Address</h3>
            <input
                type="email"
                name="g1Email"
                style={inputStyle}
                placeholder="Gaurdian's Email"
            />
            <br />
            <h3 style={titleStyle}>Full Name of Guardian-2</h3>
            <text style={textStyle}>
                Not mandatory if you have already provided Father's /Mother's
                details
            </text>
            <input
                type="email"
                name="g2Name"
                style={inputStyle}
                placeholder="Gaurdian's Name"
            />
            <br />
            <h3 style={titleStyle}>Relationship with Guardian-2</h3>
            <text style={textStyle}>
                Describe whether Brother/ Sister/ Stepfather/ Stepmother/ Church
                Elder/ Family Member etc.
            </text>
            <input
                type="email"
                name="g2Relation"
                style={inputStyle}
                placeholder="Gaurdian's Name"
            />
            <br />
            <h3 style={titleStyle}>
                Guardian 2 Phone Number with Country Code
            </h3>
            <input
                type="text"
                name="g2Phone"
                style={inputStyle}
                placeholder="Gaurdian's Relation"
            />
            <br />
            <h3 style={titleStyle}>Guardian 2 Email Address</h3>
            <input
                type="email"
                name="g2Email"
                style={inputStyle}
                placeholder="Gaurdian's Email"
            />
            <br />
            <h3 style={titleStyle}>Emergency Contact(s)</h3>
            <text style={textStyle}>
                Please update the FULL NAME and PHONE NUMBER of the person(s) to
                reach your family in case of emergency
            </text>
            <input
                type="email"
                name="emgCon"
                style={inputStyle}
                placeholder="Contact"
            />
            <br />
            <h2 style={titleStyle}>Address</h2>
            <br />
            <h3 style={titleStyle}>
                Permanent Address is required. If only you do not have one in
                India, you may provide international address.
                <span style={{ color: "red" }}>*</span>
            </h3>
            <div style={divStyle} required>
                <label style={labelStyle}>
                    <input
                        type="radio"
                        name="acknowledement2"
                        value="I Understand"
                        style={inputStyle}
                    />
                    I understand
                </label>
            </div>
            <br />
            <h3 style={titleStyle}>
                Permanent Address Line 1 (House Name/ Family Name/ Flat No/ Flat
                Name)
            </h3>
            <text style={textStyle}>
                If "House Name/ Family Name" entered in Address Line 1, Please
                update "Flat No/ Flat Name" in Address Line 2
            </text>
            <input
                type="text"
                name="paddl1"
                style={inputStyle}
                placeholder="Address Line 1"
            />
            <br />
            <h3 style={titleStyle}>
                Permanent Address Line 2 (Flat No/ Flat Name/ Street)
            </h3>
            <text style={textStyle}>
                Do not repeat "Flat No/ Flat Name", if already entered in
                Address Line 1
            </text>
            <input
                type="text"
                name="paddl2"
                style={inputStyle}
                placeholder="Address Line 2"
            />
            <br />
            <h3 style={titleStyle}>
                Permanent Address Line 3 (Street/ Location)
            </h3>
            <input
                type="text"
                name="paddl3"
                style={inputStyle}
                placeholder="Street/ Location"
            />
            <br />
            <h3 style={titleStyle}>Permanent Address Line 4 (City/Town)</h3>
            <input
                type="text"
                name="paddl4"
                style={inputStyle}
                placeholder="City/Town"
            />
            <br />
            <h3 style={titleStyle}>Permanent Address Line 5 (District)</h3>
            <input
                type="text"
                name="paddl5"
                style={inputStyle}
                placeholder="District"
            />
            <br />
            <h3 style={titleStyle}>Permanent Address Line 6 (State)</h3>
            <input
                type="text"
                name="paddl6"
                style={inputStyle}
                placeholder="State"
            />
            <br />
            <h3 style={titleStyle}>Permanent Address Line 7 (Country)</h3>
            <input
                type="text"
                name="paddl7"
                style={inputStyle}
                placeholder="Country"
            />
            <br />
            <h3 style={titleStyle}>Permanent Address Line 8 (PIN Code)</h3>
            <input
                type="text"
                name="paddl8"
                style={inputStyle}
                placeholder="PIN Code"
            />
            <br />
            <h2 style={titleStyle}>ID & Disclaimer</h2>
            <br />
            <h3 style={titleStyle}>
                Govt ID Document Name <span style={{ color: "red" }}>*</span>
            </h3>
            <text style={textStyle}>
                Specify the type of document. Eg, whether it is a Passport /
                Driving License / Aadhar Card / PAN Card, SSN etc. Please use
                one with photo identification. (No need to upload image)
            </text>
            <input
                type="text"
                name="gIDname"
                required
                style={inputStyle}
                placeholder="Name of the Gov. ID"
            />
            <br />
            
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
