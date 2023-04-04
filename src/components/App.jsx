import 'index.css';
import { Component } from 'react';
import { SearchBar } from './SerchBar/SerchBar';
import * as Api from './Api/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    modalShown: false,
    largeImg: '',
  };
  SearchImages = async values => {
    try {
      this.setState({ isLoading: true });
      const data = await Api.SerchImage(values);
      this.setState(prevState => ({
        images: [...prevState.images, ...data],
        isLoading: false,
      }));
    } catch (error) {
      throw new Error(error);
    }
  };
  openModal = img => {
    this.setState(({ modalShown }) => ({
      modalShown: !modalShown,
      largeImg: img,
    }));
  };
  onReset = () => {
    this.setState({ images: [] });
  };

  render() {
    const { images, isLoading, modalShown, largeImg } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.SearchImages} onReset={this.onReset} />
        <ImageGallery images={images} modalShown={this.openModal} />
        {isLoading && <Loader />}
        {modalShown && <Modal value={largeImg} modalShown={this.openModal} />}
      </div>
    );
  }
}
