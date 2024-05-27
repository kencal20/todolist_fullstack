import React, { useEffect, useState } from 'react'
import FormComponent from './form'
import axios from 'axios'
import Item from '../components/item'

export default function HomeScreen() {
  const [item, setItem] = useState([])
  const [message, setMessage] = useState(null)
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await axios.get('http://localhost:5000/')
      .then((res) => {
        console.log(res.data.list)
        setItem(res.data.list)
      })
      .catch(err => setMessage({ text: 'Server cannot fetch files' }))
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/${id}`)
      .then(() => {
        fetchData()
      })
  }

  const handleSubmit=(itemInput)=>{
    axios.post('http://localhost:5000',itemInput)
    .then(()=>
      fetchData()
    )
}

  return (
    <div style={styles.mainContainer}>
     {message &&(
      <p>{message.text}</p>
     )}
      <div style={styles.container}>
        <section style={styles.formContainer}>
          <FormComponent  onSubmit={handleSubmit}/>
        </section>
        <br /><br />
        <section style={styles.formContainer}>
          {item.length > 0 ? (
            item.map((item) => (
              <Item key={item._id} item={item} onDelete={() => handleDelete(item._id)} />
            ))
          ) : (
            <p>No items available</p>
          )}
        </section>
      </div>
    </div>
  )
}

const styles = {
  mainContainer: {
    backgroundColor: 'dodgerblue',
    minHeight: '100vh',
    padding: 10,
  },


  formContainer: {
    width: '100%'
  }
}