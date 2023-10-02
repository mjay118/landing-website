import React from 'react';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

function GirlWithCupcake() {
  return (
    
    <div className="girl-section">
      <div className="girl-image">
        <Image src="/girl-eating-cupcake.jpg" 
        width={280}
        height={300}

        alt="Girl eating cupcake" />
      </div>
      <div className="girl-text">
        <Typography variant="h5" gutterBottom>
        Sweet Moments Captured
        </Typography>
        <Typography variant="body1">
        Step into a world of pure sweetness as we capture the essence of pure delight. Experience the happiness that comes with every bite.        </Typography>
      </div>
    </div>
  );
}

export default GirlWithCupcake;
