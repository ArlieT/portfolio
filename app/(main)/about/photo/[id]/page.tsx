import React from 'react';

export default function Page({ params: { id } }: { params: { id: string } }) {
  return <div>banana : {id}</div>;
}
