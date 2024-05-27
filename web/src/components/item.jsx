import React from 'react'

export default function Item({ item }) {
    return (
        <div style={styles.container}>
            <div style={styles.itemName}>
               <b> {item.name}</b>
            </div>
        </div>
    )
}

const styles = {
    container: {
        padding: 20,
        backgroundColor: 'green',
        borderRadius: 20,
        
    },
    itemName:{
        fontSize:20,
        color:'white',
  
    }
}