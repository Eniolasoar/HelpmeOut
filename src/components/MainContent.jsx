import "./MainContent.css";
function MainContent() {
  return (
    <>
      <section className="features-container" id="features">
        <h2 className="features-title">Features</h2>
        <p className="title-paragraph">Key Highlights of Our Extension</p>
        <div className="features">
          <div className="features-text">
            <div className="inner-container">
              <img src="/images/Icon1.png" alt="" />
              <div className="features-main">
                <h3>Simple Screen Recording</h3>
                <p>
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>

            <div className="inner-container">
              <img src="/images/Icon2.png" alt="" />
              <div className="features-main">
                <h3>Easy-to-Share URL</h3>
                <p>
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>

            <div className="inner-container">
              <img src="/images/Icon3.png" alt="" />
              <div className="features-main">
                <h3>Revisit Recordings</h3>
                <p>
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-image">
            <img src="/images/Video Repository.png" alt="" />
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how">
        <h2>How it works</h2>
        <div className="working-container">
          <div className="working">
            <div className="text-area">
              <div className="number">
                <span>1</span>
              </div>
              <h3>Record Screen</h3>
              <p>
                Click the "Start Recording" button in our extension. choose
                which part of your screen to capture and who you want to send it
                to.
              </p>
            </div>

            <div className="image">
              <img src="/images/record1.png" alt="" />
            </div>
          </div>

          <div className="working">
            <div className="text-area">
              <div className="number">
                <span>2</span>
              </div>
              <h3>Share Your Recording</h3>
              <p>
                We generate a shareable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform.
              </p>
            </div>

            <div className="image">
              <img src="/images/record1.png" alt="" />
            </div>
          </div>

          <div className="working">
            <div className="text-area">
              <div className="number">
                <span>3</span>
              </div>
              <h3>Learn Effortlessly</h3>
              <p>
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </p>
            </div>

            <div className="image">
              <img src="/images/record1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainContent;
