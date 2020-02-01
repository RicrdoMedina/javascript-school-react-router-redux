import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getVideoSource } from '../actions'
import "../assets/styles/containers/Player.scss";


const Loader = () => (<div style={{display: 'flex', alignItems:'center', justifyContent:'center', position:'fixed', top:0, left:0,right:0, bottom:0,backgroundColor:'red'}}>
    Loading
  </div>
)

const Player = props => {

  const { id } = props.match.params;

  const isLoading = Object.keys(props.playing).length === 0 || props.playing.id !== Number(id)

  useEffect(() => {
    props.getVideoSource(id)
  }, []);
  
  return (
    <div className="player">
      { 
        isLoading ? <Loader/> : <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video> 
      }
      
      <div className="player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    playing: state.playing
  }
}

const mapDispatchToProps = {
  getVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
