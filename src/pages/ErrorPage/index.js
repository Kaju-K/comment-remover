import style from './ErrorPage.module.css'

import Navigation from "../../components/Navigation"

function ErrorPage() {
    return (
        <>
            <Navigation />
            <main className={style.main}>
                <h1>This is not the page that you are looking for</h1>
            </main>
        </>
    )
}

export default ErrorPage
