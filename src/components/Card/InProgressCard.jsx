import React from "react";

const InProgressCard = ({ ticket, onComplete }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col justify-center items-center gap-4 shadow-md">
      <p className="text-lg font-medium text-[#001931]">{ticket.title}</p>
      <button
        onClick={() => onComplete(ticket.id)}
        className="bg-[#02A53B] w-full text-white px-4 py-2 rounded text-[16px] font-semibold transition duration-150 ease-in-out hover:bg-[#028a2e]"
      >
        Complete
      </button>
    </div>
  );
};

export default InProgressCard;
