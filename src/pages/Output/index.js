import style from './Output.module.css'

import { useContext } from "react"
import { TextContext } from "../../App"

function Output() {
    const {texts} = useContext(TextContext)

    return (
        <>
            {texts.length > 0 ? (texts.map((text, id) => {
                return (
                    <div className={style.textDisplay} key={id}>
                        <p style={{whiteSpace: "pre"}}>{text}</p>
                    </div>
                )
            })) : <h1 className={style.outputTitle}>No texts available yet</h1>}
        </>
    )
}

export default Output
