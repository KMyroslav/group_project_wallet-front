const ButtonRegister = ({ type, onSubmit = null, text, className }) => (

    <button
        className={className}
        type={type}
        onSubmit={onSubmit}
    >
        {text}
    </button>
);

export default ButtonRegister