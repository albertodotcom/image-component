import React, { PropTypes } from 'react';

function ImageRender({ style, content }) {
  return (
    <img
      style={style}
      src={content}
      alt='select an image'
      />
  );
}
ImageRender.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

function ImageModify({ onChange }) {
  return (
    <input type='file' accept='image/*' onChange={onChange} />
  );
}
ImageModify.propTypes = {
  onChange: PropTypes.func,
};


const style = {
  root: {
    textAlign: 'center',
  },
  img: {
    maxHeight: '20rem',
  },
};

class ImageComponent extends React.Component {
  static propTypes = {
    isEditing: PropTypes.bool,
    content: PropTypes.string.isRequired,
    style: PropTypes.object,
    addComponentContent: PropTypes.func,
    onClick: PropTypes.onClick,
  }

  static defaultProps = {
    isEditing: false,
    content: require('../static/imgPlaceholder.png'),
    style,
  }

  handleChange = (evt) => {
    const file = evt.target.files[0];

    if (!file) return;

    var reader = new FileReader();

    reader.onload = (readerEvt) => {
      const binaryString = readerEvt.target.result;
      this.props.addComponentContent(`data:image/png;base64,${btoa(binaryString)}`);
    };

    reader.readAsBinaryString(file);
  }

  handleClick = (e) => {
    e.stopPropagation();
    if (this.props.isEditing === false) {
      this.props.onClick();
    }
  }

  render() {
    let { isEditing, content, style } = this.props;

    const imageRenderProps = {
      style: style.img,
      content,
    };

    return (
      <div onClick={this.handleClick} style={style.root}>
        {
          isEditing ?
          <ImageModify onChange={this.handleChange} /> :
          <ImageRender {...imageRenderProps} />
        }
      </div>
    );
  }
}

export default ImageComponent;
