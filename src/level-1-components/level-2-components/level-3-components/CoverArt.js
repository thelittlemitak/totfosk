import "./Level3style.css";

function CoverArt(props) {
  const sourceID = props.imgIDTunnell2;
  const source = `/media/images/coverart/${sourceID}.webp`;

  return <img src={source} alt="this is a pic" className="cover-art" />;
}

export default CoverArt;
