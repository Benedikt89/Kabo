import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      type = "default",
      inputType = "default",
      size = "",
      styles = "",
      inputValue = "",
      disabled,
      onChange,
      required,
    } = this.props;

    return (
      <>
        {type == "default" && (
          <div
            className={`border rounded h-14 ${size} ${styles} inline-block relative`}
          >
            <label htmlFor={name} className='m-1 ml-2.5 text-xs'>
              {name}
            </label>

            <br />
            <input
              required
              type={inputType}
              disabled={disabled}
              onChange={onChange}
              id={name}
              defaultValue={inputValue}
              className='outline-none w-4/5 text-grey-darkest text-sm h-5 mb-2.5 ml-2.5'
            ></input>
            {required && (
              <div className=' rounded-full bg-red-500 w-1 h-1 absolute top-2 right-2'></div>
            )}
          </div>
        )}
        {type == "large" && (
          <div className='border rounded h-14 h-20'>
            <label htmlFor='input' className='m-1 text-xs'>
              {name}
            </label>
            <br />
            <textarea
              required
              id='input'
              defaultValue={inputValue}
              className='outline-none text-grey-darkest ml-2.5 h-11 mb-2.5 text-sm resize-none'
            ></textarea>
          </div>
        )}
      </>
    );
  }
}

export default Input;
