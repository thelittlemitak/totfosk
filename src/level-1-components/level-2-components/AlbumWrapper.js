import CoverArt from "./level-3-components/CoverArt";
import AlbumDescription from "./level-3-components/AlbumDescription";
import "./AlbumWrapper.css";
import Position from "./level-3-components/Position";

function AlbumWrapper(props) {
  const position = props.positionTunnel;

  return (
    <div className="album-wrapper">
      <Position positionTunnel={position}></Position>
      <CoverArt imgIDTunnell2={props.imgIDTunnel}></CoverArt>
      <AlbumDescription
        albumInfoTunnell2={props.albumInfoTunnel}
      ></AlbumDescription>
    </div>
  );
}

export default AlbumWrapper;
