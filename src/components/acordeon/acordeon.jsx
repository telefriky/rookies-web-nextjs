'use client'

import { useState } from 'react';
import styles from './acordeon.module.css'; 
import { FaMinus, FaPlus } from 'react-icons/fa6';

const Acordeon = ({ titulo, children }) => {

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.acordeon}>
      <button
        className={styles.acordeon__boton}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaMinus /> : <FaPlus />}  {titulo}
      </button>
      {open && (
        children
      )}
    </div>
  );
};

export default Acordeon;