import ImageGallery from './ImageGallery';
import { render, screen } from '@testing-library/react';
import { ImageGalleryData } from '../../../helper/ImageGalleryData';
import '@testing-library/jest-dom';

global.console.warn = jest.fn();

describe('ImageGallery', () => {
  test('renders header correctly', () => {
    const { getByText } = render(<ImageGallery />);
    const headerElement = getByText(/capturing art through the lens/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the image gallery component without errors', () => {
    render(<ImageGallery />);
    const gallery = screen.getByTestId('image-gallery');
    expect(gallery).toBeInTheDocument();
  });

  test('displays correct number of images', () => {
    render(<ImageGallery />);
    const imageElements = screen.getAllByRole('img');
    expect(imageElements.length).toBe(ImageGalleryData.length);
  });

  test('meets accessibility requirements', () => {
    render(<ImageGallery />);
    const imageElements = screen.getAllByRole('img');
    imageElements.forEach((imageElement, i) => {
      expect(imageElement).toHaveAttribute('alt', ImageGalleryData[i].alt);
      expect(imageElement).toHaveAttribute(
        'aria-describedby',
        ImageGalleryData[i].alt
      );
      expect(imageElement).toHaveAccessibleName();
      expect(imageElement.src).toContain('.webp');
    });
  });
});
