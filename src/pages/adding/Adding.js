import React, { useState, useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

export default function Adding() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const usernameRef = useRef();

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  async function handleSubmit(event) {
    event.preventDefault();

    const username = usernameRef.current.value;

    var reqBody = {
      username: username,
      image: imageUrl,
    };

    alert(JSON.stringify(reqBody));
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="username"
        label="Username"
        inputRef={usernameRef}
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <label htmlFor="select-image">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>

      {imageUrl && selectedImage && (
        <>
          <div>Image Preview:</div>
          <img src={imageUrl} alt={selectedImage.name} height="100px" />
        </>
      )}
      <br/>
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
      
      
    </form>
  );
}
