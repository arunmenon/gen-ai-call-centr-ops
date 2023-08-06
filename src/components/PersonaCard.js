import React, { useState } from 'react';
import { Card, CardContent, Typography, LinearProgress, Button, TextField } from '@mui/material';

export default function PersonaCard({ id, title, score, description, onDescriptionUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleSaveClick = () => {
    setIsEditing(false);
    onDescriptionUpdate(id, editedDescription);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  }

  return (
    <div onClick={handleCardClick} style={{ perspective: '1000px', width: '150px', height: '200px' }}>
      <div style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s', transform: isFlipped ? 'rotateY(180deg)' : 'none' }}>
        <Card style={{ position: 'absolute', backfaceVisibility: 'hidden' }}>
          <CardContent>
            <Typography variant="h6">{title}</Typography>
            <LinearProgress variant="determinate" value={score} style={{ marginTop: '15px' }} />
            <Typography variant="caption" style={{ marginTop: '10px' }}>Score: {score}%</Typography>
          </CardContent>
        </Card>
        <Card style={{ position: 'absolute', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <CardContent>
            {isEditing ? (
              <>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Edit Description"
                  value={editedDescription}
                  onChange={handleDescriptionChange}
                />
                <Button onClick={handleSaveClick} style={{ marginTop: '10px' }}>Save</Button>
              </>
            ) : (
              <>
                <Typography variant="body2">{description}</Typography>
                <Button onClick={handleEditClick} style={{ marginTop: '10px' }}>Edit</Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
