const DataConfiguration1 = () => {
    return (
      <>

{/* <!-- DATA CONFIGURATION --> */}
   <section className="flex-1 flex-col bg-primary-700">
        <section className="flex-col">

        
                <div className="flex-1 ">
                    <div className="p-16 text-4xl font-bold text-white">
                        Event Name
                    </div>
                </div>
                
                <div className="flex sm:flex-col lg:flex-row">
                    <div className="w-1/2 h-96">
                        <div className="ml-10 my-4 w-3/4 h-60 shadow-xl bg-white rounded-lg"></div>
                    </div>
                    
                    <div className="ml-10 w-1/2  items-center">
                        <button className="bg-green-300 hover:bg-white text-black font-bold w-44 h-16 rounded-lg">
                            <a className="text-center text-lg">Change Theme</a>
                        </button> 
                
                        <button className="my-4 md:my-6 bg-red-500 hover:bg-white font-bold w-44 h-16 rounded-lg">
                            <a className="text-center text-lg">Delete Theme</a>
                        </button>
                    </div>
                </div>
        </section>

        <section className="flex-col ">

            <div className="p-16 text-xl font-semibold text-white">
                Halls Configuration
                </div>

            <table className="ml-10 w-2/3 h-60 table-fixed border-2 border-white">
                <thead className="border-2 border-white">
                  <tr>
                    <th className="w-1/4 border-2 border-white text-white text-center">Hall</th>
                    <th className="w-1/4 border-2 border-white text-white text-center">Hall Type</th>
                    <th className="w-1/4 border-2 border-white text-white text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="border-2 border-white">
                  <tr>
                    <td className="border-2 border-white text-white text-center">Hall 1</td>
                    <td className="border-2 border-white text-white text-center"> Reception</td>
                    <td className="border-2 border-whitet text-white text-center">
                        <button className="bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                            <a className="text-center text-xs">Configure</a>
                          </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-white text-white text-center">Hall 2</td>
                    <td className="border-2 border-white text-white text-center">Auditorium</td>
                    <td className="border-2 border-white text-white text-center">
                        <button className="bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                            <a className="text-center text-xs">Configure</a>
                          </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-white text-white text-center">Hall 3</td>
                    <td className="border-2 border-white text-white text-center">Auditorium</td>
                    <td className="border-2 border-white text-white text-center">
                        <button className="bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                            <a className="text-center text-xs">Configure</a>
                          </button>
                    </td>
                  </tr>
                </tbody>
              </table>
        </section>

        <section>
          <div className="flex flex-row mx-9  w-2/3 h-60">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="mx-2 my-2 text-xl font-semibold text-white">
                Add Hall
              </div>
            </div>
        </section>
    </section>
    </>
    )
}

export default DataConfiguration1