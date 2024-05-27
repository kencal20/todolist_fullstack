import React from 'react'
import { Button } from 'react-bootstrap';


export default function Item({ item, onDelete }) {
    return (
        <div style={styles.container}>
            <div style={styles.itemName}>
                <b> {item.name}</b>
            </div>
            <Button variant='danger' onClick={onDelete}>Delete</Button>
        </div>
    )
}

const styles = {
    container: {
        padding: 20,
        backgroundColor: 'green',
        borderRadius: 20,

    },
    itemName: {
        fontSize: 20,
        color: 'white',

    }
}