import { useForm, Controller } from 'react-hook-form';
import Button from './componentButton';

const NewForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}
        className=''
        >
            <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                    required: {
                        value: true,
                        message: "This is required"
                    }
                }}
                render={({ field }) => (
                    <div>
                        <label className='text-white'>Email</label>
                        <input type="email" {...field}
                        className={`w-full p-2 border ${errors.email ?"border-red-500" : "border-gray-500"} rounded-md focus:outline-none`}
                        />
                        {errors.email && <p className='text-red-500'>Email is required </p> }
                    </div>
                )}
            />
             
             
           


              <Controller

name="Password"
control={control}
defaultValue=""
rules={{
    required: {
        value: true,
        message: "This is required"
    },
    minLength: {
        value: 5,
        message: "Password must be at least 5 characters long"
    }
}}
render={({ field }) => (
    <div>
        <label className='text-white'>Password</label>
        <input type="password" {...field}
        className={`w-full p-2 border ${errors.password ?"border-red-500" : "border-gray-500"} rounded-md focus:outline-none`}
        />
        
        {errors.password && <p className='text-red-500'>Password is required </p> }
    </div>
)}
              />
           <Button className='w-20'/>
        </form>
    );
};

export default NewForm;
