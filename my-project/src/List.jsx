import React, { useEffect, useState } from "react"
import { ImCross } from "react-icons/im";
function List() {
    const [isBlank, setIsBlank] = useState(false);
    const [newtodo, setNewtodo] = useState('');
    const [workList, setWorkList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    useEffect(() => {
        const storedWorkList = JSON.parse(localStorage.getItem('workList')) || [];
        const storedDoneList = JSON.parse(localStorage.getItem('doneList')) || [];
        setWorkList(storedWorkList);
        setDoneList(storedDoneList);
      }, []);
      
      useEffect(() => {
        localStorage.setItem('workList', JSON.stringify(workList));
        localStorage.setItem('doneList', JSON.stringify(doneList));
      }, [workList, doneList]);
    

    function handleButtonClick() {
        setIsBlank(true);
        setNewtodo("");
    }
    function handleInputChange(event) {
        setNewtodo(event.target.value);
    }
    function handleSaveButtonClick() {
        setWorkList([...workList, newtodo]);
        //console.log(newtodo);
        setIsBlank(false);
        setNewtodo("");
    }



    return (
        <div>
            {
                workList.length > 0 && (

                    <div>
                        {workList.map((todo, index) => (
                            <div className="flex gap-4 ml-6 mt-2">
                                <input
                                    onClick={function () {
                                        console.log(todo)
                                        setDoneList([...doneList, todo]);
                                        const dummyList = [...workList];
                                        dummyList.splice(index, 1);
                                        setWorkList(dummyList);
                                        console.log("doneList is", doneList);
                                        console.log("worklist is", workList);
                                    }

                                    }
                                    type="checkbox" />
                                <div key={index}>{todo}</div>

                            </div>
                        ))}
                    </div>


                )

            }

            {
                workList.length == 0 && !isBlank && (<div className="mt-6 ml-6">
                    <h3 className="text-gray-400 text-lg ">No todos here!</h3>
                </div>
                )
            }{
                isBlank && (
                    <div className="ml-10">
                        <div className="border flex flex-col gap-4 py-4 px-2 rounded-md">
                            <h3>Create a todo</h3>
                            <input
                                className="w-72 px-2 py-1 border-2 rounded-md border-yellow-500"
                                type="text"
                                placeholder="Write an article about xState"
                                onChange={handleInputChange}
                            />
                            <div className="flex gap-3">
                                <button
                                    onClick={newtodo != "" && handleSaveButtonClick}
                                    className="bg-yellow-500 px-2 py-2 border rounded-2xl text-white font-bold text-lg hover:bg-yellow-700
                                    ">Save</button>
                                <button
                                    className=" px-2 py-2 border rounded-2xl  font-bold text-lg hover:border-yellow-500"
                                    onClick={function () {
                                        setIsBlank(false);
                                    }}
                                >Cancle</button>
                            </div>
                        </div>
                    </div>

                )
            }
            <button
                onClick={handleButtonClick}
                className="bg-yellow-500 px-2 py-2 border rounded-2xl flex gap-3 text-white font-bold text-lg hover:bg-yellow-700 ml-6 mt-4">
                <span className="text-xl">+</span>
                <span>Add a todo</span>
            </button>
            <h2 className='text-xl font-semibold ml-6 mt-6'>Thing Done</h2>
            {
                doneList.length == 0 && (<div className="mt-6 ml-6">
                    <h3 className="text-gray-400 text-lg ">No todos here!</h3>
                </div>
                )

            }
            {
                doneList.length > 0 && (

                    <div>
                        {doneList.map((todo, index) => (
                            <div className="flex gap-4 ml-6 mt-2   ">
                                <input
                                    onClick={function () {
                                        console.log(todo)
                                        setWorkList([...workList, todo]);
                                        const dummydoneList = [...doneList];
                                        dummydoneList.splice(index, 1);
                                        setDoneList(dummydoneList);

                                    }

                                    }
                                    type="checkbox" />
                                <div key={index}>{todo}</div>
                                <ImCross
                                    className="self-center"
                                    onClick={function () {
                                        const dummydataList = [...doneList];
                                        dummydataList.splice(index, 1);
                                        setDoneList(dummydataList)

                                    }} />
                            </div>

                        ))}
                    </div>

                )
            }


        </div>

    );
}
export default List;