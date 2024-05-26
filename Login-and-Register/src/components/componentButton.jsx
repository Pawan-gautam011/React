import PropsTypes from 'prop-types'

const Button = (
    {
        buttonName,
        ButtonClick
    }
) => {
    return (
        <>


            <button className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-gray-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-100"

                onClick={ButtonClick}
            >
                {buttonName}
            </button>


        </>
    )
}

Button.PropTypes = {
    buttonName: PropsTypes.string,
    buttonClick: PropsTypes.func

}



export default Button