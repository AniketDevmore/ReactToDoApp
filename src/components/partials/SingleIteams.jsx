import React from "react";
import { useState } from "react";

const SingleIteams = (props) => {
  return (
    <div>
      <li
        id="list"
        style={{
          textDecoration: props.isDone === true ? "line-through" : "",
          border:
            props.dateCompare(props.dueDate) > 0 && props.isDone === false
              ? "5px solid yellow"
              : "",
        }}
      >
        {props.isEdit ? (
          <div>
            <input
              name="dueDate"
              type="date"
              defaultValue={props.dueDate}
              onChange={props.changedDate}
            />
            <span> Change Date</span>
            <br />
            <br />

            <input
              name="task"
              type="text"
              defaultValue={props.task}
              onChange={props.changedTask}
            />
            <span> Change Task</span>
            <br />
            <br />

            <textarea
              name="taskDescription"
              defaultValue={props.taskDescription}
              onChange={props.changedDescription}
              cols="30"
              rows="2"
            ></textarea>
            <span> Change Description</span>
            <br />
            <br />

            <button
              className="btn btn-success"
              onClick={() => props.save(props.index)}
            >
              Save
            </button>
          </div>
        ) : (
          <div>
            <div>
              <h6>Deadline: {props.dueDate}</h6>
              <h4>Task: {props.task}</h4>
              <p>Description: {props.taskDescription}</p>
            </div>
            {props.isDone ? (
              <>
                <button
                  className="btn btn-success"
                  onClick={() => props.delete(props.index)}
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-success"
                  onClick={() => props.delete(props.index)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => props.edit(props.index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => props.done(props.index)}
                >
                  Done
                </button>
                <h5
                  style={{
                    color: "red",
                    marginTop: "10px",
                    display: props.dateCompare(props.dueDate) > 0 ? "" : "none",
                  }}
                >
                  Due day is passed..
                </h5>
                {/* <input
                  style={{
                    height: "20px",
                    width: "20px",
                    boxSizing: "15px",
                    marginLeft: "5px",
                  }}
                  type="checkbox"
                  className="btn btn-success"
                  onClick={() => props.done(props.index)}
                />
                <span
                  style={{
                    fontWeight: "700",
                    color: "green",
                    marginLeft: "5px",
                  }}
                >
                  Done
                </span> */}
              </>
            )}
          </div>
        )}
      </li>
    </div>
  );
};

export default SingleIteams;
