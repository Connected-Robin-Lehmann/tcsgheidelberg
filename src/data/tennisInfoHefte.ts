export interface TennisInfoHeft {
  id: string;
  titleDe: string;
  titleEn: string;
  year: number;
  fileName: string;
}

export const tennisInfoHefte: TennisInfoHeft[] = [
  {
    id: '1',
    titleDe: 'Tennis-Infoheft 2024',
    titleEn: 'Tennis Info Booklet 2024',
    year: 2024,
    fileName: 'Tennis-Infoheft-2024.pdf',
  },
  {
    id: '2',
    titleDe: 'Tennis-Infoheft 2022',
    titleEn: 'Tennis Info Booklet 2022',
    year: 2022,
    fileName: 'Tennis-Infoheft-2022.pdf',
  },
  {
    id: '3',
    titleDe: 'Tennis-Infoheft 2020',
    titleEn: 'Tennis Info Booklet 2020',
    year: 2020,
    fileName: 'Tennis-Infoheft-2020.pdf',
  },
  {
    id: '4',
    titleDe: 'Tennis-Infoheft 2018',
    titleEn: 'Tennis Info Booklet 2018',
    year: 2018,
    fileName: 'Tennis-Infoheft-2018.pdf',
  },
  {
    id: '5',
    titleDe: 'Tennis-Infoheft 2016',
    titleEn: 'Tennis Info Booklet 2016',
    year: 2016,
    fileName: 'Tennis-Infoheft-2016.pdf',
  },
  {
    id: '6',
    titleDe: 'Tennis-Infoheft 2014',
    titleEn: 'Tennis Info Booklet 2014',
    year: 2014,
    fileName: 'Tennis-Infoheft-2014.pdf',
  },
  {
    id: '7',
    titleDe: 'Tennis-Infoheft 2012',
    titleEn: 'Tennis Info Booklet 2012',
    year: 2012,
    fileName: 'Tennis-Infoheft-2012.pdf',
  },
];

// Supabase storage URL for tennis-info-hefte bucket
export const getDownloadUrl = (fileName: string): string => {
  if (!fileName) return '';
  return `https://ofywaimqzpfznwrppvmf.supabase.co/storage/v1/object/public/tennis-info-hefte/${fileName}`;
};
