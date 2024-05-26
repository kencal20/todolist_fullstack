import React, { useState } from 'react'
import InputComponent from '../components/inputComponent'


export default function FormComponent() {
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
    return (
        <form style={styles.container}>
            <div style={styles.inputContainer}>
                <InputComponent
                    className={'largeInput'}
                    placeholder={'Enter title here'}
                    label={'Title'}
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
                    onChange={(input) => handleInputChange('description', input)}
                    value={itemInput.description}
                />
            </div>
            <div style={styles.inputContainer}>
                <InputComponent
                    className={'smallInput'}
                    type={'date'}
                    label={'Schedule Date'}
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
                    required={true}
                    onChange={(input) => handleInputChange('time', input)}
                    value={itemInput.time}

                />
            </div>
        </form>
    )
}


const styles = {
    container: {
        backgroundColor: 'grey',
        width: '100%',
        borderRadius: 20
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: '900',
        padding: 20,
        fontSize: 18
    }
}