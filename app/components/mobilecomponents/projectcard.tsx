

export default function Projectcard(){
    
  const resthouse = [
    {
      picture: "/pictures/download.png",
      report: "Trying to make a Facebook login page and successfully completed",
      link: "https://facebook-login-page-emrufb5ih.vercel.app/",
      title: "Login",
      Sub: "Facebook",
    },
    {
      picture: "/pictures/download (1).png",
      report: "It's a todo app with some special features, especially for movies",
      link: "https://upgraded-todos-next-app.vercel.app/",
      title: "Todos",
      Sub: "Movies",
    },
    {
      picture: "/pictures/download2.png",
      report: "I have created my portfolio website",
      link: "https://upgraded-todos-next-app.vercel.app/",
      title: "Todos",
      Sub: "Portfolio",
    },
  ];

    return(
        <div  className="p-5   flex flex-col justify-center  bg-cyan-300 ">
        <div><div data-aos="fade-right" className=" glass p-3 shadow-xl pt-3 rounded-2xl" >
      <div>
        <div className="text-3xl font-serif text-[#133E87]">Projects</div>
      </div>

      <div>
        <section className="flex flex-wrap justify-center ">
          {resthouse.map((item, i) => (
            <div key={i} className="lg:w-1/3 sm:w-1/2 p-4 ">
              <div className="flex relative">
                <div className="bg-contain">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-center border-8 border-blue-600 border-double"
                    src={item.picture}
                  />
                </div>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-yellow-500 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                    {item.Sub}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">
                    {item.report}
                    <a
                      href={item.link}
                      target="_blank"
                      className="block text-yellow-500 hover:underline"
                    >
                      Visit
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div></div>
      </div>
    )
}