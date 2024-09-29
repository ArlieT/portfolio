import { ImageResponse } from 'next/og';
import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const username = searchParams.get('username');
  // if (!username) {
  //   return new ImageResponse(<>Visit with &quot;?username=vercel&quot;</>, {
  //     width: 1200,
  //     height: 630,
  //   });
  // }

  // Path to your image in the public directory
  const imagePath = path.join(process.cwd(), 'public/images/preview.png');

  // Read the image file as a base64 string
  const imageBuffer = await fs.readFile(imagePath);
  const imageBase64 = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          // paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img width="100%" height="100%" src={imageBase64} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
