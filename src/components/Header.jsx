import Button from "./Ui/Button"

const Header = () => {
    const handleSignup = () => {
        alert("Signing up....")
    }
    return (
        <header style={{
            backgroundColor: "#999",
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
            alignItems: "center"
        }}>
            <h1>Logo</h1>

            <div style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",

            }}>
                <a style={{
                    textDecoration: "none"
                }} href="#">Home</a>
                <a style={{
                    textDecoration: "none"
                }} href="#">Home</a>
                <a style={{
                    textDecoration: "none"
                }} href="#">Home</a>
            </div>
            <Button onButtonClick={handleSignup} />
        </header>
    )
}

const styles = {
    headerStyle: {
        background: "red"
    }
}

export default Header