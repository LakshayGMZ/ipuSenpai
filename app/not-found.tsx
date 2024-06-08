export const runtime = "edge";

export default async function NotFound() {
  return (
    <>
      <div id="notFound" className="absolute inset-0 text-lg md:text-2xl">
        <span className="title">404 Not Found</span>
        <p className="my-8 mx-8 md:mx-[15rem]">
          A wild 404-PAGE appeared!
          <br />
          This means that your browser was able to communicate with your given
          server, but the server could not find what was requested.
          <br />
          <br />
          * Make sure the url is correct.
          <br />* Don&apos;t panic.
        </p>
        <div className="text-primary">
          <a href="/">Click here to continue _</a>
        </div>
      </div>
    </>
  );
}
