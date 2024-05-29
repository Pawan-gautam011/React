import PropTypes from 'prop-types';
import { useForm, Controller as FormController } from 'react-hook-form';

const Controller = ({ buttonName, ButtonClick }) => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormController
                name="email"
                control={control}
                defaultValue=""
                rules={{
                    required: {
                        value: true,
                        message: "This field is required",
                    },
                }}
                render={({ field }) => (
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            {...field}
                            className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-500"} rounded-md focus:outline-none`}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                )}
            />
            <FormController
                name="password"
                control={control}
                defaultValue=""
                rules={{
                    required: {
                        value: true,
                        message: "Password is required",
                    },
                    minLength: {
                        value: 5,
                        message: "Password must be at least 5 characters long",
                    },
                }}
                render={({ field }) => (
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            {...field}
                            className={`w-full p-2 border ${errors.password ? "border-red-500" : "border-gray-500"} rounded-md focus:outline-none`}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                )}
            />
            <button
                type="submit"
                className="m-5 w-20 py-3 text-white bg-blue-500 rounded-md hover:bg-gray-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-100"
                onClick={ButtonClick}
            >
                {buttonName}
                Click here
            </button>
        </form>
    );
};

Controller.propTypes = {
    buttonName: PropTypes.string.isRequired,
    ButtonClick: PropTypes.func.isRequired,
};

export default Controller;
