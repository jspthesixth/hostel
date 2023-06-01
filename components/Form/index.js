import React, { useState } from 'react';
/* import Head from 'next/Head';
import Joi from 'joi-browser'; */
import { Button, Grid, TextField } from '@material-ui/core';
import { toast } from 'react-toastify';
import { PostAdd } from '@material-ui/icons';

const URL = 'https://cors.bridged.cc/http://mypat.cloud/josip/custom/send/main';

const Form = ({ addressInfo }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  /* const schema = {
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case 'string.email':
              err.message = 'Email nije validan.';
              break;
            default:
              err.message = 'Email ne može biti prazan.';
              break;
          }
        });
        return errors;
      }),
    phone: Joi.string()
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            default:
              err.message = 'Telefon ne može biti prazan.';
              break;
          }
        });
        return errors;
      }),
    name: Joi.string()
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            default:
              err.message = 'Ime ne može biti prazno.';
              break;
          }
        });
        return errors;
      }),
    message: Joi.string()
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            default:
              err.message = 'Poruka ne može biti prazna.';
              break;
          }
        });
        return errors;
      }),
    address: Joi.string(),
  };
  
  const changeHandler = event => {
    const error = { ...error };
    const errorMassage = validationProperty(event);
    if (errorMassage) {
      error[event.target.name] = errorMassage;
    } else {
      delete error[event.target.name];
    }
    setError({
      [event.target.name]: event.target.value,
      error,
    });
  };
  
  const handleChange = value => {
    this.setState({
      country: value,
    });
  };

 
  const validationProperty = event => {
    const Obj = { [event.target.name]: event.target.value };
    const schema = { [event.target.name]: schema[event.target.name] };
    const { error } = Joi.validate(Obj, schema);
    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const options = { abortEarly: false };
    const form = {
      name: name,
      email: email,
      phone:  phone,
      message: message,
    };
    const { error } = Joi.validate(form, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }; */

  const setErrorFunc = () => {
    setError("Poruka se šalje...");
  }

  const submitHandler = async event => {
    event.preventDefault();
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "x-requested-with": "xmlhttprequest",
      },
      body: JSON.stringify({
        "params": {
          "subject": "Poruka sa weba",
          "body": `Bok Matija, dobio si poruku od ${email}, broj telefona: ${phone}, a poruka glasi: ${message}`,
          "from": email,
          "email_to": "jadranhostel@gmail.com",
          "reply": "josip6594@gmail.com",
          "cc": "josip6594@gmail.com"
        },
      }),
    };
    try {
      setErrorFunc();
      const response = await fetch(URL, settings);
      
      const data = await response.json();
      setError("")
     
      setName('');
      setPhone('');
      setEmail('');
      setAddress('');
      setMessage('');
      toast.success('Poruka poslana!');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className='contactForm'>
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <Grid className='formInput'>
              <input
                placeholder='Vaše Ime'
                value={name}
                name='name'
                onChange={e => setName(e.target.value)}
                className='form-control'
                type='text'
              />
             
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid className='formInput'>
              <input
                placeholder='Telefon'
                value={phone}
                name='phone'
                onChange={e => setPhone(e.target.value)}
                className='form-control'
                type='phone'
              />
             
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid className='formInput'>
              <input
                placeholder='Email'
                value={email}
                name='email'
                onChange={e => setEmail(e.target.value)}
                className='form-control'
                type='email'
              />
             
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid className='formInput'>
              {addressInfo && (
                <Grid className='formInput'>
                  <input
                    placeholder='Address'
                    value={address}
                    name='address'
                    onChange={e => setAddress(e.target.value)}
                    className='form-control'
                    type='address'
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid className='formInput'>
              <textarea
                className='form-control'
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Poruka...'
                name='message'
              />
              {error && <p>{error}</p>}
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Button type='submit'>Pošalji</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Form;
