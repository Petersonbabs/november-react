

// functions, states, variables

const Button = ({ text = "Click me", onButtonClick }) => {
    const handleSubmit = () => {
        alert("Button clicked!")
    }
    return (
        <button style={{
            background: "blue",
            color: "white",
            border: "none",
            padding: ".5rem 1.2rem",
            borderRadius: "5px"
        }} onClick={onButtonClick}>{text}</button>
    )
}

export default Button