
const Instructions = (props) => {
  const { instruction, showCards, setCardsVisibilty } = props;
  const handleClick = () => {
    if (showCards !== true) {
      setCardsVisibilty(true);  // Show the item list if it's currently hidden
    } else {
      setCardsVisibilty(false); // Hide the item list if it's currently visible
    }
  }
  return (
    <div>
      <div className="mt-5">
        {/* Header section with title and item count, acts as a button to toggle the list */}
        <div
          className="p-4 m-auto flex justify-between max-w-[800px] bg-green-50 shadow-md cursor-pointer"
          onClick={handleClick}
        >
          {/* Displaying title and number of items in the category */}
          <span className="font-bold text-lg">
            {"Step: " + instruction.number}
          </span>

          {/* Arrow icon indicating if the list is collapsed or expanded */}
          <span>{!showCards ? <p>🔽</p> : <p>🔼</p>}</span>
        </div>

        {/* Collapsible content section for displaying the list of items */}
        <div className="m-auto max-w-[800px] bg-slate-100">
          {showCards && <div className="p-6">
            <div className=" text-lg text-gray-800 flex gap-2">
              <span>⚡️</span>
              <span>{instruction.step}</span>
            </div>
            {instruction.length && <div className="flex gap-2 mt-2">
              <span>⏰</span>
              <span className="text-orange-700">{(instruction.length?.number)/10 } minutes</span>
            </div>}
            {instruction.ingredients.length != 0 && <div className="mt-4 rounded-lg px-4 border bg-lime-100 py-2">
              <h1 className="text-green-700 text-[20px] w-fit ">
                Ingredients
              </h1>
              <div className="flex gap-2 flex-wrap">

                {
                  instruction.ingredients.map((e) => (
                    <div className="rounded-lg px-2 py-1 bg-yellow-200 m-2 border shadow-sm">{e.name}</div>
                  ))
                }
              </div>
            </div>}
            {instruction.equipment.length != 0 && <div className="mt-4 rounded-lg px-4 border bg-lime-100 py-2">
              <h1 className="text-cyan-500 text-[20px] w-fit ">
                Equipment
              </h1>
              <div className="flex gap-2 flex-wrap">

                {
                  instruction.equipment.map((e) => (
                    <div className="p-6 flex">
                      <div><img src={e.image} alt="" className="rounded-lg border shadow-sm bg-white" /></div>
                    </div>
                  ))
                }
              </div>
            </div>}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Instructions