// import { useForm } from "react-hook-form"

// export default function App() {

//   const { register, handleSubmit } = useForm()

//   const onSubmit = (data) =>{
//      console.log(data)
//   }
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>

//       <input {...register("firstName")} />
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   )
// }


// import { useForm, Controller } from 'react-hook-form';

// const NewForm = () => {
//     const { control, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = (data) => {
//         console.log(data);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center  bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full m-auto space-y-8">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
//                     <div className="rounded-md shadow-sm -space-y-px">
//                         <div>
//                             <Controller
//                                 name="email"
//                                 control={control}
//                                 defaultValue=""
//                                 rules={{
//                                     required: {
//                                         value: true,
//                                         message: "This is required"
//                                     }
//                                 }}
//                                 render={({ field }) => (
//                                     <div className="mb-4">
//                                         <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
//                                             Email
//                                         </label>
//                                         <input
//                                             id="email"
//                                             type="email"
//                                             {...field}
//                                             className={`w-full p-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                                         />
//                                         {errors.email && <p className='text-red-500 text-xs italic'>{errors.email.message}</p>}
//                                     </div>
//                                 )}
//                             />
//                         </div>
//                         <div>
//                             <Controller
//                                 name="password"
//                                 control={control}
//                                 defaultValue=""
//                                 rules={{
//                                     required: {
//                                         value: true,
//                                         message: "This is required"
//                                     },
//                                     minLength: {
//                                         value: 5,
//                                         message: "Password must be at least 5 characters long"
//                                     }
//                                 }}
//                                 render={({ field }) => (
//                                     <div className="mb-4">
//                                         <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
//                                             Password
//                                         </label>
//                                         <input
//                                             id="password"
//                                             type="password"
//                                             {...field}
//                                             className={`w-full p-3 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                                         />
//                                         {errors.password && <p className='text-red-500 text-xs italic'>{errors.password.message}</p>}
//                                     </div>
//                                 )}
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <button
//                             type="submit"
//                             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             Sign In
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default NewForm;




import { useForm, Controller } from 'react-hook-form'

const BasicExample = () => {

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>

        Copy code

        <div>
          <Controller
            name="firstName"
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
                <label htmlFor="fname" className="block text-white text-sm font-bold mb-2">First Name</label>
                <input
                  type="text"
                  id="fname"
                  {...field}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.firstName && <p className='text-red-500 text-xs italic'>{errors.firstName.message}</p>}
              </div>
            )}
          />
        </div>
        <div>
          <Controller
            name="password"
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
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...field}
                  className={`w-full p-3 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.password && <p className='text-red-500 text-xs italic'>{errors.password.message}</p>}
              </div>
            )}
          />
        </div>

      <button type='submit'>Submit</button>

      </form>





    </>
  )








}

export default BasicExample





