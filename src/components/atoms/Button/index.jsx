import './button.css'

function Button({ title, ...props }) {
  return <button {...props}>{title}</button>
}

export default Button