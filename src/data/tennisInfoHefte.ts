export interface TennisInfoHeft {
  id: string;
  titleDe: string;
  titleEn: string;
  year: number;
  fileName: string; // Name of the file in storage bucket
}

// After uploading PDFs to the tennis-info-hefte bucket, update the fileNames here
export const tennisInfoHefte: TennisInfoHeft[] = [
  {
    id: '1',
    titleDe: 'Tennis-Info 2024',
    titleEn: 'Tennis Info 2024',
    year: 2024,
    fileName: '', // To be updated after upload
  },
  {
    id: '2',
    titleDe: 'Tennis-Info 2023',
    titleEn: 'Tennis Info 2023',
    year: 2023,
    fileName: '', // To be updated after upload
  },
  {
    id: '3',
    titleDe: 'Tennis-Info 2022',
    titleEn: 'Tennis Info 2022',
    year: 2022,
    fileName: '', // To be updated after upload
  },
  {
    id: '4',
    titleDe: 'Tennis-Info 2021',
    titleEn: 'Tennis Info 2021',
    year: 2021,
    fileName: '', // To be updated after upload
  },
  {
    id: '5',
    titleDe: 'Tennis-Info 2020',
    titleEn: 'Tennis Info 2020',
    year: 2020,
    fileName: '', // To be updated after upload
  },
  {
    id: '6',
    titleDe: 'Tennis-Info 2019',
    titleEn: 'Tennis Info 2019',
    year: 2019,
    fileName: '', // To be updated after upload
  },
  {
    id: '7',
    titleDe: 'Tennis-Info 2018',
    titleEn: 'Tennis Info 2018',
    year: 2018,
    fileName: '', // To be updated after upload
  },
];

// Supabase storage URL for tennis-info-hefte bucket
export const getDownloadUrl = (fileName: string): string => {
  if (!fileName) return '';
  return `https://ofywaimqzpfznwrppvmf.supabase.co/storage/v1/object/public/tennis-info-hefte/${fileName}`;
};
