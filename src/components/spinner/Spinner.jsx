import { Oval } from "react-loader-spinner"

function Spinner() {
    return (
        <Oval
            visible={true}
            height="80"
            width="80"
            color="#ffffff"
            secondaryColor='#fffff'
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
    />
    )
}

export default Spinner;