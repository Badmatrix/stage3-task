import React from 'react'

export default function NavTemp() {
    const handlePageChange = (pageNumber) => {
      setPage(pageNumber);
      setLoading(true);
    };
  return (
    <div className="flex justify-end mt-4">
                <button
                    onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
                    disabled={page === 1}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                    Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${
                            page === index + 1 ? "bg-blue-500 text-white" : ""
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() =>
                        handlePageChange(page < totalPages ? page + 1 : totalPages)
                    }
                    disabled={page === totalPages}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                    Next
                </button>
            </div>


  )
}
