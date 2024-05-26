import React, { useEffect, useState } from 'react'
import FormComponent from './form'
import axios from 'axios'

export default function HomeScreen() {
  const [item, setItem] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios.get('http://localhost:5000/')
      .then((res) => {
        console.log(res.data.list)
        setItem(res.data.list)
      })
  }

  return (
    <div style={styles.mainContainer}>
      <h1>hello</h1>
      <div style={styles.container}>
        <section style={styles.formContainer}>
          <FormComponent />
        </section>
        <br /><br />
        <section style={styles.formContainer}>
          {item.map((item)=>(
          <div key={item._id}>
            <h1>{item.name}</h1>
          </div>
          
          ))}
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