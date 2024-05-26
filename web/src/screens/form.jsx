import React from 'react'
import InputComponent from '../components/inputComponent'


export default function FormComponent() {
    return (
        <div style={styles.container}>
            <div style={styles.inputContainer}>
                <InputComponent
                    className={'largeInput'}
                    placeholder={'Enter title here'}
                    label={'Title'}
                    required={true}
                />
            </div>
            <div style={styles.inputContainer}>
                <InputComponent
                    className={'largeInput'}
                    placeholder={'Enter Description here'}
                    label={'Description'}
                />
            </div>
            <div style={styles.inputContainer}>
                <InputComponent
                    className={'smallInput'}
                    type={'date'}
                    label={'Schedule Date'}
                    required={true}
                />
            </div>
            <div style={styles.inputContainer}>
                <InputComponent
                    className={'smallInput'}
                    type={'time'}
                    label={'Schedule Title'}
                    required={true}
                />
            </div>
        </div>
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