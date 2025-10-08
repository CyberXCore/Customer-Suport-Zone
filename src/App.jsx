import { useState, useCallback, useMemo } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Banner from './components/Layout/Banner';
import TicketCard from './components/Card/TicketCard';
import InProgressCard from './components/Card/InProgressCard';
import ResolvedCard from './components/Card/ResolvedItem';
import TICKET_DATA from './data/Tickets';
import Footer from './components/Layout/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [customerTickets, setCustomerTickets] = useState(TICKET_DATA);

const handleTicketStatusChange = useCallback((id, newStatus) => {
  setCustomerTickets(prevTickets => {
    const updatedTickets = prevTickets.map(ticket =>
      ticket.id === id ? { ...ticket, status: newStatus } : ticket
    );

    // **Short status toast**
    if (newStatus === 'inProgress') {
      toast.info('In Progress', {
        toastId: id,  // duplicate prevent
      });
    } else if (newStatus === 'resolved') {
      toast.success('Resolved', {
        toastId: id,
      });
    }

    return updatedTickets;
  });
  }, []);

  const handleOpenToInProgress = useCallback(
    (id) => handleTicketStatusChange(id, 'inProgress'),
    [handleTicketStatusChange]
  );

  const handleInProgressToResolved = useCallback(
    (id) => handleTicketStatusChange(id, 'resolved'),
    [handleTicketStatusChange]
  );

  const { openTickets, inProgressTickets, resolvedTickets } = useMemo(() => {
    const open = customerTickets.filter(t => t.status === 'open');
    const inProgress = customerTickets.filter(t => t.status === 'inProgress');
    const resolved = customerTickets.filter(t => t.status === 'resolved');
    return { openTickets: open, inProgressTickets: inProgress, resolvedTickets: resolved };
  }, [customerTickets]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <Navbar />
      <main className="container mx-auto flex flex-col gap-20 pt-10 md:pb-10">
        <Banner inProgressCount={inProgressTickets.length} resolvedCount={resolvedTickets.length} />

        <section className="flex flex-col md:flex-row gap-8 px-4 md:px-0">
          <div className="w-full md:w-3/4">
            <h2 className="text-3xl font-semibold text-[#34485A] mb-3">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openTickets.length > 0 ? 
              (customerTickets.map(ticket => 
                (<TicketCard 
                  key={ticket.id} 
                  ticket={ticket} 
                  onCardClick={handleOpenToInProgress} />
                ))
              ) : (
                <p className="text-gray-500 col-span-2 text-center mt-8">
                  All open tickets have been assigned!
                </p>
              )}
            </div>
          </div>

          <div className="w-full md:w-1/4 flex flex-col gap-10">
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold text-[#34485A] mb-3">In Progress</h2>
              <div className="flex flex-col gap-4">
                {inProgressTickets.length > 0 ? (
                  inProgressTickets.map(ticket => (
                    <InProgressCard key={ticket.id} ticket={ticket} onComplete={handleInProgressToResolved} />
                  ))
                ) : (
                  <p className="text-gray-500 text-center mt-8">
                    All in progress tickets have been completed!
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold text-[#34485A] mb-3">Resolved Task</h2>
              <div className="flex flex-col gap-4">
                {resolvedTickets.length > 0 ? (
                  resolvedTickets.map(ticket => (
                    <ResolvedCard key={ticket.id} ticket={ticket} />
                  ))
                ) : (
                  <p className="text-gray-500 text-center mt-8">
                    There is no resolved task
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Only React-Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <Footer />
    </div>
  );
}

export default App;
