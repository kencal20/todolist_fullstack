import React from 'react'
import InputComponent from '../components/inputComponent'

export default function FormComponent() {
    return (
        <div style={styles.container}>
            <div style={styles.inputContainer}>
                <InputComponent className={'largeInput'} placeholder={'Enter title here'} label={'Title'} />
            </div>
        </div>
    )
}


const styles = {
inputContainer:{
    
}
}