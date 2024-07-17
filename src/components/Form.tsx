// src/components/Form.tsx
import React, { useState } from 'react';
import styles from './Form.module.css';

const Form: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, age });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Student Registration</h2>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="age">Age</label>
        <input
          className={styles.input}
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
};

export default Form;
