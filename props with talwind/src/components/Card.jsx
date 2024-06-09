function Card({username, paragraph}) {
    console.log("Props",{username})
  return (
    <>
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/public/Story.png"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium dark:text-slate-100">
              {paragraph}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
              Pawan Gautam, Software Developer
            </div>
            <button className="bg-gray-500 p-1 rounded-md m-auto mt-7">Click Me</button>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export default Card