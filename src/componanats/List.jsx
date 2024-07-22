import React, { useState } from "react";

const List = () => {
  const [Title, seTitle] = useState(""); // useState jis men title ke value save he
  const [Description, setDescription] = useState(""); // useState jis men Discription  ke value save he
  const [List, setList] = useState([]); // list title and discription List name ke array men stor ho

  // jo neche form banaya he us form men ham ni Title and discription ko save keya he
  const submitHandler = (e) => {
    //function SubmitHandler ek Arrow function chalaie gi us men ek event chalega (e) ke neme se
    e.preventDefault(); // Form ke submit hone par page reload ko rokne ke liye
    setList([...List, { Title, Description }]); // ye ek Spread opreater he jo 2 aaray ko ek dosre se melata he yaha per Title ko Our Description ko ek dosre se malaie ga

    seTitle("");
    setDescription("");
    console.log(List);
  };

  // uper 2no ke list create ho gaie ab hm jo list baanaie he us ko dalte karni ka fucntio create karengi ham ni list name ka ek array banaya he ab us ko use karke delete karengi gen

  const deleteHandelar = (i) => {
    // arrow function
    const CopyTask = [...List]; // us spared list ko ham ek varibale men rakhen gi CopyTask ke name se
    CopyTask.splice(i, 1); // fer us ko splice karengi splice matlb remove karengi
    setList(CopyTask); // fer us copyTask ko Setlist men Add karengi
  };
  let TaskRender = // TaskRander ye todo List ke neche show hoga
    (
      <h1 className="justify-between text-2xl p-10 text-white bg-slate-500  ">
        No Tast Render
      </h1>
    );
  if (List.length > 0) {
    // our ye if condition tab ie chale ge jab input men kuj lekha hoga agr lingth 0 se uper ho matlb kuch lekha ho
    TaskRender = List.map((t, i) => {
      // taskReander men hm jo be list men se ham map kare gi wo add hoga ab jo array men Jo be tast he us ko  hm ni (t) and (i) Array men index
      return (
        <>
          <div key={i} className="bg-slate-500">
            <div className="flex justify-between text-2xl mr-11 ml-11 mt-2 text-white ">
              <h1>{t.Title}</h1>
              {/* t.title matlb jo be hm ni uper wale input men lekha he wo render hoga */}
              <h3>{t.Description}</h3>
              {/* t.description matlb jo be hm ni description wale input men lekha he wo render hoga */}
              <button
                onClick={() => {
                  deleteHandelar(i); // jo be index input hoie hen us ko delete wale onclick se sab remove kardo
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
        {/* <form onSubmit={submitHandler} per ek function chalaya he jis ka name he  */}
        <form onSubmit={submitHandler}>
          {/* input men jo be input karoonga wo Value setTitle varibale men save hoga  */}
          <input
            className="mt-14 p-2 ml-32 border-zinc-700 border-4 w-96 "
            type="text"
            placeholder="Enter the title"
            value={Title} // Title ko hata ke  value ko hata ke jo input men keya tha us ko hata ke Title ie aie ga
            // input men jo e.target.us ke value he wo set ho gaie
            onChange={(e) => seTitle(e.target.value)}
          />

          <input // same wohe uper wala  peroces jo ke discription men he
            className="mt-14 p-2 ml-32 border-zinc-700 border-4 w-96 "
            type="text"
            placeholder="Enter the Description"
            value={Description} // same wohe value ko hata ke jo input men keya tha us ko hata ke dicription ie aie ga
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
