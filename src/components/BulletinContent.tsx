// import { useState } from "react";

type Props = {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  content: string;
  type: string;
};

const BulletinContent = (props: Props) => {
  // const [loading, setLoading] = useState(true);

  // const parseContent = () => {};

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="-mx-4 mb-12 flex flex-wrap lg:items-center">
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2 2xl:w-5/12">
            <div className="mx-auto max-w-max overflow-hidden rounded-lg md:ml-0">
              <img
                src="https://images.unsplash.com/photo-1624841970647-87dce8628d72?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y25jfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <p className="mb-2 flex items-center gap-2 text-gray-500">
              <span className="rounded-md bg-gray-200 px-2 py-1 text-xs uppercase tracking-wider text-gray-500">
                {props.type}
              </span>
              <span className="text-sm uppercase tracking-wider">
                {props.date}
              </span>
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-900 md:text-4xl lg:text-5xl">
              {props.title}
            </h2>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:flex-1">
            <p className="mb-8 border-b border-gray-100 pb-10 text-lg font-medium text-gray-500 md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
              Header 1
            </h3>
            <p className="mb-4 text-base text-gray-500 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
            <div className="mb-6 border-l-2 border-primary p-6">
              <p className="mb-4 text-xl font-medium leading-tight text-gray-800 md:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus.
              </p>
              <span className="text-base font-medium text-gray-400 md:text-lg">
                — John Doe, CEO &amp; Founder
              </span>
            </div>
            <p className="mb-6 text-base text-gray-500 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
            <div className="mb-4 max-w-max overflow-hidden rounded-md">
              <img
                src="flex-ui-assets/images/blog-content/content-photo2.jpg"
                alt=""
              />
            </div>
            <p className="mb-8 text-base font-medium text-gray-400 md:text-lg">
              <span>Non massa enim vitae duis mattis. Vel in</span>
              <a className="underline hover:text-gray-600" href="#">
                ultricies
              </a>
              <span>vel fringilla.</span>
            </p>
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
              Header 1
            </h3>
            <p className="mb-14 text-base text-gray-500 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
            <p id="summary" className="mb-4 text-base text-gray-500 md:text-lg">
              Sagittis et eu at elementum, quis in. Proin praesent volutpat
              egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
              Auctor rutrum lacus malesuada massa ornare et. Vulputate
              consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu
              sit dignissim massa erat cursus vulputate gravida id. Sed quis
              auctor vulputate hac elementum gravida cursus dis.
            </p>
            <ol className="list-inside list-decimal text-base text-gray-500 md:px-5 md:text-lg">
              <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
              <li>
                Eu turpis posuere semper feugiat volutpat elit, ultrices
                suspendisse. Auctor vel in vitae placerat.
              </li>
              <li>
                Suspendisse maecenas ac donec scelerisque diam sed est duis
                purus.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletinContent;
