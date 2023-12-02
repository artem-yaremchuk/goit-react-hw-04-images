import css from "./ImageGalleryItem.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={css.galleryItem} onClick={openModal}>
        <img
          src={image.webformatURL}
          alt={image.id}
          className={css.galleryItemImage}
        />
      </li>
      {isModalOpen && (
        <Modal
          imageUrl={image.largeImageURL}
          alt={image.id}
          close={closeModal}
        />
      )}
    </>
  );
};

export default ImageGalleryItem;
