import Image from "next/image";

const page = ({ params }: { params: { workId: string } }) => {
  return (
    <div className="relative flex h-auto w-full flex-col items-center gap-4 border md:gap-6 md:p-0 md:pt-[500px] lg:pt-[450px]">
      <div className="mx-auto w-[90%] md:absolute md:-top-[400px] md:w-full lg:-top-96 lg:w-[80%]">
        <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-3xl md:h-[810px] md:rounded-[48px]">
          <Image
            src="/images/projects/proj1.avif"
            alt="arlie"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-[78%] space-y-4">
        <div className="font-variation w-full space-y-2">
          <h1 className="font-variation-bold heading">Buraindo</h1>
          <hr className="h-[2.5px] w-full bg-foreground" />

          <div className="flex flex-col justify-between md:flex-row">
            <table className="w-full">
              <tbody>
                <tr className="flex w-full gap-x-6">
                  <td className="font-variation-bold flex-1 text-lg uppercase">
                    <h6>Category</h6>
                  </td>
                  <td className="flex-1 flex-grow">
                    <ul>
                      <li>Internet of things</li>
                      <li>Branding</li>
                    </ul>
                  </td>
                </tr>
                <tr className="flex gap-x-6">
                  <td className="font-variation-bold flex-1 text-lg uppercase">
                    Year
                  </td>
                  <td className="flex-1">2022</td>
                </tr>
              </tbody>
            </table>

            <div className="w-full">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quod dolore? Tempora soluta quaerat praesentium esse, hic
                recusandae veniam inventore nisi iusto accusantium, ad sed a
                laboriosam modi consectetur ipsum!
              </p>
            </div>
          </div>
        </div>

        <div className="custom-shadow relative mx-auto aspect-square w-full overflow-hidden">
          <Image
            src="/images/projects/proj2.avif"
            alt="arlie"
            fill
            className="object-cover"
          />
        </div>
        <div className="custom-shadow relative mx-auto aspect-square w-full overflow-hidden">
          <Image
            src="/images/projects/proj1.avif"
            alt="arlie"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
