import Button from './Button'

const Hero = () => {
    return (
        <div style={styles.heroStyle}>
            {/* left */}
            <div style={styles.heroLeftStyle}>
                <h2 style={styles.heroHeading}>Step Up Your Game with the Latest Nike Shoes</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae laudantium dignissimos ipsa sunt beatae, earum quis reprehenderit itaque nemo, nam doloremque ducimus iure maxime! Sapiente ea vitae labore facere tenetur?</p>
                <Button text="Get Started" onButtonClick={() => {
                    alert("exploring page....")
                }} />
            </div>
            {/* right */}
            <div style={styles.heroRightStyle}>
                <img style={styles.heroRightImage} src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_3204,c_limit/0abdb42b-3702-484d-8c07-6fc876cd16dd/what-are-the-best-nike-basketball-shoes.jpg" alt="" />
            </div>
        </div>
    )
}

const styles = {
    heroStyle: {
        display: "flex",
        padding: "4rem 2rem",
        gap: "1rem",
        alignItems: "center"
    },
    heroHeading: {
        fontSize: "2rem"
    },
    heroLeftStyle: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        alignItems: "start"
    },
    heroRightStyle: {
        width: "50%"
    },
    heroRightImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
}

export default Hero