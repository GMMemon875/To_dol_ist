import React, { useState } from "react";

const List = () => {
  const [Title, seTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [List, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setList([...List, { Title, Description }]);
    // console.log(List);
    seTitle("");
    setDescription("");
  };
  let TaskRender = <h1>No Tast Render</h1>;
  TaskRender = List.map((t, i) => {
    return (
      <div className="">
        <h1 className="">
          {t.Title}
          {t.Description}
        </h1>
      </div>
    );
  });

  return (
    <>
      <div className=" bg-slate-700 text-white text-center font-bold text-5xl p-10">
        TO DO LIST
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <input
            className="mt-14 p-2 ml-32 border-zinc-700 border-4 w-96 "
            type="text"
            placeholder="Enter the title"
            value={Title}
            onChange={(e) => seTitle(e.target.value)}
          />

          <input
            className="mt-14 p-2 ml-32 border-zinc-700 border-4 w-96 "
            type="text"
            placeholder="Enter the Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className=" bg-orange-600 text-white p-2 w-28 rounded-md ml-14 size-14 font-bold">
            Add List
          </button>
        </form>
        <div className="bg-black h-1 mt-5"></div>
        <div className="">{TaskRender}</div>
      </div>
    </>
  );
};

export default List;
