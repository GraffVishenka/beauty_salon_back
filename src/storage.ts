import { diskStorage } from 'multer';

const generateId = () =>
  Array(18)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

const normalizeFileName = (req, file, callback) => {
  const fileExtName = file.originalname.split('.').pop();

  callback(null, `${generateId()}.${fileExtName}`);
};

export const exampleStorage = diskStorage({
  destination: './uploads/example',
  filename: normalizeFileName,
});

export const priceStorage = diskStorage({
  destination: './uploads/price',
  filename: normalizeFileName,
});