import React, { useState } from 'react'
import InputComponent from '../components/inputComponent'
import { Button } from 'react-bootstrap'



export default function FormComponent({ onSubmit }) {
    const [itemInput, setItemInput] = useState({
        name: '',
        description: '',
        date: '',
        time: ''
    })




    const handleInputChange = (key, event) => {
        const { value } = event.target
        console.log(value);
        setItemInput((prev) => ({ ...prev, [key]: value }))
    }

    const handleSubmit =  (event) => {
        event.preventDefault()
        onSubmit(itemInput)
    }


    return (
        <form style={styles.container} onSubmit={handleSubmit}>
            <div style={styles.inputContainer}>
                <InputComponent
                    className={'largeInput'}
                    placeholder={'Enter title here'}
                    label={'Title'}
                    labelStyle={styles.label}
                    required={true}
                    onChange={(input) => handleInputChange('name', input)}
                    value={itemInput.name}
                />
            </div>
            <div style={styles.inputContainer}>
                <InputComponent
                    className={'largeInput'}
                    placeholder={'Enter Description here'}
                    label={'Description'}
                    labelStyle={styles.label}
                    onChange={(input) => handleInputChange('description', input)}
                    value={itemInput.description}
                />
            </div>
            <div style={styles.inputContainer}>
                <InputComponent
                    className={'smallInput'}
                    type={'date'}
                    label={'Schedule Date'}
                    labelStyle={styles.label}
                    required={true}
                    onChange={(input) => handleInputChange('date', input)}
                    value={itemInput.date}
                />
            </div>
            <div style={styles.inputContainer}>
                <InputComponent
                    className={'smallInput'}
                    type={'time'}
                    label={'Schedule Title'}
                    labelStyle={styles.label}
                    required={true}
                    onChange={(input) => handleInputChange('time', input)}
                    value={itemInput.time}

                />
            </div>
            <Button type='submit'>Submit</Button>
        </form>
    )
}


const styles = {
    container: {
        backgroundColor: 'grey',
        width: '100%',
        borderRadius: 20,
        padding: 20,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: '900',
        paddingBottom: 20,

        fontSize: 12
    },
    label: {
        fontSize: 18
    }
}