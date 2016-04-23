import React, { PropTypes } from 'react';
import styleable from 'react-styleable';

import css from './ImageComponent.scss';

function ImageRender({ className, content }) {
  return (
    <img
      className={className}
      src={content}
      alt='select an image'
      />
  );
}

function ImageModify({ onChange }) {
  return (
    <input type='file' accept='image/*' onChange={onChange} />
  );
}

class ImageComponent extends React.Component {
  static propTypes = {
    isEditing: PropTypes.bool,
  }

  static defaultProps = {
    isEditing: false,
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
    debugger;
    e.stopPropagation();
    if (this.props.isEditing === false) {
      this.props.onClick();
    }
  }

  render() {
    let { css, isEditing, content } = this.props;

    const imageRenderProps = {
      className: css.img,
      content: content ? content : require('../../../public/imgPlaceholder.png'),
    };

    return (
      <div className={css.root} onClick={this.handleClick}>
        {
          isEditing ?
          <ImageModify onChange={this.handleChange} /> :
          <ImageRender {...imageRenderProps} />
        }
      </div>
    );
  }
}

export default styleable(css)(ImageComponent);
