import { Conversation } from 'chat-template';
import ReactDOM from 'react-dom';
import React from 'react';

const wrapperModule = (methodName, data, element) => {
  if(methodName == 'InsertData'){
    InsertData(methodName, data, element);
  }
  else if(methodName == 'GetData')
  {
    GetData(methodName, data, element);
  }
  else if(methodName == 'EditData')
  {
    EditData(methodName, data, element);
  }
  else if(methodName == 'UpdateData')
  {
    UpdateData(methodName, data, element);
  }
};

const InsertData = (methodName, data, element) => {
  alert("InsertData function called - Method name : " + methodName + "Data : "+ data);
};

const GetData = (methodName, data, element) => {
 alert("GetData function called - Method name : " + methodName + "Data : "+ data);
 ReactDOM.render( <div><p>Hello : {data} </p> </div>,
    element);
};

const EditData = (methodName, data, element) => {
  alert("EditData function called - Method name : " + methodName + "Data : "+ data);
};

const UpdateData = (methodName, data, element) => {
  alert("UpdateData function called - Method name : " + methodName + "Data : "+ data);
};

 module.exports = wrapperModule;






