import React from 'react';

 export function validate(input) {
    let error = {};
    if (!input.username) {
        error.username = 'Username is required';
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
        error.username = 'Username is invalid';

    }
    if(!input.password) {
        error.password = 'Password is required';
    } else if(!/(?=.-*[0-9)])/.test(input.password)) {
        error.password = 'Password is invalid';

    }
    return error;
}

export default function  Form() {

    const [input, setInput] = React.useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = React.useState({})
    const handleInputChange = (e) => {
        //[e.target.name]  ¡> sirve para manipular dos inputs con la misma funcion
        //obtiene el nombre del atributo name input que coincide con la propiedad del objeto del estado
        setInput({
            ...input, [e.target.name]: e.target.value
        })

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }
  return (
      <form>
          <div>
              <label>Username:</label>
              <input className={errors.username && 'danger'} type="text" name="username"
                     onChange={handleInputChange} value={input.username}/>
              {errors.username && (
                  <p className="danger">{errors.username}</p>
              )}
          </div>
          <div>
              <label>Password:</label>
              <input className={errors.password && 'danger'} type="password" name="password"
                     onChange={handleInputChange} value={input.password}/>
              {errors.password && (
                  <p className="danger">{errors.password}</p>
              )}
          </div>
          <input type="submit" value="ingresar"/>
      </form>
  )
}
