const page = ({ params }: { params: { workId: string } }) => {
  return <div>page: {params.workId}</div>;
};

export default page;
