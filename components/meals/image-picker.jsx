'use client';
import { useRef } from 'react';
import classes from './image-picker.module.css';
export default function ImagePicker({ label, name }) {
  const inputRef = useRef();
  function handlePickClick() {
    inputRef.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg, image/jpg"
          name={name}
          ref={inputRef}
        />
        <button
          className={classes.button}
          onClick={handlePickClick}
          type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
}
