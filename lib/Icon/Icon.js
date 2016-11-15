import React from 'react';
import css from './Icon.css'
const propTypes = {
  icon: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};

const defaultProps = {
  width: "18px",
  height: "18px"
};

class Icon extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    let style = this.props.iconClassName? null : {fill:this.props.color || '#999'};
    let className = this.props.iconClassName;
    let iconSVG;
    switch(this.props.icon){
      case 'bookmark':
          iconSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path style={style} className={className} d="M3.8 24.9V2.9H23.7v21.9l-9.9-6.8L3.8 24.9zM13.8 15.6l7.9 5.5V4.9H5.8v16.1L13.8 15.6z"></path></svg>;
          break;
      case 'search':
          iconSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path style={style} className={className} d="M24.7 23.1l-5.3-6c1.5-1.8 2.4-4.1 2.4-6.6 0-5.6-4.6-10.2-10.2-10.2C5.9 0.2 1.3 4.8 1.3 10.5s4.6 10.2 10.2 10.2c2.1 0 4-0.6 5.6-1.7l5.3 6c0.3 0.3 0.7 0.5 1.1 0.5 0.3 0 0.7-0.1 1-0.4C25.1 24.7 25.2 23.8 24.7 23.1zM4.3 10.5c0-4 3.2-7.2 7.2-7.2 4 0 7.2 3.2 7.2 7.2 0 4-3.2 7.2-7.2 7.2C7.6 17.7 4.3 14.5 4.3 10.5z"></path></svg>;
          break;
      case 'clearX':
          iconSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><circle style={style} className={className} cx="13" cy="13" r="13" ></circle><polygon points="18.2 5.5 13 10.7 7.8 5.5 5.5 7.8 10.7 13 5.5 18.2 7.8 20.5 13 15.3 18.2 20.5 20.5 18.2 15.3 13 20.5 7.8 " fill="#FFF"></polygon></svg>;
          break;
      case 'comment':
          iconSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path style={style} className={className} d="M10.3 19.8l0.1-5.8H3c-1.5 0-2.7-1.2-2.7-2.7v-8c0-1.5 1.2-2.7 2.8-2.7h14c1.5 0 2.8 1.2 2.8 2.8v8c0 1.5-1.2 2.8-2.7 2.8h-0.9L10.3 19.8zM3 2c-0.7 0-1.2 0.6-1.2 1.3v8c0 0.7 0.6 1.3 1.3 1.3h8.9l-0.1 3.6 3.6-3.6H17c0.7 0 1.3-0.6 1.3-1.2v-8c0-0.7-0.6-1.2-1.2-1.2H3z"></path></svg>;
          break;
      case 'icon':
          iconSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path style={style} className={className} d="M1.4 15.7c0 0 2.3-7.1 11.3-7.1 9 0 13.3 6.7 13.3 6.7l-1.5 0.7c0 0-3.6-5.5-11.8-5.5 -8.2 0.1-9.9 5.5-9.9 5.5L1.4 15.7z"/><circle style={style} className={className} cx="13.3" cy="14.2" r="4.9"/><path style={style} className={className} d="M3 16.3l-0.4 0.8c0 0 4.7 3.3 11.1 3.1s10.7-3.3 10.7-3.3l-0.8-0.6c0 0-5.9 2.6-9.9 2.8C8.9 19.4 3 16.3 3 16.3z"/></svg>;
          break;
      default:
          iconSVG = "ICON";
    };

    return(
      <div className={css.root} style={{width: this.props.width, height: this.props.height || this.props.width, minWidth: this.props.width}}>
        {iconSVG}
      </div>
    );
  }
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;

