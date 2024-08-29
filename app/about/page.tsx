import Image from 'next/image';

const page = () => (
  <div>
    <div>
      <h1 className="font-feixenBold text-center text-base md:text-lg lg:text-xl">
        Hello I'm Arlie a web developer
      </h1>
      <br />
      aside from making websites/apps I also like taking pictures.
    </div>
    <Image
      src="https://instagram.fcrk1-4.fna.fbcdn.net/v/t51.2885-15/279345657_5064392730264945_8189406753695251995_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45NjB4NzIwLnNkci5mMjg4NS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcrk1-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=lMrqeq7iIb8Q7kNvgHsmocE&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MjgyNzg0NTk5MjQ4NjYyNTI1Ng%3D%3D.2-ccb7-5&oh=00_AYAsvb4pqcLOOF4EwDNQ8NhlaUeom8OcEAcgvnTFlqNBKg&oe=66D35FF7&_nc_sid=8f1549https://instagram.fcrk1-4.fna.fbcdn.net/v/t51.2885-15/279345657_5064392730264945_8189406753695251995_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45NjB4NzIwLnNkci5mMjg4NS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcrk1-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=lMrqeq7iIb8Q7kNvgHsmocE&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MjgyNzg0NTk5MjQ4NjYyNTI1Ng%3D%3D.2-ccb7-5&oh=00_AYAsvb4pqcLOOF4EwDNQ8NhlaUeom8OcEAcgvnTFlqNBKg&oe=66D35FF7&_nc_sid=8f1549"
      width={200}
      height={200}
      alt="image-one"
    />
  </div>
);

export default page;
