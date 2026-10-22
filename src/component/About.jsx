import { useNavigate } from "react-router-dom";

function About({ task , setTask }) {
  const navigate = useNavigate();

  function deleteTask(idx) {
    const updetaTask = task.filter(function(elem,index) {
       return index !== idx ;
    })
       setTask(updetaTask);
       }
     
 

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#f4f1ea]">

      {task.map((elem, idx) => (
        <div
          key={idx}
          className="min-h-screen snap-start flex items-center justify-center p-8"
        >
          <div className="w-full max-w-2xl min-h-[90vh] bg-[#fdfbf7] border-2 border-[#d0c7b7] rounded-xl shadow-2xl p-12 flex flex-col justify-between">

            {/* Story */}
            <div>

           
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#946b2d] text-center mb-12 capitalize">
                {elem.title}
              </h1>

              
              <p className="text-lg md:text-xl font-serif text-[#4a4238] leading-10 text-justify whitespace-pre-line indent-12 tracking-wide">
                {elem.right}
              </p>

            </div>

            {/* Back Button */}
            <div className="flex justify-end mt-12">
              <button
                onClick={() => navigate("/")}
                className=" w-28 h-10 rounded-2xl bg-[#1e3a2b] hover:bg-[#14271d] text-[#f4f1ea] text-2xl shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
              >
                ← Back
              </button>
               
               <button onClick={()=>deleteTask(idx)}
                className="w-28 h-10 rounded-2xl bg-black hover:bg-[#E73F1E] text-white mx-30 font-bold shadow-2xl transition-all duration-150 hover:scale-120 active:scale-100 cursor-pointer  ">  🗑️ Delete</button>
            </div>

          </div>
        </div>
      ))}

    </div>
  );
};

export default About;