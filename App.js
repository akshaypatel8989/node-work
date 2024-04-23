//import logo from './logo.svg';
import './App.css';
import { Employ } from './Employ';
import { useState } from 'react';
import { useEffect } from 'react';
import { display } from '@mui/system';



function App() {

  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [fees, setFees] = useState('');

  const [id, setId] = useState('0');
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    setData(Employ)
  }, []);


  const handleEdit = (id) => {

    const dt = data.filter(item => item.id === id);

    if (dt !== undefined) {
      setUpdate(true)
      setId(id);
      setFirstName(dt[0].firstName)
      setLastName(dt[0].lastName)
      setAge(dt[0].age)
      setFees(dt[0].fees)

    }
  }
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item ??")) {
        const dt = data.filter(item => item.id !== id);
        setData(dt);
      }
    }

  }
  const handleSave = (e) => {
    let error="";
    if(firstName==="")
    
      error+="First name is required";
    
    if(lastName==="")
    
      error+="First name is required";
    
    if(age<=0)
    
      error+="Age is Required";
    if(fees<=0)
    error+="fees is Required"
    if(error==='')
    {

    

    e.preventDefault();
    const dt = [...data];
    const newObjeact = {
      id: Employ.length + 1,
      firstName: firstName,
      lastName: lastName,
      age: age,
      fees:fees
    }
    dt.push(newObjeact)
    setData(dt);
  }
  else{
    alert(error)
  }

  }
  const handleUpdate = () => {
    const index = data.map((item) => {
      return item.id

    }).indexOf(id);
    const dt = [...data]
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].age = age;
    dt[index].fees=fees;
    setData(dt);

  }
  const handleClear = () => {
    setId(0);
    setFirstName('');
    setLastName('');
    setAge('');
    setFees('')
    setUpdate(false);

  }
  return (
    <div className='container' >
      <div style={{ display: "flex", justifyContent: 'center', marginTop: '10px', marginBottom: '10px' }}>
        <div>
          <label>First Name :
            <input type='text' placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </label>

        </div>
        <div>
          <label>Last Name :
            <input type='text' placeholder='Enter FirstName' onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </label>

        </div>
        <div>

        </div>
        <div>
          <label>Age
            <input type='text' placeholder='Enter Last Name' onChange={(e) => setAge(e.target.value)} value={age} />
          </label>

        </div>
        <div>
          <label>Fees
            <input type='text' placeholder='Enter Fees' onChange={(e) => setFees(e.target.value)} value={fees} />
          </label>

        </div>
        <div>{!update ?
          <button className='btn btn-primary' onClick={(e) => handleSave(e)}>Save</button> :
          <button className='btn btn-primary' onClick={() => handleUpdate()}>Update</button>
        }
          <button className='btn btn-danger' onClick={() => handleClear()}>clera</button>
        </div>
      </div>

      <table className='table table-hover'>
        <thead >
          <tr>
            <td> Sr.No</td>
            <td> id</td>
            <td> first Name</td>
            <td> last Name</td>
            <td> age</td>
            <td>fees</td>
            <td> Action</td>

          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id + 2}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td> {item.fees}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => { handleEdit(item.id) }}>Edit</button>&nbsp;
                    <button className='btn btn-danger' onClick={() => { handleDelete(item.id) }}>Delete</button>
                  </td>


                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

  );
}

export default App;
