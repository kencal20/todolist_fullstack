import React, { useEffect, useState } from 'react'
import FormComponent from './form'
import axios from 'axios'
import Item from '../components/item'

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

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/${id}`)
      .then(() => {
        fetchData()
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