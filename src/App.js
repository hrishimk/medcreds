import React from 'react';
import './App.css';
import MainView from './views/MainView/MainView'


function App() {
  return (
    <div className="App" >
      <MainView />
      {/* <FormFiled label="Organization Name" required size="long" placeHolder={"asdsa@asdas.com"} />
      <DropDown label="Country" required list={[
        {
          id: 'option1',
          title: 'Option1'
        },
        {
          id: 'option2',
          title: 'Option2'
        }
        ,
        {
          id: 'option3',
          title: 'Option3'
        }
      ]} change={(val) => { alert(val) }} />
      <ButtonView label="Add" /> */}
    </div>
  );
}

export default App;
