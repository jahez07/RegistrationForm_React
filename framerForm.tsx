// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers/

import Example from "https://framer.com/m/framer/Example.js@^1.0.0"

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
            <h3 style={titleStyle}>Email Address</h3>
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
            <h3 style={titleStyle}>First Name</h3>
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
            <h3 style={titleStyle}>Last Name</h3>
            <input
                type="text"
                name="last_name"
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
            <h3 style={titleStyle}>Gender</h3>
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
            <h3 style={titleStyle}>Nationality</h3>
            <input
                type="text"
                name="nation"
                style={inputStyle}
                placeholder="Nationality"
            />
            <h3 style={titleStyle}>Date of Birth</h3>
            <input
                type="date"
                name="nation"
                style={inputStyle}
                placeholder="dd|mm|yyyy"
            />
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
