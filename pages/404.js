import dynamic from "next/dynamic";
import Link from "next/link";
const index = () => {
  return (
    <>
      <div
        className="error-page-wrapper "
        style={{ backgroundImage: `url(/images/404.jpg)` }}
        data-aos="fade"
      >
        <div className="content-404">
          <div className="logo-404">
            <Link href="/">
              <img src="/images/logo.webp" alt="brand" className="image-logo" />
            </Link>
          </div>
          {/* End logo */} <h1>404!</h1>
          <p>The page you are looking for could not be found.</p>
          <Link className="theme-btn btn-style-three call-modal" href="/">
            BACK TO HOME
          </Link>
        </div>
        {/* End .content */}
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(index), { ssr: false });
