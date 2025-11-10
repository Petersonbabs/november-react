

// functions, states, variables

const Button = ({ text = "Click me", onButtonClick }) => {
    const getProducts = async () => {
        try {
            // const res = await fetch("http://localhost:5000/products", {
            //     method: "GET",
            //     body: JSON.stringify({}),
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // })
            // const data = await res.blob()
        } catch (error) {

        }
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