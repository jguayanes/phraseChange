import './button.css'

const Button = ( {handleClick} ) => {
  return (
    <button className='button__swicht' onClick={handleClick}>
        <i className="fa-solid fa-arrow-rotate-right"></i>
    </button>
  )

}

export default Button