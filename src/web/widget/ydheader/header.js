require('./header.css')
const Header = {
    init() {
        if (process.env.NODE_ENV === "dev") {
            console.log(123)
        }
        console.log('header');
    }
}

export default Header