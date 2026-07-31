import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ task, setTask }) {
  const [title, setTitle] = useState("");
  const [right, setRight] = useState("");
  const navigate = useNavigate();

  function btnsubmite(e) {
    e.preventDefault();

    if (!title.trim() || !right.trim()) return;

    const copytask = [...task];
    copytask.push({ title: title, right: right });
    setTask(copytask);

    setTitle("");
    setRight("");
    navigate("/about");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1ea] p-6">
      <form
        className="w-full max-w-lg rounded-2xl border-2 border-[#d0c7b7] bg-[#fdfbf7] p-8 md:p-10 shadow-xl relative overflow-hidden"
        onSubmit={btnsubmite}
      >
        {/* Subtle Decorative Inner Border */}
        <div className="absolute inset-2 border border-dashed border-[#e2dacd] rounded-xl pointer-events-none" />

        <h1 className="text-3xl font-serif font-bold text-[#4a4238] text-center mb-8 relative z-10">
          📜 Write Your Story
        </h1>

        {/* Story Heading */}
        <div className="mb-6 relative z-10">
          <label className="block text-[#5c5246] mb-2 font-serif font-medium">
            Story Heading
          </label>
          <input
            type="text"
            placeholder="The Hidden Door"
            className="w-full rounded-lg bg-[#f9f7f1] border border-[#d0c7b7] px-4 py-3 text-[#2b2b2b] placeholder-[#a09586] font-serif outline-none transition-all duration-200 focus:border-[#946b2d] focus:ring-2 focus:ring-[#946b2d]/20"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Story Description */}
        <div className="mb-8 relative z-10">
          <label className="block text-[#5c5246] mb-2 font-serif font-medium">
            Story Description
          </label>
          <textarea
            rows="5"
            placeholder="Once upon a time..."
            className="w-full resize-none rounded-lg bg-[#f9f7f1] border border-[#d0c7b7] px-4 py-3 text-[#2b2b2b] placeholder-[#a09586] font-serif outline-none transition-all duration-200 focus:border-[#946b2d] focus:ring-2 focus:ring-[#946b2d]/20"
            value={right}
            onChange={(e) => setRight(e.target.value)}
          ></textarea>
        </div>

        {/* Action Button */}
        <div className="relative z-10">
          <button
            type="submit"
            className="w-full rounded-lg bg-[#1e3a2b] hover:bg-[#14271d] py-3.5 text-base font-serif font-medium text-[#f4f1ea] shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Add Story 
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;