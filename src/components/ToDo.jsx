import React from "react";
import SingleIteams from "./partials/SingleIteams";
import { useState } from "react";
import moment from "moment";

const ToDo = () => {
  const [state, setState] = useState({
    task: "",
    taskDescription: "",
    dueDate: "",
    isEdit: false,
    isDone: false,
  });

  const [list, setList] = useState([
    {
      task: "Learn frontend",
      taskDescription:
        "Learn frontend html, css, javaScript, react, redux and library and frameworks.",
      dueDate: "2024-02-15",
      isEdit: false,
      isDone: false,
    },
    {
      task: "Learn backend",
      taskDescription:
        "Learn backend node js, express js, docker, mongo DB, etc.",
      dueDate: "2024-06-16",
      isEdit: false,
      isDone: false,
    },
    {
      task: "Get job",
      taskDescription:
        "Get job which help to learn more and build great future.",
      dueDate: "2023-07-15",
      isEdit: false,
      isDone: false,
    },
  ]);

  const [taskChange, setTaskChange] = useState("");
  const [dateChange, setDateChange] = useState("");
  const [descriptionChange, setDescriptionChange] = useState("");

  const dataHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const clickHandler = () => {
    setList([...list, { ...state, isEdit: false, isDone: false }]);
    state.task = "";
    state.dueDate = "";
    state.taskDescription = "";
  };

  // to delete the todo
  const deleteIteam = (value) => {
    list.splice(value, 1);
    setList([...list]);
    console.log(list, state);
  };

  // to edit the todo
  const editIteam = (value) => {
    let iteam = list[value];
    iteam.isEdit = true;
    setList([...list]);
  };

  // to save the todo
  const saveIteam = (index) => {
    let newList = list.map((ele, i) => {
      if (i === index) {
        ele.isEdit = false;
        ele.task = taskChange ? taskChange : taskChange + ele.task;
        ele.dueDate = dateChange ? dateChange : dateChange + ele.dueDate;
        ele.taskDescription = descriptionChange
          ? descriptionChange
          : descriptionChange + ele.taskDescription;
      }
      return ele;
    });
    setList(newList);
    setDateChange("");
    setTaskChange("");
    setDescriptionChange("");
  };

  // to done handle
  const doneIteam = (value) => {
    let newList = list.map((ele, i) => {
      if (i === value) {
        ele.isDone = true;
      }
      return ele;
    });
    setList(newList);
  };

  const dateCompare = (date) => {
    return moment().diff(date, "minutes");
  };

  const changedTask = (event) => {
    setTaskChange(event.target.value);
  };

  const changedDate = (event) => {
    setDateChange(event.target.value);
  };

  const changedDescription = (event) => {
    setDescriptionChange(event.target.value);
  };

  return (
    <div className="todo-main">
      <div>
        <h2>Write the Task below</h2>
        <input
          value={state.task}
          onChange={dataHandler}
          name="task"
          className="input"
          type="text"
          placeholder="   Write Task"
        />
        <br />
        <br />
        <h2>Write task description</h2>
        <textarea
          style={{ whiteSpace: "pre-wrap" }}
          value={state.taskDescription}
          onChange={dataHandler}
          name="taskDescription"
          className="input"
          type="date"
        />
        <br />
        <br />
        <h2>Select Date of completion</h2>
        <input
          value={state.dueDate}
          onChange={dataHandler}
          name="dueDate"
          className="input"
          type="date"
        />
        <br />
        <br />
        <button
          style={{ marginBottom: "30px" }}
          onClick={clickHandler}
          className="btn btn-secondary"
        >
          Add ToDo
        </button>
      </div>
      <div>
        <ul id="ul">
          {list.map((ele, i) => (
            <SingleIteams
              index={i}
              key={i}
              task={ele.task}
              taskDescription={ele.taskDescription}
              dueDate={ele.dueDate}
              isEdit={ele.isEdit}
              isDone={ele.isDone}
              delete={deleteIteam}
              edit={editIteam}
              save={saveIteam}
              done={doneIteam}
              dateCompare={dateCompare}
              changedTask={changedTask}
              changedDate={changedDate}
              changedDescription={changedDescription}
            ></SingleIteams>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
