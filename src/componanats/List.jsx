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

  const deleteHandelar = (i) => {
    const CopyTask = [...List];
    CopyTask.splice(i, 1);
    setList(CopyTask);
  };
  let TaskRender = (
    <h1 className="justify-between text-2xl p-10 text-white bg-slate-500  ">
      No Tast Render
    </h1>
  );
  if (List.length > 0) {
    TaskRender = List.map((t, i) => {
      return (
        <>
          <div key={i} className="bg-slate-500">
            <div className="flex justify-between text-2xl mr-11 ml-11 mt-2 text-white ">
              <h1>{t.Title}</h1>
              <h3>{t.Description}</h3>
              <button
                onClick={() => {
                  deleteHandelar(i);
                }}
                className=" bg-orange-600 w-28  text-wrap p-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      );
    });
  }

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
