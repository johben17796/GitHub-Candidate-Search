const Button = () => {
    const handleAdd =  () => {
        localStorage.setItem('candidates', 'CandidateData')
    }
    const handleRemove =  () => {
        localStorage.removeItem('candidates')
    }
    return (
        <>
        <button onClick={handleAdd} >+</button>
        <button onClick={handleRemove}>-</button>
        </>
    )
}


export default Button