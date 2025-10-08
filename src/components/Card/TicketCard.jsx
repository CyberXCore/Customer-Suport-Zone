import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

// Priority Badge
const PriorityBadge = ({ priority }) => {
  const lowerPriority = priority.toLowerCase();
  let textColor;

  switch (lowerPriority) {
    case "high":
      textColor = "text-[#F83044]";
      break;
    case "medium":
      textColor = "text-[#FEBB0C]";
      break;
    case "low":
      textColor = "text-[#02A53B]";
      break;
    default:
      return null;
  }

  return (
    <span className={`uppercase text-xs font-semibold px-2 py-0.5 rounded-full ${textColor}`}>
      {priority} PRIORITY
    </span>
  );
};

// Status Pill
const StatusPill = ({ status }) => {
  const lowerStatus = status.toLowerCase();
  let bgColor;
  let dotColor;
  let textColor;

  switch (lowerStatus) {
    case "open":
      bgColor = "bg-[#B9F8CF]";
      dotColor = "bg-[#02A53B]";
      textColor = "text-[#0B5E06]";
      break;
    case "inprogress":
      bgColor = "bg-[#F8F3B9]";
      dotColor = "bg-[#FEBB0C]";
      textColor = "text-[#9C7700]";
      break;
    case "resolved":
      bgColor = "bg-green-500";
      return (
        <span className={`${bgColor} px-3 py-1 rounded-full text-white text-xs font-medium`}>
          Resolved
        </span>
      );
    default:
      return null;
  }

  return (
    <div className={`px-3 py-1 rounded-full flex justify-center items-center ${bgColor} gap-1.5 text-xs font-medium`}>
      <span className={`w-2.5 h-2.5 rounded-full ${dotColor}`}></span>
      <span className={textColor}>{status}</span>
    </div>
  );
};

// Format Date
const formatDate = (date) => {
  return date ? new Date(date).toLocaleDateString('en-US') : 'N/A';
}

// Ticket Card Component
const TicketCard = ({ ticket, onCardClick }) => {
  const isClickable = ticket.status === 'open';
  const handleClick = () => {
    if (isClickable) {
      onCardClick(ticket.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="p-4 flex flex-col justify-between bg-white rounded-lg shadow-lg border-2 border-transparent hover:border-[#001931] transition duration-300 cursor-pointer"
    >
      {/* Title & Status */}
      <div className="flex flex-row items-start justify-between">
        <h2 className="text-lg font-bold text-[#001931] pr-2 leading-tight">{ticket.title}</h2>
        <StatusPill status={ticket.status} />
      </div>

      {/* Description */}
      <div className="mt-3">
        <p className="text-sm font-normal text-gray-600 line-clamp-2">
          {ticket.description}
        </p>
      </div>

      {/* Footer: ID, Priority, Customer, Date */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-gray-500 font-medium"># {ticket.id}</span>
          <PriorityBadge priority={ticket.priority} />
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[#627382]">
          <span className="font-medium">{ticket.customer}</span>
          <div className="flex items-center gap-1">
            <CalendarDaysIcon className="w-4 h-4" />
            <span className="text-[14px]">{formatDate(ticket.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
