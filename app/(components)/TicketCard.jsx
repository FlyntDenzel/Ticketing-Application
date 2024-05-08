import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  return (
    <div className="border p-3 m-3 rounded-md flex flex-col shadow-lg">
      <div className="flex mb-3 items-center">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4 className="text-lg font-bold">{ticket.title}</h4>
      <hr className="h-px border-0 bg-white mb-2" />
      <p className="whitespace-pre-wrap">
        {ticket.description}{" "}
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{ticket.createdAt}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay  status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
