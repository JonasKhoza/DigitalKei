import "./styles/iframe.css";

function Iframe() {
  return (
    <section className="embedded_vid_explainer">
      <iframe
        className="iframe"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ng1PabeP-H8?autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
}

export default Iframe;
