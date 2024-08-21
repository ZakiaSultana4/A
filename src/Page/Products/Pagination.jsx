import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Pagination({currentPage, setCurrentPage, totalPages }) {
  return (
    <section className=" bg-slate-100 py-1">
      <div className="max-w-screen-xl mx-auto flex justify-center space-x-1">
        <button onClick={() => setCurrentPage(currentPage - 1)}
          className="flex justify-center items-center w-8 h-8 py-0 border rounded-md shadow-md
          disabled:text-gray-400
          " disabled={currentPage === 1}><FaChevronLeft /></button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`w-8 h-8 text-sm border rounded shadow-md ${index + 1 === currentPage ? 
              'font-bold text-primary border-primary' : 'dark:border-gray-100'}`}
            onClick={() => setCurrentPage(index + 1)}
          >{index + 1}</button>
        ))}

        <button onClick={() => setCurrentPage(currentPage + 1)}
          className="flex justify-center items-center w-8 h-8 py-0 border
         rounded-md shadow-md 
          disabled:text-gray-400 dark:disabled:border-gray-500" disabled={currentPage === totalPages}>
          <FaChevronRight /></button>
      </div>
    </section>
  );
}

export default Pagination;