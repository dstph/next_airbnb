import React from 'react'

const TextInput = ({inputClassName, labelClassName, labelText, handler, placeholder}) => (
  <>
    <label className={labelClassName}>{labelText}<input type='text' className={inputClassName} onChange={handler} placeholder={placeholder} /></label>
  </>
)

export default TextInput;