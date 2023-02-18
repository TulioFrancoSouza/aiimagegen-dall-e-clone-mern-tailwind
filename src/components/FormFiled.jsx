import React from 'react'

const FormFiled = ({ labelName , type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {name}
        </label>
        {isSurpriseMe && (
          <button
          type= "button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprime Me
          </button>
        )}
      </div>

      <input
        type= {type}
        id= {name}
        name= {name}
        placeholder= {placeholder}
        value= {value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300
         text-gray-900 text-sm rounded-lg focus:ring-[#4669ff] focus:border-[#4649ff]
         outline-none block w-full p-3"
      >
      
      </input>
    </div>
  )
}

export default FormFiled