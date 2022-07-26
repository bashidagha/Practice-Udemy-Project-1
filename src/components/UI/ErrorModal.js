import React from 'react'
import Button from './Button'
import Card from './Card'
import './errormodal.scss'

const ErrorModal = (props) => {
  return (
    <>
    <div className='backdrop' onClick={props.onOkay}/>
    <Card passClass="modal">
        <header className='header'>
            {props.title}
        </header>

        <div className='content'>
            {props.message}
        </div>

        <footer className='actions'>
            <Button onClick={props.onOkay}>Okay</Button>
        </footer>
    </Card>
    </>
    
  )
}

export default ErrorModal