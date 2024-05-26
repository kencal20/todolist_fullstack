import React from 'react'
import FormComponent from './form'

export default function HomeScreen() {
  return (
    <div style={styles.mainContainer}>
      <h1>hello</h1>
      <div style={styles.container}>
       <FormComponent/>
      </div>
    </div>
  )
}

const styles = {
  mainContainer: {
    backgroundColor: 'dodgerblue',
    height: '100vh',
    padding: 10,
  },

}