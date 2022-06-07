import React, { useState } from 'react';
import axios from 'axios';
import styles from './contact.module.css';
export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    content: '',
    email: '',
  });

  const updateForm = (key, val) => {
    setForm({
      ...form,
      [key]: val,
    });
  };
  const send = () => {
    axios.get('/api/send', {
      params: form,
    });
  };
  return (
    <div className={styles.contact}>
      <div className={styles.box}>
        <div className={styles.title}>Contact us right away</div>
        <div className={styles.desc}>
          If you run into any issue or have any question, Technology consulting supplied if you contact us here! Leave your email or other contact information here right now ！
        </div>
        <div className={styles.form}>
          <div className={styles['form-item']}>
            <input
              className={styles['input']}
              value={form.name}
              onChange={(e) => {
                updateForm('name', e.target.value);
              }}
              placeholder="Name"/>
          </div>
          <div className={styles['form-item']}>
            <input
              className={styles['input']}
              value={form.email}
              onChange={(e) => {
                updateForm('email', e.target.value);
              }}
              placeholder="E-mail"/>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles['form-item2']}>
            <textarea
              className={styles['input']}
              value={form.content}
              rows={3}
              cols={4}
              onChange={(e) => {
                updateForm('content', e.target.value);
              }}
              placeholder="Content"/>
          </div>
        </div>

        <div
          className={styles.btn}
          onClick={send}>Send Inquiry Now
        </div>
      </div>
    </div>
  );
};
