import { React, useState } from 'react';
import ImageGallery from './components/imageGallery/imageGallery';
import Searchbar from './components/searchbar/searchbar';
import Modal from './components/modal/modal';
import Button from './components/button/button';
import Loader from './components/Loader/loader';

export default function App() {
  const [imageName, setImageName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [bigImg, setBigImg] = useState(null);
  const [page, setPage] = useState(1);
  const [button, setButton] = useState(false);
  const [status, setStatus] = useState('idle');

  const handelFormSubmit = imageName => {
    setImageName(imageName);
    setButton(true);
    setStatus('load');
  };

  const toggleModal = () => {
    setShowModal(s => !s);
  };

  const bigImgs = bigImgURL => {
    setBigImg(bigImgURL);
    toggleModal();
  };

  const statusOff = idle => {
    setTimeout(idle => setStatus(idle), 500);
  };

  const addMore = () => {
    setPage(s => s + 1);
    setStatus('load');
  };

  return (
    <>
      <Searchbar onSubmit={handelFormSubmit} />
      <ImageGallery
        imageName={imageName}
        onOpen={toggleModal}
        bigImg={bigImg}
        page={page}
        onSelect={bigImgs}
        statusOff={statusOff}
        status={status}
      />
      {button && <Button onClickAdd={addMore} />}
      {status === 'load' && <Loader />}
      {showModal && <Modal onClose={toggleModal} bigImg={bigImg} />}
    </>
  );
}

// class OldApp extends Component {
//   state = {
//     imageName: null,
//     showModal: false,
//     bigImg: null,
//     page: 1,
//     button: false,
//     status: 'idle',
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };
//   handelFormSubmit = imageName => {
//     return this.setState({
//       imageName,
//       button: true,
//       status: 'load',
//     });
//   };

//   bigImgs = bigImgURL => {
//     this.setState({ bigImg: bigImgURL });
//     this.toggleModal();
//   };
//   statusOff = idle => {
//     setTimeout(idle => this.setState({ status: idle }), 500);
//   };

//   addMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };
//   render() {
//     const { imageName, bigImg, page, button, status, showModal } = this.state;
//     return (
//       <>
//         <Searchbar onSubmit={this.handelFormSubmit} />
//         <ImageGallery
//           imageName={imageName}
//           onOpen={this.toggleModal}
//           bigImg={bigImg}
//           page={page}
//           onSelect={this.bigImgs}
//           statusOff={this.statusOff}
//         />
//         {button && <Button onClickAdd={this.addMore} />}
//         {status === 'load' && <Loader />}
//         {showModal && <Modal onClose={this.toggleModal} bigImg={bigImg} />}
//       </>
//     );
//   }
// }
// export default App;
