import { useForm } from 'react-hook-form';

const Registerhook = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      firstName: "",
      password: ""
    }
  });

  console.log(errors);
  const firstName = watch("firstName");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })} 
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">First Name</label>
          <input 
            {...register('firstName', { required: "This is required" })} 
            type="text" 
            placeholder='Enter Your First Name' 
            className={`w-full p-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {firstName && <p className="mt-2 text-sm text-gray-600">Hello, {firstName}</p>}
          {errors.firstName && <p className="mt-2 text-sm text-red-500">{errors.firstName.message}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input 
            {...register('password', { 
              required: "Password is required", 
              minLength: {
                value: 4,
                message: "Password must be more than 4 characters"
              } 
            })} 
            type="password" 
            placeholder='Enter Your Password' 
            className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>}
        </div>
        
        <div className="flex justify-end">
          <input 
            type="submit" 
            value="Register" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            
       />
        </div>
      </form>
    </div>
  );
}

export default Registerhook;






















// import {useForm} from 'react-hook-form'

// const Registerhook = () => {
//     const {register,handleSubmit,watch,formState:{errors}} = useForm({defaultValues:{
//         firstName:"",
//         password:""
//     }})

//     console.log(errors)
//     const firstName = (watch("firstName"));

//   return (
//     <form onClick={handleSubmit((data)=>{
//         console.log(data)
//     })}
  
//     >
//         <input {...register('firstName', { required : "This is required " })} type="text" placeholder='Enter Your First Name' />
//             <p>{firstName}</p>
//         <p>{errors.firstName?. message}</p>
//         <input {...register('password',{ required : true, minLength : {
//             value:4,
//             message:"password must be more than 4"

//         }  })} type="password" placeholder='Enter Your Password' />
//         <p>{errors.password?. message}</p>
//         <input type="submit"/>
        
//     </form>
//   )
// }

// export default Registerhook