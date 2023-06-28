import style from './Form.module.css'

import { useState, useContext } from "react"
import { TextContext } from '../../App'

function Form() {
    const {texts, setTexts} = useContext(TextContext)
    const [file, setFile] = useState('')
    const [uploaded, setUploaded] = useState({status: false, message: ""})

    function handleChange(e) {
        setFile(e.target.files[0])
        setUploaded({...uploaded, status: false})
    }

    function commentRemover(text) {
        let singleLine = '//'
        let multipleLine= '/*'
        while (text.includes(singleLine)) {
            if(text.indexOf('\n', text.indexOf(singleLine)) + 1) {
                text = text.slice(0, text.indexOf(singleLine)) + text.slice(text.indexOf('\n', text.indexOf(singleLine)))
            } else {
                text = text.slice(0, text.indexOf(singleLine))
            }
        }
        while (text.includes(multipleLine)) {
            text = text.slice(0, text.indexOf(multipleLine)) + text.slice(text.indexOf('*/', text.indexOf(multipleLine))+2)
        }
        return text
    }

    function handleSubmit(e) {
        e.preventDefault()

        const reader = new FileReader()

        if (!file) {
            setUploaded({...uploaded, status: true, message: "You forgot to choose a file"})
            return 
        }
        reader.readAsText(file)

        reader.onload = function() {
            let result = commentRemover(reader.result).trim()
            setTexts([...texts, result])
            setUploaded({...uploaded, status: true, message: "File uploaded succesfully"})
        }
        reader.onerror = function() {
            setUploaded({...uploaded, status: true, message: "There was a problem, check the file and try again"})
        }
    }

    return (
        <form className={style.commentRemoverForm} onSubmit={handleSubmit}>
            <h1 className={style.formTitle}>Choose a file to remove the comments</h1>
            <div className={style.inputDiv}>
                <label htmlFor='fileInput' className={style.fileInputButton}>Choose a file</label>
                <p>{file && file.name}</p>
            </div>
            <input type="file" name="fileInput" id="fileInput" onChange={handleChange} style={{display: 'none'}}/>
            <button className={style.submitButton}>Submit</button>
            {uploaded.status && <p>{uploaded.message}</p>}
        </form>
    )
}

export default Form
