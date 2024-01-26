import axios from "axios";




const getAllCartItems = () => {
    axios.get("http://localhost:7000")
    .then(({dish}) => {console.log(dish)
    })
}

export { getAllCartItems };