const Home = () => {
  return (
    <div className="container-fluid p-0 body" id="Home">
      <section class="top">
        <div class="left-shayri">
          <h2>"All ways try to learn new thinks "</h2>
        </div>
        <nav class="nav">
          <a href="index.html">Home</a>
          <a href="#About Me">About Me</a>
          <a href="#Skills">Skills</a>
          <a href="#My Projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </section>
      <div class="main">
        <div class="text">
          <div class="heading">
            <h1>Atul C Masule</h1>
            <h3>I am FullStack Web Developer</h3>
          </div>
          <p>
            Good Grasping Power And Resourful Personal.
            <br />
            Positive Attitude And Hard Working And Technical Skills.
            <br />
            Positive Attitude And Enthusiatic In Term Work.
          </p>
          <button>
            <b>Read More</b>
          </button>
        </div>
        <div class="image">
          <img src="./images/profile.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
