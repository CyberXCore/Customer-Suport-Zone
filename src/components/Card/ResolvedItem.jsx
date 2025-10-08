import React from "react";

const ResolvedItem = ({ ticket }) => {
  return (
    <div className="bg-[#E0E7FF] rounded-lg px-4 py-5 shadow-md">
      <p className="text-lg font-medium text-[#001931]">{ticket.title}</p>
    </div>
  );
};

export default ResolvedItem;
